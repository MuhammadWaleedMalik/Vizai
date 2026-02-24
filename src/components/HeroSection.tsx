import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/providers', label: 'Providers' },
  { to: '/life-sciences', label: 'Life Sciences' },
  { to: '/customers', label: 'Customers' },
  { to: '/clinical-research', label: 'Clinical Research' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About Us' },
];

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#1a1555] to-[#2d1f6f] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-4 border-b border-gray-600">
        <Link to="/" className="flex items-center space-x-2">
          <img src="https://www.viz.ai/wp-content/uploads/2023/06/logo-VIZ.svg" alt="Viz.ai Logo" className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} className="hover:text-yellow-400 transition font-medium">
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="/contact" className="bg-yellow-400 text-[#1a1555] font-bold px-6 py-2 rounded-full hover:bg-yellow-300 transition text-sm">
          Contact Us
        </Link>
      </nav>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-light leading-tight">
            <span className="text-yellow-400">This is the face of</span>
            <br />
            <span className="text-yellow-400">better outcomes.</span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
            Viz.ai closes the gaps between patients, clinicians, and life-saving treatments with its leading-edge, AI-powered care coordination platform — driven by over 50 advanced, FDA-cleared algorithms.
          </p>

          <p className="text-2xl text-yellow-400 font-semibold">
            Nothing artificial about that.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Link to="/providers" className="bg-yellow-400 text-[#1a1555] font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition text-center">
              View Provider Solutions
            </Link>
            <Link to="/life-sciences" className="bg-yellow-400 text-[#1a1555] font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition text-center">
              View Life Science Solutions
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col space-y-4">
            <div className="bg-black bg-opacity-40 backdrop-blur rounded-lg p-4 border border-gray-700">
              <img
                src="https://www.viz.ai/wp-content/uploads/2025/12/PatientImageWithBlackbook_Opt1.png.webp"
                alt="Healthcare Platform"
                className="w-full h-auto rounded"
              />
            </div>

            <div className="flex justify-center">
              <div className="bg-yellow-400 text-[#1a1555] rounded-full px-6 py-3 font-bold text-center">
                <div className="text-xl">#1 Healthcare AI Platform</div>
                <div className="text-xs">Rated by Hospitals &amp; Health Systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
