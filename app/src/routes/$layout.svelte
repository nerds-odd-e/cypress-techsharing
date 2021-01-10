<script>
    import Nav from "$components/Nav.svelte";
    import FooterNav from "$components/FooterNav.svelte";
    export const prerender = true;
</script>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }
</style>

<main>
    <Nav />
    <slot />
    <FooterNav />
</main>
