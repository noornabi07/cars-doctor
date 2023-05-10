import React from 'react';
import about1 from '../../../assets/images/about_us/person.jpg'
import about2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='px-20'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={about1} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={about2} className="w-1/2 border-4 border-slate-700 absolute right-5 top-1/2 rounded-lg shadow-2xl" />
                       
                    </div>
                    <div className='lg:w-1/2'>
                        <h3 className='font-bold text-orange-600 text-2xl'>About Us</h3>
                        <h1 className="text-5xl font-bold w-96 mt-4">We are qualified & of experience in this field</h1>
                        <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                        <button className="btn btn-secondary mt-3">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;