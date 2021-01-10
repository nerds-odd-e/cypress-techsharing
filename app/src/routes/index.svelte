<script>
	import Counter from "$components/Counter.svelte";
</script>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>

<h1>End-to-End Testing with Cypress.io Workshop</h1>
<img
	src="/cypress_io_testing_hourglass.png"
	alt="End-to-End Testing with Cypress.io Introductory Technical Workshop" />
<p>
	<a href="https://cypress.io">@cypress</a>
	<a href="https://svelte.dev">@svelte.dev</a>
	<a href="https://www.odd-e.com">@odd-e</a>
</p>
