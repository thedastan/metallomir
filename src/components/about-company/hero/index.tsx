"use client";
import Description from "@/components/ui/Description";
import Title from "@/components/ui/texts/Title";
import { Box, Flex } from "@chakra-ui/react";

const Hero = () => {
	return (
		 <Box p={{ md: "70px 0 0 0", base: "50px  0 0 0" }}>
			<Box className="container2">
			<Box w="100%" h={{ md: 650, base: 300 }} borderRadius={{ md: "30px", base: "0px" }} overflow="hidden" position="relative">
				{/* Видео на заднем плане */}
				<video
					autoPlay
					loop
					muted
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						objectFit: "cover",
						// borderRadius: "30px",
						zIndex: -1,  
					}}>
					<source src="/metal.mp4" type="video/mp4" />
				</video>

				{/* Градиентный фон */}
				<Box
					position="absolute"
					top="0"
					left="0"
					width="100%"
					height="100%"
					borderRadius={{ md: "30px", base: "0px" }}
					bgGradient="linear(to-b, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))"
					zIndex={-1} // Градиент перекрывает видео
					bg="#00000065"
				/>

				{/* Контент */}
				<Flex
					color="white"
					zIndex={10} // Текст перекрывает градиент
					textAlign="center"
					justifyContent="center"
					w="100%"
					h="100%">
					<Flex
						w={{ md: "100%", base: "88%" }}
						h="100%"
						flexDir="column"
						gap={8}
						textAlign="center"
						justifyContent="center"
						color="white">
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
			</Box>

		 
		</Box>
		 </Box>
	);
};

export default Hero;
