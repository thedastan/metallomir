import Description from "@/components/ui/Description";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const AboutCompany = () => {
	return (
		<Flex
			py={{ md: 40, base: 16 }}
			position="relative"
			bg="#ECF0F4"
			w="100%"
			h="100%"
			justifyContent="center"
			alignItems="center">
			<Box position="absolute" top="0" bottom="0" left="0" right="0" zIndex="0">
				<Box
					position="absolute"
					top="0"
					bottom="0"
					left={{ md: "25%", base: "-65%" }}
					width="100px"
					bg={{
						md: "linear-gradient(135deg, transparent, rgb(255, 255, 255) 50%, transparent)",
						base: "linear-gradient(135deg, transparent, rgb(255, 255, 255) 10%, transparent)",
					}}
					filter="blur(20px)"
					transform="skewX(-40deg)"
				/>
				<Box
					position="absolute"
					top="0"
					bottom="0"
					right={{ md: "35%", base: "65%" }}
					width="100px"
					bg={{
						md: "linear-gradient(135deg, transparent, rgb(255, 255, 255) 60%, transparent)",
						base: "linear-gradient(135deg, transparent, rgb(255, 255, 255) 10%, transparent)",
					}}
					filter="blur(20px)"
					transform="skewX(-40deg)"
				/>
			</Box>
			<Flex
				flexDir="column"
				zIndex={10}
				justifyContent="center"
				alignItems="center"
				w={{ md: 750, base: "98%" }}
				textAlign="center">
				<Description
					fontSize={{ md: 36, base: 22 }}
					lineHeight={{ md: "38px", base: "27px" }}>
					Наша компания — это не только качественная продукция, но и
					профессионалы, которые стоят за каждым заказом.
				</Description>
			</Flex>
		</Flex>
	);
};

export default AboutCompany;
