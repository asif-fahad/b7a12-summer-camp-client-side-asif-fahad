import React, { useEffect, useState } from 'react';

const PopularClasses = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-asif-fahad.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])


    return (
        <div className='m-8'>
            <div>
                <h1 className='text-6xl text-center text-red-950 p-4'>Popular Classes</h1>
            </div>
            <div className='grid grid-cols lg:grid-cols-3 mt-2 gap-5'>
                {
                    classes.slice(0, 6).map(c =>
                        <div key={c._id} className="card w-full lg:w-96 bg-green-300 shadow-xl">
                            <figure><img src={c.photo} alt="Sports" className='h-56 w-full' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{c.name}</h2>
                                <p>Price: {c.price}$</p>
                                <p>Available Seats: {c.seats}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularClasses;