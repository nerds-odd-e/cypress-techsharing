<script>
 import Home from "./Home.svelte";
 import GroupList from "./GroupList.svelte";
 import { Router, Link, Route } from "svelte-routing";

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

 h1 {
	 color: #ffbf39;
	 text-transform: uppercase;
	 font-size: 2em;
	 font-weight: 100;
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

.header {
  background-color: #285c96;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.link {
  color: #61dafb;
}

.container, .container-fluid {
  margin-top: 20px;
}
</style>
