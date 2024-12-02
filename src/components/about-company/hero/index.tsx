"use client";
import { Box, Flex } from "@chakra-ui/react"; // Правильный импорт
import img from "@/assets/images/bgabout.png";
import Description from "@/components/ui/Description";
import Title from "@/components/ui/texts/Title";
import { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/constants/seo/seo.constants";

import { useForm } from 'react-hook-form';

export const metadata: Metadata = {
	title: "О компании",
	...NO_INDEX_PAGE,
};

const Hero = () => {

	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

	return (
		<Box bg="red" py={20}>
		 

<form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register('firstName')} />
      <input {...register('lastName', { required: true })} />
      
			<button type="submit">click</button>
    </form>
		</Box>
	);
};

export default Hero;

	{/* <Box className="container2">
				<Flex
					borderRadius={24}
					p={{ md: 20, base: "70px 20px" }}
					flexDir="column"
					justifyContent="center"
					alignItems="center"
					w="100%"
					h="680px"
					bgImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${img.src})`}
					bgSize="cover"
					gap={36}>
					<Flex flexDir="column" gap={8} textAlign="center" color="white">
						<Title
							color="white"
							fontFamily="Gilroy"
							fontWeight={500}
							fontSize={{ md: 68, base: 50 }}
							lineHeight={{ md: "84px", base: "32px" }}>
							МеталлоМир
						</Title>
						<Description color="white" fontSize={{ md: 36, base: 18 }}>
							Создаем решения для ваших проектов
						</Description>
					</Flex>
				</Flex>
			</Box> */}
 
 