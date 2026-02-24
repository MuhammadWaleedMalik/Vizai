function WelcomeSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-light mb-16">
          <span className="text-gray-400">Welcome</span>
          <span className="text-gray-400"> to </span>
          <span className="text-gray-800">Viz.ai</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="https://www.viz.ai/wp-content/uploads/2023/06/home-2.png.webp"
              alt="Doctor with Viz.ai interface"
              className="w-full h-auto max-w-md"
            />
          </div>

          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              At Viz.ai, we harness the power of artificial intelligence (AI) to transform care coordination and improve patient outcomes. Our comprehensive platform features <span className="text-blue-500 font-semibold">more than 50 FDA-cleared AI algorithms</span> that analyze medical imaging data—including CT scans, EKGs, echocardiograms, and more—delivering real-time insights and automated assessments to accelerate diagnosis, streamline workflows, and support faster treatment decisions.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Revolutionizing Patient Care Coordination
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Viz.ai One delivers comprehensive AI solutions that connect patients with life-saving treatments faster, improving outcomes while reducing care fragmentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
