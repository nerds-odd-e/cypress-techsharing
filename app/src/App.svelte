<script>
  import Home from "./Home.svelte";
  import GroupList from "./GroupList.svelte";
  import GroupEdit from './GroupEdit';
  import { Router, Route } from "svelte-routing";

  export let url="";
</script>

<main>
    <Router>
        <div>
            <Route path="/" component="{Home}" />
            <Route path="/groups" component="{GroupList}" />
            <Route path='/groups/:id' component={GroupEdit}/>
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
</style>
