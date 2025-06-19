"use client";

import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  company: string;
}

// Toast component for feedback
const Toast: React.FC<{
  message: string;
  type: "success" | "error";
  onClose: () => void;
}> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={
        `fixed top-5 right-5 z-50 px-4 py-2 rounded-full shadow-lg font-medium ` +
        (type === "success"
          ? "bg-green-500 text-white"
          : "bg-red-500 text-white")
      }
    >
      {message}
    </div>
  );
};

const ContactSection: React.FC = () => {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const initialValues: FormValues = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
    company: Yup.string().required("Company is required"),
  });

  const handleSubmit = (
    values: FormValues,
    {
      resetForm,
      setSubmitting,
    }: { resetForm: () => void; setSubmitting: (b: boolean) => void }
  ) => {
    // simulate API call
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      setToast({ message: "Your message has been sent!", type: "success" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="bg-[#0067B1] text-white min-h-screen flex items-center justify-center px-6 md:px-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Left info */}
        <div className="md:w-2/5 pr-10 mb-12 md:mb-0">
          <h2 className="text-5xl font-bold mb-4">Get in touch</h2>
          <div className="w-20 h-1 bg-white mb-8"></div>
          <p className="text-lg mb-8 opacity-80">For general enquiries</p>
          <div className="space-y-6 text-base">
            <div>
              <span className="font-semibold block mb-2">Address:</span>
              110, 16th Road, Chembur, Mumbai - 400071
            </div>
            <div>
              <span className="font-semibold block mb-2">Phone:</span>
              +91 22 25208822
            </div>
            <div>
              <span className="font-semibold block mb-2">Email:</span>
              info@supremegroup.co.in
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="md:w-1/2 w-full">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <Field
                    name="fullName"
                    type="text"
                    placeholder="Full name"
                    className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/70 focus:border-white pb-2 text-lg"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-200 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/70 focus:border-white pb-2 text-lg"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-200 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    name="company"
                    type="text"
                    placeholder="Company"
                    className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/70 focus:border-white pb-2 text-lg"
                  />
                </div>
                <div>
                  <Field
                    name="message"
                    as="textarea"
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/70 focus:border-white pb-2 text-lg resize-none"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-200 text-sm mt-1"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-[#0067B1] rounded-full px-12 py-3 text-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default ContactSection;
