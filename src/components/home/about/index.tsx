import Description from "@/components/ui/Description";
import Title from "@/components/ui/texts/Title";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const About = () => {
	return (
		<Flex
			py={20}
			w="100%"
			justifyContent="center"
			alignItems="center"
			position="relative"
			bg="#ECF0F4"
			h="100%">
			<Box position="absolute" top="0" bottom="0" left="0" right="0" zIndex="0">
				<Box
					position="absolute"
					top="0"
					bottom="0"
					left="25%"
					width="100px"
					bg="linear-gradient(135deg, transparent, rgb(255, 255, 255) 50%, transparent)"
					filter="blur(20px)"
					transform="skewX(-40deg)"
				/>
				<Box
					position="absolute"
					top="0"
					bottom="0"
					right="45%"
					width="100px"
					bg="linear-gradient(-135deg, transparent, rgb(255, 255, 255) 60%, transparent)"
					filter="blur(20px)"
					transform="skewX(-40deg)"
				/>
			</Box>
			<Flex
				flexDir="column"
				justifyContent="center"
				alignItems="center"
				overflow="hidden"
				h="250px"
				zIndex={10}
				w={{ md: 750, base: "98%" }}
				textAlign="center">
				<Title fontWeight={500} fontSize={{ md: 68, base: 32 }}>
					О компании
				</Title>
				<Description
					mt={{ md: 12, base: 4 }}
					fontSize={{ md: 36, base: 24 }}
					lineHeight={{ md: "38px", base: "27px" }}>
					&quot;МеталлоМир&quot; — надежный поставщик металлопроката и
					металлопродукции в Кыргызстане.
				</Description>
			</Flex>
		</Flex>
	);
};

export default About;
