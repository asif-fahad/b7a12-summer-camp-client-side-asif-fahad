import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useTitle from '../../../../hooks/useTitle';
import { Link } from 'react-router-dom';
import useCart from '../../../../hooks/useCart';

const MySelectedClasses = () => {

    useTitle('My Selected Classes');

    // const [classes, setClasses] = useState(cart);

    // useEffect(() => {
    //     fetch('https://b7a12-summer-camp-server-side-asif-fahad.vercel.app/carts')
    //         .then(res => res.json())
    //         .then(data => setClasses(data))
    // }, [])

    const [cart, refetch] = useCart();

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://b7a12-summer-camp-server-side-asif-fahad.vercel.app/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                    })
            }
        })
    }


    return (
        <div className="overflow-x-auto">
            <h1 className="font-bold text-5xl text-center pb-8">My Selected Classes</h1>
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
                        cart.map((c, index) => <tr key={c._id}>
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
                                <button className="btn btn-outline btn-ghost btn-xs" onClick={() => handleDelete(c._id)}>Delete</button>
                            </th>
                            <th>
                                <Link to={`/dashboard/payment/${c._id}`}><button className="btn btn-ghost btn-outline btn-xs">Pay</button></Link>
                            </th>
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default MySelectedClasses;