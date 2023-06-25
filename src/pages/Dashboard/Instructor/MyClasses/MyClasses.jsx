import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../../../hooks/useTitle';
import { AuthContext } from '../../../../providers/AuthProviders';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const MyClasses = () => {

    useTitle('My Classes');

    // const [classes, setClasses] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/classes')
    //         .then(res => res.json())
    //         .then(data => setClasses(data))
    // }, [])

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: myClasses = [], refetch } = useQuery(
        ["myClasses"],
        async () => {
            const res = await axiosSecure.get(`/classes/myClasses/${user?.email}`);
            return res.data;
        }
    );

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
                        <th>Enrolled Students</th>
                        <th>Status</th>
                        <th>Feedback</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        myClasses.map((c, index) => <tr key={c._id}>
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
                            <td>{c.enrolled}</td>
                            <th>
                                <h1>{c.status}</h1>
                            </th>
                            <th>
                                {c?.feedback && <p>{c?.feedback}</p>}
                            </th>
                            <th>
                                <Link to={`/dashboard/updateClass/${c._id}`}>
                                    <button className="btn btn-outline btn-info w-full">Update</button>
                                </Link>
                            </th>
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default MyClasses;