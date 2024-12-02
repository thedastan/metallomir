/* eslint-disable @typescript-eslint/no-unused-vars */

namespace CATALOG {
  type GetCatalogRes = [
    {
      id: number;
      title: string;
      description: string;
      image: string;
      price_file: string | object;
    }
  ];

  type GetCatalogReq = void;

  type GetCatalogByIdRes = {
    id: number;
    title: string;
    description: string;
    image: string;
    price_file:string | object;
  };

  type GetCatalogByIdReq = string | undefined;
}


