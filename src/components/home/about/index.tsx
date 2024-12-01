import Description from "@/components/ui/Description";
import Title from "@/components/ui/texts/Title";
import {  Flex } from "@chakra-ui/react";
import React from "react";

const About = () => {
	return (
		<Flex py={20} w="100%" justifyContent="center" alignItems="center">
			<Flex
				flexDir="column"
				justifyContent="center"
				alignItems="center"
				overflow="hidden"
				h="250px"
				w={{ md: 750, base: "98%" }}
				textAlign="center">
				<Title
					data-aos="fade-right"
					fontWeight={500}
					fontSize={{ md: 68, base: 32 }}>
					О компании
				</Title>
				<Description
					data-aos="fade-right"
					mt={{ md: 12, base: 4 }}
					fontSize={{ md: 36, base: 24 }}
					lineHeight={{ md: "38px", base: "27px" }}>
					`&quot;`МеталлоМир `&quot;` — надежный поставщик металлопроката и металлопродукции в
					Кыргызстане.
				</Description>
			</Flex>
		</Flex>
	);
};

export default About;
