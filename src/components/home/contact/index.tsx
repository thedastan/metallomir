"use client";
import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import img from "@/assets/images/contact.png";
import imgmob from "@/assets/images/contactmob.png";

import Title from "@/components/ui/texts/Title";
import Description from "@/components/ui/Description";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useGetCatalogQuery } from "@/redux/api/catalog";

interface IFormForgotPassword {
	text: string;
	phone: string;
	message: string;
}

const Contact = () => {
	const [phone, setPhone] = useState("");
	const { register, handleSubmit, reset } = useForm<IFormForgotPassword>();

	const onSubmit: SubmitHandler<IFormForgotPassword> = async (data) => {
		const newData = {
			name: data.text,
			phone_number: phone, // Передаем номер телефона из состояния
			message: data.message,
		};

		try {
			const response = await axios.post(
				"https://metallomir.pythonanywhere.com/api/v1/callbacks/",
				newData
			);
			console.log("Response:", response.data);
			alert("Сообщение успешно отправлено!");
			reset(); // Очистка формы после успешной отправки
		} catch (error) {
			console.error("Ошибка отправки сообщения:", error);
			alert("Произошла ошибка при отправке сообщения. Попробуйте снова.");
		}
	};

	return (
		<Box id="contact" py={{ md: 20, base: 0 }} w="100%">
			<Box className="container">
				<Box
					p={{ md: 0, base: 4 }}
					py={6}
					display={{ md: "none", base: "block" }}>
					<Title fontWeight={500} fontSize={32}>
						Контакты
					</Title>
					<Description fontWeight={400} fontSize={18} lineHeight="18px" mt={6}>
						Мы всегда готовы ответить на ваши вопросы, <br /> помочь с выбором
						продукции и оформить заказ.
					</Description>
				</Box>
				<Flex
					position="relative"
					w="100%"
					flexDir="column"
					justifyContent="start"
					alignItems="end">
					<Box display={{ md: "flex", base: "none" }} w="100%" h={550}>
						<Image
							style={{ width: "100%", height: "100%", zIndex: -4 }}
							src={img}
							alt="img"
						/>
					</Box>

					<Box display={{ md: "none", base: "flex" }} w="100%" h="600px">
						<Image
							style={{ width: "100%", height: "100%", zIndex: -4 }}
							src={imgmob}
							alt="img"
						/>
					</Box>

					<Flex
						justifyContent={{ md: "space-between", base: "center" }}
						flexDir={{ md: "row", base: "column" }}
						w="100%"
						h="100%"
						position="absolute"
						p={{ md: 10, base: 4 }}>
						<Box>
							<form onSubmit={handleSubmit(onSubmit)}>
								<Flex
									flexDirection="column"
									borderRadius={24}
									border="solid 1px white"
									backdropFilter="blur(10px)"
									bg="#9494944d"
									mt={4}
									gap={6}
									w={{ md: 500, base: "100%" }}
									py={8}
									zIndex={10}
									alignItems="center">
									<Flex justifyContent="center" flexDirection="column" gap={5}>
										<Text
											color="white"
											fontWeight={600}
											fontSize={24}
											textAlign="center">
											Оставьте заявку
										</Text>

										<Input
											fontSize={16}
											fontWeight={400}
											w={{ md: 360, base: 310 }}
											h="50px"
											padding="10px 20px"
											borderRadius={{ md: 32, base: 50 }}
											bg="rgb(221, 224, 224)"
											border="none"
											type="text"
											placeholder="Имя"
											{...register("text", { required: "Имя обязательно" })}
										/>

										<PhoneInput
											defaultCountry="kg"
											className="phone-input"
											{...register("phone", { required: true })}
											value={phone}
											onChange={(phone) => setPhone(phone)}
										/>

										<Textarea
											fontSize={16}
											fontWeight={400}
											w={{ md: 360, base: 310 }}
											h="130px"
											mt={-3}
											padding="10px 20px"
											borderRadius={{ md: 22, base: 20 }}
											bg="rgb(221, 224, 224)"
											border="none"
											placeholder="Сообщение"
											{...register("message", {
												required: "Сообщение обязательно",
											})}
										/>
									</Flex>
								</Flex>
								<Flex
									mt={{ md: 0, base: 6 }}
									justifyContent="space-between"
									gap={3}>
									<Button
										type="submit"
										zIndex={0}
										border="solid 1px white"
										mt={{ base: -2, md: 3 }}
										w={{ md: 440, base: "80%" }}
										h={{ md: "56px", base: "50px" }}
										backdropFilter="blur(10px)"
										bg="#9494944d"
										borderRadius={32}>
										Оставить заявку
									</Button>
									<Button
										type="submit"
										zIndex={0}
										border="solid 1px white"
										mt={{ base: -2, md: 3 }}
										w={{ md: "56px", base: "50px" }}
										h={{ md: "56px", base: "50px" }}
										backdropFilter="blur(10px)"
										bg="#9494944d"
										borderRadius={32}>
										<GoArrowUpRight />
									</Button>
								</Flex>
							</form>
						</Box>

						<Box display={{ md: "block", base: "none" }}>
							<Box ml={6}>
								<Title fontWeight={500} fontSize={68}>
									Контакты
								</Title>
								<Description
									fontWeight={400}
									fontSize={18}
									lineHeight="18px"
									mt={6}>
									Мы всегда готовы ответить на ваши вопросы, <br /> помочь с
									выбором продукции и оформить заказ.
								</Description>
							</Box>
							<Box
								borderRadius={20}
								mt="60px"
								w={500}
								h={330}
								overflow="hidden">
								<div className="map">
									<iframe
										src="/map.html"
										frameBorder="0"
										scrolling="no"
										title="Map on 2GIS"></iframe>
								</div>
							</Box>
						</Box>
					</Flex>
				</Flex>
				<Box
					display={{ md: "none", base: "block" }}
					mt="80px"
					w="100%"
					h="100%"
					position="relative"
					overflow="hidden">
					<div className="map">
						<iframe
							src="/map.html"
							frameBorder="0"
							scrolling="no"
							title="Map on 2GIS"></iframe>
					</div>
				</Box>
			</Box>
		</Box>
	);
};

export default Contact;
