"use client";

import Footer from "@/components/navbar/footer";
import Header from "@/components/navbar/header";
import ReduxProvider from "@/providers/ReduxProvidex";
import {   ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface LayoutPageProps {
	children: ReactNode;
}

const Providers: FC<LayoutPageProps> = ({ children }) => {
	return (
		<div>
			 <ReduxProvider>
			 <ChakraProvider value={defaultSystem}>
				<Header />
				{children}
				<Footer />
			</ChakraProvider>
			 </ReduxProvider>
		</div>
	);
};

export default Providers;
