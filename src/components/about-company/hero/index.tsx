"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react"; // Правильный импорт
import img from "@/assets/images/bgabout.png";
import { FaPlay } from "react-icons/fa6";
import Description from "@/components/ui/Description";
import Title from "@/components/ui/texts/Title";
import { useState } from "react";
import { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/constants/seo/seo.constants";

export const metadata: Metadata = {
	title: "О компании",
	...NO_INDEX_PAGE,
};

const Hero = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false); // Для плавного открытия

	const handleOpenModal = () => {
		setIsModalOpen(true);
		setTimeout(() => setIsModalVisible(true), 10); // Небольшая задержка для активации анимации
	};

	const handleCloseModal = () => {
		setIsModalVisible(false);
		setTimeout(() => setIsModalOpen(false), 300); // Дождаться завершения анимации перед удалением
	};

	return (
		<Box>
			<Box className="container2">
				<Flex
					borderRadius={24}
					p={{ md: 20, base: "70px 20px" }}
					flexDir="column"
					justifyContent="end"
					alignItems="center"
					w="100%"
					h="680px"
					bgImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${img.src})`}
					bgSize="cover"
					gap={36}>
					<Flex
						flexDir="column"
						gap={{ md: 8, base: 8 }}
						textAlign="center"
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
					<Text
						display="flex"
						justifyContent="center"
						alignItems="center"
						bg="#000000c4"
						color="#FFC947"
						w={100}
						h={100}
						fontSize="40px"
						borderRadius="50%"
						cursor="pointer"
						onClick={handleOpenModal}>
						<FaPlay />
					</Text>
				</Flex>
			</Box>

			{/* Модальное окно */}
			{isModalOpen && (
				<Box
					position="fixed"
					top={0}
					left={0}
					w="100%"
					h="100vh"
					bg="rgba(0, 0, 0, 0.8)"
					display="flex"
					justifyContent="center"
					alignItems="center"
					zIndex={1000}
					opacity={isModalVisible ? 1 : 0}
					transition="opacity 0.3s ease-in-out"
					onClick={handleCloseModal}>
					<Box
						bg="white"
						p={6}
						borderRadius={12}
						maxW="900px"
						w="100%"
						transform={isModalVisible ? "scale(1)" : "scale(0.9)"}
						transition="transform 0.3s ease-in-out"
						onClick={(e) => e.stopPropagation()}>
						<Box>
							<iframe
								width="100%"
								height="500px"
								src="https://www.youtube.com/embed/8XtGHLvrY7Q"
								title="Металломир"
								
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
						</Box>

					 <Flex justifyContent="end" mt={6} alignItems="end">
					 <Button
							onClick={handleCloseModal}
							fontSize="14px"
							w={{ md: 210, base: 190 }}
							h={{ md: "54px", base: "46px" }}
							borderRadius={50}
							color="white">
							Закрыть
						</Button>
					 </Flex>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default Hero;
