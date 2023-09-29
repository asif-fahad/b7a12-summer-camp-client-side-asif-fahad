import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const PopularClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch, isLoading } = useQuery(
        ["classesPopular"],
        async () => {
            const res = await axiosSecure.get("/classes/popular");
            return res.data;
        }
    );

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div className='m-8'>
            <div>
                <h1 className='text-6xl text-center text-red-950 p-4'>Popular Classes</h1>
            </div>
            <div className='grid grid-cols lg:grid-cols-3 md:grid-cols-2 mt-2 gap-5'>
                {
                    classes.slice(0, 6).map(c =>
                        <div key={c._id} className="card w-full lg:w-96 shadow-cla-violate bg-gradient-to-t from-gray-300  to-gray-500 overflow-hidden">
                            <figure><img src={c.photo} alt="Sports" className='lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100' /></figure>
                            <div className="card-body">
                                <h2 className="card-title title-font text-lg font-medium text-gray-600 mb-3">{c.name}</h2>
                                <p className='text-black font-serif'>Price: {c.price}$</p>
                                <p className='text-black font-serif'>Available Seats: {c.seats}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularClasses;