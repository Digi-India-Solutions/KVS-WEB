"use client";
import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer-section" role="contentinfo" aria-label="Footer">
      {/* ✅ KEEPING YOUR ORIGINAL NEWSLETTER SECTION UNCHANGED */}
      <div className="newsletter text-center py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold footerTitle mb-3">JOIN OUR EAT WELL, BE WELL CULTURE.</h2>
          <p className="text-muted footersubTitle mb-4">
            Stay up-to-date with our new openings, upcoming events, seasonal specials, and promotions.
          </p>
          <form className="d-flex justify-content-center flex-wrap gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-control newsletter-input"
              aria-label="Email address"
            />
            <button type="submit" className="btn newsletter-btn fw-semibold">
              SIGN ME UP!
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Main Footer Section */}
      <div className="footer text-white pt-5 pb-3">
        <div className="container text-center text-md-start">
          <div className="row align-items-start">

            {/* Company Info */}
            <div className="col-md-4 mb-4">
              <h4 className="fw-bold text-uppercase mb-3 company-name">KVS TOTAL CARE</h4>
              <p className="mb-1">417,Dinnur Main Road Kadugodi Plantation baengaluru Karnataka 560067</p>
              <p className="mb-0">Powered by <span className="fw-semibold">G&amp;I ALLIANCE</span></p>
            </div>

            {/* Social + Links */}
            <div className="col-md-4 mb-4 text-center">

                   <div>
                   <h5 className="fw-semibold mb-2">Sales Enquiry</h5> <span className='ps-3 text-warning'> Mon-Fri</span>
                   <p className="mb-2">📞 +91 9739694929</p>
                   <p className="mb-2">📞 ±91 6361278256</p>
                   </div>

              <div className="social-icons mb-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-circle">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle">
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/918929391112?text=Hi%20Emicare%2C%20I%20want%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle whatsapp-circle"
                >
                  <FaWhatsapp />
                </a>
              </div>

              {/* <ul className="list-inline footer-links mb-0">
                <li className="list-inline-item"><a href="#">DELHI</a></li>
                <li className="list-inline-item"><a href="#">UP</a></li>
                <li className="list-inline-item"><a href="#">HARYANA</a></li>
                <li className="list-inline-item"><a href="#">PUNJAB</a></li>
                <li className="list-inline-item"><a href="#">UTTRAKHAND</a></li>
                <li className="list-inline-item"><a href="#">RAJASTHAN</a></li>
              </ul> */}
            </div>

            {/* Contact Info */}
            <div className="col-md-4 mb-4   text-md-end text-center contact-info">
            
                <div className='d-flex justify-content-center '> 
              
                  <ul>
               <div className=' pb-4'>
               <b className="fw-semibold fs-5">Support</b> <br />  <span className='ps-3 text-warning'> Mon-Fri</span>
               </div>
                    <li>8929391114</li>
                  </ul>
                </div>
            </div>

          </div>
        </div>
      </div>

      {/* ✅ Bottom Bar */}
      <div className="footer-bottom text-center py-3">
        <p className="mb-0 small">
          © {new Date().getFullYear()} <strong>KVS TOTAL CARE</strong> | All Rights Reserved | Powered by KVS - INC
        </p>
      </div>
    </footer>
  );
}

