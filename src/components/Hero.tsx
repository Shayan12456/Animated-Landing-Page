import CTAButton  from "./CTAButton";
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/pi4VQ2Bxl46eWaVb/scene.splinecode" />
      </div>
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Create Music Live with Friends</h1>
        <p className="text-lg mb-8">Jam in real-time. Anywhere. No setup.</p>
        <CTAButton />
      </div>
    </section>
  );
}