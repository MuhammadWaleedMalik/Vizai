import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const solutions = [
    {
        icon: '🏥',
        title: 'Stroke Care',
        desc: 'AI-driven large vessel occlusion detection alerting the right team within minutes.',
        image: 'https://www.viz.ai/wp-content/uploads/2023/06/mock_2-phones_neuro.png.webp',
    },
    {
        icon: '❤️',
        title: 'Cardiac Care',
        desc: 'Automated cardiac AI detecting critical conditions across EKGs and echocardiograms.',
        image: 'https://www.viz.ai/wp-content/uploads/2023/06/mock_comp-tablet-cardio-copy.png.webp',
    },
    {
        icon: '🫁',
        title: 'Pulmonary Embolism',
        desc: 'Automated PE detection and severity scoring to accelerate time-to-treatment.',
        image: 'https://www.viz.ai/wp-content/uploads/2025/12/PatientImageWithBlackbook_Opt1.png.webp',
    },
];

const stats = [
    { value: '1,000+', label: 'Hospital Sites' },
    { value: '50+', label: 'FDA-Cleared Algorithms' },
    { value: '4M+', label: 'Patients Analyzed' },
    { value: '99%', label: 'Clinician Satisfaction' },
];

export default function ProvidersPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-[#1a1555] to-[#2d1f6f] text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
                </div>
                <div className="relative container mx-auto max-w-5xl text-center">
                    <div className="inline-block bg-yellow-400 text-[#1a1555] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">Provider Solutions</div>
                    <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
                        AI-Powered Care<br /><span className="text-yellow-400 font-semibold">Coordination</span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
                        Viz.ai connects patients, clinicians, and life-saving treatments with its leading-edge AI platform — driven by over 50 advanced, FDA-cleared algorithms.
                    </p>
                    <Link to="/contact" className="bg-yellow-400 text-[#1a1555] font-bold px-8 py-3.5 rounded-full hover:bg-yellow-300 transition inline-block">
                        Request a Demo
                    </Link>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-[#0f2f6d] py-12 px-6">
                <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                    {stats.map(s => (
                        <div key={s.label}>
                            <div className="text-4xl font-bold text-yellow-400 mb-1">{s.value}</div>
                            <div className="text-sm text-gray-300">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Solutions */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-4xl font-light text-center text-gray-800 mb-4">
                        Our Provider <span className="text-yellow-500 font-semibold">Solutions</span>
                    </h2>
                    <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
                        Comprehensive AI solutions designed specifically for healthcare providers to improve patient outcomes.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {solutions.map(s => (
                            <div key={s.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
                                <div className="overflow-hidden h-48">
                                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-6">
                                    <div className="text-2xl mb-2">{s.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{s.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                                    <a href="#" className="mt-4 inline-block text-yellow-500 font-semibold text-sm hover:text-yellow-600">Learn more →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#1a1555] to-[#2d1f6f] py-20 px-6 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to transform patient care?</h2>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">Join over 1,000 hospital sites already using Viz.ai to improve patient outcomes.</p>
                <Link to="/contact" className="bg-yellow-400 text-[#1a1555] font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition">Get Started Today</Link>
            </section>

            <Footer />
        </div>
    );
}
