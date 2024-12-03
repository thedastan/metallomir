import Description from "@/components/ui/Description";
import Title from "@/components/ui/texts/Title";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import homeimg from "@/assets/images/hero.png";
import homeimgMob from "@/assets/images/home_mobile.png";

import { GoArrowUpRight } from "react-icons/go";

import { MdMarkEmailUnread } from "react-icons/md";
import Link from "next/link";
import { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/constants/seo/seo.constants";
import Head from "next/head";

export const metadata: Metadata = {
	title: "Металлопрокат в Бишкеке - Арматура, Трубы, Листы и Другое",
	...NO_INDEX_PAGE,
};

const Hero = () => {
	return (
		<>
		
			<Head>
				<meta
					name="title"
					content="Металлопрокат в Бишкеке - Арматура, Трубы, Листы и Другое"
				/>
				<meta
					name="description"
					content="Металлопрокат в Бишкеке. Широкий ассортимент: арматура, оцинкованные листы, круглые и прямоугольные трубы, уголки, швеллер, катанка. Доставка по городу. Звоните!"
				/>
				<meta
					name="keywords"
					content="Металлопрокат, Бишкек, арматура, оцинкованные листы, трубы круглые, трубы прямоугольные, уголки, швеллер, катанка, доставка металлопроката Бишкек, купить металл Бишкек"
				/>
				<meta name="robots" content="index, follow" />
				<title>Металлопрокат в Бишкеке - Арматура, Трубы, Листы и Другое</title>
				<link rel="canonical" href="https://metallomir.kg/"/> 
				<meta name="author" content="ОсОО Металломир"/>
			</Head>




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
					{/* First Line */}
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
					{/* Second Line */}
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

						<Box data-aos="fade-up" position="relative">
							<Box
								data-aos-duration="1200"
								display={{ md: "flex", base: "none" }}>
								<Image width={700} height={710} src={homeimg} alt="homeimg" />
							</Box>

							<Box
								data-aos="zoom-in"
								data-aos-duration="1700"
								display={{ md: "none", base: "flex" }}>
								<Image
									width={700}
									height={710}
									src={homeimgMob}
									alt="homeimg"
								/>
							</Box>

							<Flex
								position="absolute"
								gap={{ md: 2, base: 1 }}
								mt={{ md: -14, base: -10 }}>
								<Link href={"/catalog"}>
									<Button
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
										w={{ md: "54px", base: "46px" }}
										h={{ md: "54px", base: "46px" }}
										borderRadius={50}
										color="white">
										<GoArrowUpRight />
									</Button>
								</Link>
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
		</>
	);
};

export default Hero;
