<script>
    import "../app.css";
    import { AppBar } from '@skeletonlabs/skeleton';
  </script>
  
<div class="bg-background-image bg-cover">
<AppBar class="!bg-transparent">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	(title)
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>

  <slot />
  </div>