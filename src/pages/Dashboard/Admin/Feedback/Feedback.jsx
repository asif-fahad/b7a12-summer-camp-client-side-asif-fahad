import React from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Feedback = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();
    console.log(id);
    const handleFeedback = (event) => {
        event.preventDefault();

        const feedb = event.target.feedback.value;
        // console.log(feedb);
        const classFeedback = { feedback: feedb };
        axiosSecure.patch(`/classFeedback/${id}`, classFeedback)
            .then(data => {

                // console.log(data.data)
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Feedback Added",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })

    }
    return (
        <div className="mx-auto w-1/2 text-center">
            <h1 className="text-5xl font-bold text-center">Feedback</h1>
            <form onSubmit={handleFeedback} className="text-center md:ml-16 mt-5">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Feedback</span>
                    </label>
                    <textarea
                        name="feedback"
                        className="textarea textarea-bordered"
                        placeholder="Bio"
                    ></textarea>
                    <div className="form-control mt-6">
                        <input className="btn" type="submit" value="Submit Feedback" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Feedback;