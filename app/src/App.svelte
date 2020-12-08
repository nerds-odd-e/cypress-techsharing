<script>
  import Home from "./Home.svelte";
  import GroupList from "./GroupList.svelte";
  import { Router, Route } from "svelte-routing";

  export let url="";
</script>

<main>
	<img src='/cypress-logo.webp' class="logo" alt="logo" />
    <Router>
        <div>
            <Route path="/" component="{Home}" />
            <Route path="/groups" component="{GroupList}" />
        </div>
    </Router>
</main>

<style>
 main {
	 text-align: center;
	 padding: 1em;
	 max-width: 200px;
	 margin: 0 auto;
 }

 @media (min-width: 640px) {
	 main {
		 max-width: none;
	 }
 }

.logo {
    /* animation: logo-spin infinite 10s linear; */
  height: 15vmin;
}
</style>
