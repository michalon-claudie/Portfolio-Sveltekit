<script>
  import "../app.pcss";
  import { AppBar } from '@skeletonlabs/skeleton';
  import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell class="bg-primary-300">
	<svelte:fragment slot="header">
    <AppBar class="bg-gradient-to-r from-primary-400 to-secondary-300">
      <svelte:fragment slot="lead">(icon)</svelte:fragment>
      (title)
      <svelte:fragment slot="trail">(actions)</svelte:fragment>
    </AppBar>
  </svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>