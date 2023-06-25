import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import { useLocation, useNavigate } from 'react-router-dom';
import useRoles from '../../hooks/useRoles';

const Classes = () => {
    const { user } = useContext(AuthContext);

    useTitle('Classes');

    const [classes, setClasses] = useState([]);
    const [role, isRoleLoading] = useRoles();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch('http://localhost:5000/classes/approved')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    const handleSelect = (item) => {

        if (!user) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Login First",

            });

            return navigate('/login', { state: { from: location, replace: true } });
        }

        const { _id, name, iName, photo, price, seats, email } = item;


        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, iName, photo, price, seats, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

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
                        <th>Enrolled Students</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        classes.map((c, index) => <tr key={c._id} className={`${c.seats == 0 ? 'bg-red-400' : 'bg-base-100'}`}>
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
                                <button onClick={() => handleSelect(c)} disabled={role == 'Admin' || role == 'Instructor' || c.seats == 0} className="btn btn-outline btn-info btn-xs ">Select</button>
                            </th>
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default Classes;