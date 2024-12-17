import Description from "@/components/ui/Description";
import Title from "@/components/ui/texts/Title";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { PRICE_LIST } from "@/constants/admin";

const Hero = () => {
  return (
    <Box
      py={20}
      position="relative"
      bg="#ECF0F4"
      w="100%"
      h="100vh"
      overflow="hidden"
    >
      {/* Видео как фон */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex="1"
        overflow="hidden"
        _before={{
          content: `""`,
          position: "absolute",
          top: 0,
          left: 0,
          w: "100%",
          h: "100%",
          bg: "rgba(0, 0, 0, 0.6)", // Затемнение
          zIndex: 2,
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/metal.mp4" type="video/mp4" />
        </video>
      </Box>

      {/* Централизованный контент */}
      <Flex
        position="relative"
        zIndex="10"
        h="100%"
        alignItems={{ base: "flex-start", md: "center" }} // Выровнять по началу на мобильных
        justifyContent={{ base: "flex-start", md: "center" }} // Выровнять по началу на мобильных
        textAlign={{ base: "left", md: "center" }} // Текст слева на мобильных
        flexDirection="column"
        px={{ base: 6, md: 4 }} // Добавить отступы для мобильной версии
        py={{ base: 10, md: 0 }} // Отступ сверху для мобильной версии
      >
        <Title
          data-aos="fade-up"
          data-aos-duration="1000"
          fontFamily="Gilroy"
          fontWeight={500}
          fontSize={{ md: 68, base: 32 }}
          lineHeight={{ md: "84px", base: "42px" }}
          color="white"
        >
          Металлопродукция от лидеров рынка
        </Title>

        <Description
          data-aos="fade-up"
          data-aos-duration="1300"
          fontSize={{ md: 20, base: 18 }}
          mt={4}
          color="white"
        >
          Широкий ассортимент металлопроката по доступным ценам. Быстрая доставка по всему Кыргызстану.
        </Description>

        <Flex
          data-aos="fade-up"
          data-aos-duration="1700"
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
          mt={6}
          alignItems={{ base: "flex-start", md: "center" }}
          justifyContent={{ base: "flex-start", md: "center" }}
        >
          <Description
            fontSize={16}
            color="white"
            display="inline-block"
            position="relative"
            _before={{
              content: `'•'`, // Точка перед текстом
              position: 'absolute',
              left: '-10px', // Позиционируем точку слева
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
            }}
          >
            Для строительства
          </Description>

          <Description
            fontSize={16}
            color="white"
            display="inline-block"
            position="relative"
            _before={{
              content: `'•'`, // Точка перед текстом
              position: 'absolute',
              left: '-7px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
            }}
          >
            Производства
          </Description>

          <Description
            fontSize={16}
            color="white"
            display="inline-block"
            position="relative"
            _before={{
              content: `'•'`, // Точка перед текстом
              position: 'absolute',
              left: '-7px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
            }}
          >
            Торговли
          </Description>
        </Flex>

        <Box
          mt={8}
          display="flex"
          flexDirection={{ base: "column", md: "row" }} // Вертикально на мобильных, горизонтально на десктопах
          gap={6}
          alignItems={{ base: "stretch", md: "center" }} // Растягивание кнопок на мобильных
          justifyContent={{ md: "center" }} // Центрирование на десктопах
        >
          <Link href={"/table"}>
            <Button
              data-aos="fade-up"
              data-aos-duration="2000"
              w={{ base: "100%", md: 220 }} // Полная ширина на мобильных, фиксированная на десктопах
              h="56px"
              borderRadius={50}
              color="white"
              p={4}
              border="solid 1px white"
              bg="none"
              transition="all 0.3s ease" // Плавный переход для фона и цвета текста
              _hover={{
                bg: "white",  // Белый фон при ховере
                color: "black",  // Черный текст при ховере
                borderColor: "white",  // Белая граница
              }}
            >
              <Text>Ассортименты</Text>
              <Text>
                <GoArrowRight />
              </Text>
            </Button>
          </Link>

          <Link href={PRICE_LIST} target={"_blank"}>
            <Button
              data-aos="fade-up"
              data-aos-duration="2000"
              w={{ base: "100%", md: 220 }} // Полная ширина на мобильных, фиксированная на десктопах
              h="56px"
              borderRadius={50}
              color="white"
              p={4}
              border="solid 1px white"
              bg="none"
              transition="all 0.3s ease" // Плавный переход для фона и цвета текста
              _hover={{
                bg: "white",  // Белый фон при ховере
                color: "black",  // Черный текст при ховере
                borderColor: "white",  // Белая граница
              }}
            >
              <Text>Скачать Прайс-Лист</Text>
              <Text>
                <GoArrowRight />
              </Text>
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
