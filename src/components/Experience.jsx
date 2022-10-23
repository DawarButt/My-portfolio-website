import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png"
import bootstrap from "../assets/bootstrap.jpg"
import node from "../assets/node.png";
import mongodb from "../assets/mongo.png";

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-600'
        },
        {
            id: 6,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 7,
            src: node,
            title: 'Node Js',
            style: 'shadow-green-500'
        },
        {
            id: 8,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-500'
        },
        {
            id: 9,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
    ]


  return (
    <div name="experience"
        className='bg-gradient-to-b from-gray-800 to-black w-full h-full py-16'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2  inline'>
                    Experience
                </p>
                <p className='py-6'>These are the tech stacks I have worked with.</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 py-0'>
                {
                    techs.map(({id, src, title, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='' className='w-20 mx-auto' />
                    <p className='mt-4'>
                        {title}
                    </p>
                </div>
                    ))
                }
            </div>
            
            <p className='text-4xl font-bold border-b-4 border-gray-500 py-10 inline'>
                    1) Junior Business Developer, Status200 Pvt.Ltd
            </p>
            <p className='text-xl mt-5'>
            As a junior business developer, I am responsible to perform the following duties in a professional manner.<br/>
            •	Leads Generation <br/>
            •	Proposals crafting and submission <br/>
            •	Initialization of chats with the leads and directing them to the assigned Technical Business Development Manager.
            </p>
        </div>
    </div>
  )
}

export default Experience


