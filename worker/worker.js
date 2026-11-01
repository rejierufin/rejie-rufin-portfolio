// A request for a real file must never fall through to the SPA shell, otherwise a
// missing download such as /resume.pdf is saved as an HTML page instead of failing.
const FILE_PATH = /\.[a-z0-9]{2,8}$/i

export default {
  async fetch(request, env) {
    const assetResponse = await env.ASSETS.fetch(request)

    if (assetResponse.status !== 404) return assetResponse
    if (request.method !== 'GET' && request.method !== 'HEAD') return assetResponse

    const url = new URL(request.url)
    if (url.pathname.startsWith('/assets/') || FILE_PATH.test(url.pathname)) return assetResponse

    return env.ASSETS.fetch(new Request(new URL('/', url).toString(), request))
  },
}
