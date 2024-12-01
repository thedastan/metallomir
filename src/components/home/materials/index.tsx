"use client";
import Description from "@/components/ui/Description";
import Title from "@/components/ui/texts/Title";
import { useGetCatalogQuery } from "@/redux/api/catalog";
import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import img from "@/assets/images/cardbox.png";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const Materials = () => {
	const { data } = useGetCatalogQuery();

	const router = useRouter();
	return (
		<Box py={20} p={{ md: " 60px 0", base: 4 }}>
			<Box className="container">
				<Box>
					<Flex justifyContent="space-between" alignItems="end">
						<Box data-aos="fade-right" w={{ md: "410px", base: "100%" }}>
							<Title
								fontWeight={400}
								fontSize={{ md: 36, base: 26 }}
								lineHeight={{ md: "38px", base: "26px" }}>
								Надежное качество <br />и сертифицированные материалы
							</Title>
							<Description
								fontSize={{ md: 18, base: 18 }}
								lineHeight="24px"
								mt={{ md: 0, base: 4 }}>
								Оперативная обработка заказов и логистика.
							</Description>
						</Box>
						<Box display={{ md: "flex", base: "none" }}>
							<Link href={"/catalog"}>
								<Button
									bg="white"
									border="solid 1px black"
									fontSize="14px"
									w={160}
									h="54px"
									borderRadius={50}
									color="black">
									Все продукции
								</Button>
							</Link>
						</Box>
					</Flex>

					<Flex
						flexDir={{ md: "row", base: "column" }}
						gap={{ md: 0, base: 8 }}
						mt={10}
						justifyContent="space-between">
						{data?.slice(0, 4).map((el, index) => (
							<Box
								key={index}
								cursor="pointer"
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
										position="relative"
										borderRadius={20}
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

					<Box display={{ md: "none", base: "flex" }}>
						<Button
							mt={8}
							bg="white"
							border="solid 1px black"
							fontSize="14px"
							w="100%"
							h="50px"
							borderRadius={50}
							color="black">
							Все продукции
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Materials;
