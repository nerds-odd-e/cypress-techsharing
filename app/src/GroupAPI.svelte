<script>
  import groups from "./groupsStore.js";
</script>

{#if $groups === null}
  <slot groups="[]" />
{:else}
  <slot groups={$groups} />
{/if}
