import React from 'react';

const Slider = () => {
    return (
        <div className="carousel w-full h-[500px] mt-40 lg:mt-0">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://as1.ftcdn.net/v2/jpg/02/78/42/76/1000_F_278427683_zeS9ihPAO61QhHqdU1fOaPk2UClfgPcW.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute left-10 top-4 bg-gray-400 opacity-75 p-5">
                    <h1 className='text-5xl mb-2'>Sports Academics</h1>
                    <p className='text-2xl'>Where you can choose your favorite sports</p>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://as2.ftcdn.net/v2/jpg/00/04/43/79/1000_F_4437974_DbE4NRiaoRtUeivMyfPoXZFNdCnYmjPq.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute left-10 top-4 bg-gray-400 opacity-75 p-5">
                    <h1 className='text-5xl mb-2'>Sports Academics</h1>
                    <p className='text-2xl'>Where you can choose your favorite sports</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://as2.ftcdn.net/v2/jpg/02/57/62/23/1000_F_257622374_dJI8M6MQSlqUXhAmBis0hNEC6Av5kb2E.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute left-10 top-4 bg-gray-400 opacity-75 p-5">
                    <h1 className='text-5xl mb-2'>Sports Academics</h1>
                    <p className='text-2xl'>Where you can choose your favorite sports</p>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://as2.ftcdn.net/v2/jpg/00/17/33/59/1000_F_17335975_wezHs72ORL3CY2dFLVi9XtLx4XDOgZBT.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute left-10 top-4 bg-gray-400 opacity-75 p-5">
                    <h1 className='text-5xl mb-2'>Sports Academics</h1>
                    <p className='text-2xl'>Where you can choose your favorite sports</p>
                </div>
            </div>
        </div>
    );
};

export default Slider;