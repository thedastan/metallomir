"use client";
import Title from "@/components/ui/texts/Title";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import img from "@/assets/images/cardbox.png";

import { GoArrowUpRight } from "react-icons/go";
import { useGetCatalogQuery } from "@/redux/api/catalog";
import { useRouter } from "next/navigation";

const CardLook = () => {
	const { data } = useGetCatalogQuery();
	const router = useRouter();

	return (
		<Box py={8}>
			<Box display={{ md: "none", base: "block" }}>
				<Flex flexDir="column">
					<Flex
						// p={{ md: 0, base: 4 }}
						flexWrap="wrap"
						// flexDir={{ md: "row", base: "row" }}
						gap={{ md: 0, base: 3 }}
						justifyContent="center">
						{data?.map((el, index) => (
							<Box
								key={index}
								py={2}
								cursor="pointer"
								w={{ md: 306, base: "170px" }}
								h="100%"
								onClick={() => router.push(`/${el.id}`)}>
								<Flex
									flexDir="column"
									justifyContent="end"
									alignItems="end"
									w={{ md: 306, base: "100%" }}
									h={{ md: "255px", base: "175px" }}
									key={index}>
									<Box
										w={{ md: 300, base: "100%" }}
										h={350}
										borderRadius={10}
										position="relative"
										overflow="hidden">
										<Image
											src={el.image}
											alt="img"
											 
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
											layout="fill" 
											 objectFit="cover"
										/>
									</Box>
									<Text
										bg="black"
										display="flex"
										justifyContent="center"
										alignItems="center"
										position="absolute"
										w={{ md: "58px", base: "30px" }}
										h={{ md: "58px", base: "30px" }}
										zIndex={1}
										borderRadius={50}
										color="white">
										<GoArrowUpRight />
									</Text>

									<Box p="0px" position="absolute" w="56px" h="56px">
										<Image
											src={img}
											alt="img"
											 
											style={{
												width: "100%",
												height: "100%",
												marginLeft: "4px",
												marginTop: "4px",
											}}
										/>
									</Box>
								</Flex>

								<Title mt={2} fontWeight={400} fontSize={16}>
									{el.title}
								</Title>
							</Box>
						))}
					</Flex>
				</Flex>
			</Box>

			<Flex
				display={{ md: "flex", base: "none" }}
				flexDir={{ md: "row", base: "column" }}
				flexWrap="wrap"
				gap={{ md: 0, base: 8 }}
				mt={10}
				justifyContent="space-between">
				{data?.map((el, index) => (
					<Box
						key={index}
						cursor="pointer"
						pb={6}
						onClick={() => router.push(`/${el.id}`)}>
						<Flex
							flexDir="column"
							justifyContent="end"
							alignItems="end"
							w={{ md: 306, base: "100%" }}
							h="355px"
							key={index}>
							{/* <Image style={{width:"100%", height:"100%"}} src={el.image} alt="img" /> */}
							<Box
								w={{ md: 300, base: "100%" }}
								h={350}
								borderRadius={20}
								position="relative"
								overflow="hidden">
								<Image
									src={el.image}
									alt="img"
									 
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
									}} 
									layout="fill" 
											 objectFit="cover"
								/>
							</Box>
							<Button
								position="absolute"
								w="54px"
								h="54px"
								zIndex={1}
								borderRadius={50}
								color="white">
								<GoArrowUpRight />
							</Button>

							<Box p="0px" position="absolute" w={100} h={100}>
								<Image
									src={img}
									alt="img"
									style={{
										width: "100%",
										height: "100px",
										marginLeft: "4px",
										marginTop: "4px",
									}}
								/>
							</Box>
						</Flex>

						<Title mt={4} fontWeight={400} fontSize={22}>
							{el.title}
						</Title>
					</Box>
				))}
			</Flex>
		</Box>
	);
};

export default CardLook;
