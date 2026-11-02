import assert from 'node:assert/strict'
import { test } from 'node:test'
import { createApp } from '../src/app.js'

test('GET /health returns an OK status', async () => {
  const server = createApp().listen(0)

  await new Promise<void>((resolve, reject) => {
    server.once('error', reject)
    server.once('listening', resolve)
  })

  const address = server.address()
  assert.ok(address && typeof address !== 'string')

  try {
    const response = await fetch(`http://127.0.0.1:${address.port}/health`)
    assert.equal(response.status, 200)
    assert.deepEqual(await response.json(), { status: 'ok' })
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
})
