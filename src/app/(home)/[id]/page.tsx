import React from "react";
import CardDetails from "@/components/home/details-card";

// Function to fetch catalog data
async function fetchCatalogData(id: string) {
  try {
    const response = await fetch(`https://metallomir.pythonanywhere.com/api/v1/catalog/${id}`, {
      cache: "no-store", // Disables caching
    });
    const data = await response.json();
    return {
      title: data?.title || "ОсОО Металломир",
      description: data?.description || "Описание каталога недоступно",
    };
  } catch (error) {
    console.error("Error fetching catalog data:", error);
    return {
      title: "ОсОО Металломир",
      description: "Описание каталога недоступно",
    };
  }
}

// Generate metadata for the dynamic route
export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const { title, description } = await fetchCatalogData(id);

  return {
    title: title,
    description: description,
    robots: "index, follow",
    authors: [{ name: title }],
  };
}

const PageIdCard = () => {



  return (
    <div>
      <CardDetails   />
    </div>
  );
};

export default PageIdCard;
