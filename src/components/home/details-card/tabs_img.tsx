"use client";

import { Box, Flex } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useGetCatalogByIdQuery } from "@/redux/api/catalog";
import Image from "next/image";
import { useState } from "react";

const CardTabs = () => {
	const { id } = useParams();
	const idString = Array.isArray(id) ? id[0] : id;
	const { data } = useGetCatalogByIdQuery(idString);

	const [activeTab, setActiveTab] = useState<number | null>(null);

 
	return (
		<Flex fontFamily="Gilroy" direction="column" justifyContent="space-between" align="center">
			{data && (
				<Box w={{ md: "560px", base: "100%" }}>
					{/* Main Image */}
					<Box
						w={{ md: "560px", base: "100%" }}
						h="335px"
						borderRadius="md"
						overflow="hidden"
						position="relative"
						bg="gray.100"
						mx="auto"
						mb="16px">
						<Image
							src={activeTab !== null ? data.images[activeTab].image : data.image} // Показываем выбранное изображение или первое
							alt={data.title}
							fill
							style={{ objectFit: "cover" }}
						/>
					</Box>

					{/* Thumbnails */}
					<Flex
						gap="2px"
						justifyContent="start" flexWrap="wrap">
						{data.images.map((item, index) => (
							<Box
								key={index}
								onClick={() => setActiveTab(index)} // Меняем активное изображение по клику
								cursor="pointer"
								padding="4px"
								borderRadius="8px"
								overflow="hidden"
								transition="all 0.2s ease"
								bg={activeTab === index ? "gray.200" : "transparent"} // Выделение активной миниатюры
								_hover={{ bg: "gray.100" }}>
								<Box
									w="75px"
									h="75px"
									borderRadius="md"
									overflow="hidden"
									position="relative">
									<Image
										src={item.image}
										alt={`Thumbnail ${index}`}
										fill
										style={{ objectFit: "cover" }}
									/>
								</Box>
							</Box>
						))}
						 
						 
					</Flex>
				</Box>
			)}
		</Flex>
	);
};

export default CardTabs;
