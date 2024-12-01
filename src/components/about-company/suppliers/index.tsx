import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import partners1 from "@/assets/images/parners1.png";
import partners2 from "@/assets/images/parners2.png";
import partners3 from "@/assets/images/parners3.png";
import partners4 from "@/assets/images/parners4.png";
import partners5 from "@/assets/images/parners5.png";
import partners6 from "@/assets/images/parners6.png";

const Suppliers = () => {
	const data = [
		{ image: partners1 },
		{ image: partners2 },
		{ image: partners3 },
		{ image: partners4 },
		{ image: partners5 },
		{ image: partners6 },
	];

	return (
		<Box display={{ base: "flex", md: "flex" }} py={20}>
			<Box className="container">
				<Text
					data-aos="fade-right"
					textAlign="center"
					py={4}
					fontSize={36}
					fontWeight={400}>
					Наши поставщики
				</Text>

				<Box>
					<Box w="100%" display={{ base: "none", md: "flex" }} gap={16} mt={6}>
						{data.map((el, index) => (
							<Box data-aos="fade-up" data-aos-delay={index * 200} key={index}>
								<Image
									style={{ width: "100%", height: "100%" }}
									src={el.image}
									alt="img"
								/>
							</Box>
						))}
					</Box>

					<Box
						display={{ base: "flex", md: "none" }}
						w="100%"
						overflowX="scroll"
						gap={4}
						mt={6}>
						<Flex gap={6}>
							{data.map((el, index) => (
								<Box
									data-aos="fade-up"
									data-aos-delay={index * 200}
									w="100px"
									key={index}>
									<Image
										style={{ width: "100px", height: "40px" }}
										src={el.image}
										alt="img"
									/>
								</Box>
							))}
						</Flex>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Suppliers;
