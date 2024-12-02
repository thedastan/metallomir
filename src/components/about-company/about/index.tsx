import Description from "@/components/ui/Description";
import {   Flex } from "@chakra-ui/react";
import React from "react";

const AboutCompany = () => {
	return (
		<Flex py={40} w="100%" justifyContent="center" alignItems="center">
			<Flex
				flexDir="column"
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
