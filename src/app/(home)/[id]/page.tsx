import React from "react";
import axios from "axios";
import CardDetails from "@/components/home/details-card";

// Интерфейс для параметров маршрута
interface Params {
  id: string;
}

// Функция для получения данных каталога
async function fetchCatalogData(id: string) {
  try {
    const response = await axios.get(`https://metallomir.pythonanywhere.com/api/v1/catalog/${id}`);
    return {
      title: response.data?.title || "ОсОО Металломир",
      description: response.data?.description || "Описание каталога недоступно",
    };
  } catch (error) {
    console.error("Error fetching catalog data:", error);
    return {
      title: "ОсОО Металломир",
      description: "Описание каталога недоступно",
    };
  }
}

// Генерация метаданных для динамического маршрута
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Ожидаем промис для получения параметров
  const { title, description } = await fetchCatalogData(id);
  
  return {
    title,
    description,
    robots: "index, follow",
    authors: [{ name: title }],
  };
}

const PageIdCard = () => {
  return <CardDetails />;
};

export default PageIdCard;
