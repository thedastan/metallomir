import Title from "@/components/ui/texts/Title";
import { useGetCatalogQuery } from "@/redux/api/catalog";
import { Box, Button, Flex } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import CardLookDet from "./card-look";

const LookingDetails = () => {
  const pathname = usePathname(); // Получаем полный путь
  const currentId = pathname?.split("/").pop(); // Извлекаем последний сегмент пути

  console.log("Current slug from pathname:", currentId);

  const { data } = useGetCatalogQuery();
  const router = useRouter();

  return (
    <Box py={20}>
      <Box className="container">
        <Flex flexDir="column">
          <Flex
            p={{ md: 0, base: 4 }}
            justifyContent="space-between"
            flexDir={{ md: "row", base: "column" }}
          >
            <Title
              pb={{ md: 20, base: 4 }}
              fontWeight={500}
              fontSize={{ md: 68, base: 32 }}
            >
              Похожие
            </Title>
          </Flex>

          {/* Отображение кнопок для десктопов */}
          <Box display={{ md: "flex", base: "none" }} flexWrap="wrap" gap={3}>
            {data?.map((el, index) => (
              <Box
                key={index}
                cursor="pointer"
                onClick={() => router.push(`/${el.slug}`)}
              >
                <Button
                  color="black"
                  fontWeight={400}
                  fontSize={{ md: 20, base: 16 }}
                  p={{ md: "22px 30px", base: "8px 10px" }}
                  borderRadius={50}
                  bg={
                    currentId === el.slug ? "#dadada" : "#F4F4F4"
                  }
                  border="solid 1px #C6C6C6"
                >
                  {el.title}
                </Button>
              </Box>
            ))}
          </Box>

          {/* Отображение кнопок для мобильных устройств */}
          <Box
            w="100%"
            overflowX="scroll"
            display={{ md: "none", base: "flex" }}
          >
            {data?.map((el, index) => (
              <Box
                p={1}
                key={index}
                cursor="pointer"
                onClick={() => router.push(`/${el.slug}`)}
              >
                <Button
                  color="black"
                  fontWeight={400}
                  fontSize={{ md: 20, base: 16 }}
                  p={{ md: "22px 30px", base: "8px 10px" }}
                  borderRadius={50}
                  bg={
                    currentId === el.slug ? "#dadada" : "#F4F4F4"
                  }
                  border="solid 1px #C6C6C6"
                >
                  {el.title}
                </Button>
              </Box>
            ))}
          </Box>

          {/* Карточка деталей */}
          <Box>
            <CardLookDet />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default LookingDetails;
