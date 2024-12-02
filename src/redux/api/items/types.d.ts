/* eslint-disable @typescript-eslint/no-unused-vars */

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
