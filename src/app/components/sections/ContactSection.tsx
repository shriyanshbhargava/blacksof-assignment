"use client"
import React, { useState, useEffect } from "react";

interface FormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  company: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string;
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
        `fixed top-4 right-4 sm:top-5 sm:right-5 z-50 px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg font-medium text-sm sm:text-base max-w-xs sm:max-w-none ` +
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

  const [formData, setFormData] = useState<FormValues>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormValues, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
        company: "",
      });
      setToast({ message: "Your message has been sent!", type: "success" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="bg-[#0067B1] text-white min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-12 md:py-16"
    >
      <div className="container mx-auto w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Left info */}
          <div className="w-full lg:w-2/5 xl:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Get in touch
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-white mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-80">
              For general enquiries
            </p>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg">
              <div>
                <span className="font-semibold block mb-1 sm:mb-2">Address:</span>
                <span className="opacity-90">110, 16th Road, Chembur, Mumbai - 400071</span>
              </div>
              <div>
                <span className="font-semibold block mb-1 sm:mb-2">Phone:</span>
                <a href="tel:+912225208822" className="opacity-90 hover:opacity-100 transition-opacity">
                  +91 22 25208822
                </a>
              </div>
              <div>
                <span className="font-semibold block mb-1 sm:mb-2">Email:</span>
                <a href="mailto:info@supremegroup.co.in" className="opacity-90 hover:opacity-100 transition-opacity">
                  info@supremegroup.co.in
                </a>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="w-full lg:w-1/2 xl:w-2/5">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/70 focus:border-white focus:outline-none pb-2 sm:pb-3 text-base sm:text-lg transition-colors"
                />
                {errors.fullName && (
                  <div className="text-red-200 text-xs sm:text-sm mt-1">
                    {errors.fullName}
                  </div>
                )}
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/70 focus:border-white focus:outline-none pb-2 sm:pb-3 text-base sm:text-lg transition-colors"
                />
                {errors.email && (
                  <div className="text-red-200 text-xs sm:text-sm mt-1">
                    {errors.email}
                  </div>
                )}
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/70 focus:border-white focus:outline-none pb-2 sm:pb-3 text-base sm:text-lg transition-colors"
                />
                {errors.company && (
                  <div className="text-red-200 text-xs sm:text-sm mt-1">
                    {errors.company}
                  </div>
                )}
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/70 focus:border-white focus:outline-none pb-2 sm:pb-3 text-base sm:text-lg transition-colors"
                />
                {errors.subject && (
                  <div className="text-red-200 text-xs sm:text-sm mt-1">
                    {errors.subject}
                  </div>
                )}
              </div>
              
              <div>
                <textarea
                  placeholder="Message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/70 focus:border-white focus:outline-none pb-2 sm:pb-3 text-base sm:text-lg resize-none transition-colors min-h-[80px] sm:min-h-[100px]"
                />
                {errors.message && (
                  <div className="text-red-200 text-xs sm:text-sm mt-1">
                    {errors.message}
                  </div>
                )}
              </div>
              
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-white text-[#0067B1] rounded-full px-8 sm:px-12 py-2.5 sm:py-3 text-base sm:text-lg font-semibold hover:bg-gray-100 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </div>
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