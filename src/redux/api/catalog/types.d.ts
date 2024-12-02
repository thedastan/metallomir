namespace CATALOG {
	type GetCatalogRes = [
		{
			id: number;
			title: string;
			description: string;
			image: string;
			price_file: null;
		}
	];

	type GetCatalogReq = void;

	type GetCatalogByIdRes = {
		id: number;
		title: string;
		description: string;
		image: string;
		price_file: null;
		images: Array<{
			id: number;
			image: string;
		}>;
		infos: Array<{
			id: number
			title: string
			value: string
		}>
		seos: Array<{
			id: number;
			title: string;
			description: string;
		}>;
	};

	type GetCatalogByIdReq = string | undefined;
}



 