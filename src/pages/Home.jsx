import '../assets/styles/global.css';
import 'tailwindcss/tailwind.css';

import Header from '../components/Header/Header.jsx';
import Hero from '../components/Hero/Hero.jsx';

function Home() {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Header />
            <Hero />
        </div>
    );
}

export default Home;