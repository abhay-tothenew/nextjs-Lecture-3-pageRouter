"use client";
import React from "react";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
interface ProductTypes{
  id:number;
  title:string;
  description:string;
}
export default function Product() {
  const router = useRouter();

  const [products,setProducts] = useState<ProductTypes[]>([]);
  useEffect(()=>{
    const fetchProducts = async()=>{
      const result = await fetch("https://dummyjson.com/products");
      const data = await result.json();

      setProducts(data?.products);
    
    }


    // console.log("products-->",products);

    fetchProducts();
  },[]);

  const handleButton=(id:number)=>{
    router.push(`/product/${id}`);
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">PRODUCTS</h1>
      {products.map((product)=>(
        <div key={product.id} className="border border-gray-300 rounded-md p-4">
          <h2><strong>TITLE: </strong>{product.title}</h2>
          <p><strong>DESCRIPTION: </strong>{product.description}</p>

            <button onClick={()=>handleButton(product.id)} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">VIEW DETAILS</button>
        </div>
      ))}
      
    </div>
  );
}