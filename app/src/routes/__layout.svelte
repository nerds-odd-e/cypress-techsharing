<script>
  import Nav from "$lib/Nav.svelte";
</script>
<div class="p-8 max-w-6xl mx-auto">
  <Nav/>
  <slot/>
</div>
<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
