"use client";
import Title from "@/components/ui/texts/Title";
import { Box, Flex } from "@chakra-ui/react";
import gar1 from "@/assets/images/gar1.png";
import gar2 from "@/assets/images/gal3.png";
import gar3 from "@/assets/images/gal1.png";
import gar4 from "@/assets/images/gal2.png";
import gar5 from "@/assets/images/gar5.png";

import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Gallery = () => {
	const imagesSlider = [gar1, gar2, gar3, gar4, gar5];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		// appendDots: (dots: React.ReactNode) => (
		// 	<Box mt={4}>
		// 		<ul
		// 			style={{
		// 				display: "flex",
		// 				justifyContent: "center",
		// 				gap: "10px",
		// 				padding: 0,
		// 				margin: 0,
		// 				listStyle: "none",
		// 			}}>
		// 			{dots}
		// 		</ul>
		// 	</Box>
		// ),
		customPaging: () => (
			<Box
				mt={3}
				w="6px"
				h="6px"
				borderRadius="full"
				bg="gray.400"
				transition="background-color 0.3s ease"
			/>
		),
	};

	return (
		<Box fontFamily="Gilroy" pb={20}>
			<Box className="container2">
				<Box
					data-aos="fade-up"
					bg="#313131"
					p={{ md: 10, base: 4 }}
					py={10}
					borderRadius={20}>
					<Box className="container">
						<Title
							color="white"
							textAlign="center"
							fontWeight={500}
							fontSize={{ md: 68, base: 28 }}
							lineHeight={{ md: "80px", base: "38px" }}
							mt={4}>
							Галерея
						</Title>

						<Box
							pb={10}
							mt={8}
							display={{ base: "flex", md: "none" }}
							flexDir="column">
							<Slider {...settings}>
								{imagesSlider.map((image, index) => (
									<Box
										key={index}
										borderRadius={20}
										w="100%"
										h={330}
										overflow="hidden">
										<Image
											src={image}
											alt={`Gallery image ${index + 1}`}
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
										/>
									</Box>
								))}
							</Slider>
						</Box>

						<Box display={{ base: "none", md: "flex" }} flexDir="column">
							<Flex gap={4} mt={10} justifyContent="space-between">
								<Box
									borderRadius={20}
									w={{ md: 412, base: "100%" }}
									h={{ md: 330, base: 321 }}
									overflow="hidden">
									<Image
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
										src={gar3}
										alt="img"
									/>
								</Box>
								<Box
									borderRadius={20}
									w={{ md: 412, base: "100%" }}
									h={{ md: 330, base: 321 }}
									overflow="hidden">
									<Image
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
										src={gar5}
										alt="img"
									/>
								</Box>
								<Box
									borderRadius={20}
									w={{ md: 412, base: "100%" }}
									h={{ md: 330, base: 321 }}
									overflow="hidden">
									<Image
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
										src={gar4}
										alt="img"
									/>
								</Box>
							</Flex>

							<Flex gap={4} mt={6} justifyContent="space-between">
								<Box
									borderRadius={20}
									w={{ md: 846, base: "100%" }}
									h={{ md: 330, base: 321 }}
									overflow="hidden">
									<Image
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
										src={gar1}
										alt="img"
									/>
								</Box>
								<Box
									borderRadius={20}
									w={{ md: 412, base: "100%" }}
									h={{ md: 330, base: 321 }}
									overflow="hidden">
									<Image
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
										src={gar2}
										alt="img"
									/>
								</Box>
							</Flex>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Gallery;