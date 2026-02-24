import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const studies = [
    {
        tag: 'Neurology',
        title: 'AI-Assisted LVO Detection Reduces Time-to-Treatment by 45%',
        journal: 'Journal of NeuroInterventional Surgery, 2024',
        summary: 'A multicenter study across 42 hospitals demonstrated that Viz.ai\'s LVO detection algorithm significantly reduced door-to-groin times compared to standard care.',
        color: 'border-blue-400',
    },
    {
        tag: 'Cardiology',
        title: 'Real-World Impact of AI on STEMI Care Coordination',
        journal: 'JACC: Cardiovascular Interventions, 2024',
        summary: 'Retrospective analysis of 8,200 patients showed a 30% improvement in door-to-balloon time at sites using Viz Cardio versus control hospitals.',
        color: 'border-purple-400',
    },
    {
        tag: 'Pulmonology',
        title: 'Automated PE Detection Sensitivity and Specificity Analysis',
        journal: 'Radiology, 2023',
        summary: 'Viz.ai\'s PE algorithm achieved 94% sensitivity and 91% specificity across a diverse patient population, outperforming traditional radiology workflows.',
        color: 'border-green-400',
    },
    {
        tag: 'Multi-Disease',
        title: 'Platform-Wide AI Adoption and Clinical Workflow Integration',
        journal: 'npj Digital Medicine, 2024',
        summary: 'Large-scale study of 1,200+ hospital sites demonstrated safe and effective AI integration into existing EMR and PACS workflows across multiple disease areas.',
        color: 'border-yellow-400',
    },
];

const milestones = [
    { year: '2018', event: 'First FDA clearance for LVO detection algorithm' },
    { year: '2020', event: '100+ hospitals onboarded on the Viz.ai platform' },
    { year: '2021', event: 'Expanded to cardiovascular AI with Viz Cardio launch' },
    { year: '2022', event: '1 million patients analyzed on the platform' },
    { year: '2023', event: '50 FDA-cleared algorithms milestone reached' },
    { year: '2024', event: '4 million+ patients, 1,000+ hospital sites worldwide' },
];

export default function ClinicalResearchPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-[#1a1555] to-[#0f2f6d] text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
                    <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 rounded-full blur-3xl" />
                </div>
                <div className="relative container mx-auto max-w-5xl text-center">
                    <div className="inline-block bg-yellow-400 text-[#1a1555] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">Clinical Research</div>
                    <h1 className="text-5xl font-light mb-6">
                        Evidence-Based <span className="text-yellow-400 font-semibold">AI Medicine</span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
                        Backed by rigorous clinical validation across peer-reviewed journals, Viz.ai's algorithms are proven to improve patient outcomes in real-world hospital settings.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-center">
                        {[['50+', 'FDA-Cleared Algorithms'], ['200+', 'Peer-Reviewed Publications'], ['4M+', 'Patients in Research Data'], ['42', 'Avg. Clinical Sites per Study']].map(([v, l]) => (
                            <div key={l} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-6 py-4">
                                <div className="text-3xl font-bold text-yellow-400">{v}</div>
                                <div className="text-sm text-gray-300 mt-1">{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clinical Studies */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-4xl font-light text-center mb-4 text-gray-800">
                        Featured <span className="text-yellow-500 font-semibold">Publications</span>
                    </h2>
                    <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
                        Our clinical evidence library spans neurology, cardiology, pulmonology, and multi-disease applications.
                    </p>
                    <div className="space-y-6">
                        {studies.map(s => (
                            <div key={s.title} className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 ${s.color} border-t border-r border-b border-gray-100`}>
                                <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">{s.tag}</span>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{s.title}</h3>
                                <p className="text-xs text-blue-600 font-medium mb-3">{s.journal}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{s.summary}</p>
                                <a href="#" className="mt-3 inline-block text-yellow-500 font-semibold text-sm hover:text-yellow-600">Read full study →</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-4xl font-light text-center mb-14 text-gray-800">
                        Our Clinical <span className="text-yellow-500 font-semibold">Milestones</span>
                    </h2>
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1a1555] to-yellow-400" />
                        <div className="space-y-8">
                            {milestones.map(m => (
                                <div key={m.year} className="flex gap-6 items-start pl-2">
                                    <div className="w-12 h-12 rounded-full bg-[#1a1555] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 z-10 relative shadow-md">
                                        {m.year}
                                    </div>
                                    <div className="bg-gray-50 rounded-xl px-5 py-4 flex-1 border border-gray-100">
                                        <p className="text-gray-700 font-medium">{m.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#1a1555] to-[#2d1f6f] py-16 px-6 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Collaborate on Research</h2>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">Interested in partnering with Viz.ai on a clinical study? Our research team is ready to collaborate.</p>
                <Link to="/contact" className="bg-yellow-400 text-[#1a1555] font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition">Contact Research Team</Link>
            </section>

            <Footer />
        </div>
    );
}
