declare module "aos" {
	export type AOSOptions = {
		duration?: number;
		once?: boolean;
		offset?: number;
		delay?: number;
		easing?: string;
		mirror?: boolean;
		anchorPlacement?: string;
		[key: string]: unknown;
	};

	const AOS: {
		init(options?: AOSOptions): void;
		refresh(): void;
		refreshHard(): void;
	};

	export default AOS;
}


