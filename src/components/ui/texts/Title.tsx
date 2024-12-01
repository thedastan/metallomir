import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TitleProps extends TextProps {
	children: ReactNode;
}

const Title = ({ children, ...props }: TitleProps) => {
	return (
		<Text
			fontSize="22px"
			fontWeight="700"
			lineHeight="27px"
			color="#000000"
			{...props}
		>
			{children}
		</Text>
	);
};

export default Title;
