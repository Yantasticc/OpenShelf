import { data } from '../../constants/home-bg';
import Navbar from '../../components/Navbar';

export default function HomePage() {
    return (
        <div className="relative h-screen w-screen">
            <div className="relative h-screen w-screen bg-cover bg-center" style={{ backgroundImage: `url(${data[0].image})` }}>
                    <Navbar />
            </div>
        </div>
    );
}
