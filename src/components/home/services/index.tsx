import Description from "@/components/ui/Description";
import Title from "@/components/ui/texts/Title";
import { Box, Flex } from "@chakra-ui/react";
import img1 from "@/assets/images/services1.png";
import img2 from "@/assets/images/services2.png";

const Services = () => {
	const data = [
		{
			image: img1,
			title: "Резка и обработка металла",
			desc: "термическая, ленточно-пильная, газокислородная, плазменная, лазерная, гидроабразивная. ",
		},
		{
			image: img2,
			title: "Оптовые поставки",
			desc: "предлагаем особые условия сотрудничества для оптовых клиентов, включая скидки, быструю отгрузку и логистику.",
		},
	];
	return (
		<Box fontFamily="Gilroy" py={20}>
			<Box className="container2">
				<Box
					data-aos="fade-up"
					bg="#313131"
					p={{ md: 10, base: 4 }}
					py={10}
					borderRadius={20}>
					<Box className="container">
						<Description textAlign="center" fontSize={18} color="#b8b8b8">
							Услуги
						</Description>
						<Title
							color="white"
							data-aos="fade-right"
							textAlign="center"
							fontWeight={500}
							fontSize={{ md: 68, base: 28 }}
							lineHeight={{ md: "80px", base: "38px" }}>
							Мы предоставляем <br /> надежный сервис
						</Title>

						<Flex
							gap={4}
							flexDir={{ md: "row", base: "column" }}
							mt={10}
							justifyContent="space-between">
							{data.map((el, index) => (
								<Flex
									data-aos="fade-up"
									border="solid 2px #5f5f5f"
									key={index}
									justifyContent="end"
									alignItems="end"
									borderRadius={20}
									p={4}
									gap={8}
									w={{ md: 620, base: "100%" }}
									h={{ md: "321px", base: "300px" }}
									bgImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${el.image.src})`}
									bgSize="cover"
									bgPos="center">
									<Flex
										fontFamily="Gilroy"
										flexDir="column"
										gap={3}
										p={{ md: 6, base: 4 }}
										bg="#F4F4F4"
										borderRadius={12}>
										<Title fontWeight={400} fontSize={{ md: 24, base: 22 }}>
											{el.title}
										</Title>
										<Description
											color="#3a3a3a"
											fontSize={18}
											lineHeight="18px">
											{el.desc}
										</Description>
									</Flex>
								</Flex>
							))}
						</Flex>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Services;
