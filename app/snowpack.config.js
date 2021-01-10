// Consult https://www.snowpack.dev to learn about these options
module.exports = {
  extends: "@sveltejs/snowpack-config",
  mount: {
    "src/components": "/_components",
  },
  alias: {
    $components: "./src/components",
  },
  proxy: {
    "/api": "http://localhost:8080/api",
  },
};
