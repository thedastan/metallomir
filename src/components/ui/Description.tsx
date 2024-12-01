 
import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TitleProps extends TextProps {
	children: ReactNode;
}

const Description = ({ children, ...props }: TitleProps) => {
	return (
		<Text
			fontSize="14px"
			fontWeight="400"
			lineHeight="27px"
			color="#000000"
			{...props}
		>
			{children}
		</Text>
	);
};

export default Description;
