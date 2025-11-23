"use client"
import React from "react";
import "./ExtendedWarrantyPage.css"; // External CSS file
import Image from "next/image";
import icon1 from "@/app/Assist/Images/icon1.png"
import icon2 from "@/app/Assist/Images/icon2.png"
import icon3 from "@/app/Assist/Images/icon3.png"
import icon4 from '@/app/Assist/Images/verifiy.png'
import icon5 from '@/app/Assist/Images/device.png'

// import app1 from '@/app/Assist/Images/app1.png'
// import app2 from '@/app/Assist/Images/app2.png'
// import app3 from '@/app/Assist/Images/app3.png'
// import app4 from '@/app/Assist/Images/app4.png'
// import app5 from '@/app/Assist/Images/app5.png'
// import app6 from '@/app/Assist/Images/app6.png'
// import app7 from '@/app/Assist/Images/app7.png'
// import app8 from '@/app/Assist/Images/app8.png'
// import app9 from '@/app/Assist/Images/app9.png'
// import app10 from '@/app/Assist/Images/app10.png'
// import app11 from '@/app/Assist/Images/app11.png'
// import app12 from '@/app/Assist/Images/app12.png'
// import app13 from '@/app/Assist/Images/app3.png'
// import app14 from '@/app/Assist/Images/app4.png'

import app1 from '@/app/Assist/Images/tv.png'
import app2 from '@/app/Assist/Images/app2.png'
import app3 from '@/app/Assist/Images/air-conditioner.png'
import app4 from '@/app/Assist/Images/washing-machine.png'
import app5 from '@/app/Assist/Images/microwave.png'
import app6 from '@/app/Assist/Images/air-cooler.png'
import app7 from '@/app/Assist/Images/air-purifier.png'
import app8 from '@/app/Assist/Images/dish-washer.png'
import app9 from '@/app/Assist/Images/dryer.png'
import app10 from '@/app/Assist/Images/food-processor.png'
import app11 from '@/app/Assist/Images/kitchen-chimney.png'
import app12 from '@/app/Assist/Images/otg.png'
import app13 from '@/app/Assist/Images/vaccum-cleaner.png'
import app14 from '@/app/Assist/Images/water-heater.png'
import app15 from '@/app/Assist/Images/water-purifier.png'





import HearFromUs from "../HereFormUs/HereFormUs";

