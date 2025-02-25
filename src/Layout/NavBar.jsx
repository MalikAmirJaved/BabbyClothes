import { faHeart, faSearch, faSearchDollar, faShop, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function NavBar() {
  return (
    <div className=''>
        <div className='flex justify-between mx-5 mt-7 items-center overflow-clip'>
            {/*left side */}
            <div className='cursor-pointer w-full'>
                <FontAwesomeIcon icon={faBars} size='lg'/>
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




{/*sidebar */}
        <div className='hidden'>
            <ul>
                <li><span>HOME</span></li>
                <li><span>CATALOG</span></li>
                <li><span>COLLECTIONS</span></li>
                <li><span>CLEARANCE</span></li>
                <li><span>SECTIONS ALL</span></li>
                <li><span>CONTACT US</span></li>

            </ul>
        </div>
    </div>
  )
}

export default NavBar
