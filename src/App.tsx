import Features from "./components/Features";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import ScrollImage from './components/ScrollImage';
import disc from "./assets/image.png";
import MusicRoom from "./assets/image copy.png";
import Spline from '@splinetool/react-spline';

export default function App(){
    return (
        <>
            <Navbar />
            <div className="App bg-black text-white h-full flex-col items-center p-6 md:p-20">
                <Hero />
                <section className="py-24 px-6 md:px-20 bg-black text-white flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Left Image */}
                    <ScrollImage src={disc} direction="left" alt="Disc" />

                    {/* Center Text */}
                    <div className="w-full md:w-[10vw] text-center text-[32px] md:text-[40px] text-[#dcfce7]">
                        Where words fail, <br /> music speaks.
                    </div>

                    {/* Right Image */}
                    <ScrollImage src={MusicRoom} direction="right" alt="Guitar" />
                </section>
                <Features />
                <HowItWorks />

                {/* Final 3D Spline Visual Section */}
                <section className="relative w-full h-[600px] my-24">
                    <div className="absolute inset-0 z-0">
                        <Spline scene="https://prod.spline.design/6t1uQk7e5eFuWecx/scene.splinecode" />
                    </div>
                    <div className="relative z-10 flex justify-center h-full items-center">
                        <h2 className="text-4xl font-bold text-white text-center px-6 md:px-0">
                            🎧 Explore Music Visually
                        </h2>
                    </div>
                </section>

                <CTA />

                {/* ✅ Responsive Footer */}
                <footer className="w-full mt-24 border-t border-gray-700 py-10 px-6 text-sm text-gray-400 text-center">
                    <p>🎵 Built with ❤️ for the Frontend UI Hackathon 2025</p>
                    <p className="mt-2">© {new Date().getFullYear()} Shayan Kasbati. All rights reserved.</p>
                </footer>
            </div>
        </>
    )
}
