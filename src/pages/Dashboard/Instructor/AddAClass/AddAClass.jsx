import React, { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProviders';
import Swal from 'sweetalert2';

const AddAClass = () => {

    const { user } = useContext(AuthContext);


    const handleAddClass = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const iName = form.iName.value;
        const email = form.email.value;
        const price = parseFloat(form.price.value);
        const seats = parseFloat(form.seats.value);


        const newClass = { name, photo, iName, email, price, seats };

        console.log(newClass);

        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className="bg-gray-300 p-24">
            <h2 className="text-3xl font-extrabold text-center">Add a Class</h2>
            <form onSubmit={handleAddClass}>
                {/* form class name and photo*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Class Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Class Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Class Photo" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* form instructor name and email*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="iName" placeholder="Instructor Name" defaultValue={user?.displayName} className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="Instructor Email" defaultValue={user?.email} className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* form price and seats row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price $</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" placeholder="Price" min={0} className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="seats" placeholder="Available Seats" min={0} className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Class" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddAClass;