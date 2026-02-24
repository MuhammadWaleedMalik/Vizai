import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#0f1a2a] text-gray-300 py-12 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <img src="https://www.viz.ai/wp-content/uploads/2023/06/logo-VIZ.svg" alt="Viz.ai Logo" className="h-6 w-auto mb-4" />
          <p className="text-sm text-gray-400">Leading the future of healthcare with AI.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/providers" className="hover:text-yellow-400 transition">Providers</Link></li>
            <li><Link to="/life-sciences" className="hover:text-yellow-400 transition">Life Sciences</Link></li>
            <li><Link to="/customers" className="hover:text-yellow-400 transition">Customers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/clinical-research" className="hover:text-yellow-400 transition">Clinical Research</Link></li>
            <li><Link to="/resources" className="hover:text-yellow-400 transition">Case Studies</Link></li>
            <li><Link to="/resources" className="hover:text-yellow-400 transition">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Viz.ai. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
