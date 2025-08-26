"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = (values) => {
    console.log("Form Data:", values);
    alert("Thank you for reaching out! We'll get back to you soon.");
    resetForm();
  };

  return (
    <main className="bg-gray-50 min-h-dvh py-20 px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-600 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg">
          Have a question, suggestion, or just want to say hello? Fill out the
          form below and we’ll get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-2">
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-600 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-700 transition"
              >
                Send Message
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </main>
  );
};

export default Contact;
