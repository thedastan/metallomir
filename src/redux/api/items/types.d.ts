namespace ITEMS {
	type GetItemRes = {
		id: number;
		title: string;
		fields: Field[];
	}[];

	type Field = {
		title: string;
		value: string;
	};

	type GetItemReq = void;


	

	type GetItemByIdRes = {
		id: number;
		title: string;
		fields: Array<{
			title: string;
			value: string;
		}>;
	};

	type GetItemByIdReq = string | undefined;
}
