import type { Metadata } from "next";
import "@/styles/globals.scss";
import { SITE_NAME } from "@/constants/seo/seo.constants";
import Providers from "./provider";
import { gilroy } from "@/constants/fonts/fonts";

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description:
		'"Metallomir" — надежный поставщик металлопроката и металлопродукции в Кыргызстане.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={gilroy.variable}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
