import assert from 'node:assert/strict'
import { test } from 'node:test'
import { createApp } from '../src/app.js'
import { env } from '../src/config/env.js'

async function withServer(run: (baseUrl: string) => Promise<void>) {
  const server = createApp().listen(0)

  await new Promise<void>((resolve, reject) => {
    server.once('error', reject)
    server.once('listening', resolve)
  })

  const address = server.address()
  assert.ok(address && typeof address !== 'string')

  try {
    await run(`http://127.0.0.1:${address.port}`)
  } finally {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error)
          return
        }
        resolve()
      })
    })
  }
}

test('CORS allows only the configured frontend origin', async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/health`, {
      headers: { Origin: env.FRONTEND_URL },
    })
    assert.equal(response.status, 200)
    assert.deepEqual(await response.json(), { status: 'ok' })
    assert.equal(
      response.headers.get('access-control-allow-origin'),
      env.FRONTEND_URL,
    )

    const rejectedOriginResponse = await fetch(`${baseUrl}/health`, {
      headers: { Origin: 'https://untrusted.example' },
    })
    assert.equal(
      rejectedOriginResponse.headers.get('access-control-allow-origin'),
      null,
    )
  })
})

test('unknown routes return a JSON 404', async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/unknown`)
    assert.equal(response.status, 404)
    assert.deepEqual(await response.json(), {
      error: 'Not Found',
      message: 'Route not found',
    })
  })
})
