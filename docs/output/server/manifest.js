export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-312fa3bc.js","imports":["_app/immutable/start-312fa3bc.js","_app/immutable/chunks/index-23eabcce.js","_app/immutable/chunks/singletons-29a155ef.js","_app/immutable/chunks/index-d079ecbc.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
