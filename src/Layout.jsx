import React, { useState } from 'react';
import NavBar from './Layout/NavBar';
import SideBar from './Layout/SideBar';
import Footer from './Layout/Footer';

function Layout({ children }) {
  const [hambar, sethambar] = useState(false);

  return (
    <div className=''>
      {/* Navbar always fixed at the top */}
      <div className='fixed w-full top-0 left-0 z-40 '>
        <NavBar hambar={hambar} sethambar={sethambar} />
      </div>

      {/* Sidebar toggle on mobile view */}
      <div className='lg:hidden'>
        {hambar && (
          <div className='z-50 relative transition-all'>
            <SideBar sethambar={sethambar} />
          </div>
        )}
      </div>

      {/* Main content, adjusted for the fixed NavBar */}
      <div className='mt-20 lg:mt-28 Z-10'>
        {/* Your main content */}
        <div className="">
          {children}
        </div>
      </div>


      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
