"use client";
import Title from "@/components/ui/texts/Title";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { useGetCatalogQuery } from "@/redux/api/catalog";
import {  useRouter } from "next/navigation";
import CardLook from "./card-look";
 
 
 
const Looking = () => {
	const { data } = useGetCatalogQuery();
	const router = useRouter();


	return (
		<>
		 
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

							 
						</Flex>

						<Box display={{ md: "flex", base: "none" }} flexWrap="wrap" gap={3}>
							{data?.map((el, index) => (
								<Box
									key={index}
									cursor="pointer"
									onClick={() => router.push(`/${el.slug}`)}>
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
									onClick={() => router.push(`/${el.slug}`)}>
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
						 
							<CardLook />
						</Box>
					</Flex>
				</Box>
			</Box>
		</>
	);
};

export default Looking;
