import { getContext, setContext } from 'svelte';

import { ToastPosition, ToastTheme, type ToastOption } from './toast.types.js';

/* The line `const STORE_CONTEXT = 'SVELTE_EASY_TOAST';` is defining a constant variable named
`STORE_CONTEXT` with the value `'SVELTE_EASY_TOAST'`. This constant is used as a key to store and
retrieve the `ToastStore` instance in the context using Svelte's `getContext` and `setContext`
functions. */

const STORE_CONTEXT = 'SVELTE_EASY_TOAST';

/* The `DEFAULT_OPTIONS` constant is defining default values for a toast notification. It is of type
`Partial<ToastOption>`, which means that each property of `ToastOption` is optional. */
const DEFAULT_OPTIONS: Partial<ToastOption> = {
	type: ToastTheme.DEFAULT,
	position: ToastPosition.TOP_RIGHT,
	delay: 2500,
	text: '',
	title: undefined,
	showClose: true,
	closeOnClick: true
};

/* The `ToastStore` class manages toast notifications by allowing the addition, removal, and display of
toast messages. */
class ToastStore {
	/* The line `toasts = <ToastOption[]>([]);` in the `ToastStore` class is initializing a reactive
	variable named `toasts` using Svelte's `` function. This variable holds an array of
	`ToastOption` objects, representing the list of toast notifications to be displayed. */
	toasts = $state<ToastOption[]>([]);

	/* The line `callback: ((toast: Partial<ToastOption>) => void) | undefined;` in the `ToastStore` class
	is defining a property named `callback`. This property can hold a function that takes a parameter of
	type `Partial<ToastOption>` and returns `void`, or it can be `undefined`. */
	callback: ((toast: Partial<ToastOption>) => void) | undefined;

	/* The `generateUniqueId` method is a function within the `ToastStore` class that generates a unique
	identifier for each toast notification. It combines the current timestamp (converted to a string)
	with a random number (also converted to a string) to create a unique ID. This unique ID is then
	assigned to each toast notification when it is added to the list of toasts in the `ToastStore`. */
	generateUniqueId = (): string => {
		return Date.now().toString() + Math.random().toString();
	};

	/* The `push` method within the `ToastStore` class is responsible for adding a new toast notification to the list of toasts. */
	push = (toast: ToastOption): void => {
		const nextToast: ToastOption = { ...toast, id: this.generateUniqueId() };

		this.toasts = this.toasts.concat([nextToast])

		if (typeof this.callback === 'function') this.callback(nextToast);
	};

	/* The `remove` method in the `ToastStore` class is responsible for removing a toast notification from the list of toasts based on the provided `id`. */
	remove = (id: string): void => {
		this.toasts = this.toasts.filter((toast) => toast.id !== id);
	};

	/* This `show` method in the `ToastStore` class is responsible for displaying a toast notification.  */
	show = (toast: Partial<ToastOption>): void => {
		this.push({
			...(DEFAULT_OPTIONS as ToastOption),
			...toast
		});
	};

	/* The `onPushed` method in the `ToastStore` class is setting a callback function that will be called when a new toast notification is pushed to the list of toasts. */
	onPushed = (callback: (toast: Partial<ToastOption>) => void): void => {
		this.callback = callback;
	};
}

/**
 * The function `createToastStore` creates a new instance of `ToastStore` and sets it in the context.
 */
export const createToastStore = (): void => {
	setContext<ToastStore>(STORE_CONTEXT, new ToastStore());
};

/**
 * The useToast function returns the ToastStore from the STORE_CONTEXT.
 */
export const useToast = (): ToastStore => {
	return getContext<ToastStore>(STORE_CONTEXT);
};
