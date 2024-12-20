import AboutCompanyComponents from "@/components/about-company/AboutCompanyComponents";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
	title: "О компании - Металлопрокат в Бишкеке",
	description:
		"Узнайте больше о нашей компании. Мы занимаемся поставкой качественного металлопроката в Бишкеке: арматура, трубы, уголки, швеллер и другие изделия. Надежный партнер с опытом.",
	keywords:
		"О компании, металлопрокат Бишкек, арматура, трубы, уголки, швеллер, доставка металла Бишкек, надежный поставщик металла",
	robots: "index, follow",
	authors: [{ name: "Название вашей компании" }],
	openGraph: {
		title: "О компании - Металлопрокат в Бишкеке",
	description:
		"Узнайте больше о нашей компании. Мы занимаемся поставкой качественного металлопроката в Бишкеке: арматура, трубы, уголки, швеллер и другие изделия. Надежный партнер с опытом.",

		url: "https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg",
		type: "website",
	},
};

const AboutCompany = () => {
	return (
		<>
			<Head>
				<meta name="author" content="Название вашей компании" />
				<link rel="canonical" href="https://metallomir.kg/about-company" />


				<meta
					property="og:image"
					content="https://kzmc.kg/media/uploads/images/listovoi_prokat1.jpg"
				/>

				<meta property="og:type" content="website" />

			</Head>
      
			<AboutCompanyComponents />;
		</>
	);
};
export default AboutCompany;
