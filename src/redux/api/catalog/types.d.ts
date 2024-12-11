namespace CATALOG {
	type GetCatalogRes = [
		{
			id: number;
			title: string;
			description: string;
			image: string;
			price_file: null;
			slug:string;
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
			id: number;
			title: string;
			value: string;
		}>;
		seos: Array<{
			id: number;
			title: string;
			description: string;
		}>;
	};

	type GetCatalogByIdReq = string | undefined;

	type PostForgotResponse = {
		name: string;
		phone_number: number;
		message: string;
	};
	type PostForgotRequest = {
		name: string;
		phone_number: number;
		message: string;
	};
}
