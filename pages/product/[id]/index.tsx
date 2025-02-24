import Link from "next/link";

// export async function getServerSideProps(context: any) {
//   const { id } = context.params;
//   const result = await fetch(`https://dummyjson.com/products/${id}`);
//   const data = await result.json();

//   return {
//     props: {
//       product: data,
//     },
//   };
// }

export async function getStaticPaths(){
  const result = await fetch("https://dummyjson.com/products");
  const data = await result.json();

  const paths = data.products.map((product:{
    id:number,
  })=>({
    params:{
      id:product.id.toString()
    }
  }))

  return{
    paths,
    fallback:false
  }
}

export async function getStaticProps(context: { params: { id: string } }){
  const {id} = context.params;
  const result = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await result.json();

  return{
    props:{
      product:data
    }
  }
} 

export default function ProductDetails({ product }: { product: {
  id:number,
  title:string,
  description:string,
  price:number,
  discountPercentage:number,
  rating:number
} }) {
  return (
    <div>
      <h1>PRODUCT DETAILS</h1>
      <h2>
        <strong>TITLE: </strong>
        {product.title}
      </h2>
      <p>
        <strong>DESCRIPTION: </strong>
        {product.description}
      </p>
      <p>
        <strong>PRICE: </strong>
        {product.price}
      </p>
      <p>
        <strong>DISCOUNT: </strong>
        {product.discountPercentage}
      </p>
      <p>
        <strong>RATING: </strong>
        {product.rating}
      </p>
      <Link
        href={`/product/${product.id}/review`}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          // marginTop:"35px",
          marginBottom: "10px",
        }}
      >
        Read More
      </Link>
    </div>
  );
}
