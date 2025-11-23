"use client";
import { useState } from "react";
import "./HearFromUs.css";

export default function HearFromUs() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    agree: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://mail.kvstotalcare.in/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      alert("Inquiry sent successfully!");
    } else {
      alert("Email failed to send.");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  }
};


  return (
    <div className="hear-container">
      <form className="hear-form" onSubmit={handleSubmit}>
        <h3>Hear from us!</h3>

        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" "   // 👈 important for floating label
            required
          />
          <label>Full Name</label>
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder=" "   // 👈 important for floating label
            required
          />
          <label>Mobile Number</label>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "   // 👈 important for floating label
            required
          />
          <label>Email</label>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <span>Yes, I agree with OneAssist to call me</span>
        </div>

        <button type="submit" className="submit-btn">
          GET A CALL FROM US →
        </button>

        <div className="stats">
          <div>
            <p>Google Rating</p>
            <h4>4.5/5</h4>
          </div>
          <div>
            <p>Happy Customers So Far</p>
            <h4>40 lakh++</h4>
          </div>
        </div>
      </form>
    </div>
  );
}
