import '../assets/styles/global.css';
import 'tailwindcss/tailwind.css';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import Services from '../components/Services/Services';
import CallToAction from '../components/CallToAction/CallToAction';
import ServiceDetails from '../components/ServiceDetails/ServiceDetails';
import Reviews from '../components/Reviews/Reviews';

function Home() {
    return (
        <div className="w-full h-screen flex flex-col">
            <Header />
            <Hero />
            <AboutMe />
            <Services />
            <CallToAction />
            <ServiceDetails />
            <Reviews />
        </div>
    );  
}

export default Home;