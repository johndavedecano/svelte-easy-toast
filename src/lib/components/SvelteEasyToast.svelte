<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	import type { ToastOption } from '$lib/core/toast.types';
	import toastStore from '$lib/core/toast.store';
	import SvelteToastItem from './SvelteToastItem.svelte';

	let subscription: Function;
	let timers: { [key: string]: any } = {};
	let showing: { [key: string]: any } = {};

	$: topLeft = $toastStore.filter((item) => item.position === 'top-left');
	$: topRight = $toastStore.filter((item) => item.position === 'top-right');
	$: topCenter = $toastStore.filter((item) => item.position === 'top-center');
	$: bottomLeft = $toastStore.filter((item) => item.position === 'bottom-left');
	$: bottomRight = $toastStore.filter((item) => item.position === 'bottom-right');
	$: bottomCenter = $toastStore.filter((item) => item.position === 'bottom-center');

	const parseId = (option: ToastOption): string => option?.id || '';

	const showToast = (option: ToastOption) => {
		if (option.id) {
			const id: string = parseId(option);
			showing[id] = true;
			if (window && window.setTimeout) {
				timers[id] = window.setTimeout(() => closeItem(id), option.delay);
			}
		}
	};

	const subscribe = () => {
		subscription = toastStore.onPushed((option: ToastOption) => showToast(option));
	};

	const unsubscribe = () => {
		if (typeof subscription === 'function') subscription();
		Object.keys(timers).map((key) => {
			if (window && window.clearTimeout) {
				window.clearTimeout(timers[key]);
			}
		});
	};

	const closeItem = (id: string | undefined) => {
		if (typeof id === 'string') {
			delete showing[id];
			if (window && window.clearTimeout) {
				window.clearTimeout(timers[id]);
			}
			toastStore.remove(id);
		}
	};

	onMount(() => subscribe());

	onDestroy(() => unsubscribe());
</script>

{#if bottomLeft.length}
	<div class="svelte-et svelte-et-bottom svelte-et-bottom-left">
		{#each bottomLeft as item (item.id)}
			{#if showing[parseId(item)]}
				<svelte:component
					this={item.customComponent ? item.customComponent : SvelteToastItem}
					{item}
					on:close={() => closeItem(item.id)}
				/>
			{/if}
		{/each}
	</div>
{/if}

{#if bottomRight.length}
	<div class="svelte-et svelte-et-bottom svelte-et-bottom-right">
		{#each bottomRight as item (item.id)}
			{#if showing[parseId(item)]}
				<svelte:component
					this={item.customComponent ? item.customComponent : SvelteToastItem}
					{item}
					on:close={() => closeItem(item.id)}
				/>
			{/if}
		{/each}
	</div>
{/if}

{#if bottomCenter.length}
	<div class="svelte-et svelte-et-bottom svelte-et-bottom-center">
		{#each bottomCenter as item (item.id)}
			{#if showing[parseId(item)]}
				<svelte:component
					this={item.customComponent ? item.customComponent : SvelteToastItem}
					{item}
					on:close={() => closeItem(item.id)}
				/>
			{/if}
		{/each}
	</div>
{/if}

{#if topLeft.length}
	<div class="svelte-et svelte-et-top svelte-et-top-left">
		{#each topLeft as item (item.id)}
			{#if showing[parseId(item)]}
				<svelte:component
					this={item.customComponent ? item.customComponent : SvelteToastItem}
					{item}
					on:close={() => closeItem(item.id)}
				/>
			{/if}
		{/each}
	</div>
{/if}

{#if topRight.length}
	<div class="svelte-et svelte-et-top svelte-et-top-right">
		{#each topRight as item (item.id)}
			{#if showing[parseId(item)]}
				<svelte:component
					this={item.customComponent ? item.customComponent : SvelteToastItem}
					{item}
					on:close={() => closeItem(item.id)}
				/>
			{/if}
		{/each}
	</div>
{/if}

{#if topCenter.length}
	<div class="svelte-et svelte-et-top svelte-et-top-center">
		{#each topCenter as item (item.id)}
			{#if showing[parseId(item)]}
				<svelte:component
					this={item.customComponent ? item.customComponent : SvelteToastItem}
					{item}
					on:close={() => closeItem(item.id)}
				/>
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
