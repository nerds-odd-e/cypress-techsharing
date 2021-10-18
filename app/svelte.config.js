/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        ssr: false,
        //vite: {
        //    server: {
        //        proxy: {
        //            "/groups": {
        //                target: "http://localhost:8080/api",
        //                changeOrigin: true,
        //            },
        //        },
        //    },
        }
	},
};

export default config;
