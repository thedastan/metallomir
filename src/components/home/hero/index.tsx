import Description from "@/components/ui/Description";
import Title from "@/components/ui/texts/Title";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import homeimg from "@/assets/images/hero.png";
import homeimgMob from "@/assets/images/home_mobile.png";

import { GoArrowUpRight } from "react-icons/go";

import { MdMarkEmailUnread } from "react-icons/md";
import Link from "next/link";

import img from "@/assets/images/homefigure.png";

const Hero = () => {
	return (
		<>
			<Box
				py={20}
				p={{ md: "50px 0 0 0", base: "50px 14px 14px 14px" }}
				position="relative"
				bg="#ECF0F4"
				w="100%"
				h="100%">
				<Box
					position="absolute"
					top="0"
					bottom="0"
					left="0"
					right="0"
					zIndex="0">
					<Box
						position="absolute"
						top="0"
						bottom="0"
						left="25%"
						width="100px"
						bg="linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.7) 10%, transparent)"
						filter="blur(20px)"
						transform="skewX(-40deg)"
					/>
					<Box
						position="absolute"
						top="0"
						bottom="0"
						right="45%"
						width="100px"
						bg="linear-gradient(-135deg, transparent, rgba(255, 255, 255, 0.7) 10%, transparent)"
						filter="blur(20px)"
						transform="skewX(-40deg)"
					/>
				</Box>
				<Box py={10} position="relative" zIndex="10" className="container">
					<Flex
						flexDirection={{ md: "row", base: "column" }}
						justifyContent="space-between"
						alignItems={{ md: "center", base: "start" }}
						gap={{ md: 20, base: 6 }}>
						<Flex
							w={{ md: 730, base: "100%" }}
							alignItems="start"
							flexDir="column"
							gap={6}>
							<Title
								data-aos="fade-up"
								data-aos-duration="1000"
								fontFamily="Gilroy"
								fontWeight={500}
								fontSize={{ md: 68, base: 32 }}
								lineHeight={{ md: "84px", base: "32px" }}>
								Металлопродукция от лидеров рынка
							</Title>
							<Description
								data-aos="fade-up"
								data-aos-duration="1300"
								fontSize={{ md: 20, base: 18 }}>
								Широкий ассортимент металлопроката по доступным ценам. Быстрая
								доставка по всему Кыргызстану.
							</Description>

							<Box
								data-aos="fade-up"
								data-aos-duration="1700"
								display={{ md: "flex", base: "none" }}
								p="0 10px "
								flexDirection="column"
								gap={1}
								borderLeft="solid 1px black">
								<Description fontSize={16}>Для строительства</Description>
								<Description fontSize={16}>Производства</Description>
								<Description fontSize={16}>Торговли</Description>
							</Box>

							<Link href={"#contact"}>
								<Button
									data-aos="fade-up"
									data-aos-duration="2000"
									display={{ md: "flex", base: "none" }}
									w={220}
									h="56px"
									borderRadius={50}
									color="black"
									p={4}
									border="solid 1px black"
									bg="none">
									<Text>
										<MdMarkEmailUnread />
									</Text>
									<Text>Оставить заявку</Text>
								</Button>
							</Link>
						</Flex>

						<Box w="100%" data-aos="fade-up" position="relative">
							<Box
								data-aos-duration="1200"
								display={{ md: "flex", base: "none" }}>
								<Box
									position="relative"
									w="580px"
									h="580px"
									borderRadius={20}
									overflow="hidden">
									<video
										autoPlay
										loop
										muted
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "100%",
											objectFit: "cover",
											zIndex: -1,
										}}>
										<source src="/metal.mp4" type="video/mp4" />
									</video>
								</Box>
							</Box>

							<Box
								data-aos="zoom-in"
								data-aos-duration="1700"
								w="100%"
								display={{ md: "none", base: "flex" }}>
								<Box
									position="relative"
									w="100%"
									h="300px"
									borderRadius={20}
									overflow="hidden">
									<video
										autoPlay
										loop
										muted
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "100%",
											objectFit: "cover",
											zIndex: -1,
										}}>
										<source src="/metal.mp4" type="video/mp4" />
									</video>
								</Box>
							</Box>

							<Flex
								position="absolute"
								// p={6}
								borderRadius="10px"
								gap={{ md: 2, base: 1 }}
								mt={{ md: "-120px", base: "-87px" }}
								ml="-28px">
							 
								<Box p="0"   position="absolute" w={{ md:400, base: 360 }} h={{ md:"140px", base: "100px" }}>
									<Image
										style={{ width: "100%", height: "100%" }}
										src={img}
										alt="img"
									/>
								</Box>
								 <Flex ml={{ md:14, base: 10 }} gap={2} mt={{ md:14, base: 10 }}   position="absolute">
								 <Link href={"/catalog"}>
									<Button
										// position="absolute"
										fontSize="14px"
										w={{ md: 210, base: 190 }}
										h={{ md: "54px", base: "46px" }}
										borderRadius={50}
										color="white">
										Каталог продукций
									</Button>
								</Link>
								<Link href={"/catalog"}>
									<Button
										// position="absolute"
										w={{ md: "54px", base: "46px" }}
										h={{ md: "54px", base: "46px" }}
										borderRadius={50}
										color="white">
										<GoArrowUpRight />
									</Button>
								</Link>
								 </Flex>
							</Flex>
						</Box>

						<Box
							display={{ md: "none", base: "flex" }}
							data-aos="fade-up"
							data-aos-duration="1700"
							alignItems="start"
							justifyContent="start"
							p="0 10px "
							flexDirection="column"
							gap={1}
							borderLeft="solid 1px black">
							<Description fontSize={16}>Для строительства</Description>
							<Description fontSize={16}>Производства</Description>
							<Description fontSize={16}>Торговли</Description>
						</Box>
					</Flex>
				</Box>
			</Box>

			{/* <Box className="asims">
			  <div className="box">
				<div className="asim1"></div>
			  <div className="asim2"></div>
			  <div className="asim3"></div>
				</div>
			  <div className="asimbox"></div>
			  <div className="asimbox2"></div>
			  <div className="asimbox3"></div>



			</Box> */}
		</>
	);
};

export default Hero;
