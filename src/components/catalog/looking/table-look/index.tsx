"use client";
import Title from "@/components/ui/texts/Title";
import { Box,  Flex, Text } from "@chakra-ui/react";
 
import { useGetItemQuery } from "@/redux/api/items";

const TableLook = () => {
	const { data } = useGetItemQuery();

	return (
		<Box py={14}>
			<Box className="container">
				<Box borderRadius={20} bg="#313131" p={10}>
					<Flex
						borderRadius={6}
						alignItems="center"
						h="70px"
						w="100%"
						bg="white"
						color="black">
						<Box w="100%" textAlign="center">
							<Text fontSize={20} fontWeight={400}>
								Размер/Диаметр
							</Text>
						</Box>
						<Box bg="#313131" w={1} h="70px" />
						<Box w="100%" textAlign="center">
							<Text fontSize={20} fontWeight={400}>
								Коэффициент
							</Text>
						</Box>
					</Flex>

					{data?.map((item, index) => (
						<Box key={index}>
							<Flex
								textAlign="center"
								alignItems="center"
								h="70px"
								w="100%"
								bg="#313131"
								color="white">
								<Title
									fontSize={22}
									fontWeight={600}
									color="white"
									mt={4}
									w="100%"
									textAlign="center">
									{`${index + 1}. ${item.title}`}
								</Title>
							</Flex>
							<Flex
								bg="grey"
								h="70px"
								gap="1px"
								w="100%"
								border="solid 1px grey"
								overflow="hidden"
								borderRadius={6}>
								{item.fields.map((el, index) => (
									<Flex
										key={index}
										alignItems="center"
										w="100%"
										bg="#3f3f3f"
										color="white">
										<Box w="100%" textAlign="center">
											<Text fontSize={20} fontWeight={400}>
												{el.value}
											</Text>
										</Box>
									</Flex>
								))}
							</Flex>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default TableLook;