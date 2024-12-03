"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import TabsImg from "./tabs_img";
import TextDetail from "./text_detail";
import { useParams } from "next/navigation";
import { useGetCatalogByIdQuery } from "@/redux/api/catalog";
import Contact from "../contact";
import Logo from "../logo";
import LookingDetails from "./looking-details";
import Head from "next/head";

const CardDetails = () => {
	const { id } = useParams();

	const idString = Array.isArray(id) ? id[0] : id;

	const { data } = useGetCatalogByIdQuery(idString);

	return (
		 <>
		 <Head>
		  
    <meta name="description" content="Купить арматуру A500C в Бишкеке. Высокое качество, доступные цены. Доставка по городу и регионам. Подробности на сайте Metallomir."/>
    <meta name="keywords" content="арматура A500C Бишкек, купить арматуру Бишкек, металлопрокат Бишкек, арматура цена, арматура доставка Бишкек"/>
    <meta name="author" content="Metallomir"/>
    <meta name="robots" content="index, follow"/>
    <link rel="canonical" href="https://metallomir.kg/catalog/armatura-a500c"/>
      {data?.seos.map((el,index) => (
				 <div key={index}>
					<title>{el.title}</title>
					<meta name="title" content={el.title}/>
					<meta name="description" content={el.description}/>

				 </div>
			))}
		 </Head>
		 <Box w="100%" h="100%" fontFamily="Gilroy">
			<Box className="container">
				{data && (
					<Box py={10}>
						<Text fontSize={{ md: 70, base: 26 }} fontWeight={500}>
							{data.title}
						</Text>
					</Box>
				)}
				 
				<Flex
					bg="#F4F4F4"
					borderRadius={20}
					p={{ md: 0, base: 4 }}
					justifyContent="space-between"
					alignItems="center"
					flexDir="column"
					gap={10}>
					<Flex
						w="100%"
						py={{ md: 16, base: 4 }}
						flexDir={{ md: "row", base: "column" }}
						justifyContent="center"
						gap={{ md: 20, base: 4 }}>
						<TabsImg />
						<TextDetail />
					</Flex>
				</Flex>
			</Box>

			<LookingDetails />

			<Contact />
			<Logo />
		</Box>
		</>
	);
};

export default CardDetails;
