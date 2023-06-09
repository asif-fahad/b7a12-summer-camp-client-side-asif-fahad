import React, { useEffect, useState } from 'react';
import useTitle from '../../../../hooks/useTitle';

const ManageClasses = () => {
    const [classes, setClasses] = useState([]);

    useTitle('Manage Classes');

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
                        <th>Status</th>
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
                                <button className="btn btn-ghost btn-xs">{c.status}</button>
                            </th>
                            <th>
                                <div className='flex flex-col space-y-1'>
                                    <button className="btn btn-primary btn-xs">Approve</button>
                                    <button className="btn btn-secondary btn-xs">Deny</button>
                                    <button className="btn btn-accent btn-xs">Feedback</button>
                                </div>
                            </th>
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default ManageClasses;