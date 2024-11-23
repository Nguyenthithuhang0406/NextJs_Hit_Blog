import { listProducts } from "@/app/data"
import { NextRequest, NextResponse } from "next/server";

export const GET = () => {
  const products = listProducts;

  return Response.json({
    data: products,
    status: 200,
    statusText: "Successfully",
  })
};

export const POST = async (req: NextRequest) => {
  const newProduct = await req.json();

  const products = listProducts;

  const inValid = products.find((p) => p.name === newProduct.name);

  if (inValid) {
    return NextResponse.json({
      status: 400,
      statusText: "product have already!"
    })
  }

  products.push({
    ...newProduct,
    id: Math.random()
  });

  return NextResponse.json({
    data: products,
    status: 201,
    statusText: "created successfully"
  })
}
