![My Image](https://raw.github.com/johndavedecano/svelte-easy-toast/main/preview.png)

## Installation

```bash
npm i svelte-easy-toast
```

Add SvelteEastToast wrapper component to your root layout(+layout.svelte)

```javascript
<script>
	import SvelteEasyToast from 'svelte-easy-toast/components/SvelteEasyToast.svelte';
	import { createToastStore } from 'svelte-easy-toast/core/toast.store.svelte';

	const { children } = $props();

	createToastStore();
</script>

{@render children()}

<SvelteEasyToast />

```

```javascript
<script>
 	import { useToast } from 'svelte-easy-toast/core/toast.store.svelte';

	let ToastStore = useToast();

    const showToast = () => {
	    ToastStore.show({
            type: 'primary', // dark, danger, success, info, warning, default, error
            position: 'top-right', // top-left, top-center, bottom-left, bottom-right, bottom-center
            text: 'If you're seeing this, you've probably already done this step. Congrats!',
            title: 'Svelte is too awesome!',
	    });
     }
</script>

<button on:click={showToast}>show Toast</button>

<SvelteEasyToast />

```

## API

- **type - ToastTheme(optional)** - default, success, info, warning, dark, error, success
- **position - ToastPosition(optional)** - Toast positions
- **delay - Number(optional)** - How long until the toast to be closed
- **title - String(optional)** - Toast title
- **text - String(optional)** - The message that youd like to show on the toast body
- **showClose - String(optional)** - Whether to show the close icon
- **closeOnClick - Boolean(optional)** - Whether close the toast when it is clicked
- **CustomToastComponent - Component(optional)** - Use a custom component as toast

### Toast Positions
- top-left
- top-right - default
- top-center
- bottom-left
- bottom-right
- bottom-center

## Using Custom Component

To use custom toast component just follow the template below.

```javascript
<script lang="ts">
	import { ToastTheme, type ToastOption } from '$lib/core/toast.types.js';

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
		box-shadow: 2px 9px 23px 0px rgba(0, 0, 0, 0.75);
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

```

Then you implement it like this one. As simple as that.

```javascript
import toast from 'svelte-easy-toast';
import CustomComponent from './CustomComponent.svelte';


toast({
	type: 'error',
	title: 'Whoops was an error',
	text: 'I am now running around like a headless chicken'
	customComponent: CustomToastComponent
})
```


## MIT License
Copyright (c) 2022 J.D Decano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
