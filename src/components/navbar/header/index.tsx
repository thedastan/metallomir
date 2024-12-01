import {
	Box,
	DrawerActionTrigger,
	DrawerBackdrop,
	DrawerBody,
	DrawerCloseTrigger,
	DrawerContent,
	DrawerRoot,
	DrawerTrigger,
	Flex,
	Text,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { PHONE_NUMBER } from "@/constants/admin";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import { BiLogoTelegram } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import {
	FACEBOOK_LINK,
	INSTAGRAM_LINK,
	TELEGRAM_LINK,
	TIKTOK_LINK,
	YOUTUBE_LINK,
} from "@/constants/admin";
import { usePathname } from "next/navigation";

const Header = () => {
	const pathname = usePathname()
	const nav = [
		{
			name: "Главная",
			path: "/",
		},
		{
			name: "о компании",
			path: "/about-company",
		},
		{
			name: "продукции",
			path: "/catalog",
		},
		{
			name: "контакты",
			path: "#contact",
		},
	];

	const links = [
		{
			path: TELEGRAM_LINK,
			icon: <BiLogoTelegram />,
		},
		{
			path: INSTAGRAM_LINK,
			icon: <AiFillInstagram />,
		},
		{
			path: TIKTOK_LINK,
			icon: <FaTiktok />,
		},
		{
			path: YOUTUBE_LINK,
			icon: <FaYoutube />,
		},
		{
			path: FACEBOOK_LINK,
			icon: <FaFacebookF />,
		},
	];
	return (
		<Box p={2}>
			<Box className="container">
				<Flex alignItems="center" justifyContent="space-between">
					{/* ///img/// */}
					<Box>
						<Link href={"/"}>
							<Image width={66} height={36} src={logo} alt="logo" />
						</Link>
					</Box>

					<Flex gap={40}>
						<Box display={{ md: "flex", base: "none" }} gap={6}>
							{nav.map((el, index) => (
								<Link key={index} href={el.path}>
									<Text style={{
									  borderBottom:
										 	pathname === el.path ? 'solid 1px black' : 'none',
										padding: '2px'
									}}>{el.name}</Text>
								</Link>
							))}
						</Box>

						<Box display={{ md: "flex", base: "none" }}>
							<Link href={`tel:${PHONE_NUMBER}`} target={"_blank"}>
								<Text>{PHONE_NUMBER}</Text>
							</Link>
						</Box>

						<Box display={{ md: "none", base: "flex" }}>
							<DrawerRoot>
								<DrawerBackdrop />
								<DrawerTrigger p="0" asChild>
									<Text border="none" p="0" fontSize={30}>
										<RxHamburgerMenu />
									</Text>
								</DrawerTrigger>

								<DrawerContent top={0} right={0} position="absolute">
									<Box display="flex" justifyContent="end" w="100%">
										<DrawerActionTrigger p={4} asChild>
											<Text fontSize={30}>
												<IoMdClose />
											</Text>
										</DrawerActionTrigger>
									</Box>
									<DrawerBody p={0}>
										<DrawerActionTrigger asChild>
											<Flex justifyContent="center" w="100%">
												<Link href={"/"}>
													<Image width={66} height={36} src={logo} alt="logo" />
												</Link>
											</Flex>
										</DrawerActionTrigger>

										<DrawerActionTrigger asChild>
											<Flex
												mt={10}
												alignItems="center"
												flexDir="column"
												gap={4}>
												{nav.map((el, index) => (
													<Link key={index} href={el.path}>
														<Text fontSize={18}>{el.name}</Text>
													</Link>
												))}
											</Flex>
										</DrawerActionTrigger>

										<DrawerActionTrigger asChild>
											<Flex
												mt={4}
												p="20px 0"
												w="100%"
												justifyContent="center"
												gap={4}>
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
										</DrawerActionTrigger>
									</DrawerBody>
									<DrawerCloseTrigger />
								</DrawerContent>
							</DrawerRoot>
						</Box>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
};

export default Header;
