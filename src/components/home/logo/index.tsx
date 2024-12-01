import { Box } from "@chakra-ui/react";
import Image from "next/image";
import img from "@/assets/images/METALLOMIR.png";

const Logo = () => {
	return (
		<Box display={{ md: "block", base: "none" }}>
			<Box className="container">
				<Box w="100%" height="100%" overflow="hidden">
					<Image
						data-aos="fade-up"
						style={{ width: "100%", height: "100%" }}
						src={img}
						alt="img"
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Logo;
