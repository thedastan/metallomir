"use client";
import { useCardData } from "@/components/data";
import Title from "@/components/ui/texts/Title";
import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import img from "@/assets/images/looking.png";
import img_mobile from "@/assets/images/lookingmobile.png";

import { GoArrowUpRight } from "react-icons/go";
import {   useRouter } from "next/navigation";
import Link from "next/link";
import { useGetCatalogQuery } from "@/redux/api/catalog";

const Looking = () => {
	const { data } = useGetCatalogQuery();

	const router = useRouter();
	return (
		<Box py={20}>
			<Box className="container">
				<Flex flexDir="column" gap={{ md: 14, base: 6 }}>
					<Title
						p={{ md: 0, base: 4 }}
					 
						fontWeight={500}
						fontSize={{ md: 68, base: 28 }}>
						Я ищу...
					</Title>

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

					<Box	
						display={{ md: "flex", base: "none" }}
						flexDir="column"
						alignItems="end"
						justifyContent="end">
						<Image
							data-aos="fade-up"
							style={{ width: "100%", height: "367px" }}
							src={img}
							alt="img"
						/>
						<Flex
							data-aos="fade-up"
							justifyContent="end"
							position="absolute"
							gap={2}
							mt={-14}>
							<Link href={"/catalog"}>
								<Button
									fontSize="16px"
									w={260}
									h="58px"
									borderRadius={50}
									color="white">
									Каталог продукций
								</Button>
							</Link>
							<Link href={"/catalog"}>
								<Button w="58px" h="58px" borderRadius={50} color="white">
									<GoArrowUpRight />
								</Button>
							</Link>
						</Flex>
					</Box>

					<Box
						p={{ md: 0, base: 4 }}
						data-aos="fade-left"
						display={{ md: "none", base: "flex" }}
						flexDir="column"
						alignItems="end"
						justifyContent="end">
						<Image
							style={{ width: "100%", height: "250px" }}
							src={img_mobile}
							alt="img"
						/>
						<Flex justifyContent="end" position="absolute" gap={1} mt={-16}>
							<Link href={"/catalog"}>
								<Button
									fontSize="15px"
									w={200}
									h="54px"
									borderRadius={50}
									color="white">
									Каталог продукций
								</Button>
							</Link>
							<Button w="54px" h="54px" borderRadius={50} color="white">
								<GoArrowUpRight />
							</Button>
						</Flex>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default Looking;
