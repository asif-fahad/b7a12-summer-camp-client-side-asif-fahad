import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../providers/AuthProviders';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
// const imgbbKey = import.meta.env.VITE_imagbb_key;

const AddAClass = () => {

    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // const imgHostingURL = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
    const { data: myClasses = [], refetch } = useQuery(
        ["myClasses"],
        async () => {
            const res = await axiosSecure.get(`/classes/myClasses/${user?.email}`);
            return res.data;
        }
    );
    const singleCless = myClasses.find(cls => cls._id === id);

    console.log(singleCless)

    const { _id, name, photo, price, seats } = singleCless;

    const handleUpdateClass = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const price = parseFloat(form.price.value);
        const seats = parseInt(form.seats.value);


        const updateClass = { name, photo, price, seats };

        console.log(updateClass);

        fetch(`https://b7a12-summer-camp-server-side-asif-fahad.vercel.app/classUpdate/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div className="bg-gray-300 p-24">
            <h2 className="text-3xl font-extrabold text-center">Update a Class</h2>
            <form onSubmit={handleUpdateClass}>
                {/* form class name and photo*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Class Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Class Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Class Photo" className="input input-bordered w-full" required />
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
                            <input type="number" name="price" placeholder="Price" defaultValue={price} min={0} className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="seats" placeholder="Available Seats" defaultValue={seats} min={0} className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Class" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddAClass;