import { INSTAGRAM_LINK, TELEGRAM_LINK, YOUTUBE_LINK } from "@/constants/admin";
import { BiLogoTelegram } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";

export const nav = [
	{ name: "Главная", path: "/" },
	{ name: "о компании", path: "/about-company" },
	{ name: "продукции", path: "/catalog" },
	{ name: "контакты", path: "#contact" },
];

export const links = [
	{ path: TELEGRAM_LINK, icon: <BiLogoTelegram /> },
	{ path: INSTAGRAM_LINK, icon: <AiFillInstagram /> },
	{ path: YOUTUBE_LINK, icon: <FaYoutube /> },
];
