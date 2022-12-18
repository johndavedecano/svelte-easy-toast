import toastStore from './toast.store';

import type { ToastOption } from './toast.types';

const defaultOptions: ToastOption = {
	type: 'default',
	position: 'top-right',
	delay: 2500,
    text: '',
    title: undefined,
    showClose: true,
    closeOnClick: true,
};

const toast = (option: ToastOption) => {
	toastStore.push({
		...defaultOptions,
		...option
	});
};

export default toast;
