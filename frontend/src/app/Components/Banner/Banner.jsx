import Image from 'next/image'
import React from 'react'
import "./banner.css"

export default function Banner() {
    return (
        <>
            <div className='BannerSec'>
                <div className='BannerMainSection'>
                    <div>
                        <h3 className='mainHeading'>Keep you Appliances & Electronics <br />
                            #AwesomeAsNew with <br />
                            Extended Warranty Pro</h3>
                        <div className='ListSection'>
                        <ul>
                            <li className='listText'><p>100% Cashless Repairs</p></li>
                            <li className='listText'><p>6-hour visit guarantee</p></li>
                            <li className='listText'><p> Unlimited repairs</p></li>
                            <li className='listText'><p> Digital claim filing & tracking</p></li>
                            <li className='listText'><p>100% Cashless Repairs</p></li>
                                
                               
                               
                            
                        </ul>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
