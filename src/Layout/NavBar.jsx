        import { faHeart, faSearch, faSearchDollar, faShop, faUser } from '@fortawesome/free-solid-svg-icons'
        import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown'
        import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
        import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart'
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
        import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

        function NavBar({hambar ,sethambar}) {
            const navigate = useNavigate();
            const [currencytoggle, setcurrencytoggle] = useState(true);
            const [currencybtn, setcurrencybtn] = useState(true);
            // const [hambar, sethambar] = useState(false);
        const [collectiondown, setcollectiondown] = useState(true);
        return (
            <div className='bg-white'>

                {/*Nave Bar */}
                <div className=''>
                    {/* top nav bar  */}
                    <div className='flex justify-between px-5 pt-7 items-center overflow-clip'>
                        {/*left side */}
                        <div className='cursor-pointer w-full'>
                            <span onClick={()=>{sethambar(prev => !prev)}}><FontAwesomeIcon icon={faBars} size='lg' className='lg:hidden'/></span>
                            {/* currency */}
                            <div className='hidden lg:flex items-center '>
                                {currencytoggle ? (<span  onClick={()=>{setcurrencybtn(prev => !prev)}} className=''>PKR</span>):(<span  onClick={()=>{setcurrencybtn(prev => !prev)}} className=''>USD</span>)}
                                <span onClick={()=>{setcurrencybtn(prev => !prev)}}><FontAwesomeIcon icon={faAngleDown}/></span>
                                {currencybtn ? (<span></span>):(
                                    <span className='flex flex-col absolute left-2 mt-24  bg-slate-100 py-1 px-2 text-sm'><ul>
                                        <li onClick={()=>{setcurrencybtn(prev => !prev); setcurrencytoggle(false)}} className='py-1 px-1 hover:bg-gray-200'>USD</li>
                                        <li onClick={()=>{setcurrencybtn(prev => !prev); setcurrencytoggle(true)}} className='py-1 px-1 hover:bg-gray-200'>PKR</li></ul>
                                    </span>
                                )}
                            </div>
                        </div>
                    
                        {/*Center side */}
                        <div className='flex justify-center items-center cursor-pointer w-full'>
                            <h1 className='font-extrabold text-3xl'>Kids_Cloths</h1>
                        </div>
                    
                    
                        {/*Right side */}
                        <div className=' w-full  '>
                            <div className='flex space-x-2 ml-2 float-right'>
                                <div className='flex items-center space-x-1 cursor-pointer'>
                                    <span className='hidden lg:flex'>Search</span>
                                    <FontAwesomeIcon icon={faSearch} size='lg' className='' /></div>
                                <div className='hidden lg:flex items-center space-x-1 cursor-pointer'>
                                    <span>Wishlist</span>
                                    <FontAwesomeIcon icon={faHeart}  className='hidden lg:flex'/></div>
                                <div className='hidden lg:flex items-center space-x-1 cursor-pointer'>
                                    <span>Account</span>
                                    <FontAwesomeIcon icon={faUser}  className='hidden lg:flex'/></div>
                                <div className='flex items-center space-x-1 cursor-pointer'>
                                    <span className='hidden lg:flex'>Cart</span>
                                    <FontAwesomeIcon icon={faShoppingCart} size='lg'/></div>

                            </div>
                        </div>

                    </div>
                    
                    {/* down nav Bar */}
                    <div className='lg:flex hidden mt-4 w-full justify-center items-center  '>
                        <ul className='flex space-x-5 font-bold text-[16px] '>
                            <li onClick={()=>{navigate('/home')}} className='hover:border-b-2 border-black pb-2 cursor-pointer'>HOME</li>
                            <li className='hover:border-b-2 border-black pb-2 cursor-pointer'>CATALOG</li>
                            <li onClick={()=>{setcollectiondown(prev => !prev)}}  className=' delay-800  cursor-pointer '><span className='hover:border-b-2 border-black pb-2'>COLLECTIONS</span>
                            {collectiondown ?
                                <div></div>
                                :
                                <div className='absolute flex flex-col px-2 py-1  mt-5'>
                                    <span onClick={()=>{setcollectiondown(false)}} className='py-1 px-1 hover:bg-gray-200'>Baby Boys</span>
                                    <span onClick={()=>{setcollectiondown(false)}} className='py-1 px-1 hover:bg-gray-200'>Baby Girls</span>
                                </div>
                        

                            }
                                </li>
                            <li className='hover:border-b-2 border-black pb-2 cursor-pointer'>SECTIONS ALL</li>
                            <li onClick={()=>{navigate('/contact')}} className='hover:border-b-2 border-black pb-2 cursor-pointer'>CONTACT US</li>
                        </ul>
                    </div>
                </div>


            </div>
        )
        }

        export default NavBar
