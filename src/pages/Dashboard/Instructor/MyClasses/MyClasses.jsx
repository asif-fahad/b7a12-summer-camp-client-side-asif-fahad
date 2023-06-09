import React, { useEffect, useState } from 'react';
import useTitle from '../../../../hooks/useTitle';

const MyClasses = () => {

    useTitle('My Classes');

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-asif-fahad.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Price</th>
                        <th>Available Seats</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        classes.map((c, index) => <tr key={c._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={c.photo} />
                                    </div>
                                </div>
                            </td>
                            <td>{c.name}</td>
                            <td>{c.iName}</td>
                            <td>{c.email}</td>
                            <td>{c.price}</td>
                            <td>{c.seats}</td>
                            <th>
                                <h1>{c.status}</h1>
                            </th>
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default MyClasses;