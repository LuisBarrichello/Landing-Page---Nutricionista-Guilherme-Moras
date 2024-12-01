import '../assets/styles/global.css';
import 'tailwindcss/tailwind.css';

import Header from '../components/Header/Header.jsx';

function Home() {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Header></Header>
        </div>
    );
}

export default Home;