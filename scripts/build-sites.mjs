import { mkdir, rename, writeFile } from 'node:fs/promises'

await mkdir('dist/client', { recursive: true })
await rename('dist/index.html', 'dist/client/index.html')
await rename('dist/assets', 'dist/client/assets')

const worker = `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)
    const acceptsHtml = request.headers.get('accept')?.includes('text/html')

    if (response.status === 404 && request.method === 'GET' && acceptsHtml) {
      const indexUrl = new URL('/index.html', request.url)
      return env.ASSETS.fetch(new Request(indexUrl, request))
    }

    return response
  },
}\n`

await mkdir('dist/server', { recursive: true })
await writeFile('dist/server/index.js', worker, 'utf8')