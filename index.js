addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.hostname !== "pcwi.pages.dev") {
    return new Response("Forbidden", { status: 403 });
  }
  return fetch(event.request);
});
