import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Contact() {
    const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row my-6 px-6 lg:px-10 max-w-screen-xl mx-auto ">
    <div className="space-y-6 flex-1">
        <div>
        <ul className="mb-4 flex space-x-3">
            <li onClick={()=>{navigate('/home')}}  className="cursor-pointer">Home </li>
            <li>/</li>
            <li onClick={()=>{navigate('/contact')}} className='cursor-pointer'>Contact Us</li>
        </ul>
        <div className='mt-16'>
            <h1 className="font-bold mb-2">CUSTOMER SERVICE</h1>
            <h5 className="mb-1">+09123 456 789</h5>
            <p className="mb-1">Monday to Friday</p>
            <p>10am-6:30pm (New York time)</p>
        </div>
        </div>

        <div>
        <h1 className="font-bold mb-2">Customer Service</h1>
        <h5 className="mb-1">+09123 456 789</h5>
        <p className="mb-1">Monday to Friday</p>
        <p>10am-6:30pm (New York time)</p>
        </div>

        <div>
        <h1 className="font-bold mb-2">STORE LOCATOR</h1>
        <p>521 Fifth Avenue, Pelham, NY 10783</p>
        </div>
    </div>

    <div className="space-y-6 flex-1 mt-28">
        <h1 className="font-bold mb-4">
        Have a question about a product, our company, or just want to chat? Email us!
        </h1>
        <p className="mb-4">
        We will be glad to assist you in any question and encourage you to share your ideas and improvements with us.
        </p>
        
        <h1 className="font-bold mb-2">Name</h1>
        <input className="w-full border border-black rounded-md cursor-text p-3 mb-4" placeholder="Name" type="text" />

        <h1 className="font-bold mb-2">Email</h1>
        <input className="w-full border border-black rounded-md cursor-text p-3 mb-4" placeholder="Email" type="email" />

        <h1 className="font-bold mb-2">Message</h1>
        <textarea className="w-full h-32 border border-black rounded-md cursor-text p-3 mb-4" placeholder="Message" />

        <button className="border border-black w-full lg:w-32 h-10 hover:bg-black hover:text-white cursor-pointer rounded-md p-2">
        Submit
        </button>
    </div>
    </div>
  )
}

export default Contact