import Description from "@/components/ui/Description";
import Title from "@/components/ui/texts/Title";
import { Box, Button, Flex } from "@chakra-ui/react";
import gar1 from "@/assets/images/gar1.png";
import gar2 from "@/assets/images/gar2.png";
import gar3 from "@/assets/images/gar3.png";
import gar4 from "@/assets/images/gar4.png";

import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

const Guarantee = () => {
	return (
		<Box 	bg="#ECF0F4" fontFamily="Gilroy" pb={20} >
			<Box className="container2">
				<Box
					data-aos="fade-up"
					bg="#313131"
					p={{ md: 10, base: 4 }}
					py={10}
					borderRadius={20}>
					<Box className="container">
						<Description
							data-aos="fade-up"
							textAlign="start"
							fontSize={18}
							color="#b8b8b8">
							Логистическая поддержка
						</Description>
						<Flex justifyContent="space-between" alignItems="end">
							<Title
								data-aos="fade-up"
								color="white"
								textAlign="start"
								fontWeight={500}
								fontSize={{ md: 68, base: 28 }}
								lineHeight={{ md: "80px", base: "38px" }}
								mt={4}>
								Мы гарантируем, что ваш <br /> заказ будет доставлен вовремя
							</Title>
							<Link href={"/about-company"}>
								<Button
									display={{ md: "flex", base: "none" }}
									w="54px"
									h="54px"
									bg="white"
									fontSize={28}
									borderRadius={50}
									color="black">
									<GoArrowUpRight />
								</Button>
							</Link>
						</Flex>
						<Flex
							flexDir={{ md: "row", base: "column" }}
							gap={4}
							mt={10}
							justifyContent="space-between">
							<Box
								borderRadius={20}
								w={{ md: 850, base: "100%" }}
								h={{ md: 345, base: 321 }}
								overflow="hidden">
								<Image
									data-aos="fade-up"
									style={{ width: "100%", height: "100%", objectFit: "cover" }}
									src={gar1}
									alt="img"
								/>
							</Box>
							<Flex gap={4}>
								<Box borderRadius={20} w={198} h={345} overflow="hidden">
									<Image
										data-aos="fade-up"
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
										src={gar2}
										alt="img"
									/>
								</Box>
								<Flex gap={4} flexDir="column">
									<Box
										borderRadius={20}
										w={{ md: 194, base: 170 }}
										h={164}
										overflow="hidden">
										<Image
											data-aos="fade-up"
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
											src={gar3}
											alt="img"
										/>
									</Box>
									<Box
										borderRadius={20}
										w={{ md: 194, base: 170 }}
										h={164}
										overflow="hidden">
										<Image
											data-aos="fade-up"
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
											src={gar4}
											alt="img"
										/>
									</Box>
								</Flex>
							</Flex>
							<Box display={{ md: "none", base: "flex" }} w="100%" gap={2}>
								<Button
									display={{ md: "none", base: "flex" }}
									w="80%"
									h="54px"
									bg="white"
									fontSize={18}
									borderRadius={50}
									color="black">
									О компании
								</Button>
								<Button
									display={{ md: "none", base: "flex" }}
									w="54px"
									h="54px"
									bg="white"
									fontSize={28}
									borderRadius={50}
									color="black">
									<GoArrowUpRight />
								</Button>
							</Box>
						</Flex>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Guarantee;
