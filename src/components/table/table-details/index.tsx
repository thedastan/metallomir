"use client";
import Title from "@/components/ui/texts/Title";
import { useGetByIdItemQuery, useGetItemQuery } from "@/redux/api/items";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import Tabletitle from "../table-look/tabletitle";
import TableCategory from "./tablecategory";

const TableDetails = () => {
	const { id } = useParams();

	const idString = Array.isArray(id) ? id[0] : id;

	const { data } = useGetByIdItemQuery(idString);

	return (
		<Box h="100vh" py={{ md: 28, base: 20 }} >
			<Box className="container">
      <Title
					fontWeight={500}
				 
					p={{ md: 0, base: "20px 10px" }}
					fontSize={{ md: 68, base: 28 }}>
					 {data?.title}
				</Title>


				{/* /// */}

				 <TableCategory/>

				{/* /// */}

				<Box bg="#313131" borderRadius={20}>
					<Box p={{ md: 10, base: "40px 16px" }} bg="#313131" borderRadius={20}>
						<Flex
							borderRadius={6}
							alignItems="center"
							h={{ md: "70px", base: "50px" }}
							w="100%"
							bg="white"
							color="black">
							{data?.fields.map((item, index) => (
								<React.Fragment key={index}>
									<Box p={1} w="100%" textAlign="center">
										<Text fontSize={{ md: 20, base: 18 }} fontWeight={400}>
											{item.title}
										</Text>
									</Box>
									{index < data?.fields.length - 1 && (
										<Box bg="#313131" w={1} h="70px" />
									)}
								</React.Fragment>
							))}
						</Flex>

						<Box>
							<Box>
								<Flex
									textAlign="center"
									alignItems="center"
									h="70px"
									w="100%"
									bg="#313131"
									color="white">
									<Title
										fontSize={{ md: 22, base: 18 }}
										fontWeight={600}
										color="white"
										mt={4}
										w="100%"
										textAlign="center">
										{data?.title}
									</Title>
								</Flex>
								<Flex
									bg="grey"
									h={{ md: "70px", base: "100%" }}
									gap="1px"
									w="100%"
									border="solid 1px grey"
									overflow="hidden"
									borderRadius={6}>
									{data?.fields.map((el, index) => (
										<Flex
											key={index}
											alignItems="center"
											w="100%"
											p={{ md: 0, base: "10px 0" }}
											bg="#3f3f3f"
											color="white">
											<Box w="100%" textAlign="center">
												<Text fontSize={{ md: 20, base: 18 }} fontWeight={400}>
													{el.value}
												</Text>
											</Box>
										</Flex>
									))}
								</Flex>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default TableDetails;
