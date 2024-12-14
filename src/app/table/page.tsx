import Tabletitle from "@/components/table/table-look/tabletitle";
import TableSection from "@/components/table/tableComponent";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
	title: "Ассортимент",
  
	description:
		"Меттоломир - это компания по поставке металлопроката на рынке нашей страны.",
	keywords:
		'купить сталь, купить сталь бишкек, купить сталь цена, купить арматуру бишкек, цены на сталь бишкек, кыргызстан, купить металл бишкек, сталь недорого, сталь дешево, сталь, металлопрокат цены, калькулятор металлопроката, металлопрокат прайс"',
	robots: "index, follow",
	authors: [{ name: "ОсОО Металломир" }],
	openGraph: {
		title: "Металлопрокат в Бишкеке - Арматура, Трубы, Листы и Другое",
		description:
			"Металлопрокат в Бишкеке. Широкий ассортимент: арматура, оцинкованные листы, круглые и прямоугольные трубы, уголки, швеллер, катанка. Доставка по городу. Звоните!",

		url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
		type: "website",
	},
};

const TablePage = () => {
	return (
		<>
			<Head>
				<link rel="canonical" href="https://metallomir.kg/" />
				<meta name="author" content="ОсОО Металломир" />

				<meta
					property="og:image"
					content="https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg"
				/>

				<meta property="og:type" content="website" />
			</Head>

			<TableSection />
		</>
	);
};

export default TablePage;
