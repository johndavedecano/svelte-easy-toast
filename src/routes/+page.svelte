<script lang="ts">
	import toast from '$lib/core/toast';
	import type { ToastPosition } from '$lib/core/toast.types';
	import { SvelteEasyToast } from '$lib/index';

	let toastType: string = 'primary';

	let toastPosition: ToastPosition = 'top-right';

	let toastMessage: string = 'Alerts are available for any length of text, as well as an optional close button.';

    let toastTitle: string = 'Como Estas!';

	const handleClick = () => {
		toast({
			type: toastType,
			position: toastPosition,
			text: toastMessage,
            title: toastTitle,
		});
	};
</script>

<div class="container">
    
	<div class="h2 mb-4">Svelte Easy Toast</div>
    <p>A pretty simple toast library for sveltejs</p>

    <div class="form-group mb-3">
		<label for="">Title</label>
		<input type="text" bind:value={toastTitle} class="form-control" />
	</div>

	<div class="form-group mb-3">
		<label for="">Message</label>
		<textarea type="text" bind:value={toastMessage} class="form-control" />
	</div>

	<div class="form-group mb-3">
		<label for="">Select Type</label>
		<select bind:value={toastType} class="form-control form-control-lg">
            <option value="primary"> primary </option>
            <option value="dark"> dark </option>
			<option value="default"> default </option>
			<option value="info"> info </option>
			<option value="warning"> warning </option>
			<option value="error"> error </option>
			<option value="success"> success </option>
		</select>
	</div>
	<div class="form-group mb-4">
		<label for="">Select Position</label>
		<select bind:value={toastPosition} class="form-control form-control-lg">
			<option value="top-left"> top-left </option>
			<option value="top-right"> top-right </option>
			<option value="top-center"> top-center </option>
			<option value="bottom-left"> bottom-left </option>
			<option value="bottom-right"> bottom-right </option>
			<option value="bottom-center"> bottom-center </option>
		</select>
	</div>
	<button class="btn btn-primary btn-lg" on:click={handleClick}> Show Toast </button>
</div>

<SvelteEasyToast />
