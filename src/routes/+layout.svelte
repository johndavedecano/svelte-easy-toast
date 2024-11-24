<script>
	import SvelteEasyToast from '$lib/components/SvelteEasyToast.svelte';
	import { createToastStore } from '$lib/core/toast.store.svelte';

	const { children } = $props();

	createToastStore();
</script>

{@render children()}

<SvelteEasyToast />
