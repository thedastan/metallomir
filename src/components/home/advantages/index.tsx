import Description from "@/components/ui/Description";
import Title from "@/components/ui/texts/Title";
import { Box, Button, Flex } from "@chakra-ui/react";
import img1 from "@/assets/images/we1.png";
import img3 from "@/assets/images/we3.png";
import img4 from "@/assets/images/box.png";

import imgmob1 from "@/assets/images/webob.png";
import imgmob2 from "@/assets/images/webob2.png";

import Image from "next/image";
import { GoCheck } from "react-icons/go";

const Advantages = () => {
	const data = [
		{
			title: "Оперативная доставка",
			desc: "доставка по всему Кыргызстану с гарантией точных сроков.",
			img: img1,
		},
		{
			title: "Широкий выбор продукции",
			desc: "от сортового и листового проката до профильных труб и цветных металлов.",
			img: img1,
		},
		{
			title: "",
			desc: "",
			img: img3,
		},
		{
			title: "Высокое качество материалов",
			desc: "вся продукция сертифицирована и соответствует международным стандартам.",
			img: img4,
		},
	];

	const data2 = [
		{
			title: "Оперативная доставка",
			desc: "доставка по всему Кыргызстану с гарантией точных сроков.",
			img: imgmob1,
		},
		{
			title: "Широкий выбор продукции",
			desc: "от сортового и листового проката до профильных труб и цветных металлов.",
			img: imgmob1,
		},
		{
			title: "",
			desc: "",
			img: imgmob2,
		},
		{
			title: "Высокое качество материалов",
			desc: "вся продукция сертифицирована и соответствует международным стандартам.",
			img: imgmob1,
		},
	];
	return (
		<Box py={20} p={{ md: 0, base: 4 }}>
			<Box className="container">
				<Flex
					flexDir={{ md: "row", base: "column" }}
					justifyContent="space-between"
					alignItems="center">
					<Box data-aos="fade-right" w={{ md: 489, base: 345 }}>
						<Title
							fontWeight={500}
							fontSize={{ md: 68, base: 32 }}
							lineHeight="70px">
							Наши преимущества
						</Title>
						<Description
							mt={4}
							fontWeight={400}
							fontSize={18}
							lineHeight="18px">
							Предоставление качественной металлопродукции, которая помогает
							строить, создавать и воплощать в жизнь проекты наших клиентов.
						</Description>
					</Box>
					<Box display={{ md: "flex", base: "none" }} flexDirection="column">
						<Flex flexDir={{ md: "row", base: "column" }} gap={3} mt={3}>
							{data.slice(0, 2).map((el, index) => (
								<Flex
									key={index}
									flexDirection="column"
									justifyContent="end"
									alignItems="end">
									<Box w={{ md: 301, base: "100%" }} h={282}>
										<Image
											style={{ width: "100%", height: "100%" }}
											src={el.img}
											alt="img"
										/>

										<Box p={8} position="absolute" mt="-280px">
											<Title
												fontWeight={400}
												fontSize={24}
												lineHeight="25px"
												w={240}>
												{el.title}
											</Title>
											<Description
												color="#3d3d3d"
												mt={10}
												fontWeight={400}
												fontSize={18}
												lineHeight="18px"
												w={240}>
												{el.desc}
											</Description>
										</Box>
									</Box>
									<Button
										w="54px"
										h="54px"
										bg="#F4F4F4"
										border="solid 1.5px #C6C6C6"
										position="absolute"
										fontSize={28}
										borderRadius={50}
										color="black">
										<GoCheck />
									</Button>
								</Flex>
							))}
						</Flex>
						<Flex flexDir={{ md: "row", base: "column" }} gap={3} mt={3}>
							{data.slice(2, 4).map((el, index) => (
								<Flex
									key={index}
									flexDirection="column"
									justifyContent="end"
									alignItems="end">
									<Box w={{ md: 301, base: "100%" }} h={352}>
										<Image
											style={{ width: "100%", height: "100%" }}
											src={el.img}
											alt="img"
										/>

										<Box p={8} position="absolute" mt="-350px">
											<Title
												fontWeight={400}
												fontSize={24}
												lineHeight="25px"
												w={240}>
												{el.title}
											</Title>
											<Description
												color="#3d3d3d"
												mt={10}
												fontWeight={400}
												fontSize={18}
												lineHeight="18px"
												w={240}>
												{el.desc}
											</Description>
										</Box>
									</Box>
									<Button
										w="54px"
										h="54px"
										bg="#F4F4F4"
										border="solid 1.5px #C6C6C6"
										position="absolute"
										fontSize={28}
										borderRadius={50}
										color="black">
										<GoCheck />
									</Button>
								</Flex>
							))}
						</Flex>
					</Box>

					<Box display={{ md: "none", base: "flex" }} flexDirection="column">
						<Flex flexDir={{ md: "row", base: "column" }} gap={3} mt={10}>
							{data2.map((el, index) => (
								<Flex
									key={index}
									flexDirection="column"
									justifyContent="end"
									alignItems="end">
									<Box w={{ md: 301, base: 345 }} h={220}>
										<Image
											style={{ width: "100%", height: "100%" }}
											src={el.img}
											alt="img"
										/>

										<Box p={8} position="absolute" mt="-220px">
											<Title
												fontWeight={400}
												fontSize={24}
												lineHeight="25px"
												w={240}>
												{el.title}
											</Title>
											<Description
												color="#3d3d3d"
												mt={6}
												fontWeight={400}
												fontSize={18}
												lineHeight="18px"
												w={240}>
												{el.desc}
											</Description>
										</Box>
									</Box>
									<Button
										w="48px"
										h="48px"
										bg="#F4F4F4"
										border="solid 1.5px #C6C6C6"
										position="absolute"
										fontSize={28}
										borderRadius={50}
										color="black">
										<GoCheck />
									</Button>
								</Flex>
							))}
						</Flex>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default Advantages;
