<script lang="ts">
	import { onDestroy } from 'svelte';

	import SvelteToastItem from './SvelteToastItem.svelte';
	import { ToastPosition, type ToastOption } from '$lib/core/toast.types.js';
	import { useToast } from '$lib/core/toast.store.svelte.js';

	const store = useToast();

	let timers = $state<{ [key: string]: number }>({});
	let showing = $state<{ [key: string]: boolean }>({});
	let topLeft = $state<ToastOption[]>([]);
	let topRight = $state<ToastOption[]>([]);
	let topCenter = $state<ToastOption[]>([]);
	let bottomLeft = $state<ToastOption[]>([]);
	let bottomRight = $state<ToastOption[]>([]);
	let bottomCenter = $state<ToastOption[]>([]);

	$effect(() => {
		topLeft = store.toasts.filter((item) => item.position === ToastPosition.TOP_LEFT);
		topRight = store.toasts.filter((item) => item.position === ToastPosition.TOP_RIGHT);
		topCenter = store.toasts.filter((item) => item.position === ToastPosition.TOP_CENTER);
		bottomLeft = store.toasts.filter((item) => item.position === ToastPosition.BOTTOM_LEFT);
		bottomRight = store.toasts.filter((item) => item.position === ToastPosition.BOTTOM_RIGHT);
		bottomCenter = store.toasts.filter((item) => item.position === ToastPosition.BOTTOM_CENTER);
	});

	const parseId = (option: ToastOption): string => option.id;

	store.onPushed((toast: Partial<ToastOption>): void => {
		if (toast.id) {
			showing[toast.id] = true;
			if (window && window.setTimeout) {
				timers[toast.id] = window.setTimeout(() => closeItem(toast.id), toast.delay);
			}
		}
	});

	const performCleanup = (): void => {
		Object.keys(timers).map((key) => {
			if (window && window.clearTimeout) {
				window.clearTimeout(timers[key]);
			}
		});
	};

	const closeItem = (id: string | number | undefined) => {
		if (typeof id === 'string') {
			delete showing[id];
			if (window && window.clearTimeout) {
				window.clearTimeout(timers[id]);
			}
			store.remove(id);
		}
	};

	onDestroy(() => performCleanup());
</script>

{#if bottomLeft.length}
	<div class="svelte-et svelte-et-bottom svelte-et-bottom-left">
		{#each bottomLeft as item (item.id)}
			{#if showing[parseId(item)]}
				{#if item.CustomToastComponent}
					<item.CustomToastComponent {item} close={() => closeItem(item.id)} />
				{:else}
					<SvelteToastItem {item} close={() => closeItem(item.id)} />
				{/if}
			{/if}
		{/each}
	</div>
{/if}

{#if bottomRight.length}
	<div class="svelte-et svelte-et-bottom svelte-et-bottom-right">
		{#each bottomRight as item (item.id)}
			{#if showing[parseId(item)]}
				{#if item.CustomToastComponent}
					<item.CustomToastComponent {item} close={() => closeItem(item.id)} />
				{:else}
					<SvelteToastItem {item} close={() => closeItem(item.id)} />
				{/if}
			{/if}
		{/each}
	</div>
{/if}

{#if bottomCenter.length}
	<div class="svelte-et svelte-et-bottom svelte-et-bottom-center">
		{#each bottomCenter as item (item.id)}
			{#if showing[parseId(item)]}
				{#if item.CustomToastComponent}
					<item.CustomToastComponent {item} close={() => closeItem(item.id)} />
				{:else}
					<SvelteToastItem {item} close={() => closeItem(item.id)} />
				{/if}
			{/if}
		{/each}
	</div>
{/if}

{#if topLeft.length}
	<div class="svelte-et svelte-et-top svelte-et-top-left">
		{#each topLeft as item (item.id)}
			{#if showing[parseId(item)]}
				{#if item.CustomToastComponent}
					<item.CustomToastComponent {item} close={() => closeItem(item.id)} />
				{:else}
					<SvelteToastItem {item} close={() => closeItem(item.id)} />
				{/if}
			{/if}
		{/each}
	</div>
{/if}

{#if topRight.length}
	<div class="svelte-et svelte-et-top svelte-et-top-right">
		{#each topRight as item (item.id)}
			{#if showing[parseId(item)]}
				{#if item.CustomToastComponent}
					<item.CustomToastComponent {item} close={() => closeItem(item.id)} />
				{:else}
					<SvelteToastItem {item} close={() => closeItem(item.id)} />
				{/if}
			{/if}
		{/each}
	</div>
{/if}

{#if topCenter.length}
	<div class="svelte-et svelte-et-top svelte-et-top-center">
		{#each topCenter as item (item.id)}
			{#if showing[parseId(item)]}
				{#if item.CustomToastComponent}
					<item.CustomToastComponent {item} close={() => closeItem(item.id)} />
				{:else}
					<SvelteToastItem {item} close={() => closeItem(item.id)} />
				{/if}
			{/if}
		{/each}
	</div>
{/if}

<style>
	.svelte-et {
		--svelte-et-offset: 16px;
		--svelte-et-zindex: 9999;
	}

	.svelte-et {
		position: fixed;
		z-index: var(--svelte-et-zindex);
		top: var(--svelte-et-offset);
		left: var(--svelte-et-offset);
		right: var(--svelte-et-offset);
		bottom: var(--svelte-et-offset);
		pointer-events: none;
		display: flex;
	}

	.svelte-et-top :global(.svelte-et-alert) {
		margin-bottom: var(--svelte-et-offset);
	}

	.svelte-et-top-left {
		align-items: flex-start;
		justify-content: flex-end;
		flex-direction: column-reverse;
	}

	.svelte-et-top-right {
		align-items: flex-end;
		justify-content: flex-end;
		flex-direction: column-reverse;
	}

	.svelte-et-top-center {
		align-items: center;
		justify-content: flex-end;
		flex-direction: column-reverse;
	}

	.svelte-et-bottom :global(.svelte-et-alert) {
		margin-top: var(--svelte-et-offset);
	}

	.svelte-et-bottom-left {
		align-items: flex-start;
		justify-content: flex-end;
		flex-direction: column;
	}

	.svelte-et-bottom-right {
		align-items: flex-end;
		justify-content: flex-end;
		flex-direction: column;
	}

	.svelte-et-bottom-center {
		align-items: center;
		justify-content: flex-end;
		flex-direction: column;
	}
</style>
