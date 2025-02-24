"use client";
import React from "react";
import { useEffect,useState } from "react";

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
  },[products]);

  return (
    <div>
      <h1>PRODUCTS</h1>
      
    </div>
  );
}
