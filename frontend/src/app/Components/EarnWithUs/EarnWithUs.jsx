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
    productName: "",
    purchaseDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // SweetAlert success message
    Swal.fire({
      title: "🎉 Success!",
      text: "Customer details submitted successfully. Your download will begin shortly.",
      icon: "success",
      confirmButtonText: "Okay",
      customClass: {
        confirmButton: "swal2-confirm btn btn-primary px-4 py-2",
      },
    }).then(() => {
      // Trigger APK download from the public folder
      // const link = document.createElement("a");
      // link.href = "/warrentyExtend.apk"; // ✅ Put your APK file inside the public folder
      // link.download = "warrentyExtend.apk";
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);

      setFormData({
        customerName: "",
        customerEmail: "",
        phoneNumber: "",
        productName: "",
        purchaseDate: "",
      })

    });
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

          <div className="mb-3">
            <label className="form-label fw-semibold">Product Name</label>
            <input
              type="text"
              className="form-control"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Purchase Date</label>
            <input
              type="date"
              className="form-control"
              name="purchaseDate"
              value={formData.purchaseDate}
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
