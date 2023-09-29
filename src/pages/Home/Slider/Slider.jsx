import React from 'react';

const Slider = () => {
    const slidesData = [
        {
            id: 1,
            imageUrl: "https://as1.ftcdn.net/v2/jpg/02/78/42/76/1000_F_278427683_zeS9ihPAO61QhHqdU1fOaPk2UClfgPcW.jpg",
            title: "Sports Academics",
            description: "Embark on a journey where your passion for sports takes center stage. Our academy offers a diverse selection of sports, allowing you to handpick your favorites. Whether it's the thrill of the game, the pursuit of excellence, or the joy of competition, we provide the perfect platform for you to explore and excel in the sports you love."
        },
        {
            id: 2,
            imageUrl: "https://as2.ftcdn.net/v2/jpg/00/04/43/79/1000_F_4437974_DbE4NRiaoRtUeivMyfPoXZFNdCnYmjPq.jpg",
            title: "Sports Academics",
            description: "Unleash your potential in a world of sports that caters to every enthusiast. Our academy brings together a wide array of disciplines, ensuring you have the freedom to select and pursue the sports that ignite your passion. Dive into a realm where your athletic dreams find their perfect match."
        },
        {
            id: 3,
            imageUrl: "https://as2.ftcdn.net/v2/jpg/02/57/62/23/1000_F_257622374_dJI8M6MQSlqUXhAmBis0hNEC6Av5kb2E.jpg",
            title: "Sports Academics",
            description: "Discover a realm where sports enthusiasts thrive. Our academy boasts a diverse range of sports, allowing you to curate your own athletic journey. Whether you're drawn to the strategy of the game or the adrenaline of competition, we offer the ideal environment for you to embrace and excel in your chosen sports."
        },
        {
            id: 4,
            imageUrl: "https://as2.ftcdn.net/v2/jpg/00/17/33/59/1000_F_17335975_wezHs72ORL3CY2dFLVi9XtLx4XDOgZBT.jpg",
            title: "Sports Academics",
            description: "At our academy, you're the curator of your sporting adventure. With a myriad of sports to choose from, you have the liberty to select the ones that resonate with you. Whether it's the precision of technique or the thrill of performance, our platform is designed to nurture your passion for sports and elevate your game."
        }
    ];


    return (
        <div className="carousel w-full h-[500px] relative">
            {slidesData.map(slide => (
                <div key={slide.id} id={`slide${slide.id}`} className="carousel-item w-full h-full relative">
                    <img src={slide.imageUrl} className="w-full h-full object-cover" alt={`Slide ${slide.id}`} />
                    <div className="overlay bg-black bg-opacity-60 absolute inset-0 flex justify-center items-center">
                        <div className="text-container mx-14 text-center text-white p-5">
                            <h1 className='text-6xl mb-2 font-medium text-[#d5ccda] underline'>{slide.title}</h1>
                            <p className='text-base font-bold text-[#CCCCCC]'>{slide.description}</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={`#slide${slide.id === 1 ? slidesData.length : slide.id - 1}`} className="btn btn-circle">❮</a>
                        <a href={`#slide${slide.id === slidesData.length ? 1 : slide.id + 1}`} className="btn btn-circle">❯</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slider;
