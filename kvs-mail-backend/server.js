require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express(); // initialize app

// Allow requests from your website
app.use(cors({ origin: "https://kvstotalcare.in" }));

// Parse JSON bodies
app.use(express.json());

// ===== Existing form endpoint =====
app.post("/sendMail", async (req, res) => {
  const { name, mobile, email, agree } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${process.env.FROM_NAME}" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: "New Inquiry",
      html: `
        <h3>New Inquiry Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Agreed:</b> ${agree ? "Yes" : "No"}</p>
      `,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// ===== New Earn With Us form endpoint =====
app.post("/sendEarnWithUs", async (req, res) => {
  const { customerName, customerEmail, phoneNumber } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${process.env.FROM_NAME}" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: "New Earn With Us Submission",
      html: `
        <h3>New Customer Submission</h3>
        <p><b>Name:</b> ${customerName}</p>
        <p><b>Email:</b> ${customerEmail}</p>
        <p><b>Phone:</b> ${phoneNumber}</p>
      `,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// ===== Start the server =====
app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
