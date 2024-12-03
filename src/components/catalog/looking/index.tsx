"use client";
import Title from "@/components/ui/texts/Title";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { useGetCatalogQuery } from "@/redux/api/catalog";
import { useParams, useRouter } from "next/navigation";
import CardLook from "./card-look";
import TableLook from "./table-look";
import { useState } from "react";
import { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/constants/seo/seo.constants";
import { useGetByIdItemQuery, useGetItemQuery } from "@/redux/api/items";
import Head from "next/head";

export const metadata: Metadata = {
	title: "Каталог металлопроката в Бишкеке - Metallomir",
	...NO_INDEX_PAGE,
};

const Looking = () => {
	const { data } = useGetCatalogQuery();
	const { data: data_table } = useGetItemQuery();
	const router = useRouter();
	const [view, setView] = useState("card");

	const [selectedId, setSelectedId] = useState<string | undefined>();

	return (
		<>
		<Head>
		<meta name="title" content="Каталог металлопроката в Бишкеке - Арматура, Трубы, Листы и Другое"/>
    <meta name="description" content="Каталог металлопроката в Бишкеке от Metallomir. Арматура, трубы (круглые и прямоугольные), оцинкованные листы, уголки, швеллер и катанка. Ознакомьтесь с ассортиментом на сайте."/>
    <meta name="keywords" content="каталог металлопрокат Бишкек, арматура Бишкек, трубы Бишкек, оцинкованные листы Бишкек, швеллер Бишкек, катанка Бишкек, купить металлопрокат Бишкек, Metallomir каталог"/>
    <meta name="author" content="Metallomir"/>
    <meta name="robots" content="index, follow"/>
    <link rel="canonical" href="https://metallomir.kg/catalog"/>
    <title>Каталог металлопроката в Бишкеке - Metallomir</title>
		</Head>


			<Box py={{ md: 28, base: 20 }}>
				<Box className="container">
					<Flex flexDir="column">
						<Flex
							p={{ md: 0, base: 4 }}
							justifyContent="space-between"
							flexDir={{ md: "row", base: "column" }}>
							<Title
								pb={{ md: 20, base: 4 }}
								fontWeight={500}
								fontSize={{ md: 68, base: 32 }}>
								Я ищу...
							</Title>

							<select
								className="select_option"
								value={view === "table" ? selectedId : view} // Если "table", используем `id`
								onChange={(e) => {
									if (e.target.value === "card" || e.target.value === "table") {
										setView(e.target.value); // Меняем вид
									} else {
										setView("table");
										setSelectedId(e.target.value); // Устанавливаем выбранный id
									}
								}}>
								<option value="card">Ассортимент</option>
								{/* <option value="table">Арматура</option> */}
								{data_table?.map((el) => (
									<option key={el.id} value={el.id}>
										{el.title}
									</option>
								))}
							</select>
						</Flex>

						<Box display={{ md: "flex", base: "none" }} flexWrap="wrap" gap={3}>
							{data?.map((el, index) => (
								<Box
									key={index}
									cursor="pointer"
									onClick={() => router.push(`/${el.id}`)}>
									<Button
										color="black"
										fontWeight={400}
										fontSize={{ md: 20, base: 16 }}
										p={{ md: "22px 30px", base: "8px 10px" }}
										borderRadius={50}
										bg="#F4F4F4"
										border="solid 1px #C6C6C6">
										{el.title}
									</Button>
								</Box>
							))}
						</Box>

						<Box
							w="100%"
							overflowX="scroll"
							display={{ md: "none", base: "flex" }}>
							{data?.map((el, index) => (
								<Box
									p={1}
									key={index}
									cursor="pointer"
									onClick={() => router.push(`/${el.id}`)}>
									<Button
										color="black"
										fontWeight={400}
										fontSize={{ md: 20, base: 16 }}
										p={{ md: "22px 30px", base: "8px 10px" }}
										borderRadius={50}
										bg="#F4F4F4"
										border="solid 1px #C6C6C6">
										{el.title}
									</Button>
								</Box>
							))}
						</Box>

						<Box>
							{/* Логика переключения видов */}
							{view === "card" && <CardLook />}
							{view === "table" && <TableLook id={selectedId} />}
						</Box>
					</Flex>
				</Box>
			</Box>
		</>
	);
};

export default Looking;
