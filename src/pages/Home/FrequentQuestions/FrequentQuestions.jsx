import React, { useState } from 'react';

const FrequentQuestions = () => {
    const faqs = [
        {
            question: "What sports programs do you offer at your academy?",
            answer:
                "We offer a wide range of sports programs catering to various interests and skill levels. Our academy provides training in popular sports such as soccer, basketball, tennis, swimming, and more. Whether you're a beginner or an advanced athlete, we have tailored programs designed to help you achieve your goals and excel in your chosen sport.",
        },
        {
            question: "How are your instructors qualified and experienced?",
            answer:
                "Our coaches are highly qualified and experienced professionals with a passion for sports and a commitment to nurturing talent. They hold relevant certifications and have extensive backgrounds in competitive sports and coaching. Many of our coaches have competed at national and international levels, bringing invaluable expertise to our training programs. Rest assured, you will be in the hands of skilled mentors dedicated to guiding you towards success.",
        },
        {
            question: "What facilities and amenities do you offer at your academy?",
            answer:
                "Our state-of-the-art facilities are designed to provide a top-notch training experience. We boast well-equipped training grounds, indoor courts, swimming pools, and fitness centers. Additionally, we offer video analysis tools to help athletes review and improve their performance. Our academy also prioritizes the safety and well-being of our athletes, with certified medical staff on-site for any sports-related injuries or emergencies. We take pride in creating a conducive environment for learning, growth, and achieving athletic excellence.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="my-5">
            <h1 className="text-6xl text-center text-red-950 p-4">Frequently Asked Questions</h1>
            <div className="md:w-10/12 mx-auto">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-base-300 bg-base-100 rounded-box mb-2 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-300 to-gray-400"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full text-left font-medium py-2 px-4 focus:outline-none"
                        >
                            {faq.question}
                        </button>
                        {openIndex === index && (
                            <div className="p-4">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FrequentQuestions;
