"use client";
import Title from "@/components/ui/texts/Title";
import { Box, Flex, Text } from "@chakra-ui/react";

import { useGetItemQuery } from "@/redux/api/items";

const TableLook = () => {
	const { data } = useGetItemQuery();

	if (!data) return <Text>Загрузка...</Text>;

	return (
		<Box py={14}>
			<Box className="container">
				<Box p={{ md: 10, base: "40px 16px" }} bg="#313131" borderRadius={20}>
					<Flex
						borderRadius={6}
						alignItems="center"
						h={{ md: "70px", base: "50px" }}
						w="100%"
						bg="white"
						color="black">
						<Box w="100%" textAlign="center">
							<Text fontSize={{ md: 20, base: 18 }} fontWeight={400}>
								Размер/Диаметр
							</Text>
						</Box>
						<Box bg="#313131" w={1} h="70px" />
						<Box w="100%" textAlign="center">
							<Text fontSize={{ md: 20, base: 18 }} fontWeight={400}>
								Коэффициент
							</Text>
						</Box>
					</Flex>

					{data.map((el, index) => (
						<Box key={index}  >
							<Box>
								<Flex
									textAlign="center"
									alignItems="center"
									h="70px"
									w="100%"
									bg="#313131"
									color="white">
									<Title
										fontSize={{ md: 22, base: 18 }}
										fontWeight={600}
										color="white"
										mt={4}
										w="100%"
										textAlign="center">
										{el.title}
									</Title>
								</Flex>
								<Flex
									bg="grey"
									h={{ md: "70px", base: "100%" }}
									gap="1px"
									w="100%"
									border="solid 1px grey"
									overflow="hidden"
									borderRadius={6}>
									{el.fields.map((el, index) => (
										<Flex
											key={index}
											alignItems="center"
											w="100%"
											p={{ md: 0, base: "10px 0" }}
											bg="#3f3f3f"
											color="white">
											<Box w="100%" textAlign="center">
												<Text fontSize={{ md: 20, base: 18 }} fontWeight={400}>
													{el.value}
												</Text>
											</Box>
										</Flex>
									))}
								</Flex>
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default TableLook;
