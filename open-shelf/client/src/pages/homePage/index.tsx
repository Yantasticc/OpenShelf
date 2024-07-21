import { data } from '../../constants/home-bg';
import Navbar from '../../components/Navbar';
import HomeBody from '../../components/HomeBody';
import Footer from '../../components/Footer';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen w-screen">
            <div
                className="flex-grow relative bg-cover bg-center"
                style={{ backgroundImage: `url(${data[0].image})` }}
            >
                <Navbar />
                <HomeBody />
            </div>
            <Footer />
        </div>
    );
}
