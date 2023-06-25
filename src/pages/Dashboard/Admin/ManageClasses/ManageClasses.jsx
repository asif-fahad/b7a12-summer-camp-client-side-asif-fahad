// import React, { useEffect, useState } from 'react';
import useTitle from '../../../../hooks/useTitle';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
// import Swal from "sweetalert2";

const ManageClasses = () => {
    // const [classes, setClasses] = useState([]);

    useTitle('Manage Classes');

    // useEffect(() => {
    //     fetch('http://localhost:5000/classes')
    //         .then(res => res.json())
    //         .then(data => setClasses(data))
    // }, [])

    const [axiosSecure] = useAxiosSecure();
    const [status, setStatus] = useState("");
    const { data: classes = [], refetch } = useQuery(["classes"], async () => {
        const res = await axiosSecure.get("/classes");
        return res.data;
    });

    // console.log(classes);
    const handleStatus = (item) => {
        // console.log(item);
        const newStatus = { status: 'Approved' };
        axiosSecure.patch(`/classes/${item._id}`, newStatus)
            .then(data => {
                // console.log(data.data)
                refetch()
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Approval Approved",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
    };
    const handleDeny = (item) => {
        // console.log(item);
        const newStatus = { status: 'Denied' };
        axiosSecure.patch(`/classes/${item._id}`, newStatus)
            .then(data => {
                // console.log(data.data)
                refetch()
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Approval Denied",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }

            })
    };


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
                                    <button onClick={() => handleStatus(c)}
                                        disabled={c.status === 'Approved' || c.status === 'Denied'} className="btn btn-primary btn-xs">Approve</button>
                                    <button onClick={() => handleDeny(c)}
                                        disabled={c.status === 'Approved' || c.status === 'Denied'} className="btn btn-secondary btn-xs">Deny</button>
                                    <Link to={`feedback/${c._id}`} disabled={c.status != 'Denied'} className="btn btn-accent btn-xs">Feedback</Link>
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