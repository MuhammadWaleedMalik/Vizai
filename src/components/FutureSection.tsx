function FutureSection() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-light">
              <span className="text-blue-500">This is the future of patient care.</span>
              <br />
              <span className="text-gray-800">Powered by AI.</span>
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 py-4">
              <p className="font-semibold text-gray-800 mb-2">
                Introducing Viz.ai One—the leading AI-powered care coordination solution designed to revolutionize the way patient care is delivered.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Viz.ai One streamlines workflows, automates critical assessments, and accelerates diagnosis to improve patient outcomes and care efficiency.
              </p>
            </div>

            <button className="bg-[#0f2f6d] text-white font-bold px-8 py-3 rounded-md hover:bg-[#1a3f7d] transition">
              Learn more
            </button>

            <div className="space-y-4 pt-6">
              <h3 className="font-semibold text-gray-800">Why Choose Viz.ai One?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>50+ FDA-cleared algorithms for comprehensive coverage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Real-time insights and automated assessments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Proven to accelerate diagnosis and streamline care</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="https://www.viz.ai/wp-content/uploads/2023/06/mock_two-computers-copy.png.webp"
              alt="Viz.ai One Platform"
              className="w-full h-auto max-w-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FutureSection;
