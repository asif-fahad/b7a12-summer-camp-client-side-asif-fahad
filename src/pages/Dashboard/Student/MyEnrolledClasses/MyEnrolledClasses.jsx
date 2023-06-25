import React, { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyEnrolledClasses = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: enroolCls = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get(`/enrollClasses/${user?.email}`);
        return res.data;
    });
    // console.log(enroolCls);
    return (
        <div className="p-8">
            <h1 className="font-bold text-5xl text-center pb-8">My Enrolled Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                {enroolCls.map((cls) => (
                    <div key={cls._id} className="card w-full bg-base-100 shadow-xl border-2 shadow-blue-500/50  ">
                        <figure className="px-10 pt-10">
                            <img src={cls.classImg} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{cls.className}</h2>
                            {/* <p>Instructor Email: {cls.email}</p> */}
                            <p><span className="font-semibold">Instructor Name</span>: {cls.name}</p>
                            <p><span className="font-semibold">Price</span>: $<span className="text-orange-600">{cls.price}</span></p>
                            <p><span className="font-semibold">Available Seats</span>: {cls.seats}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyEnrolledClasses;