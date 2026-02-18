export default {
  async fetch(request, env) {

    const url = new URL(request.url);

    const email = request.headers.get("cf-access-authenticated-user-email") || "unknown";
    const country = request.cf?.country || "US";
    const timestamp = new Date().toISOString();

    if (url.pathname.startsWith("/secure/") && url.pathname !== "/secure") {

      const code = url.pathname.split("/")[2]?.toUpperCase();

      const object = await env.FLAGS_BUCKET.get(`${code}.png`);

      if (!object) {
        return new Response("Flag not found", { status: 404 });
      }

      return new Response(object.body, {
        headers: { "Content-Type": "image/png" }
      });
    }

    return new Response(`
      <html>
        <body style="font-family: Arial; padding:40px">
          <h2>Secure Area</h2>
          <p>${email} authenticated at ${timestamp}</p>
          <p>Country detected: <b>${country}</b></p>
          <p><a href="/secure/${country}">View your flag</a></p>
        </body>
      </html>
    `, {
      headers: { "Content-Type": "text/html" }
    });
  }
};
