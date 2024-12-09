import HomeComponents from "@/components/home/HomeComponents";
import { NO_INDEX_PAGE } from "@/constants/seo/seo.constants";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
	title: "Металлопрокат в Бишкеке - Арматура, Трубы, Листы и Другое",
	description:
		"Металлопрокат в Бишкеке. Широкий ассортимент: арматура, оцинкованные листы, круглые и прямоугольные трубы, уголки, швеллер, катанка. Доставка по городу. Звоните!",
	keywords:
		"Металлопрокат, Бишкек, арматура, оцинкованные листы, трубы круглые, трубы прямоугольные, уголки, швеллер, катанка, доставка металлопроката Бишкек, купить металл Бишкек",
	robots: "index, follow",
	authors: [{ name: "ОсОО Металломир" }],
	openGraph: {
		title: "Металлопрокат в Бишкеке - Арматура, Трубы, Листы и Другое",
	description:
		"Металлопрокат в Бишкеке. Широкий ассортимент: арматура, оцинкованные листы, круглые и прямоугольные трубы, уголки, швеллер, катанка. Доставка по городу. Звоните!",

		url: "http://localhost:3003/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.f55e7955.png&w=750&q=75",
		type: "website",
	},
};

const Home = () => {
	return (
		<>
			<Head>
				<link rel="canonical" href="https://metallomir.kg/" />
				<meta name="author" content="ОсОО Металломир" />

				<meta
					property="og:image"
					content="http://localhost:3003/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.f55e7955.png&w=750&q=75"
				/>

				<meta property="og:type" content="website" />

			 
			</Head>

			<HomeComponents />
		</>
	);
};

export default Home;