export default function ExtendedWarrantyPage() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };



  const application = [
    { id: 1, name: "Television", image: app1 },
    { id: 2, name: "Refrigerator", image: app2 },
    { id: 3, name: "Air Conditioner", image: app3 },
    { id: 4, name: "Washing Machine", image: app4 },
    { id: 5, name: "Microwave Oven", image: app5 },
    { id: 6, name: "Air Cooler", image: app6 },
    { id: 7, name: "Air Purifier", image: app7 },
    { id: 8, name: "Dish Washer", image: app8 },
    { id: 9, name: "Dryer", image: app9 },
    { id: 10, name: "Food Processor", image: app10 },
    { id: 11, name: "Kitchen Chimney", image: app11 },
    { id: 12, name: "OTG", image: app12 },
    { id: 13, name: "Vaccuum Cleaner", image: app13 },
    { id: 14, name: "Water Heater", image: app14 },
    { id: 15, name: "Water Purifier", image: app15 },



  ]

  return (
    <>
      <div className="QuickSuperSec">

        <div className="extended-page container py-4">
          {/* ===== Tabs ===== */}
          <nav className="navbar QuickService sticky-top bg-white border-bottom shadow-sm ">
            <ul className="nav tabList justify-content-center py-2 fw-medium">
              <li className="nav-item">
                <button onClick={() => handleScroll("why")} className="nav-link">Why Extended</button>
              </li>
              <li className="nav-item">
                <button onClick={() => handleScroll("how")} className="nav-link">How It Works</button>
              </li>
              <li className="nav-item">
                <button onClick={() => handleScroll("appliances")} className="nav-link">Appliances Covered</button>
              </li>
              <li className="nav-item">
                <button onClick={() => handleScroll("reviews")} className="nav-link">Reviews</button>
              </li>
              <li className="nav-item">
                <button onClick={() => handleScroll("faq")} className="nav-link">FAQ</button>
              </li>
            </ul>
          </nav>

          {/* ===== WHY EXTENDED ===== */}
          <div className="ExtentendOriginal">
            <section id="why" className=" WhyWork card mb-5">
              <h3 className="section-title">Why Extended warranty?</h3>

              <div className="row FrequentSection gy-4 mt-3">
                <div className=" d-flex extSec gap-3">
                  <Image src={icon1} alt="icon1" className="icons" width={34} height={34} />
                  <div>
                    <h6 className="fw-bold">Frequent Breakdowns are a reality</h6>
                    <p className="text-muted paratext mb-0">
                      Avoid inconvenience by getting an extended Warranty for your device.
                    </p>
                  </div>
                </div>

                <div className=" d-flex extSec gap-3">
                  <Image src={icon2} alt="icon1" className="icons" width={34} height={34} />
                  <div>
                    <h6 className="fw-bold">Repair costs are exorbitant</h6>
                    <p className="text-muted paratext mb-0">
                      A damaged panel can cost you nearly 75% of your TV cost. Save on such unexpected costs.
                    </p>
                  </div>
                </div>

                <div className=" d-flex extSec gap-3">
                  <Image src={icon3} alt="icon1" className="icons" width={34} height={34} />
                  <div>
                    <h6 className="fw-bold">Unqualified repairers are aplenty</h6>
                    <p className="text-muted paratext mb-0">
                      Extended warranty plan benefits ensure your product is in safe hands.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <div className="col-md-5">
              <div className='hear-section'>
                <HearFromUs />
              </div>
            </div>
          </div>


          {/* ===== HOW IT WORKS ===== */}
          <section id="how" className="HowWork card mb-5">
            <h3 className="section-title">How does it work?</h3>

            <ul className="list-group list-group-flush mt-3 steps-list">
              <li className="list-group-item listSection">
                <div><Image src={icon5} alt="icon1" className="icons me-4" width={34} height={34} /></div><span> Device breaks down</span>
              </li>
              <li className="list-group-item listSection">
                <div><Image src={icon3} alt="icon1" className="icons me-4" width={34} height={34} /> </div><span>Schedule an appointment anytime as per your convenience</span>
              </li>
              <li className="list-group-item listSection">
                <div> <Image src={icon4} alt="icon1" className="icons me-4" width={34} height={34} /></div> <span>Verified technician visits as per appointment</span>
              </li>
              <li className="list-group-item listSection">
                <div> <Image src={icon1} alt="icon1" className="icons me-4" width={34} height={34} /></div> <span> Pay nothing. Save time and hassles</span>
              </li>
            </ul>
          </section>

          {/* ===== APPLIANCES COVERED ===== */}
          <section id="appliances" className=" appliances card mb-5">
            <h3 className="section-title">Appliances Covered</h3>

            <div className="row text-center gy-4 mt-3">
              {application.map((item, i) => (
                <div key={i} className="col-6 col-md-3">
                  <div className="appliance-card rounded h-100">
                    <Image src={item.image} alt={item.name} className="appliance-image mb-2" width={40} height={40} />
                    <p className="mb-0 small">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* <p className="text-primary fw-semibold mt-3">+16 more</p> */}
          </section>

          {/* ===== CUSTOMER REVIEWS ===== */}
          <section id="reviews" className=" card reviews mb-5">
            <h3 className="section-title">Customer Reviews</h3>

            <div className="review-box mt-3">
              <p className="mb-1 fst-italic">
                “Great job. You guys know the key to customer satisfaction. Claim registration was very easy. I was updated of detail through phone, SMS and email.”
              </p>
              <strong>– P. SAGAR</strong>
            </div>

            <div className="review-box">
              <p className="mb-1 fst-italic">
                “This is the best service for home appliances with a good quality of spare parts. Glad to have this kind of service in India!”
              </p>
              <strong>– DEEPAL MEHTA</strong>
            </div>

            <div className="review-box">
              <p className="mb-1 fst-italic">
                “Really appreciate the service expert’s professionalism. He helped me understand the issue with my AC & repaired it very fast. Keep doing well!”
              </p>
              <strong>– VARADARAJ REDDY</strong>
            </div>

            <div className="review-box">
              <p className="mb-1 fst-italic">
                “Had a very pleasant experience with OneAssist. The help desk responded on time & assisted me with the required information. Thanks to team OneAssist.”
              </p>
              <strong>– SAURAV SINHA</strong>
            </div>
          </section>

          {/* ===== FAQ ===== */}

          <section>
            <div className="faqSection card">
              <h3 className="section-title">Frequently Asked Questions</h3>
              <div className="QuestionSection">
                <b>Q1. Why should I take a home appliances protection/ extended warranty plan?</b> <br />
                <p className="faqTextpara">ome Appliances allow us to enjoy life fully. A home warranty is a 1-year service contract product by OneAssist that covers the service and repair of most major home appliances (refrigerator, air conditioner, washing machine, television, and others) and system components due to failure, standard usage, and other problems due to age. A home warranty will typically cover most major components of your “refrigerator repair and service”, “air conditioner repair and service”, “washing machine repair and service”, “television repair and service” and “extended warranty” coverage.</p>
              </div>
              <div className="QuestionSection">
                <b>Q2. What is an Extended Warranty Plan?</b> <br />
                <p className="faqTextpara">Extended Warranty Plan (EWP), also commonly referred to as Extended Warranty Service Contract (EWSC) or Extended Service Plan (ESP). An extended Warranty (EW) is a Service Agreement that replicates and extends the manufacturers warranty on your product by a specified period. It effectively transfers the financial risk of product breakdown from the buyer of the EWP to its provider. In event of the covered product breaking down functionally, the provider of the EW undertakes the repairs of the product as per the terms specified in the EWP.</p>
              </div >
              <div className="QuestionSection">
                <b>Q3. Why should I buy Extended Warranty Pro+ offered by OneAssist?</b> <br />
                <p className="faqTextpara">Extended Warranty Pro+ provided by OneAssist not only extends the term length of the manufacturers warranty but also enhances the coverage and services provided during the extended period. With the plans extended time and enhanced coverage and services, you can enjoy your product worry-free with complete peace of mind. With Extended Warranty Pro+, you can extend the term of your coverage for up to additional 2 years. Your product is covered not just for defects in material and workmanship but also for mechanical and electrical failure arising out of normal wear and tear, and environmental factors such as heat, dust, and humidity. Requesting for service is easy, convenient, takes less than 5 minutes, and can be done 24x7x365. We also have a dedicated claims team to help you. Our service experts visit within 6 business hours of your request or you can schedule an appointment for a later time as per your convenience. We offer an unmatched 10-business-day repair or replacement guarantee! The majority of repairs we undertake take less than a week. You are entitled to TRULY UNLIMITED REPAIRS during the plan period up to the product purchase value i.e. the product price before any applicable discounts or offers like an exchange value. Every time your product fails, we will repair it without any cost to you. Your products are repaired in the convenience of your home.24/7 customer support to file a complaint and claim at your convenience.</p>
              </div>
              <div className="QuestionSection">
                <b>Q1. Why should I take a home appliances protection/ extended warranty plan?</b> <br />
                <p className="faqTextpara">ome Appliances allow us to enjoy life fully. A home warranty is a 1-year service contract product by OneAssist that covers the service and repair of most major home appliances (refrigerator, air conditioner, washing machine, television, and others) and system components due to failure, standard usage, and other problems due to age. A home warranty will typically cover most major components of your “refrigerator repair and service”, “air conditioner repair and service”, “washing machine repair and service”, “television repair and service” and “extended warranty” coverage.</p>
              </div>
            </div>
          </section>


          <section id="faq">

            {/* <div className="accordion mt-3" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
                Q1. Why should I take a home appliances protection/extended warranty plan?
              </button>
            </h2>
            <div id="q1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Home Appliances allow you to enjoy life fully. A home warranty is a 1-year service contract that covers repair and replacement of major home appliances due to failure or damage.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q2">
                Q2. What is an Extended Warranty Plan?
              </button>
            </h2>
            <div id="q2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Extended Warranty Plan (EWP) is a service agreement that extends the manufacturer’s warranty beyond a specified period. It covers repair and replacement due to product breakdowns.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q3">
                Q3. Why should I buy Extended Warranty Pro offered by OneAssist?
              </button>
            </h2>
            <div id="q3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                OneAssists Extended Warranty Pro offers coverage for major mechanical and electrical failures along with 24x7 customer support and unlimited repairs during the coverage period.
              </div>
            </div>
          </div>
        </div> */}
          </section>
        </div>
      </div>

    </>
  );
}
