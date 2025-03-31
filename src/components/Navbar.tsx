import { useEffect, useState } from 'react';
import { Headphones, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div onClick={()=>window.location.reload()} className="flex items-center space-x-2 text-white font-bold text-xl cursor-pointer">
          <Headphones className="h-6 w-6 text-indigo-400" />
          <span>JamSync</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <a href="#features" className="hover:text-indigo-400">Features</a>
          <a href="#howitworks" className="hover:text-indigo-400">How It Works</a>
          <a href="#cta" className="hover:text-indigo-400">Start</a>
        </div>

        {/* Right Side CTA (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold transition">
            🎵 Start Jamming
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-black text-white font-medium">
          {['#features', '#howitworks', '#cta'].map((link, idx) => (
            <a key={idx} href={link} className="block hover:text-indigo-400" onClick={() => setMobileMenuOpen(false)}>
              {['Features', 'How It Works', 'Start'][idx]}
            </a>
          ))}
          <button
            className="w-full mt-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            🎵 Start Jamming
          </button>
        </div>
      )}
    </nav>
  );
}
