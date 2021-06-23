/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: () => ({
			define: {
				global: {
					'/api': 'http://localhost:8080/api'
				}
			}
		})
	}
};

export default config;
