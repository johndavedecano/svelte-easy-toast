import { c as create_ssr_component, d as createEventDispatcher, e as escape, b as subscribe, o as onDestroy, f as each, v as validate_component, h as add_attribute } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
const createStore = () => {
  const { subscribe: subscribe2, set, update } = writable([]);
  const generateUniqueId = () => {
    const time = Date.now();
    const randomNumber = Math.random();
    return time.toString() + randomNumber.toString();
  };
  const push = (option) => {
    return update((options) => [
      ...options,
      { ...option, id: generateUniqueId() }
    ]);
  };
  const onPushed = (callback) => {
    const subscription = subscribe2((items) => {
      if (Array.isArray(items) && items.length) {
        callback(items[items.length - 1]);
      }
    });
    return subscription;
  };
  const remove = (id) => {
    return update((options) => options.filter((item) => item.id !== id));
  };
  return { subscribe: subscribe2, update, set, push, onPushed, generateUniqueId, remove };
};
const toastStore = createStore();
const SvelteToastItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-et-alert.svelte-139tfw3{--svelte-et-padding:15px;--svelte-et-border-radius:5px;--svelte-et-default-color:#636464;--svelte-et-default-bg:#fefefe;--svelte-et-default-border-color:#fdfdfe;--svelte-et-primary-color:#084298;--svelte-et-primary-bg:#cfe2ff;--svelte-et-primary-border-color:#b6d4fe;--svelte-et-dark-color:#141619;--svelte-et-dark-bg:#d3d3d4;--svelte-et-dark-border-color:#bcbebf;--svelte-et-info-color:#055160;--svelte-et-info-bg:#cff4fc;--svelte-et-info-border-color:#b6effb;--svelte-et-success-color:#0f5132;--svelte-et-success-bg:#d1e7dd;--svelte-et-success-border-color:#badbcc;--svelte-et-warning-color:#664d03;--svelte-et-warning-bg:#fff3cd;--svelte-et-warning-border-color:#ffecb5;--svelte-et-error-color:#842029;--svelte-et-error-bg:#f8d7da;--svelte-et-error-border-color:#f5c2c7}.svelte-et-alert.svelte-139tfw3{color:inherit;font-family:inherit;border:solid 1px;border-radius:var(--svelte-et-border-radius);display:block;z-index:10000;max-width:100%;pointer-events:visible;will-change:transform;box-shadow:0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)}@media(min-width: 576px){.svelte-et-alert.svelte-139tfw3{min-width:200px;max-width:300px}}.svelte-et-alert-content.svelte-139tfw3{position:relative;display:flex;flex-direction:column;padding-top:var(--svelte-et-padding)}.svelte-et-header.svelte-139tfw3{display:flex;align-items:center;padding-left:var(--svelte-et-padding);padding-right:var(--svelte-et-padding);padding-bottom:5px}.svelte-et-title.svelte-139tfw3{flex-grow:1;font-weight:bold}.svelte-et-text.svelte-139tfw3{padding-right:var(--svelte-et-padding);padding-left:var(--svelte-et-padding);padding-bottom:var(--svelte-et-padding);overflow-wrap:break-word}.svelte-et-alert-primary.svelte-139tfw3{color:var(--svelte-et-primary-color);background-color:var(--svelte-et-primary-bg);border-color:var(--svelte-et-primary-border-color)}.svelte-et-alert-dark.svelte-139tfw3{color:var(--svelte-et-dark-color);background-color:var(--svelte-et-dark-bg);border-color:var(--svelte-et-dark-border-color)}.svelte-et-alert-default.svelte-139tfw3{color:var(--svelte-et-default-color);background-color:var(--svelte-et-default-bg);border-color:var(--svelte-et-default-border-color)}.svelte-et-alert-info.svelte-139tfw3{color:var(--svelte-et-info-color);background-color:var(--svelte-et-info-bg);border-color:var(--svelte-et-info-border-color)}.svelte-et-alert-success.svelte-139tfw3{color:var(--svelte-et-success-color);background-color:var(--svelte-et-success-bg);border-color:var(--svelte-et-success-border-color)}.svelte-et-alert-warning.svelte-139tfw3{color:var(--svelte-et-warning-color);background-color:var(--svelte-et-warning-bg);border-color:var(--svelte-et-warning-border-color)}.svelte-et-alert-error.svelte-139tfw3{color:var(--svelte-et-error-color);background-color:var(--svelte-et-error-bg);border-color:var(--svelte-et-error-border-color)}.svelte-et-close.svelte-139tfw3{right:10px;top:10px;width:16px;height:16px;opacity:0.3;cursor:pointer;pointer-events:visible;font-size:0px;position:absolute}.svelte-et-close.svelte-139tfw3:hover{opacity:1}.svelte-et-close.svelte-139tfw3:before,.svelte-et-close.svelte-139tfw3:after{position:absolute;left:7px;content:' ';height:16px;width:2px;background-color:#333}.svelte-et-close.svelte-139tfw3:before{transform:rotate(45deg)}.svelte-et-close.svelte-139tfw3:after{transform:rotate(-45deg)}",
  map: null
};
const SvelteToastItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$1);
  return `<div class="${[
    "svelte-et-alert svelte-139tfw3",
    (item.type === "primary" ? "svelte-et-alert-primary" : "") + " " + (item.type === "dark" ? "svelte-et-alert-dark" : "") + " " + (item.type === "default" ? "svelte-et-alert-default" : "") + " " + (item.type === "info" ? "svelte-et-alert-info" : "") + " " + (item.type === "success" ? "svelte-et-alert-success" : "") + " " + (item.type === "warning" ? "svelte-et-alert-warning" : "") + " " + (item.type === "error" ? "svelte-et-alert-error" : "")
  ].join(" ").trim()}">
	<div class="${"svelte-et-alert-content svelte-139tfw3"}">${item.title ? `<div class="${"svelte-et-header svelte-139tfw3"}"><div class="${"svelte-et-title svelte-139tfw3"}">${escape(item.title || "")}</div></div>` : ``}
		${item.showClose ? `<a href="${"/"}" class="${"svelte-et-close svelte-139tfw3"}">x</a>` : ``}
		<div class="${"svelte-et-text svelte-139tfw3"}">${escape(item.text)}</div></div>
</div>`;
});
const SvelteEasyToast_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-et.svelte-yx3pd{--svelte-et-offset:16px;--svelte-et-zindex:9999}.svelte-et.svelte-yx3pd{position:fixed;z-index:var(--svelte-et-zindex);top:var(--svelte-et-offset);left:var(--svelte-et-offset);right:var(--svelte-et-offset);bottom:var(--svelte-et-offset);pointer-events:none;display:flex}.svelte-et-top.svelte-yx3pd .svelte-et-alert{margin-bottom:var(--svelte-et-offset)}.svelte-et-top-left.svelte-yx3pd{align-items:flex-start;justify-content:flex-end;flex-direction:column-reverse}.svelte-et-top-right.svelte-yx3pd{align-items:flex-end;justify-content:flex-end;flex-direction:column-reverse}.svelte-et-top-center.svelte-yx3pd{align-items:center;justify-content:flex-end;flex-direction:column-reverse}.svelte-et-bottom.svelte-yx3pd .svelte-et-alert{margin-top:var(--svelte-et-offset)}.svelte-et-bottom-left.svelte-yx3pd{align-items:flex-start;justify-content:flex-end;flex-direction:column}.svelte-et-bottom-right.svelte-yx3pd{align-items:flex-end;justify-content:flex-end;flex-direction:column}.svelte-et-bottom-center.svelte-yx3pd{align-items:center;justify-content:flex-end;flex-direction:column}",
  map: null
};
const SvelteEasyToast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let topLeft;
  let topRight;
  let topCenter;
  let bottomLeft;
  let bottomRight;
  let bottomCenter;
  let $toastStore, $$unsubscribe_toastStore;
  $$unsubscribe_toastStore = subscribe(toastStore, (value) => $toastStore = value);
  let timers = {};
  let showing = {};
  const parseId = (option) => option?.id || "";
  const unsubscribe = () => {
    Object.keys(timers).map((key) => {
      if (window && window.clearTimeout) {
        window.clearTimeout(timers[key]);
      }
    });
  };
  onDestroy(() => unsubscribe());
  $$result.css.add(css);
  topLeft = $toastStore.filter((item) => item.position === "top-left");
  topRight = $toastStore.filter((item) => item.position === "top-right");
  topCenter = $toastStore.filter((item) => item.position === "top-center");
  bottomLeft = $toastStore.filter((item) => item.position === "bottom-left");
  bottomRight = $toastStore.filter((item) => item.position === "bottom-right");
  bottomCenter = $toastStore.filter((item) => item.position === "bottom-center");
  $$unsubscribe_toastStore();
  return `${bottomLeft.length ? `<div class="${"svelte-et svelte-et-bottom svelte-et-bottom-left svelte-yx3pd"}">${each(bottomLeft, (item) => {
    return `${showing[parseId(item)] ? `${validate_component(SvelteToastItem, "SvelteToastItem").$$render($$result, { item }, {}, {})}` : ``}`;
  })}</div>` : ``}

${bottomRight.length ? `<div class="${"svelte-et svelte-et-bottom svelte-et-bottom-right svelte-yx3pd"}">${each(bottomRight, (item) => {
    return `${showing[parseId(item)] ? `${validate_component(SvelteToastItem, "SvelteToastItem").$$render($$result, { item }, {}, {})}` : ``}`;
  })}</div>` : ``}

${bottomCenter.length ? `<div class="${"svelte-et svelte-et-bottom svelte-et-bottom-center svelte-yx3pd"}">${each(bottomCenter, (item) => {
    return `${showing[parseId(item)] ? `${validate_component(SvelteToastItem, "SvelteToastItem").$$render($$result, { item }, {}, {})}` : ``}`;
  })}</div>` : ``}

${topLeft.length ? `<div class="${"svelte-et svelte-et-top svelte-et-top-left svelte-yx3pd"}">${each(topLeft, (item) => {
    return `${showing[parseId(item)] ? `${validate_component(SvelteToastItem, "SvelteToastItem").$$render($$result, { item }, {}, {})}` : ``}`;
  })}</div>` : ``}

${topRight.length ? `<div class="${"svelte-et svelte-et-top svelte-et-top-right svelte-yx3pd"}">${each(topRight, (item) => {
    return `${showing[parseId(item)] ? `${validate_component(SvelteToastItem, "SvelteToastItem").$$render($$result, { item }, {}, {})}` : ``}`;
  })}</div>` : ``}

${topCenter.length ? `<div class="${"svelte-et svelte-et-top svelte-et-top-center svelte-yx3pd"}">${each(topCenter, (item) => {
    return `${showing[parseId(item)] ? `${validate_component(SvelteToastItem, "SvelteToastItem").$$render($$result, { item }, {}, {})}` : ``}`;
  })}</div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let settings = {
    type: "primary",
    position: "top-right",
    text: "Alerts are available for any length of text, as well as an optional close button.",
    title: "Como Estas!",
    delay: 3e3
  };
  return `<div class="${"px-4 py-5 my-5 text-center"}"><img class="${"d-block mx-auto mb-4"}" src="${"icon.png"}" alt="${""}" width="${"100"}" height="${"auto"}">
	<h1 class="${"display-5 fw-bold"}">Svelte Easy Toast</h1>
	<div class="${"col-lg-6 mx-auto"}"><p class="${"lead mb-4"}">Hello! This svelte-easy-toast a pretty simple toast library for your svelte applications.
		</p>
		<div class="${"d-grid gap-2 d-sm-flex justify-content-sm-center"}"><a type="${"button"}" class="${"btn btn-primary btn-lg px-4 gap-3"}" href="${"https://github.com/johndavedecano/svelte-easy-toast"}">Download</a>
			<a href="${"https://github.com/johndavedecano"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"btn btn-outline-secondary btn-lg px-4"}">Follow Me</a></div></div></div>

<div class="${"container"}" name="${"demo"}"><div class="${"d-flex justify-content-center p-4"}"><div class="${"card col-lg-5"}"><div class="${"card-body"}"><div class="${"h2"}">Svelte Easy Toast</div>
				<p class="${"lead mb-2"}">Here is a pretty simple demo for you.</p>

				<div class="${"form-group mb-3"}"><label for="${""}">Title</label>
					<input type="${"text"}" class="${"form-control form-control-lg"}"${add_attribute("value", settings.title, 0)}></div>

				<div class="${"form-group mb-3"}"><label for="${""}">Message</label>
					<textarea type="${"text"}" class="${"form-control form-control-lg"}">${settings.text}</textarea></div>

				<div class="${"form-group mb-3"}"><label for="${""}">Delay</label>
					<input type="${"number"}" class="${"form-control form-control-lg"}"${add_attribute("value", settings.delay, 0)}>
					<span class="${"helper-text"}">Milliseconds</span></div>

				<div class="${"form-group mb-3"}"><label for="${""}">Select Type</label>
					<select class="${"form-control form-control-lg"}"><option value="${"primary"}">primary </option><option value="${"dark"}">dark </option><option value="${"default"}">default </option><option value="${"info"}">info </option><option value="${"warning"}">warning </option><option value="${"error"}">error </option><option value="${"success"}">success </option></select></div>
				<div class="${"form-group mb-4"}"><label for="${""}">Select Position</label>
					<select class="${"form-control form-control-lg"}"><option value="${"top-left"}">top-left </option><option value="${"top-right"}">top-right </option><option value="${"top-center"}">top-center </option><option value="${"bottom-left"}">bottom-left </option><option value="${"bottom-right"}">bottom-right </option><option value="${"bottom-center"}">bottom-center </option></select></div>
				<button class="${"btn btn-primary btn-lg"}">Show Toast </button></div></div></div></div>

${validate_component(SvelteEasyToast, "SvelteEasyToast").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
