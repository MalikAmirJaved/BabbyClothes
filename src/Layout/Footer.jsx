import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Footer() {
    const Navigate = useNavigate();
    const footercontant = [
        {
            header: 'YOUR ACCOUNT',
            p1: 'Personal info',
            p2: 'Orders',
            p3: 'Credit slips',
            p4: 'Addresses',
        },
        {
            header: 'CUSTOMER SERVICE',
            p1: 'Monday to Friday',
            p2: '10am - 6.30pm (NewYork time)',
            p3: '+(001) 23 45 67 89',
            p4: 'shopify@zemez.io',
        },
        {
            header: 'OUR GUARANTEES',
            p1: 'Shipping in 3 days',
            p2: 'Free returns within 14 days',
            p3: 'Secure payments',
        },
        {
            header: 'Our company',
            p1: 'Delivery',
            p2: 'Legal Notice',
            p3: 'About Us',
            p4: 'Contact Us',
            p5: 'Terms and conditions of use',
        },
    ]
  return (
    <div>
        <div className=' justify-between px-2 lg:px-10 xl:px-16 2xl:px-24 pb-2 bg-white grid grid-cols-2 lg:flex'>
            {footercontant.map((key,index)=>(
                <div key={index} className='text-center space-y-1 mb-10'>
                    <h1 className='font-bold mb-4'>{key.header}</h1>
                    <p onClick={index === 3 ?()=>{Navigate('/delivery')}:''} className='text-[#3F3F3F] cursor-pointer hover:underline'>{key.p1}</p>
                    <p className='text-[#3F3F3F] cursor-pointer hover:underline'>{key.p2}</p>
                    <p className='text-[#3F3F3F] cursor-pointer hover:underline'>{key.p3}</p>
                    <p className='text-[#3F3F3F] cursor-pointer hover:underline'>{key.p4}</p>
                    <p onClick={index === 3 ? ()=>{Navigate('/term-condition')}:null} className={`text-[#3F3F3F] cursor-pointer hover:underline`}>{key.p5}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Footer