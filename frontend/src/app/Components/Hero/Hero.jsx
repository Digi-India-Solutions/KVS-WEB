"use client";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center text-white">
      <div className="hero-content container">
        <h1 className="fw-bold display-5 mb-3">
          Earn More by Extending Customer Warranties
        </h1>
        <p className="lead mb-4">
          Partner with <strong>WarrantyExtend</strong> to offer your customers
          easy warranty extensions and earn instant commissions for every
          registration.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button
            className="btn btn-warning Joinbutton px-5 py-2 fw-semibold"
            onClick={() => router.push("/register")}
          >
            Join Now
          </button>
          <button
            className="btn btn-outline-light px-5 py-2 fw-semibold"
            onClick={() => router.push("/")}
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
}
