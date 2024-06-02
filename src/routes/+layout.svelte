<script>
  import "../app.pcss";
  import { AppBar } from '@skeletonlabs/skeleton';
</script>

<div class="bg-tertiary-500">
<AppBar class="bg-gradient-to-r from-primary-500 to-warning-500">
<svelte:fragment slot="lead">(icon)</svelte:fragment>
(title)
<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>

<slot />
</div>