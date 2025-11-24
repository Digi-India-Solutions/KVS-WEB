"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./earnwithus.css";

export default function EarnWithUs() {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://mail.kvstotalcare.in/sendEarnWithUs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      Swal.fire({
        title: "🎉 Success!",
        text: "Customer details submitted successfully. Please download the APK.",
        icon: "success",
        confirmButtonText: "Okay",
        customClass: { confirmButton: "swal2-confirm btn btn-primary px-4 py-2" },
      }).then(() => {
        setFormData({ customerName: "", customerEmail: "", phoneNumber: "" });
      });
    } else {
      Swal.fire({
        title: "❌ Error!",
        text: data.message || "Something went wrong.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: "❌ Error!",
      text: "Something went wrong while sending email.",
      icon: "error",
      confirmButtonText: "Okay",
    });
  }
};



  return (
    <div className="earn-with-us-container d-flex justify-content-center align-items-center py-5">
      <div className="earn-with-us shadow-lg rounded-4 p-5">
        <h2 className="text-center mb-3 fw-bold text-gradient">Earn With Us 💼</h2>
        <p className="text-center mb-4 text-muted">
          Connect our Team to Start Extend warranty business and grow your self.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Customer Name</label>
            <input
              type="text"
              className="form-control"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Customer Email</label>
            <input
              type="email"
              className="form-control"
              name="customerEmail"
              value={formData.customerEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-gradient px-5 py-2 fw-semibold">
              Submit & Earn 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
