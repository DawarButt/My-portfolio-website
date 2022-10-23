import React from 'react'

const About = () => {
  return (
    <div name="about"
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-5'>
              Hi, I am Dawar Abbas on my journey to Full Stack Web Development. I am a passionate programmer and a creative thinker eager to learn and to improve my skill set with logical programming techniques.
            </p>
            <br />
            <p className='text-xl'>
              I have done with my Bachelor's of Science in Information Technology (BSIT) from Air University Islamabad. I have an expertise or worked with these Libraries/Frameworks/Databases/Tools.<br/>
              HTML 5, CSS 3, Bootstrap 4, JavaScript, React Js, Redux, Node Js, Express Js, Tailwind, MySQL, MongoDB, Git, VS Code and Postman. 
            </p>
        </div>
    </div>
  );
};

export default About