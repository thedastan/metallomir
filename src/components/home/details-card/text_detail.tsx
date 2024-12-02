"use client";
import { PHONE_NUMBER } from "@/constants/admin";
import { useGetCatalogByIdQuery } from "@/redux/api/catalog";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const TextDetail = () => {
	const { id } = useParams();
	const idString = Array.isArray(id) ? id[0] : id;
	const { data } = useGetCatalogByIdQuery(idString);

	return (
		<Box fontFamily="Gilroy">
			<Flex w="100%" h="100%" flexDir="column" justifyContent="space-between">
				{data && (
					<Box>
						<Text mt={2} py={4} fontSize={16} fontWeight={600}>
							Технические характеристики:
						</Text>
						{data.infos.map((el, index) => (
							<Box key={index} w={{ md: 500, base: "100%" }}>
								<Flex py={2} justifyContent="space-between">
									<Text fontSize={18} fontWeight={400}>
									 
										{el.title}:
									</Text>
									<Text
										p="0 10px"
										bg="white"
										borderRadius={50}
										fontSize={16}
										fontWeight={600}>
										{el.value}
									</Text>
								</Flex>

								<Box w="100%" h="1px" bg="#E2E2E2" />
							</Box>
						))}

					 
					</Box>
				)}

				<Link href={`tel:${PHONE_NUMBER}`} target={"_blank"}>
					<Button
						bg="none"
						mt={6}
						w={{ md: 295, base: "100%" }}
						h="56px"
						color="black"
						border="solid 1px black"
						p={7}
						borderRadius={40}>
						<Text>
							<FaPhoneAlt />
						</Text>
						<Text fontSize={18} fontWeight={400}>
							Связаться с менеджером
						</Text>
					</Button>
				</Link>
			</Flex>
		</Box>
	);
};

export default TextDetail;
