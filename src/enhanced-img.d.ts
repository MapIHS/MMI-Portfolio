// @sveltejs/enhanced-img only types imports ending in `?enhanced`.
// Imports that also set widths end in `&enhanced`.
declare module '*&enhanced' {
	const value: {
		sources: Record<string, string>;
		img: { src: string; w: number; h: number };
	};
	export default value;
}
