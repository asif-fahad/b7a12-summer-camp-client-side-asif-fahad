import React from 'react';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors.jsx/PopularInstructors';
import useTitle from '../../../hooks/useTitle';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import FrequentQuestions from '../FrequentQuestions/FrequentQuestions';
import FeaturesSection from '../FeaturesSection.jsx/FeaturesSection';
import AndrewQuote from '../../AndrewQuote/AndrewQuote';
import WhyChoseUs from '../../WhyChoseUs/WhyChoseUs';

const Home = () => {

    useTitle('Home');

    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <FeaturesSection></FeaturesSection>
            <Services></Services>
            <Reviews></Reviews>
            <FrequentQuestions></FrequentQuestions>
            <AndrewQuote></AndrewQuote>
            <WhyChoseUs></WhyChoseUs>
        </div>
    );
};

export default Home;