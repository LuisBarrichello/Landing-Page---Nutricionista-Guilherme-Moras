import '../assets/styles/global.css';
import 'tailwindcss/tailwind.css';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import Services from '../components/Services/Services';

function Home() {
    return (
        <div className="w-full h-screen flex flex-col">
            <Header />
            <Hero />
            <AboutMe />
            <Services />
        </div>
    );
}

export default Home;