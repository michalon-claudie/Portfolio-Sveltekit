<script>
  import "../app.pcss";
  import { AppBar } from '@skeletonlabs/skeleton';
</script>

<div >
<AppBar class="!bg-transparent">
<svelte:fragment slot="lead">(icon)</svelte:fragment>
(title)
<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>

<slot />
</div>