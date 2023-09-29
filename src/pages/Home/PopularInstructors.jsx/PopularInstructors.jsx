import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const PopularInstructors = () => {

    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state

    // console.log(instructors);

    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-asif-fahad.vercel.app/users/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
                setLoading(false); // Set loading to false after data is fetched
            })
    }, [])


    return (
        <div className='m-8'>
            <div>
                <h1 className='text-6xl text-center text-red-950 p-4'>Popular Instructors</h1>
            </div>
            {loading ? (<LoadingSpinner />) : (
                <div className='grid grid-cols lg:grid-cols-6 md:grid-cols-3 mt-2 gap-5'>
                    {
                        instructors.slice(0, 6).map(c =>
                            <div key={c._id} className="card lg:w-48 md:w-48   mx-auto flex w-60 flex-col justify-center bg-gradient-to-r from-gray-100 to-gray-300 rounded-2xl shadow-xl shadow-slate-300/60 transform transition hover:scale-105 duration-500">
                                <figure className="px-10 pt-10"><img src={c.photo} alt="Sports" className='h-36 aspect-video w-full rounded-full object-cover object-center' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-blue-400 text-base">{c.name}</h2>
                                    <p className='text-sm tracking-tight font-medium text-slate-400 leading-6'>{c.email}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            )}
        </div>
    );
};

export default PopularInstructors;
