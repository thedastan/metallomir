import CatalogComponents from "@/components/catalog/CatalogComponents";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
	title: "Каталог металлопроката в Бишкеке - Арматура, Трубы, Листы и Другое",
	description:
		"Каталог металлопроката в Бишкеке от Metallomir. Арматура, трубы (круглые и прямоугольные), оцинкованные листы, уголки, швеллер и катанка. Ознакомьтесь с ассортиментом на сайте.",
	keywords:
		"каталог металлопрокат Бишкек, арматура Бишкек, трубы Бишкек, оцинкованные листы Бишкек, швеллер Бишкек, катанка Бишкек, купить металлопрокат Бишкек, Metallomir каталог",
	robots: "index, follow",
	authors: [{ name: "Metallomir" }],
	// ...NO_INDEX_PAGE,
};
const Catalog = () => {
	return (
		<>
			<Head>
				<meta name="author" content="Metallomir" />
				<link rel="canonical" href="https://metallomir.kg/catalog" />
			</Head>
			;
			<CatalogComponents />;
		</>
	);
};
export default Catalog;
