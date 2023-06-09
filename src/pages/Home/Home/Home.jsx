import React from 'react';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors.jsx/PopularInstructors';
import ExtraSection from '../ExtraSection.jsx/ExtraSection';
import useTitle from '../../../hooks/useTitle';

const Home = () => {

    useTitle('Home');

    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <ExtraSection></ExtraSection>

        </div>
    );
};

export default Home;