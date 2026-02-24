import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const therapeuticAreas = [
    { name: 'Neurology', icon: '🧠', desc: 'Stroke, large vessel occlusion, and brain bleeding detection.' },
    { name: 'Cardiology', icon: '❤️', desc: 'STEMI, aortic stenosis, cardiac amyloidosis, and more.' },
    { name: 'Pulmonology', icon: '🫁', desc: 'Pulmonary embolism and aortic aneurysm detection.' },
    { name: 'Oncology', icon: '🔬', desc: 'Incidental findings and tumor detection in imaging workflows.' },
];

const benefits = [
    { title: 'Accelerate Drug Development', desc: 'Leverage AI imaging endpoints to accelerate clinical trials and reduce time to market.' },
    { title: 'Real-World Evidence', desc: 'Access de-identified real-world data at scale to demonstrate product effectiveness.' },
    { title: 'Patient Identification', desc: 'AI-powered identification of eligible patients for clinical trials.' },
    { title: 'Regulatory Support', desc: 'FDA-cleared algorithms provide regulatory confidence for life sciences partnerships.' },
];

export default function LifeSciencesPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-[#0f2f6d] to-[#1a1555] text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
                </div>
                <div className="relative container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-yellow-400 text-[#1a1555] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">Life Sciences</div>
                            <h1 className="text-5xl font-light mb-6 leading-tight">
                                Partnering to <span className="text-yellow-400 font-semibold">Transform Medicine</span>
                            </h1>
                            <p className="text-gray-300 text-lg mb-8">
                                Viz.ai develops customized AI solutions for pharmaceutical and medical device companies, accelerating the path from research to patient impact.
                            </p>
                            <Link to="/contact" className="bg-yellow-400 text-[#1a1555] font-bold px-8 py-3.5 rounded-full hover:bg-yellow-300 transition inline-block">
                                Explore Partnerships
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://www.viz.ai/wp-content/uploads/2023/06/home-4-768x514.png.webp"
                                alt="Life Sciences"
                                className="w-full max-w-md rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Therapeutic Areas */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-4xl font-light text-center mb-4 text-gray-800">
                        Therapeutic <span className="text-yellow-500 font-semibold">Areas</span>
                    </h2>
                    <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
                        Partnering across disease areas where AI can accelerate diagnosis and treatment decisions.
                    </p>
                    <div className="grid md:grid-cols-4 gap-6">
                        {therapeuticAreas.map(area => (
                            <div key={area.name} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
                                <div className="text-4xl mb-4">{area.icon}</div>
                                <h3 className="font-semibold text-gray-800 text-lg mb-2">{area.name}</h3>
                                <p className="text-gray-500 text-sm">{area.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-4xl font-light text-center mb-12 text-gray-800">
                        Why Partner with <span className="text-yellow-500 font-semibold">Viz.ai</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map(b => (
                            <div key={b.title} className="flex gap-4 p-6 border border-gray-100 rounded-2xl hover:border-yellow-400 transition">
                                <div className="w-10 h-10 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center text-[#1a1555] font-bold">✓</div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 text-lg mb-1">{b.title}</h3>
                                    <p className="text-gray-500 text-sm">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
