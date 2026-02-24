import { useState, FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const offices = [
    { city: 'San Francisco, CA', type: 'Headquarters', address: '548 Market St, Suite 58293' },
    { city: 'New York, NY', type: 'East Coast Office', address: '1 World Trade Center, Suite 8500' },
    { city: 'Tel Aviv, Israel', type: 'R&D Center', address: 'HaYarkon 114, Tel Aviv-Yafo' },
];

const reasons = [
    { icon: '🏥', label: 'Request a Demo' },
    { icon: '🤝', label: 'Partnerships' },
    { icon: '🔬', label: 'Clinical Research' },
    { icon: '💼', label: 'Careers' },
    { icon: '📰', label: 'Media Inquiries' },
    { icon: '🛠️', label: 'Technical Support' },
];

export default function ContactPage() {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', org: '', reason: '', message: '' });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-[#1a1555] to-[#2d1f6f] text-white py-20 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
                </div>
                <div className="relative container mx-auto max-w-5xl text-center">
                    <div className="inline-block bg-yellow-400 text-[#1a1555] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">Contact Us</div>
                    <h1 className="text-5xl font-light mb-4">
                        Let's <span className="text-yellow-400 font-semibold">Connect</span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-xl mx-auto">
                        Whether you're a healthcare provider, life sciences partner, or researcher — we'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12">

                    {/* Form */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                        {sent ? (
                            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                                <p className="text-gray-500">Thank you for reaching out. Our team will get back to you within 1-2 business days.</p>
                                <button onClick={() => setSent(false)} className="mt-6 text-yellow-500 font-semibold hover:text-yellow-600">Send another message →</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                        <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Dr. Jane Smith" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1555]/30" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                        <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="jane@hospital.org" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1555]/30" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                                    <input value={form.org} onChange={e => setForm({ ...form, org: e.target.value })} placeholder="Hospital or company name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1555]/30" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">I'm reaching out about *</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {reasons.map(r => (
                                            <button
                                                key={r.label}
                                                type="button"
                                                onClick={() => setForm({ ...form, reason: r.label })}
                                                className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium transition ${form.reason === r.label
                                                        ? 'border-[#1a1555] bg-[#1a1555] text-white'
                                                        : 'border-gray-200 text-gray-600 hover:border-[#1a1555]'
                                                    }`}
                                            >
                                                <span>{r.icon}</span>{r.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                                    <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4} placeholder="Tell us how we can help..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1555]/30 resize-none" />
                                </div>
                                <button type="submit" className="w-full bg-gradient-to-r from-[#1a1555] to-[#2d1f6f] text-white font-bold py-3 rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2">
                                    <Send size={16} /> Send Message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                            <div className="space-y-4">
                                <a href="mailto:contact@viz.ai" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-yellow-50 transition group">
                                    <div className="w-10 h-10 bg-[#1a1555] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail size={18} className="text-yellow-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium">Email us at</p>
                                        <p className="text-gray-800 font-semibold group-hover:text-yellow-600 transition">contact@viz.ai</p>
                                    </div>
                                </a>
                                <a href="tel:+14155551234" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-yellow-50 transition group">
                                    <div className="w-10 h-10 bg-[#1a1555] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone size={18} className="text-yellow-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium">Call us at</p>
                                        <p className="text-gray-800 font-semibold group-hover:text-yellow-600 transition">+1 (415) 555-1234</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 text-lg mb-4">Our Offices</h3>
                            <div className="space-y-3">
                                {offices.map(o => (
                                    <div key={o.city} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                                        <MapPin size={18} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm">{o.city}</p>
                                            <p className="text-xs text-gray-500">{o.type}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">{o.address}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
