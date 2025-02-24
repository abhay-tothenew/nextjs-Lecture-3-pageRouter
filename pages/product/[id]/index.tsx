import Link from "next/link";
import styles from './ProductDetails.module.css';

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

  const paths = data.products.map((product:any)=>({
    params:{
      id:product.id.toString()
    }
  }))

  return{
    paths,
    fallback:false
  }
}

export async function getStaticProps(context:any){
  const {id} = context.params;
  const result = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await result.json();

  return{
    props:{
      product:data
    }
  }
} 

export default function ProductDetails({ product }: { product: any }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PRODUCT DETAILS</h1>
      <h2 className={styles.subtitle}>
        <strong>TITLE: </strong>
        {product.title}
      </h2>
      <p className={styles.detail}>
        <strong>DESCRIPTION: </strong>
        {product.description}
      </p>
      <p className={styles.detail}>
        <strong>PRICE: </strong>
        {product.price}
      </p>
      <p className={styles.detail}>
        <strong>DISCOUNT: </strong>
        {product.discountPercentage}
      </p>
      <p className={styles.detail}>
        <strong>RATING: </strong>
        {product.rating}
      </p>
      <Link
        href={`/product/${product.id}/review`}
        className={styles.link}
      >
        Read More
      </Link>
    </div>
  );
}
