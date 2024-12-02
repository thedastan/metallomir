
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
}
