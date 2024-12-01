"use client";
import {
	Box,
	Button,
	Flex,
	Input,
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
	Text,
} from "@chakra-ui/react";
import img from "@/assets/images/contact.png";
import imgmob from "@/assets/images/contactmob.png";

import Title from "@/components/ui/texts/Title";
import Description from "@/components/ui/Description";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useGetCatalogQuery } from "@/redux/api/catalog";

interface IFormTelegram {
	number: number | string;
	text: string;
	phone: number;
	select: string;
}

const Contact = () => {
	const {data} = useGetCatalogQuery()

	const { register, handleSubmit, reset } = useForm<IFormTelegram>();
	const [phone, setPhone] = useState("");

	const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
	const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;

 
	const messageModel = (data: IFormTelegram) => {
		let messageTG = `Name: <b>${data.text}</b>\n`;
		messageTG += `Number: <b>${data.number}</b>\n`;
		messageTG += `Number: <b>${data.phone}</b>\n`;
		messageTG += `Number: <b>${data.select}</b>\n`;
		return messageTG;
	};

	const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
		try {
			await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
				chat_id: CHAT_ID,
				parse_mode: "html",
				text: messageModel(data),
			});
			reset();
			toast.success("Заявка успешно отправлена!", {
				position: "top-right",
				autoClose: 3000,
			});
		} catch (err) {
			console.error("Error occurred:", err);
			toast.error("Ошибка при отправке сообщения!", {
				position: "top-right",
				autoClose: 3000,
			});
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
						 
							style={{ width: "100%", height: "100%" }}
							src={img}
							alt="img"
						/>
					</Box>

					<Box display={{ md: "none", base: "flex" }} w="100%" h="100%">
						<Image
						 
							style={{ width: "100%", height: "100%" }}
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
									mt={5}
									gap={6}
									w={{ md: 500, base: "100%" }}
									py={4}
									alignItems="center">
									<Flex justifyContent="center" flexDirection="column" gap={5}>
										<Text
											color="white"
											fontWeight={600}
											fontSize={24}
											textAlign="center">
											Оставьте заявку
										</Text>

										{/* /// */}

										<MenuRoot {...register("select", { required: true })}>
											<MenuTrigger
												fontSize={16}
												fontWeight={400}
												w={{ md: 360, base: 310 }}
												h="50px"
												padding="0px 20px"
												borderRadius={{ md: 32, base: 50 }}
												bg="rgb(221, 224, 224)"
												border="none"
												asChild>
												<Button
													bg="none"
													variant="outline"
													fontSize={14}
													fontWeight={400}
													h="100%"
													border="none"
													display="flex"
													justifyContent="space-between">
													<Text>Тип товара</Text>
													<Text>
														<MdOutlineKeyboardArrowDown />
													</Text>
												</Button>
											</MenuTrigger>
											<MenuContent
												display="flex"
												flexDirection="column"
												gap="10px"
												position="absolute"
												mt="-40px"
												h={20}
												overflowY="scroll"
												p={2}>
												<Box>
													{data?.map((el, index) => (
														<MenuItem key={index} value="new-txt">
															{el.title}
														</MenuItem>
													))}
												</Box>
											</MenuContent>
										</MenuRoot>

										{/* //// */}
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
											placeholder="Район поставки"
											{...register("text", { required: true })}
										/>

										<Input
											fontSize={16}
											fontWeight={400}
											w={{ md: 360, base: 310 }}
											h="50px"
											padding="10px 20px"
											borderRadius={{ md: 32, base: 50 }}
											bg="rgb(221, 224, 224)"
											border="none"
											type="number"
											placeholder="Количество товара"
											{...register("number", { required: true })}
										/>

										<PhoneInput
											defaultCountry="kg"
											className="phone-input"
											{...register("phone", { required: true })}
											value={phone}
											onChange={(phone) => setPhone(phone)}
										/>
									</Flex>
								</Flex>
								<Flex
									mt={{ md: 0, base: 6 }}
									justifyContent="space-between"
									gap={3}>
									<Button
										type="submit"
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
					mt="60px"
					w="100%"
					h="100%"
					position="relative"
					overflow="hidden"
					>
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
