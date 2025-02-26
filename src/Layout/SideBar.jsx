import { faX } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom'


function SideBar({sethambar, hambar}) {
    const navigate = useNavigate();

  return (
    <div className='flex'>
        {/*sidebar under large screen */}
        <div className={`overflow-y-auto h-screen w-2/3 transform transition-transform ease-in-out bg-white ${hambar ? '-translate-x-full duration-700 ' : 'translate-x-0 duration-500 '}`}>

            <ul className='space-y-6 font-bold mx-8 my-10'>
                <li  onClick={()=>{navigate('/home')}} ><div className='flex justify-between items-center'><span>HOME</span></div>
                
                </li>
                <li className='flex justify-between items-center'><span>CATALOG</span></li>
                <li className='flex justify-between items-center'>COLLECTIONS</li>
                
                <li className='flex justify-between items-center'><span>SECTIONS ALL</span></li>
                <li  onClick={()=>{navigate('/contact')}} className='flex justify-between items-center'><span>CONTACT US</span></li>
            </ul>
            <ul  className='space-y-3 font-bold mx-8 my-10'>
                
                <hr />
                <div className='flex flex-col'>ACCOUNT<span className='text-[#747474] text-sm'>
                ACCOUNT</span></div>
                <hr />
                <div className='flex flex-col'>CURRENCY<span><ul className='text-[#747474] text-sm'>
                    <li>PKR</li>
                    <li>USD</li></ul></span></div>
            </ul>
            
        </div>
        <div  onClick={()=>{sethambar(prev => !prev)}} className={`  flex justify-center items-center w-1/3 text-white text-4xl bg-black bg-opacity-60 divide-x-2`}>
            <FontAwesomeIcon icon={faX}/>
        </div>
    </div>
  );
}

export default SideBar;
