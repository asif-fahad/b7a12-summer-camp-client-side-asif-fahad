import React from 'react';

const Services = () => {
    const servicesData = [
        {
            title: 'Training',
            description: 'We believe that training is the key to unlocking your true athletic potential. Our expert coaches and state-of-the-art facilities are dedicated to providing you with the finest training experience possible. Whether you are a beginner looking to learn the fundamentals or an advanced athlete aiming for greatness, our comprehensive training programs cater to all skill levels.',
            buttonText: 'Learn more',
            gradientClass: 'from-indigo-50 to-blue-50',
            shadowClass: 'shadow-cla-blue'
        },
        {
            title: 'Authority',
            description: 'At our sport academy, we pride ourselves on being the ultimate authority in athletic training and development. With years of experience and a team of highly qualified coaches, we possess the knowledge and expertise to guide athletes towards excellence. Our authority in the field ensures that our training programs are meticulously designed, incorporating cutting-edge techniques and best practices.',
            buttonText: 'Learn more',
            gradientClass: 'from-indigo-100 to-blue-100',
            shadowClass: 'shadow-cla-blue'
        },
        {
            title: 'Precise & Timing',
            description: 'Our expert coaches emphasize the importance of precision in movements, technique, and decision-making, ensuring that every action on the field or court is deliberate and accurate. Moreover, we understand that impeccable timing can be the difference between success and missed opportunities.',
            buttonText: 'Learn more',
            gradientClass: 'from-indigo-200 to-blue-200',
            shadowClass: 'shadow-cla-blue'
        },
    ];

    return (
        <div>
            <div>
                <h1 className='text-6xl text-center text-red-950 p-4'>Our Services</h1>
            </div>

            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {servicesData.map((service, index) => (
                        <div key={index} className="p-4 md:w-1/3 relative">
                            <div className={`h-full rounded-xl ${service.shadowClass} bg-gradient-to-r ${service.gradientClass} overflow-hidden`}>
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">{service.title}</h1>
                                    <p className="leading-relaxed mb-3" style={{ marginBottom: '2.5rem' }}>{service.description}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <button className={`bg-gradient-to-r ${service.gradientClass} hover:scale-105 drop-shadow-md ${service.shadowClass} px-4 py-2 rounded-lg w-full`}>
                                        {service.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
