export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Forward to your real API Worker
    const apiUrl = `https://td-game-api.alan0917.workers.dev${url.pathname}${url.search}`;
    
    const response = await fetch(apiUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    
    // Create new response with CORS header
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Access-Control-Allow-Origin', '*');
    
    return newResponse;
  }
}
