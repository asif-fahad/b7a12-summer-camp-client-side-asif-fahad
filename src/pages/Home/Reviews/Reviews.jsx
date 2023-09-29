import React from 'react';

const Reviews = () => {
    const reviews = [
        {
            name: 'Ahnaf Tamim',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWh9kgrNK3S8b10WFWv1ZdJ_7ndynNIDaKnGIIbbrwA&s',
            comment: "I appreciate the classes in this website. It's so important for our kids."
        },
        {
            name: 'Faysal Plabon',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDykN3rkuBQ8VchgR5fSoSQ48cp6dd7bRmqyPGVsHGA&s',
            comment: "Customer service of this website is amazing! I will enroll more classes next time."
        },
        {
            name: 'Tanzim Sakib',
            image: 'https://randomuser.me/api/portraits/men/82.jpg',
            comment: "The quality of instruction provided here is outstanding. I've seen great improvement in my skills since joining."
        },
        {
            name: 'Rubel Hossain',
            image: 'https://randomuser.me/api/portraits/men/21.jpg',
            comment: "I love the variety of sports programs offered. It caters to a wide range of interests and skill levels."
        }
    ];


    return (
        <div className='my-5'>
            <div>
                <h1 className='text-6xl text-center text-red-950 p-4'>Students Saying</h1>
            </div>
            <div className='grid md:grid-cols-2 gap-2 md:w-10/12 mx-auto'>
                {reviews.map((review, index) => (
                    <div key={index} className="card card-side shadow-xl bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600">
                        <figure><img src={review.image} alt={review.name} className='rounded-full' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{review.name}</h2>
                            <p>{review.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
