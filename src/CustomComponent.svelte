<script lang="ts">
	import type { ToastOption } from '$lib/core/toast.types';
	import { createEventDispatcher } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let item: ToastOption;

	const onClickClose = () => {
		dispatch('close', item);
	};

	const onClickContent = (evt: Event) => {
		if (item.closeOnClick) {
			evt.stopPropagation();
			dispatch('close', item);
		}
	};
</script>

<div
	in:scale
	out:fade
	class="svelte-et-alert"
	class:svelte-et-alert-primary={item.type === 'primary'}
	class:svelte-et-alert-dark={item.type === 'dark'}
	class:svelte-et-alert-default={item.type === 'default'}
	class:svelte-et-alert-info={item.type === 'info'}
	class:svelte-et-alert-success={item.type === 'success'}
	class:svelte-et-alert-warning={item.type === 'warning'}
	class:svelte-et-alert-error={item.type === 'error'}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="svelte-et-alert-content" on:click={onClickContent}>
		{#if item.title}
			<div class="svelte-et-header">
				<div class="svelte-et-title">
					{item.title || ''}
				</div>
			</div>
		{/if}
		{#if item.showClose}
			<a href="/" class="svelte-et-close" on:click|preventDefault={onClickClose}>x</a>
		{/if}
		<div class="svelte-et-text">
			{item.text}
		</div>
	</div>
</div>

<style>
	.svelte-et-alert {
		--svelte-et-padding: 15px;
		--svelte-et-border-radius: 0px;

		--svelte-et-default-color: #636464;
		--svelte-et-default-bg: #ffffff;
		--svelte-et-default-border-color: #3a3a47;

		--svelte-et-primary-color: #084298;
		--svelte-et-primary-bg: #ffffff;
		--svelte-et-primary-border-color: #084298;

		--svelte-et-dark-color: #141619;
		--svelte-et-dark-bg: #ffffff;
		--svelte-et-dark-border-color: #141619;

		--svelte-et-info-color: #055160;
		--svelte-et-info-bg: #ffffff;
		--svelte-et-info-border-color: #055160;

		--svelte-et-success-color: #0f5132;
		--svelte-et-success-bg: #ffffff;
		--svelte-et-success-border-color: #0f5132;

		--svelte-et-warning-color: #664d03;
		--svelte-et-warning-bg: #ffffff;
		--svelte-et-warning-border-color: #664d03;

		--svelte-et-error-color: #842029;
		--svelte-et-error-bg: #ffffff;
		--svelte-et-error-border-color: #842029;
	}

	.svelte-et-alert {
		color: inherit;
		font-family: inherit;
		border-bottom: solid 5px;
		border-radius: var(--svelte-et-border-radius);
		display: block;
		z-index: 10000;
		max-width: 100%;
		pointer-events: visible;
		will-change: transform;
		box-shadow: 2px 9px 23px 0px rgba(0,0,0,0.75);
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
