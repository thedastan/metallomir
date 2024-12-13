"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useGetItemQuery } from "@/redux/api/items";
import React from "react";
import { useRouter, useParams } from "next/navigation";

const Tabletitle = () => {
  const { data } = useGetItemQuery();
  const router = useRouter();
  const { id } = useParams(); // Получаем текущий id из URL
  const currentId = Array.isArray(id) ? id[0] : id; // Учитываем массив

  if (!data) return <Text>Загрузка...</Text>;

  return (
    <Box fontFamily="Gilroy" py={10} mt={{ md: 10, base: 0 }}>
      <Box display={{ md: "flex", base: "none" }} flexWrap="wrap" gap={3}>
        {data?.map((el, index) => (
          <Box
            key={index}
            cursor="pointer"
            onClick={() => router.push(`/table/${el.id}`)}
          >
            <Button
              fontFamily="Gilroy"
              color="black"
              fontWeight={400}
              fontSize={{ md: 20, base: 16 }}
              p={{ md: "22px 30px", base: "8px 10px" }}
              borderRadius={50}
              bg={String(currentId) === String(el.id) ? "#dadada" : "#F4F4F4"} // Преобразование в строку для сравнения
              border="solid 1px #C6C6C6"
            >
              {el.title}
            </Button>
          </Box>
        ))}
      </Box>

      <Box w="100%" overflowX="scroll" display={{ md: "none", base: "flex" }}>
        {data?.map((el, index) => (
          <Box
            p={1}
            key={index}
            cursor="pointer"
            onClick={() => router.push(`/table/${el.id}`)}
          >
            <Button
              color="black"
              fontWeight={400}
              fontSize={{ md: 20, base: 16 }}
              p={{ md: "22px 30px", base: "8px 10px" }}
              borderRadius={50}
              bg={String(currentId) === String(el.id) ? "#dadada" : "#F4F4F4"} // Аналогично для мобильного вида
              fontFamily="Gilroy"
              border="solid 1px #C6C6C6"
            >
              {el.title}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Tabletitle;
