import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';

const Instructors = () => {

    useTitle('Instructors');

    const [instructors, setInstructors] = useState([]);

    // console.log(instructors);

    useEffect(() => {
        fetch('http://localhost:5000/users/instructor')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        instructors.map((c, index) => <tr key={c._id}>
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
                            <td>{c.email}</td>
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default Instructors;