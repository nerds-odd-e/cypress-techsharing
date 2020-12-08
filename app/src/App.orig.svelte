<script>
 import GroupAPI from './GroupAPI.svelte';
</script>

<main>
	<div>
		<header class="header">
			<img src='/cypress-logo.webp' class="logo" alt="logo" />
			<div class="intro">
				<h1>Tech Community Events</h1>
                <GroupAPI let:groups>
                    {#each groups as group}
                        <div key={group.id}>
                            {group.name}
                        </div>
                    {/each}
                </GroupAPI>
			</div>
		</header>
	</div>
</main>

<style>
 main {
	 text-align: center;
	 padding: 1em;
	 max-width: 240px;
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
  height: 20vmin;
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

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.container, .container-fluid {
  margin-top: 20px;
}
</style>
