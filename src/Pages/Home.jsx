    import React from 'react';
    import dp1 from '../Images/home/dp1.png';
    import dp2 from '../Images/home/dp2.png';
    import dp3 from '../Images/home/dp3.png';
    import dp4 from '../Images/home/dp4.png';
    import dp8 from '../Images/home/dp8.png';
    import dp5 from '../Images/home/dp5.png';
    import dp7 from '../Images/home/dp7.png';
    import dp6 from '../Images/home/dp6.png';

    const Home = () => {
        const homeItem = [
            {
                bgpic: dp1,
                header: 'New IN',
                para: 'Explore this week’s kidswear pieces of the season curated for you autumn/winter kids collection.',
            },
            {
                bgpic: dp2,
                header: 'BACK TO SCHOOL',
                para: 'Comfortable cotton or knitted pieces are perfect for casual looks.',
            },
            {
                bgpic: dp3,
                header: 'GIRLS',

            },
            {
                bgpic: dp4,
                header: 'BOYS',

            },
            {
                bgpic: dp5,
                header: 'shoes and bags',
                para: 'Explore the new collection of shoes and bags',
            },
            {
                bgpic: dp6,
                header: 'special occasion',
            },
            {
                bgpic: dp7,
                header: 'hot PRICES',
            },
            {
                bgpic: dp8,
                header: 'UNDERWEAR | PAJAMAS',
            },
            
        ];

        return (
            <div className='mb-10'>
                {homeItem.map((key, index) => (
                    <div key={index} className={`relative px-3 md:px-5 lg:px-16 mt-3 
                        ${index === 1 ? 'md:h-[800px] md:w-full md:inline-block':''} 
                        ${index === 3 ? 'md:h-[900px] md:w-full md:inline-block':''} 
                        ${index === 5 ? 'md:h-[300px] md:w-1/3 md:inline-block':''} 
                        ${index === 6 ? 'md:h-[300px] md:w-1/3 md:inline-block':''}
                        ${index === 7 ? 'md:h-[300px] md:w-1/3 md:inline-block':''}
                         `}>
                        {/* Image at the top */}
                        <img src={key.bgpic} alt="" className='w-full h-auto' /> {/* Keep image at the top */}

                        {/* Content overlay */}
                        <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10 text-center'>
                            <div className='text-white space-y-3' >
                                <h1 className='text-4xl md:text-5xl lg:text-6xl px-5 '>{key.header}</h1>
                                {/* Paragraph visibility based on screen size */}
                                <p className='hidden sm:block text-sm md:text-base lg:text-lg px-4'>{key.para}</p>
                                <button 
                                    type='button' 
                                    className='bg-transparent outline-white outline-2 outline px-5 py-2 text-sm font-bold hover:outline-[#252525] hover:bg-[#252525]'>
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    export default Home;
