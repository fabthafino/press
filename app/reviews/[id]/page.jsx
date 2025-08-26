import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase.config";
import { FaTrash } from "react-icons/fa";

const singleReview = async (id) => {
  if (!id) return null;

  try {
    const docRef = doc(db, "reviews", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      return { id, ...docSnap.data() };
    } else {
      // docSnap.data() will be undefined in this case
      ("No such document!");
    }
  } catch (error) {
    console.error("An error occurred", error);
    alert("Oops, somthing went wrong");
  }
};

const page = async ({ params }) => {
  const perReviews = await singleReview(params.id);
  // console.log(perReviews);
  
  //   return <p>ID: {params.id}</p>;
  return (
    <main>
      <main className="min-h-screen px-5 py-10 max-w-3xl mx-auto">
        <div className="bg-white shadow-md rounded-md p-6">
          <h1 className="mb-4 px-3 py-1 text-2xl text-gray-800 font-bold">
            {perReviews.book}
          </h1>
          <h1 className="text-xl font-light text-gray-800 mb-2">
            {perReviews.review}
          </h1>
          <p className="text-sm text-gray-500 mb-1">By {perReviews.author}</p>
          <p className="text-xs text-gray-400 mb-6">
            Posted on {perReviews.timestamp}
          </p>
          <p className="text-gray-700 leading-7 whitespace-pre-line">
            {perReviews.body}
          </p>
        </div>
      </main>
    </main>
  );
};

export default page;
