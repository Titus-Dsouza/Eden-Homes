const configuredApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim()

function parseApiBaseUrl(value: string | undefined) {
  if (!value) {
    return ''
  }

  let url: URL

  try {
    url = new URL(value)
  } catch {
    throw new Error('VITE_API_BASE_URL must be an absolute HTTP(S) URL')
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error('VITE_API_BASE_URL must be an absolute HTTP(S) URL')
  }

  return url.href.replace(/\/+$/, '')
}

export const API_BASE_URL = parseApiBaseUrl(configuredApiBaseUrl)
