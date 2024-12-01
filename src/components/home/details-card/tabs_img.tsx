"use client";

import { Box, Flex } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useGetCatalogByIdQuery } from "@/redux/api/catalog";
import Image from "next/image";

const CardTabs = () => {
	const { id } = useParams();

	const idString = Array.isArray(id) ? id[0] : id;

	const { data } = useGetCatalogByIdQuery(idString);

	// const { card_data } = useCardData();

	// // Находим элемент по ID
	// const cardId = typeof id === "string" ? +id : null;
	// const el = card_data.find((el) => el.id === cardId);

	// if (!el) {
	// 	return <Text>Сервис не найден</Text>;
	// }

	return (
		<Flex>
			{data && (
				<Box
					borderRadius={10}
					w={{ md: 560, base: "100%" }}
					h={{ md: "100%", base: "300px" }}
					overflow="hidden"
					position="relative">
					{/* <Text>{data.title}</Text> */}
					<Image
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
						src={data.image}
						alt={data.title}
						layout="fill" 
											 objectFit="cover"
					/>
				</Box>
			)}
			{/* <Tabs.Root
				style={{ display: "flex", flexDirection: "column-reverse" }}
				defaultValue="image-0">
				<Box>
					<Tabs.List
						style={{
							display: "flex",
							gap: "6px",
							justifyContent: "center",
							marginTop: "6px",

						}}>
						{el.iamges.map((item, index) => (
							<Tabs.Trigger key={index} value={`image-${index}`}>
								<Box w={75} h={75} overflow="hidden" borderRadius={10}>
									<Image
										src={item.image}
										alt={`Thumbnail ${index}`}
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
									/>
								</Box>
							</Tabs.Trigger>
						))}
					</Tabs.List>
				</Box>

				<Box>
					{el.iamges.map((item, index) => (
						<Tabs.Content key={index} value={`image-${index}`}>
							<Box w={484} h={335} overflow="hidden" borderRadius={10}>
								<Image
									src={item.image}
									alt={`Image ${index}`}
									style={{ width: "100%", height: "100%", objectFit: "cover" }}
								/>
							</Box>
						</Tabs.Content>
					))}
				</Box>
			</Tabs.Root> */}
		</Flex>
	);
};

export default CardTabs;
