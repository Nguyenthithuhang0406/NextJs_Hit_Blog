import { listProducts } from "@/app/data";
import { NextRequest } from "next/server";

export const GET = (req: Request, context: { params: { productId: string } }) => {
  const { productId } = context?.params;

  const products = listProducts;

  const product = products?.find((p) => p?.id === Number(productId));
  return Response.json({
    data: product
  })
}

export const PATCH = async (req: NextRequest, context: {params: {productId: string}}) => {
  const info = await req.json();
  const { productId } = context?.params;

  const products = listProducts;
  const product = products.find((p) => p?.id === Number(productId));

  const updateProduct = {...product, ...info}
  return Response.json({
    data: {
     updateProduct
    }
  })
}

export const DELETE = async (req: NextRequest, context: { params: { productId: string } }) => {
  const { productId } = context?.params;

  const products = listProducts;

  const newListProduct = products.filter((p) => p.id !== Number(productId));

  return Response.json({
    data: newListProduct,
    status: 200,
    statusText: "delete successfully!!"
  })
}