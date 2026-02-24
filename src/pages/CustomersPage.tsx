import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const testimonials = [
    {
        quote: "Viz.ai has fundamentally changed how we treat stroke patients. The AI alerts our team instantly, saving critical minutes.",
        name: "Dr. Sarah Chen",
        title: "Chief of Neurology, Memorial Medical Center",
        initials: "SC",
        color: "bg-blue-500",
    },
    {
        quote: "Our cardiac care coordination has never been more efficient. Viz Cardio has improved our door-to-balloon times by 30%.",
        name: "Dr. James Martinez",
        title: "Interventional Cardiologist, City Heart Institute",
        initials: "JM",
        color: "bg-purple-500",
    },
    {
        quote: "The platform seamlessly integrates into our existing workflow. Our care teams communicate better and respond faster.",
        name: "Dr. Aisha Patel",
        title: "CMO, Regional Health System",
        initials: "AP",
        color: "bg-green-500",
    },
    {
        quote: "With Viz.ai, we've expanded our stroke program to 12 affiliate hospitals. The impact on our community has been extraordinary.",
        name: "Dr. Michael Liu",
        title: "Stroke Medical Director, University Hospital",
        initials: "ML",
        color: "bg-orange-500",
    },
];

const caseStudies = [
    { system: 'University Health System', improvement: '45%', metric: 'Reduction in door-to-treatment time' },
    { system: 'Regional Medical Network', improvement: '2,800+', metric: 'Patients identified for treatment' },
    { system: 'National Health Alliance', improvement: '60+', metric: 'Hospitals connected on one platform' },
];

export default function CustomersPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-[#1a1555] to-[#2d1f6f] text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 right-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl" />
                </div>
                <div className="relative container mx-auto max-w-5xl text-center">
                    <div className="inline-block bg-yellow-400 text-[#1a1555] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">Customer Stories</div>
                    <h1 className="text-5xl font-light mb-6">
                        Trusted by <span className="text-yellow-400 font-semibold">1,000+ Hospitals</span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Healthcare organizations across the country rely on Viz.ai to deliver faster, smarter care coordination and better patient outcomes.
                    </p>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 px-6 bg-[#0f2f6d]">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Real Results, Real Impact</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {caseStudies.map(cs => (
                            <div key={cs.system} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 text-center text-white">
                                <div className="text-5xl font-bold text-yellow-400 mb-2">{cs.improvement}</div>
                                <div className="text-gray-300 text-sm mb-4">{cs.metric}</div>
                                <div className="border-t border-white/20 pt-4 text-sm font-medium">{cs.system}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-4xl font-light text-center mb-4 text-gray-800">
                        What Clinicians <span className="text-yellow-500 font-semibold">Say</span>
                    </h2>
                    <p className="text-center text-gray-500 mb-14">Hear from physicians and administrators about the Viz.ai difference.</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map(t => (
                            <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className={`${t.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold`}>{t.initials}</div>
                                    <div>
                                        <div className="font-semibold text-gray-800">{t.name}</div>
                                        <div className="text-sm text-gray-500">{t.title}</div>
                                    </div>
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
