"use client";
import { PHONE_NUMBER } from "@/constants/admin";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const TextDetail = () => {




	return (
		<Box fontFamily="Gilroy">
			<Box>
				{/* {data && (
					<Box>
						<Text>{data.title}</Text>
					</Box>
				)} */}

				<Box>
					<Box w={{ md: 500, base: "100%" }}>
						<Text mt={2} py={4} fontSize={16} fontWeight={600}>
							Технические характеристики:
						</Text>
						<Flex py={2} justifyContent="space-between">
							<Text fontSize={18} fontWeight={400}>
								Диаметр:
							</Text>
							<Text
								p="0 10px"
								bg="white"
								borderRadius={50}
								fontSize={16}
								fontWeight={600}>
								12
							</Text>
						</Flex>

						<Box w="100%" h="1px" bg="#E2E2E2" />

						<Flex mt={2} py={2} justifyContent="space-between">
							<Text fontSize={18} fontWeight={400}>
								Длина:
							</Text>
							<Text
								p="0 10px"
								bg="white"
								borderRadius={50}
								fontSize={16}
								fontWeight={600}>
								6 м / 12 м
							</Text>
						</Flex>

						<Box w="100%" h="1px" bg="#E2E2E2" />

						<Flex mt={2} py={2} justifyContent="space-between">
							<Text fontSize={18} fontWeight={400}>
								Материал:
							</Text>
							<Text
								p="0 10px"
								bg="white"
								borderRadius={50}
								fontSize={16}
								fontWeight={600}>
								Сталь класса A500C
							</Text>
						</Flex>

						<Box w="100%" h="1px" bg="#E2E2E2" />

						<Flex mt={2} py={2} justifyContent="space-between">
							<Text fontSize={18} fontWeight={400}>
								Вес одной единицы:
							</Text>
							<Text
								p="0 10px"
								bg="white"
								borderRadius={50}
								fontSize={16}
								fontWeight={600}>
								0.89 кг/м
							</Text>
						</Flex>

						<Box w="100%" h="1px" bg="#E2E2E2" />

						<Flex mt={2} py={2} justifyContent="space-between">
							<Text fontSize={18} fontWeight={400}>
								ГОСТ:
							</Text>
							<Text
								p="0 10px"
								bg="white"
								borderRadius={50}
								fontSize={16}
								fontWeight={600}>
								5781-82
							</Text>
						</Flex>

						<Box w="100%" h="1px" bg="#E2E2E2" />

						<Flex mt={2} py={2} justifyContent="space-between">
							<Text fontSize={18} fontWeight={400}>
								Страна производства:
							</Text>
							<Text
								p="0 10px"
								bg="white"
								borderRadius={50}
								fontSize={16}
								fontWeight={600}>
								Россия
							</Text>
						</Flex>
					</Box>
				</Box>
				<Link href={`tel:${PHONE_NUMBER}`} target={"_blank"}>
								 
							 
				<Button
					bg="none"
					mt={6}
					w={{ md:295, base: "100%" }}
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
			</Box>
		</Box>
	);
};

export default TextDetail;
