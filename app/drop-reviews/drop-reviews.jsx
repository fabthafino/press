"use client";
import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase.config";
import { FiLoader } from "react-icons/fi";
<<<<<<< HEAD
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
=======
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
>>>>>>> 35a84ddf958dc77eb401656c0e8cb39f215ba94c
  boxShadow: 24,
  p: 4,
};

const DropReviews = ({ session }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues = {
    book: "",
    review: "",
  };

  const formValidation = Yup.object({
    book: Yup.string().required("Book name is required"),
    review: Yup.string()
      .required("Book review is required")
      .min(50, "Minimun of 50 characters required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      // create an object that would be sent to the db
      const reviewData = {
        author: session?.user?.name,
        img: session?.user?.image,
        timestamp: new Date().toLocaleDateString(),
        userId: session?.user?.id,
        ...values,
      };

      const docRef = await addDoc(collection(db, "reviews"), reviewData);
      handleOpen()

<<<<<<< HEAD
      ("Document written with ID: ", docRef.id);
=======
      // console.log("Document written with ID: ", docRef.id);
>>>>>>> 35a84ddf958dc77eb401656c0e8cb39f215ba94c
      resetForm();
    } catch (error) {
      console.error("Error adding data", error);
      alert("Oops, an error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-dvh lg:p-6 p-3 space-y-10 bg-gray-50">
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="md:text-4xl text-2xl font-extrabold text-gray-900 uppercase">
          Write your Review
        </h1>
        <p className="text-gray-700 md:text-xl text-base">
          Add your unique touch to a growing community of book lovers
        </p>
      </div>

      <section className="md:max-w-2xl w-full mx-auto shadow-md p-3 rounded-md">
        <Formik
          initialValues={initialValues}
          validationSchema={formValidation}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-3">
            <div className="">
              <label className="text-sm">Book Title</label>
              <Field
                name="book"
                className="w-full outline-none border border-gray-200 p-2 rounded-md bg-white"
              />
              <ErrorMessage
                name="book"
                component={"p"}
                className="text-xs text-red-500"
              />
            </div>
            <div className="">
              <label className="text-sm">Book Review</label>
              <Field
                name="review"
                as="textarea"
                className="w-full outline-none border border-gray-200 p-2 rounded-md bg-white"
              />
              <ErrorMessage
                name="review"
                component={"p"}
                className="text-xs text-red-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                disabled={loading}
                type="submit"
                className="bg-yellow-700 hover:bg-yellow-800 transition-colors duration-300 text-white text-xl rounded-md py-2 px-5"
              >
                {loading ? (
                  <FiLoader className="animate-spin text-2xl text-center" />
                ) : (
                  "Post Review"
                )}
              </button>
            </div>
          </Form>
        </Formik>
      </section>

<<<<<<< HEAD
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"   
=======
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
>>>>>>> 35a84ddf958dc77eb401656c0e8cb39f215ba94c
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
<<<<<<< HEAD
           Post Successful
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your Review has been succesfully sent.
=======
            Post Sucessfull
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your Review has been sucessfully sent.
>>>>>>> 35a84ddf958dc77eb401656c0e8cb39f215ba94c
          </Typography>
        </Box>
      </Modal>
    </main>
  );
};

export default DropReviews;
