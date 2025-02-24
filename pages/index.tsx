"use client";
import React, { use } from "react";
import { useEffect,useState } from "react";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Product() {

  const [products,setProducts] = useState();
  useEffect(()=>{
    const fetchProducts = async()=>{
      const result = await fetch("https://dummyjson.com/products");
      const data = await result.json();
      console.log(data.products);
      setProducts(data.products);
    }


    console.log("products-->",products);

    fetchProducts();
  },[]);

  return (
    <div>
      <h1>PRODUCTS</h1>
      
    </div>
  );
}
