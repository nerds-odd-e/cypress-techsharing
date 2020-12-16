/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    /* ... */
    "@snowpack/plugin-svelte",
    { hydratable: true, css: false },
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    port: 5000,
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
    "/api": "http://localhost:8080/api",
  },
  alias: {
    /* ... */
  },
};
