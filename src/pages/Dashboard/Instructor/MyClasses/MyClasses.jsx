import React, { useEffect, useState } from 'react';

const MyClasses = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
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
                        classes.map((c, index) => <tr key={c.id}>
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
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default MyClasses;