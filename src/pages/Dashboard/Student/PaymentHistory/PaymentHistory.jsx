import React, { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: payments = [], refetch } = useQuery(
        ["paymentHistory"],
        async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
    );
    // console.log(payments);
    return (
        <div className="p-8">
            <h1 className="font-bold text-5xl text-center pb-8">My Payment History</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>TransectionId</th>
                            <th>Transaction Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {payments.map((user, i) => (
                            <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.classNames}</td>
                                <td>{user.price}</td>
                                <td>{user?.transactionId}</td>
                                {/* <th>{user.date}</th> */}
                                <th>
                                    {new Date(user.date).toLocaleString(
                                        "en-US",
                                        {
                                            month: "2-digit",
                                            day: "2-digit",
                                            year: "numeric",
                                            hour: "numeric",
                                            minute: "numeric",
                                            hour12: true,
                                        }
                                    )}
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;