import React from 'react'
import dp2 from '../Images/home/dp2.png';
import dp4 from '../Images/home/dp4.png';
import dp7 from '../Images/home/dp7.png';
import dp1 from '../Images/home/dp1.png';
import dp3 from '../Images/home/dp3.png';
import dp5 from '../Images/home/dp5.png';
import clothes1 from "../Images/sectionall/clothes1.png";
import clothes2 from "../Images/sectionall/clothes2.png";
import clothes3 from "../Images/sectionall/clothes3.png";
import clothes4 from "../Images/sectionall/clothes4.png";
import clothes16 from "../Images/sectionall/clothes16.png";
import clothes17 from "../Images/sectionall/clothes17.png";
import clothes18 from "../Images/sectionall/clothes18.png";
import clothes19 from "../Images/sectionall/clothes19.png";
function SectionsAll() {

  const headimg = [
    {
      bgimg: dp7,
      footer: 'Baby Boy',
    },
    {
      bgimg: dp4,
      footer: 'Baby Girl',
    },
    {
      bgimg: dp2,
      footer: 'Baby neutral',
    }
  ]

  const header2 = [
    {
      bgimg: dp1,
      para: 'Summer Clothes 2019/20',
    },
    {
      bgimg: dp3,
      para: 'Summer Clothes 2019/20',
    },
    {
      bgimg: dp5,
      para: 'Summer Clothes 2019/20',
      header: 'New collection',
    }
  ]

  const header3= [
    {
      bgimg: clothes1,
      header: 'Toddler Boy',
    },
    {
      bgimg: clothes2,
      header: 'Toddler Girl',
    },
    {
      bgimg: clothes3,
      header: 'Kid Girl',
    },
    {
      bgimg: clothes4,
      header: 'kid Boy',
    }
  ]
  
  const header4= [
    {
      bgimg: clothes16,
      header: 'BABY NEUTRAL',
    },
    {
      bgimg: clothes17,
      header: 'BABY GIRL',
    },
    {
      bgimg: clothes18,
      header: 'SALE',
    },
    {
      bgimg: clothes19,
      header: 'BABY GIRL',
    }
  ]
  return (
    <div className=''>
      {/* 1st para  */}
      <div className='flex flex-col text-center my-10 px-8'>
        <div className='text-2xl font-semibold my-4'>Banners collection</div>
        <div className=''>The section with banners allows you to place banners and link them to the collection you want to describe.</div>

      </div>
      <div className='my-7 mx-10 sm:mx-16 lg:mx-44 border-t border-[#222]'></div>

      {/* 1st pictures */}
      <div className=' grid grid-cols-1 justify-center px-4 sm:grid-cols-3 '>
          {headimg.map((key, index)=>(
            <div key={index} className='w-full'>
              <div style={{ backgroundImage: `url(${key.bgimg})` }} className='flex items-end h-[400px] bg-center xl:h-[500px] bg-no-repeat bg-cover mx-1 my-1 rounded-md'>
                <div className='mb-12 ml-5 font-bold '>{key.footer}</div>
              </div>
            </div>
          ))}
      </div>

      {/* 2nd para  */}
      <div className='flex flex-col text-center my-10 px-8 '>
        <div className='text-2xl font-semibold my-4'>Banners </div>
        <div className=''>The section with banners allows you to place banners of three different sizes and link them to the product or collection you want to describe.</div>

      </div>
      <div className='my-7 mx-10 sm:mx-16 lg:mx-44 border-t border-[#222]'></div>
        {/* 2nd0 Pictures */}
      <div>
      {header2.map((key, index)=>(
            <div key={index} className={`w-full 
              ${index === 0 ? 'sm:w-1/2 sm:inline-block':''}
              ${index === 1 ? 'sm:w-1/2 sm:inline-block':''}
              `}>
              <div style={{ backgroundImage: `url(${key.bgimg})` }} className={`flex items-end h-[350px] bg-center xl:h-[500px] bg-no-repeat bg-cover mx-2 my-2 rounded-md`}>
                <div className={`text-white mb-12 ml-10 space-y-3 ${index === 2 ? 'text-center ml-0 justify-center flex flex-col w-full':''}`}>
                  <div className='  font-bold'>{key.para}</div>
                  <div className='text-5xl font-bold'>{key.header}</div>
                  
                  {index === 2 ? (
                    <div className='flex justify-center space-x-3'>
                      <div ><button className={` bg-transparent outline-black outline-2 outline text-black font-bold px-6 py-3 hover:bg-[#363636] hover:outline-[#363636]`} type='button'>SHOP BOYS</button></div>
                      <div ><button className={` bg-transparent outline-black outline-2 outline text-black font-bold px-6 py-3 hover:bg-[#363636] hover:outline-[#363636]`} type='button'>SHOP GIRLS</button></div>

                    </div>
                  ):(<div ><button className=' bg-white text-blue-600 font-bold px-6 py-3 hover:bg-black' type='button'>SHOP</button></div>)}
                 
                  
                </div>
              </div>
            </div>
          ))}
      </div>
        

      {/* 3rd para  */}
      <div className='flex flex-col text-center my-10 px-8'>
        <div className='text-2xl font-semibold my-4'>Collection list</div>
        <div className=''>Do you have new collections in the store? Add to the homepage with this section accommodating up to 12 collections.</div>

      </div>
      <div className='my-7 mx-10 sm:mx-16 lg:mx-44 border-t border-[#222]'></div>
        
        {/* 3rd pictures */}
        <div>
          <div className='justify-center flex text-center text-2xl font-bold'>Collections</div>
          <div className='lg:flex justify-center'>
            {header3.map((key, index)=>(
            <div key={index} className={` bg-gray-100 lg:inline-block lg:w-1/5 lg:mx-2  mx-6 sm:mx-16 md:mx-24 my-10   justify-center`}>
              <div style={{ backgroundImage: `url(${key.bgimg})` }} className={`flex items-end h-[300px] bg-center xl:h-[400px] bg-no-repeat mx-2 my-2 rounded-md`}>
                <div className={`text-black mb-5 ml-5 space-y-3 `}>
                  <div className='text-xl font-bold'>{key.header}</div>
                </div>
              </div>
            </div>
          ))}
          </div>
          
        </div>

  
        {/* 4rth pictures */}
          
        <div>
          <div className='justify-center flex text-center text-2xl font-bold'>Collections</div>
          <div className='lg:flex justify-center'>
            {header4.map((key, index)=>(
              <div key={index} className={`bg-gray-100 lg:inline-block lg:w-1/5 lg:mx-2  mx-6 sm:mx-16 md:mx-24 my-10  justify-center`}>
                <div style={{
                            backgroundImage: `url(${key.bgimg})`,
                            backgroundSize: '150px',  // Set the background size to 15px width
                            backgroundRepeat: 'no-repeat',  // Ensure the background doesn't repeat
                          }} className={`flex items-end h-[300px] bg-center xl:h-[400px] bg-cover  bg-no-repeat mx-2 my-2 rounded-md`}>
                  <div className={`text-black mb-5 ml-5 space-y-3 `}>
                    <div className='text-xl font-bold'>{key.header}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      
    </div>
  )
}

export default SectionsAll