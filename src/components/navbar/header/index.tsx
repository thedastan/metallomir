"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { PHONE_NUMBER } from "@/constants/admin";
import { BiLogoTelegram } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { INSTAGRAM_LINK, TELEGRAM_LINK, YOUTUBE_LINK } from "@/constants/admin";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from "./burger.module.scss"; // Импортируем стили

const Header = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const nav = [
		{ name: "Главная", path: "/" },
		{ name: "о компании", path: "/about-company" },
		{ name: "продукции", path: "/catalog" },
		{ name: "контакты", path: "#contact" },
	];

	const links = [
		{ path: TELEGRAM_LINK, icon: <BiLogoTelegram /> },
		{ path: INSTAGRAM_LINK, icon: <AiFillInstagram /> },
		{ path: YOUTUBE_LINK, icon: <FaYoutube /> },
	];

	return (
		<Box
			w="100%"
			bg="white"
			// position="fixed"
			zIndex={1000}
			p={2}
			fontFamily="Gilroy">
			<Box className="container">
				<Flex alignItems="center" justifyContent="space-between">
					<Box>
						<Link href={"/"}>
							<Image width={66} height={36} src={logo} alt="logo" />
						</Link>
					</Box>

					<Flex gap={40}>
						{/* Desktop Navigation */}
						<Box display={{ md: "flex", base: "none" }} gap={6}>
							{nav.map((el, index) => (
								<Link key={index} href={el.path}>
									<Text
										fontFamily="Gilroy"
										textTransform="uppercase"
										fontSize={16}
										style={{
											borderBottom:
												pathname === el.path ? "solid 1px black" : "none",
											padding: "2px",
										}}>
										{el.name}
									</Text>
								</Link>
							))}
						</Box>

						<Box display={{ md: "flex", base: "none" }}>
							<Link href={`tel:${PHONE_NUMBER}`} target={"_blank"}>
								<Text fontSize={20}>{PHONE_NUMBER}</Text>
							</Link>
						</Box>

						{/* Mobile Hamburger Menu */}
						<Box
							position={isMenuOpen ? "fixed" : "absolute"}
							ml={-8}
							mt={-2}
							zIndex={30}
							display={{ md: "none", base: "flex" }}>
							<Box
								className={`${styles.burger} ${isMenuOpen ? styles.open : ""}`}
								onClick={toggleMenu}>
								<span></span>
								<span></span>
								<span></span>
							</Box>
						</Box>
					</Flex>
				</Flex>
			</Box>

			{/* Mobile Menu Drawer */}
			<Box
				position="fixed"
				top={0}
				right={isMenuOpen ? 0 : "-100%"}
				width="100%"
				height="100%"
				bg="white"
				zIndex={20}
				// mt={10}
				p={4}
				transition="right 0.3s ease-in-out">
				<Flex flexDirection="column" textAlign="center" gap={6} mt={8}>
					{nav.map((el, index) => (
						<Link key={index} href={el.path} onClick={toggleMenu}>
							<Text textTransform="uppercase" textAlign="center" fontSize={24}>
								{el.name}
							</Text>
						</Link>
					))}
					<Flex justifyContent="center" gap={4} mt={6}>
						{links.map((el, index) => (
							<Link key={index} href={el.path} target={"_blank"}>
								<Text
									p={2}
									bg="#434343"
									border="solid 2px #FFFFFF1F"
									borderRadius={50}
									fontSize={20}
									color="white">
									{el.icon}
								</Text>
							</Link>
						))}
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
};

export default Header;
