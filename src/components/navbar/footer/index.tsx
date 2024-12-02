import {
	EMAIL_ADDRESS_LINK,
	INSTAGRAM_LINK,
	MOTION_WEB_LINK,
	TELEGRAM_LINK,
	WHATSAPP_LINK,
	YOUTUBE_LINK,
} from "@/constants/admin";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

import { BiLogoTelegram } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
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
			path: YOUTUBE_LINK,
			icon: <FaYoutube />,
		},
	];
	return (
		<Box bg="#000000" p={{ md: 4, base: "40px 0" }} fontFamily="Gilroy">
			<Link href={WHATSAPP_LINK} target="_blank">
				<Text
					zIndex={10}
					boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
					position="fixed"
					bottom={{ lg: "60px", base: "5px" }}
					right={{ lg: "65px", base: "5px" }}
					bg="white"
					borderRadius="50%"
					color="#1FBF35"
					fontSize="40px"
					p={4}
					animation="pulse 1.5s infinite"
					_before={{
						content: `""`,
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "100%",
						height: "100%",
						borderRadius: "50%",
						bg: "rgba(31, 191, 53, 0.3)",
						zIndex: -1,
						animation: "pulse-scale 1.5s infinite",
					}}>
					<RiWhatsappFill />
				</Text>
			</Link>

			{/* Global Styles for Animations */}
			<style jsx global>{`
				@keyframes pulse-scale {
					0% {
						transform: translate(-50%, -50%) scale(1);
						opacity: 0.8;
					}
					100% {
						transform: translate(-50%, -50%) scale(1.5);
						opacity: 0;
					}
				}
				@keyframes pulse {
					0% {
						transform: scale(1);
					}
					50% {
						transform: scale(1.1);
					}
					100% {
						transform: scale(1);
					}
				}
			`}</style>

			<Box className="container">
				<Flex
					flexDirection={{ md: "row", base: "column" }}
					alignItems="center"
					justifyContent="space-between">
					<Flex flexDirection={{ md: "row", base: "column" }}  gap={4} alignItems="center">
						 <Flex gap={4}>
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
						<Link href={EMAIL_ADDRESS_LINK}>
							<Text color="grey">info@metallomir.kg</Text>
						</Link>
					</Flex>
					<Flex
						mt={{ md: 0, base: 6 }}
						alignItems="center"
						flexDirection={{ md: "row", base: "column" }}
						gap={{ md: 20, base: 4 }}>
						<Text fontSize={14} fontWeight={400} color="grey">
							© 2024 «MetalloMir». Все права защищены
						</Text>
						<Link href={MOTION_WEB_LINK} target={"_blank"}>
							<Text fontSize={14} fontWeight={400} color="grey">
								Разработал Motion Web LLC
							</Text>
						</Link>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
};

export default Footer;
