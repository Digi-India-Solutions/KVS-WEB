import Image from 'next/image'
import React from 'react'

import './navbar.css'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Link from 'next/link';
import logo from '@/app/Assist/Images/logo.png'

export default function Navbar() {
  return (
    <>
      <div className="container navbarContainer">
        <div className='NavbarMainSec'>
           <Link href="/">
           <div className=''>
               <Image src={logo} alt="LogoImage" className='brandLogo' />
              {/* <h3 className='text-stroke'>Warranty Extended </h3> */}
              
            </div>
           </Link>
          <div className='d-flex align-items-center gap-4'>
            <h3 className='contactNumber'><span className='spanText'>Call us: </span>  1800 266 3333</h3>

            <main className="download-container d-flex gap-3">
              <a href="/warrentyExtend.apk" download>
                <button className="download-btn1"> <IoLogoGooglePlaystore className='pb-1 fs-3' /> Download APK</button>
              </a>
              <a href="/earnwithus" >
                <button className="download-btn2">Lets Earn</button>
              </a>
            </main>
          </div>

        </div>
      </div>
    </>
  )
}
