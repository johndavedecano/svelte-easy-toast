import type { Component } from 'svelte';

/* This code snippet in TypeScript is defining an enum called `ToastPosition`. An enum is a way to
define a set of named constants. In this case, `ToastPosition` is defining constants for different
positions where a toast notification can be displayed on the screen. Each constant is assigned a
string value representing a specific position: */
export enum ToastPosition {
	TOP_LEFT = 'top-left',
	TOP_RIGHT = 'top-right',
	TOP_CENTER = 'top-center',
	BOTTOM_LEFT = 'bottom-left',
	BOTTOM_RIGHT = 'bottom-right',
	BOTTOM_CENTER = 'bottom-center'
}

/* This code snippet in TypeScript is defining an enum called `ToastTheme`. An enum is a way to define
a set of named constants. In this case, `ToastTheme` is defining constants for different themes that
can be applied to toast notifications. Each constant is assigned a string value representing a
specific theme, such as primary, dark, info, success, warning, and error. These constants can be
used to specify the theme of a toast notification when creating or customizing it. */
export enum ToastTheme {
	PRIMARY = 'primary',
	DARK = 'dark',
	DEFAULT = 'default',
	INFO = 'info',
	SUCCESS = 'success',
	WARNING = 'warning',
	ERROR = 'error'
}

/**
 * The ToastOption type defines the properties for displaying a toast notification.
 * @property {string} id - The `id` property in the `ToastOption` type represents a unique identifier
 * for the toast message.
 * @property {ToastTheme | string} type - The `type` property in the `ToastOption` type specifies the
 * theme or style of the toast message. It can be of type `ToastTheme` or a string value.
 * @property {ToastPosition | string} position - The `position` property in the `ToastOption` type
 * specifies the position where the toast notification will be displayed on the screen. It can be one
 * of the predefined values from the `ToastPosition` enum or a custom string value.
 * @property {number} delay - The `delay` property in the `ToastOption` type specifies the duration in
 * milliseconds for how long the toast message should be displayed before automatically closing.
 * @property {string} title - The `title` property in the `ToastOption` type represents the title or
 * heading of the toast message that will be displayed to the user. It is a string type property and is
 * optional, meaning it does not have to be provided when creating a new toast option.
 * @property {string} text - The `text` property in the `ToastOption` type represents the main content
 * or message that will be displayed in the toast notification. It typically contains the information
 * or message that you want to communicate to the user.
 * @property {boolean} showClose - The `showClose` property in the `ToastOption` type specifies whether
 * a close button should be displayed on the toast notification. If set to `true`, a close button will
 * be shown, allowing users to manually dismiss the toast notification. If set to `false`, no close
 * button will be displayed
 * @property {boolean} closeOnClick - The `closeOnClick` property in the `ToastOption` type specifies
 * whether the toast should be closed when clicked on. If `closeOnClick` is set to `true`, clicking on
 * the toast will close it. If `closeOnClick` is set to `false`, clicking on the toast will not
 * @property {Component} CustomToastComponent - The `CustomToastComponent` property in the
 * `ToastOption` type is used to specify a custom component that will be rendered as the content of the
 * toast message. This allows you to create a custom design or layout for the toast message content
 * instead of using the default text-based content provided by the `
 */
export type ToastOption = {
	id: string;
	type?: ToastTheme | string;
	position?: ToastPosition | string;
	delay?: number;
	title?: string;
	text?: string;
	showClose?: boolean;
	closeOnClick?: boolean;
	CustomToastComponent?: Component;
};
