<script>
  import "../app.pcss";
  import { AppBar } from '@skeletonlabs/skeleton';
</script>

<div class="bg-primary-300">
  <AppBar class="bg-gradient-to-r from-primary-400 to-secondary-300">
    <svelte:fragment slot="lead">(icon)</svelte:fragment>
    (title)
    <svelte:fragment slot="trail">(actions)</svelte:fragment>
  </AppBar>
<slot />
</div>