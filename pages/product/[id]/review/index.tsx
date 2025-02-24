import { GetServerSideProps } from "next/types";


interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }
  
  interface ReviewPageProps {
    reviews: Review[];
  }

export const getServerSideProps: GetServerSideProps<ReviewPageProps> = async (context) => {
    const {id} = context.params as {id:string};
 
    const result = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await result.json();
 
    return{
     props:{
         reviews:data.reviews || []
     }
    }
 }
export default function ReviewPage({reviews}:ReviewPageProps){

    console.log(reviews);   
    
    return(
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-8">PRODUCT REVIEW</h1>

            {reviews.map((review)=>(
                <div key={review.reviewerEmail} className="border-b border-white py-4">
                    <h2 className="text-xl font-semibold mb-2">{review.reviewerName}</h2>
                    <p className="text-gray-300 mb-2">{review.comment}</p>
                    <p className="text-sm text-gray-400">Rating: {review.rating}</p>
                </div>
            ))}
        </div>
    )
}
