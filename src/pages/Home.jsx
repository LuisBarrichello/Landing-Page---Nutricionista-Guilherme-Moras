import 'tailwindcss/tailwind.css';
import '../assets/styles/global.css';

import AboutMe from '../components/AboutMe/AboutMe';
import CallToAction from '../components/CallToAction/CallToAction';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Reviews from '../components/Reviews/Reviews';
import ServiceDetails from '../components/ServiceDetails/ServiceDetails';
import Services from '../components/Services/Services';
import FollowInstagram from '../components/FollowInstagram/FollowInstagram';
import Location from '../components/Location/Location';
import Footer from '../components/Footer/Footer';

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
            <FollowInstagram />
            <Location />
            <Footer />
        </div>
    );
}

export default Home;
