import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const categories = [
    {
        tag: 'White Papers',
        icon: '📄',
        items: [
            'The State of AI in Healthcare: 2024 Report',
            'AI-Assisted Stroke Care: A Framework for Health Systems',
            'Building a Coordinated Cardiovascular Care Program',
        ],
    },
    {
        tag: 'Case Studies',
        icon: '🏥',
        items: [
            'How St. Mary\'s Reduced Stroke Treatment Time by 40%',
            'Regional Network Connects 60 Hospitals on One AI Platform',
            'AI-Driven PE Detection Saves Lives in Community Hospital Setting',
        ],
    },
    {
        tag: 'Webinars',
        icon: '🎥',
        items: [
            'Introduction to AI Care Coordination — On-Demand',
            'Viz Cardio: A Cardiologist\'s Perspective — Panel Discussion',
            'FDA Clearance and AI: What Clinicians Need to Know',
        ],
    },
    {
        tag: 'Infographics',
        icon: '📊',
        items: [
            'Stroke Golden Hour: How AI Changes the Timeline',
            'The Viz.ai Algorithm Library at a Glance',
            'ROI of AI in Healthcare: By the Numbers',
        ],
    },
];

const blogs = [
    {
        title: 'How AI Is Closing the Gap in Time-Sensitive Emergency Care',
        date: 'January 22, 2025',
        tag: 'Insight',
        excerpt: 'For conditions like stroke and STEMI, minutes matter. Here\'s how Viz.ai\'s AI platform is compressing timelines across the care continuum.',
    },
    {
        title: '50 FDA-Cleared Algorithms: What This Milestone Means for Healthcare',
        date: 'December 10, 2024',
        tag: 'Announcement',
        excerpt: 'Viz.ai reached a landmark achievement with 50 FDA-cleared AI algorithms. We explore what this means for patients and providers.',
    },
    {
        title: 'The Future of Life Sciences Partnerships in an AI-First World',
        date: 'November 5, 2024',
        tag: 'Thought Leadership',
        excerpt: 'Pharmaceutical companies are increasingly turning to AI platforms to accelerate clinical trials and identify eligible patient populations.',
    },
];

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-[#1a1555] to-[#2d1f6f] text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
                </div>
                <div className="relative container mx-auto max-w-5xl text-center">
                    <div className="inline-block bg-yellow-400 text-[#1a1555] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">Resources</div>
                    <h1 className="text-5xl font-light mb-6">
                        Knowledge <span className="text-yellow-400 font-semibold">Library</span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Explore white papers, case studies, webinars, and research to learn how AI is transforming healthcare.
                    </p>
                </div>
            </section>

            {/* Resource Grid */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {categories.map(cat => (
                            <div key={cat.tag} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-2xl">{cat.icon}</span>
                                    <h2 className="text-xl font-semibold text-gray-800">{cat.tag}</h2>
                                </div>
                                <ul className="space-y-3">
                                    {cat.items.map(item => (
                                        <li key={item} className="flex items-start gap-2.5 group cursor-pointer">
                                            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                                            <a href="#" className="text-gray-600 text-sm leading-snug group-hover:text-yellow-600 transition">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#" className="mt-5 inline-block text-yellow-500 font-semibold text-sm hover:text-yellow-600">View all {cat.tag} →</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-4xl font-light text-center mb-14 text-gray-800">
                        Latest <span className="text-yellow-500 font-semibold">Insights</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {blogs.map(b => (
                            <div key={b.title} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition group cursor-pointer">
                                <div className="h-36 bg-gradient-to-br from-[#1a1555] to-[#2d1f6f] flex items-center justify-center">
                                    <span className="text-4xl">🧠</span>
                                </div>
                                <div className="p-5">
                                    <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">{b.tag}</span>
                                    <h3 className="font-semibold text-gray-800 mb-2 leading-snug group-hover:text-yellow-600 transition">{b.title}</h3>
                                    <p className="text-gray-500 text-xs mb-3">{b.date}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{b.excerpt}</p>
                                    <a href="#" className="mt-4 inline-block text-yellow-500 font-semibold text-sm">Read more →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="bg-gradient-to-r from-[#1a1555] to-[#2d1f6f] py-16 px-6 text-white text-center">
                <h2 className="text-3xl font-bold mb-3">Stay Up to Date</h2>
                <p className="text-gray-300 mb-8">Get the latest AI healthcare insights delivered to your inbox.</p>
                <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
                    <input type="email" placeholder="Enter your email" className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    <button type="submit" className="bg-yellow-400 text-[#1a1555] font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition text-sm">Subscribe</button>
                </form>
            </section>

            <Footer />
        </div>
    );
}
