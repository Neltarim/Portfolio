// phusion loader to avoid ESM errors

async function loadApp() {
  await import("./.output/server/index.mjs");
}
loadApp();