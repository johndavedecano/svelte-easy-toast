<script lang="ts">
	import toast from '$lib/core/toast';
	import type { ToastOption } from '$lib/core/toast.types';
	import { SvelteEasyToast } from '$lib/index';
	import CustomComponent from './../CustomComponent.svelte';

	let useCustomComponent = 'no';

	$: console.log(useCustomComponent);

	let settings: ToastOption = {
		type: 'primary',
		position: 'top-right',
		text: 'Alerts are available for any length of text, as well as an optional close button.',
		title: 'Como Estas!',
		delay: 3000
	};

	const handleClick = (): void => {
		if (useCustomComponent == 'yes') {
			settings.customComponent = CustomComponent;
		}
		toast(settings);
	};
</script>

<div class="px-4 py-5 my-5 text-center">
	<img class="d-block mx-auto mb-4" src="icon.png" alt="" width="100" height="auto" />
	<h1 class="display-5 fw-bold">Svelte Easy Toast</h1>
	<div class="col-lg-6 mx-auto">
		<p class="lead mb-4">
			Hello! This svelte-easy-toast a pretty simple toast library for your svelte applications.
		</p>
		<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
			<a
				type="button"
				class="btn btn-primary btn-lg px-4 gap-3"
				href="https://github.com/johndavedecano/svelte-easy-toast">Download</a
			>
			<a
				href="https://github.com/johndavedecano"
				target="_blank"
				rel="noreferrer"
				class="btn btn-outline-secondary btn-lg px-4">Follow Me</a
			>
		</div>
	</div>
</div>

<div class="container" name="demo">
	<div class="d-flex justify-content-center p-4">
		<div class="card col-lg-5">
			<div class="card-body">
				<div class="h2">Svelte Easy Toast</div>
				<p class="lead mb-2">Here is a pretty simple demo for you.</p>

				<div class="form-group mb-3">
					<label for="">Title</label>
					<input type="text" bind:value={settings.title} class="form-control form-control-lg" />
				</div>

				<div class="form-group mb-3">
					<label for="">Message</label>
					<textarea type="text" bind:value={settings.text} class="form-control form-control-lg" />
				</div>

				<div class="form-group mb-3">
					<label for="">Delay</label>
					<input type="number" bind:value={settings.delay} class="form-control form-control-lg" />
					<span class="helper-text">Milliseconds</span>
				</div>

				<div class="form-group mb-3">
					<label for="">Use Custom Component</label>
					<select bind:value={useCustomComponent} class="form-control form-control-lg">
						<option value="no"> No </option>
						<option value="yes"> Yes </option>
					</select>
				</div>

				<div class="form-group mb-3">
					<label for="">Select Type</label>
					<select bind:value={settings.type} class="form-control form-control-lg">
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
					<select bind:value={settings.position} class="form-control form-control-lg">
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
		</div>
	</div>
</div>

<SvelteEasyToast />
