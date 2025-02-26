import React from 'react'

function Footer() {
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
        <div className='flex justify-between px-32 pb-2 bg-white hidden'>
            {footercontant.map((key,index)=>(
                <div key={index} className='text-center space-y-1'>
                    <h1 className='font-bold mb-4'>{key.header}</h1>
                    <p className='text-[#3F3F3F]'>{key.p1}</p>
                    <p className='text-[#3F3F3F]'>{key.p2}</p>
                    <p className='text-[#3F3F3F]'>{key.p3}</p>
                    <p className='text-[#3F3F3F]'>{key.p4}</p>
                    <p className='text-[#3F3F3F]'>{key.p5}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Footer