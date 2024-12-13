import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import img from "@/assets/images/METALLOMIR.png";
import Title from "@/components/ui/texts/Title";
import Description from "@/components/ui/Description";

import instagram from "@/assets/images/Instagram.svg";
import telegram from "@/assets/images/telegram.png";
import whatsapp from "@/assets/images/whatsapp.png";

import { MdMarkEmailUnread } from "react-icons/md";

import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import {
	EMAIL_ADDRESS,
	EMAIL_ADDRESS_LINK,
	INSTAGRAM_LINK,
	LOCATION,
	LOCATION_LINK,
	PHONE_NUMBER,
	PHONE_NUMBER_WHATSAPP,
	TELEGRAM_LINK,
	WHATSAPP_LINK,
} from "@/constants/admin";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

const Logo = () => {
	const data = [
		{
			icon: instagram,
			title: "Instagram",
			linktext: "@metallo_mir",
			link: INSTAGRAM_LINK,
		},
		{
			icon: telegram,
			title: "Telegram",
			linktext: "@metallomir",
			link: TELEGRAM_LINK,
		},
		{
			icon: whatsapp,
			title: "WhatsApp",
			linktext: "+996701007005",
			link: WHATSAPP_LINK,
		},
	];
	return (
		<Box  p={{ md: "40px 0", base: "40px 12px" }}>
			<Box className="container">
				<Flex gap={4} flexDir={{ md: "row", base: "column" }}>
					{data.map((el, index) => (
						<Link key={index} href={el.link}>
							<Flex data-aos="fade-up"
								flexDir={{ md: "column", base: "row" }}
								alignItems={{ md: "start", base: "center" }}
								className="footer_contact"
								w={{ md: 264, base: "100%" }}
								gap={{ md: 0, base: 4 }}
								h={{ md: "149px", base: "120px" }}
								borderRadius={20}
								p={4}
								bg="#0000000A">
								<Box p={1} w={{ md: "44px", base: "55px" }} h={{ md: "44px", base: "55px" }} borderRadius={50}>
									<Image
										style={{
											width: "100%",
											height: "100%",
											// objectFit: "cover",
										}}
										src={el.icon}
										alt="img"
									/>
								</Box>

								 <Box>
								 <Text
									className="footer_contact_text"
									mt={2}
									fontWeight={600}
									fontSize={24}>
									{el.title}
								</Text>
								<Text
									className="footer_contact_text"
									fontWeight={400}
									fontSize={14}>
									{el.linktext}
								</Text>
								 </Box>
							</Flex>
						</Link>
					))}

					<Flex
					data-aos="fade-up"
						flexDir="column"
						justifyContent="center"
						alignItems="start"
						gap={3}
						w="100%"
						h={{ md: "149px", base: "180px" }}
						borderRadius={20}
						p={4}
						bg="#0000000A"
						className="footer_contact2">
						<Link href={`tel:${PHONE_NUMBER}`} target={"_blank"}>
							<Flex className="footer_contact_text" gap={2}>
								<Text fontWeight={600} fontSize={24}>
									<FaPhoneAlt />
								</Text>
								<Text fontWeight={300} fontSize={14}>
									{PHONE_NUMBER_WHATSAPP}
								</Text>
							</Flex>
						</Link>

						<Link href={LOCATION_LINK} target={"_blank"}>
							<Flex className="footer_contact_text2" gap={2}>
								<Text fontWeight={600} fontSize={24}>
									<FaLocationDot />
								</Text>
								<Text fontWeight={300} fontSize={14}>
									{LOCATION}
								</Text>
							</Flex>
						</Link>

						<Link href={EMAIL_ADDRESS_LINK} target={"_blank"}>
							<Flex className="footer_contact_text3" gap={2}>
								<Text fontWeight={600} fontSize={24}>
									<MdMarkEmailUnread />
								</Text>
								<Text fontWeight={300} fontSize={14}>
									{EMAIL_ADDRESS}
								</Text>
							</Flex>
						</Link>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
};

export default Logo;
