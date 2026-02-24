import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const leadership = [
    { name: 'Dr. Chris Mansi', title: 'CEO & Co-Founder', initials: 'CM', color: 'from-blue-600 to-blue-800' },
    { name: 'Manoj Ramachandran', title: 'CTO & Co-Founder', initials: 'MR', color: 'from-purple-600 to-purple-800' },
    { name: 'Steven Schreiber', title: 'Chief Revenue Officer', initials: 'SS', color: 'from-green-600 to-green-800' },
    { name: 'Dr. David Golan', title: 'Chief Medical Officer', initials: 'DG', color: 'from-orange-600 to-orange-800' },
    { name: 'Maria Chen', title: 'VP of Clinical Affairs', initials: 'MC', color: 'from-rose-600 to-rose-800' },
    { name: 'James Park', title: 'VP of Engineering', initials: 'JP', color: 'from-cyan-600 to-cyan-800' },
];

const values = [
    { icon: '🎯', title: 'Patient-First', desc: 'Every decision we make is guided by one question: does this improve outcomes for patients?' },
    { icon: '🔬', title: 'Scientific Rigor', desc: 'We validate every algorithm with peer-reviewed evidence before deployment in clinical settings.' },
    { icon: '🤝', title: 'Partnership', desc: 'We build deep, collaborative relationships with hospital systems, clinicians, and life sciences partners.' },
    { icon: '⚡', title: 'Speed & Urgency', desc: 'In medicine, time is tissue. We build tools that operate with the urgency that saves lives.' },
    { icon: '🌍', title: 'Equity in Healthcare', desc: 'We believe advanced AI-powered care should be accessible to patients at every hospital, everywhere.' },
    { icon: '🔒', title: 'Trust & Privacy', desc: 'We uphold the highest standards of data security and patient privacy in everything we build.' },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-[#1a1555] to-[#2d1f6f] text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
                </div>
                <div className="relative container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-yellow-400 text-[#1a1555] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">About Us</div>
                            <h1 className="text-5xl font-light mb-6 leading-tight">
                                We Exist to <span className="text-yellow-400 font-semibold">Save Lives</span>
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Founded in 2016, Viz.ai was built on the conviction that artificial intelligence could close dangerous gaps in emergency care. Today, we power care coordination for over 1,000 hospital sites across the United States and beyond.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            {[['2016', 'Founded'], ['1,000+', 'Hospital Sites'], ['50+', 'FDA Algorithms'], ['500+', 'Team Members']].map(([v, l]) => (
                                <div key={l} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl py-6 px-4">
                                    <div className="text-3xl font-bold text-yellow-400">{v}</div>
                                    <div className="text-sm text-gray-300 mt-1">{l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl font-light mb-6 text-gray-800">
                        Our <span className="text-yellow-500 font-semibold">Mission</span>
                    </h2>
                    <p className="text-gray-600 text-xl leading-relaxed">
                        Viz.ai's mission is to accelerate care decisions for the most time-sensitive conditions by connecting patients, clinicians, and life-saving treatments through AI.
                    </p>
                    <div className="mt-10 border-t border-gray-200 pt-10">
                        <p className="text-gray-500 italic text-lg">
                            "Nothing artificial about that."
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-4xl font-light text-center mb-14 text-gray-800">
                        What We <span className="text-yellow-500 font-semibold">Stand For</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {values.map(v => (
                            <div key={v.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-yellow-400 hover:shadow-md transition">
                                <div className="text-3xl mb-4">{v.icon}</div>
                                <h3 className="font-semibold text-gray-800 text-lg mb-2">{v.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-4xl font-light text-center mb-14 text-gray-800">
                        Leadership <span className="text-yellow-500 font-semibold">Team</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {leadership.map(l => (
                            <div key={l.name} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
                                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${l.color} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}>
                                    {l.initials}
                                </div>
                                <h3 className="font-semibold text-gray-800 text-lg">{l.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{l.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#1a1555] to-[#2d1f6f] py-16 px-6 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">We're always looking for talented people who want to transform healthcare with AI.</p>
                <Link to="/contact" className="bg-yellow-400 text-[#1a1555] font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition">Get In Touch</Link>
            </section>

            <Footer />
        </div>
    );
}
