export type ToastPosition =
	| 'top-left'
	| 'top-right'
	| 'top-center'
	| 'bottom-left'
	| 'bottom-right'
	| 'bottom-center';

export type ToastOption = {
	id?: string | undefined;
	type?: string;
	position?: ToastPosition;
	delay?: number;
    title?: string;
	text?: string;
    showClose?: boolean;
    closeOnClick?: boolean;
};
