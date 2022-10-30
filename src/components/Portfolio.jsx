import React from 'react';
import virk from "../assets/portfolio/virk.png";
import chat from "../assets/portfolio/chat.png";
import react from "../assets/portfolio/react.jpeg";
import estore from "../assets/portfolio/estore.jpg";
import resturant from "../assets/portfolio/resturant.jpg";
import bank from "../assets/portfolio/bank.PNG";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: virk,
            href: "https://github.com/DawarButt/VIRK-E-pharmacy"
        },
        {
            id: 2,
            src: chat,
            href: "https://github.com/DawarButt/MERN-Stack-Based-Chat-Application"
        },
        {
            id: 3,
            src: bank,
            href: "https://github.com/DawarButt/React_Bank_App"
        },
        {
            id: 4,
            src: react,
            href: "https://github.com/DawarButt/ReactWebsite"
        },
        {
            id: 5,
            src: estore,
            href: "https://github.com/DawarButt/E-Store"
        },
        {
            id: 6,
            src: resturant,
            href: "https://github.com/DawarButt/Restaurant-"
        },
    ]

  return (
    <div name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6'>Check out some of my work right here.</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id, src, href}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                        {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            Demo
                        </button> */}
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            <a href={href} target="_blank" rel='noreferrer'>Code</a> 
                        </button>
                    </div>
                </div>
                ))
            }
                            
            </div>

        </div>
    </div>
  );
};

export default Portfolio