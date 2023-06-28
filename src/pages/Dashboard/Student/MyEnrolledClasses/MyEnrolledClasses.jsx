import React, { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyEnrolledClasses = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get(`/enrollClasses/${user?.email}`);
        return res.data;
    });
    // console.log(classes);
    return (
        <div className="overflow-x-auto">
            <h1 className="font-bold text-5xl text-center pb-8">My Enrolled Classes</h1>
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
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default MyEnrolledClasses;