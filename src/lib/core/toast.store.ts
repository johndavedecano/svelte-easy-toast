import { writable, type Writable } from 'svelte/store';

import type { ToastOption } from './toast.types';

const createStore = () => {
	const { subscribe, set, update }: Writable<Array<ToastOption>> = writable([]);

	const generateUniqueId = (): string => {
		const time = Date.now();
		const randomNumber = Math.random();
		return time.toString() + randomNumber.toString();
	};

	const push = (option: ToastOption) => {
		return update((options: Array<ToastOption>) => [
			...options,
			{ ...option, id: generateUniqueId() }
		]);
	};

	const onPushed = (callback: Function) => {
		const subscription = subscribe((items: Array<ToastOption>) => {
			if (Array.isArray(items) && items.length) {
				callback(items[items.length - 1]);
			}
		});
		return subscription;
	};

	const remove = (id: string) => {
		return update((options: Array<ToastOption>) => options.filter((item) => item.id !== id));
	};

	return { subscribe, update, set, push, onPushed, generateUniqueId, remove };
};

export default createStore();
