
<script>
 import groups from './groupsStore.js';
</script>

{#if $groups === null}
    <p class="loading">Loading...</p>
{:else}
    <slot groups={$groups} />
{/if}

<style>
  .loading {
    opacity: 0;
    animation: 0.4s 0.8s forwards fade-in;
  }
  @keyframes fade-in {
   from { opacity: 0; }
   to { opacity: 1; }
  }
</style>
