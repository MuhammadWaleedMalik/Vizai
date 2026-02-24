import { Link } from 'react-router-dom';

const navLinks = [
    { to: '/providers', label: 'Providers' },
    { to: '/life-sciences', label: 'Life Sciences' },
    { to: '/customers', label: 'Customers' },
    { to: '/clinical-research', label: 'Clinical Research' },
    { to: '/resources', label: 'Resources' },
    { to: '/about', label: 'About Us' },
];

export default function Navbar() {
    return (
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-4 border-b border-white/20 bg-[#1a1555]/80 backdrop-blur sticky top-0">
            <Link to="/" className="flex items-center space-x-2">
                <img src="https://www.viz.ai/wp-content/uploads/2023/06/logo-VIZ.svg" alt="Viz.ai Logo" className="h-8 w-auto" />
            </Link>

            <div className="hidden md:flex items-center space-x-8 text-sm text-white">
                {navLinks.map(link => (
                    <Link key={link.to} to={link.to} className="hover:text-yellow-400 transition font-medium">
                        {link.label}
                    </Link>
                ))}
            </div>

            <div className="flex items-center space-x-3">
                <Link
                    to="/contact"
                    className="bg-yellow-400 text-[#1a1555] font-bold px-6 py-2 rounded-full hover:bg-yellow-300 transition text-sm"
                >
                    Contact Us
                </Link>
            </div>
        </nav>
    );
}
