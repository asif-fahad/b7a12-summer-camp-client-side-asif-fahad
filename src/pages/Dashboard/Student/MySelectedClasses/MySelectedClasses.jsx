import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const MySelectedClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/carts')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

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


                fetch(`http://localhost:5000/carts/${_id}`, {
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
                            const remaining = classes.filter(c => c._id !== _id);
                            setClasses(remaining);
                        }
                    })
            }
        })
    }

    const handlePay = _id => {

    }


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
                                <button className="btn btn-ghost btn-xs" onClick={() => handleDelete(c._id)}>Delete</button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-xs" onClick={() => handlePay(c._id)}>Pay</button>
                            </th>
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default MySelectedClasses;