<script lang="ts">
	import { ToastTheme, type ToastOption } from '$lib/core/toast.types.js';
	import { onMount } from 'svelte';

	import { fade, scale } from 'svelte/transition';

	type SvelteToastItemProps = {
		close: (item: ToastOption) => void;
		item: ToastOption;
	};

	let { close, item }: SvelteToastItemProps = $props();

	const onClickClose = () => close(item);

	const onClickContent = (evt: Event) => {
		evt.preventDefault();
		if (item.closeOnClick) {
			evt.stopPropagation();
			close(item);
		}
	};

	onMount(() => console.log(item.type === ToastTheme.PRIMARY));
</script>

<div
	in:scale
	out:fade
	class="svelte-et-alert"
	class:svelte-et-alert-primary={item.type === ToastTheme.PRIMARY}
	class:svelte-et-alert-dark={item.type === ToastTheme.DARK}
	class:svelte-et-alert-default={item.type === ToastTheme.DEFAULT}
	class:svelte-et-alert-info={item.type === ToastTheme.INFO}
	class:svelte-et-alert-success={item.type === ToastTheme.SUCCESS}
	class:svelte-et-alert-warning={item.type === ToastTheme.WARNING}
	class:svelte-et-alert-error={item.type === ToastTheme.ERROR}
>
	<button class="svelte-et-alert-content" onclick={onClickContent}>
		{#if item.title}
			<div class="svelte-et-header">
				<div class="svelte-et-title">
					{item.title || ''}
				</div>
			</div>
		{/if}
		{#if item.showClose}
			<a href="/" class="svelte-et-close" onclick={onClickClose}>&times;</a>
		{/if}
		<div class="svelte-et-text">
			{item.text}
		</div>
	</button>
</div>

<style>
	.svelte-et-alert {
		--svelte-et-padding: 15px;
		--svelte-et-border-radius: 5px;

		--svelte-et-default-color: #636464;
		--svelte-et-default-bg: #fefefe;
		--svelte-et-default-border-color: #fdfdfe;

		--svelte-et-primary-color: #084298;
		--svelte-et-primary-bg: #cfe2ff;
		--svelte-et-primary-border-color: #b6d4fe;

		--svelte-et-dark-color: #141619;
		--svelte-et-dark-bg: #d3d3d4;
		--svelte-et-dark-border-color: #bcbebf;

		--svelte-et-info-color: #055160;
		--svelte-et-info-bg: #cff4fc;
		--svelte-et-info-border-color: #b6effb;

		--svelte-et-success-color: #0f5132;
		--svelte-et-success-bg: #d1e7dd;
		--svelte-et-success-border-color: #badbcc;

		--svelte-et-warning-color: #664d03;
		--svelte-et-warning-bg: #fff3cd;
		--svelte-et-warning-border-color: #ffecb5;

		--svelte-et-error-color: #842029;
		--svelte-et-error-bg: #f8d7da;
		--svelte-et-error-border-color: #f5c2c7;
	}

	.svelte-et-alert {
		color: inherit;
		font-family: inherit;
		border: solid 1px;
		border-radius: var(--svelte-et-border-radius);
		display: block;
		z-index: 10000;
		max-width: 100%;
		pointer-events: visible;
		will-change: transform;
		box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
	}

	@media (min-width: 576px) {
		.svelte-et-alert {
			min-width: 200px;
			max-width: 300px;
		}
	}

	.svelte-et-alert-content {
		position: relative;
		display: flex;
		flex-direction: column;
		padding-top: var(--svelte-et-padding);
		border: none;
		background-color: transparent;
		text-align: initial;
	}

	.svelte-et-header {
		display: flex;
		align-items: center;
		padding-left: var(--svelte-et-padding);
		padding-right: var(--svelte-et-padding);
		padding-bottom: 5px;
	}

	.svelte-et-title {
		flex-grow: 1;
		font-weight: bold;
	}

	.svelte-et-text {
		padding-right: var(--svelte-et-padding);
		padding-left: var(--svelte-et-padding);
		padding-bottom: var(--svelte-et-padding);
		overflow-wrap: break-word;
	}

	.svelte-et-alert-primary {
		color: var(--svelte-et-primary-color);
		background-color: var(--svelte-et-primary-bg);
		border-color: var(--svelte-et-primary-border-color);
	}

	.svelte-et-alert-dark {
		color: var(--svelte-et-dark-color);
		background-color: var(--svelte-et-dark-bg);
		border-color: var(--svelte-et-dark-border-color);
	}

	.svelte-et-alert-default {
		color: var(--svelte-et-default-color);
		background-color: var(--svelte-et-default-bg);
		border-color: var(--svelte-et-default-border-color);
	}

	.svelte-et-alert-info {
		color: var(--svelte-et-info-color);
		background-color: var(--svelte-et-info-bg);
		border-color: var(--svelte-et-info-border-color);
	}

	.svelte-et-alert-success {
		color: var(--svelte-et-success-color);
		background-color: var(--svelte-et-success-bg);
		border-color: var(--svelte-et-success-border-color);
	}

	.svelte-et-alert-warning {
		color: var(--svelte-et-warning-color);
		background-color: var(--svelte-et-warning-bg);
		border-color: var(--svelte-et-warning-border-color);
	}

	.svelte-et-alert-error {
		color: var(--svelte-et-error-color);
		background-color: var(--svelte-et-error-bg);
		border-color: var(--svelte-et-error-border-color);
	}

	.svelte-et-close {
		right: 10px;
		top: 10px;
		width: 16px;
		height: 16px;
		opacity: 0.3;
		cursor: pointer;
		pointer-events: visible;
		font-size: 0px;
		position: absolute;
	}

	.svelte-et-close:hover {
		opacity: 1;
	}

	.svelte-et-close:before,
	.svelte-et-close:after {
		position: absolute;
		left: 7px;
		content: ' ';
		height: 16px;
		width: 2px;
		background-color: #333;
	}

	.svelte-et-close:before {
		transform: rotate(45deg);
	}

	.svelte-et-close:after {
		transform: rotate(-45deg);
	}
</style>
