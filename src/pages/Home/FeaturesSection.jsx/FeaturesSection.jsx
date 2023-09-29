import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaChalkboardTeacher, FaUsers, FaCalendarAlt, FaUserGraduate } from 'react-icons/fa';

const FeaturesSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration in milliseconds
            offset: 200, // Offset (in pixels) from the element's position when animation starts
            easing: 'ease-in-out', // Easing function for the animation
            once: false, // Whether to only animate elements once or on every scroll
        });
    }, []);

    const featuresData = [
        {
            icon: <FaChalkboardTeacher />,
            count: 2500,
            label: "Lessons"
        },
        {
            icon: <FaUsers />,
            count: 5000,
            label: "Followers"
        },
        {
            icon: <FaCalendarAlt />,
            count: 30,
            label: "Classes"
        },
        {
            icon: <FaUserGraduate />,
            count: 300,
            label: "Students"
        }
    ];


    return (
        <div className='m-8'>
            <div>
                <h1 className='text-6xl text-center text-red-950 p-4'>Features</h1>
            </div>
            <div className='bg-gray-800 p-10 my-5'>
                <div className='flex flex-col justify-center gap-20 lg:flex-row'>
                    {featuresData.map((feature, index) => (
                        <div data-aos="fade-down" key={index} className='flex bg-green-600 border border-white p-5 gap-5'>
                            <div className='flex items-center'>
                                {feature.icon}
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-2xl'>{feature.count}</h1>
                                <p>{feature.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;