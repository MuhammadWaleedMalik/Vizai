function DemoSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#1a1555] to-[#2d1f6f] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-12 items-center min-h-screen">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-light leading-tight">
            <span className="text-yellow-400">Request a demo.</span>
          </h2>

          <div className="space-y-4">
            <h3 className="text-3xl font-light text-white">
              Experience the power of AI
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              See for yourself how the AI-powered care coordination of Viz.ai can transform your healthcare organization.
            </p>
          </div>

          <button className="bg-yellow-400 text-[#1a1555] font-bold px-8 py-3 rounded-md hover:bg-yellow-300 transition inline-block">
            Speak to an expert
          </button>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-700 rounded-3xl opacity-10 blur-2xl"></div>
          <img
            src="https://www.viz.ai/wp-content/uploads/2023/06/TriPhone-angle.png.webp"
            alt="Viz.ai Mobile App"
            className="relative z-10 w-full h-auto max-w-md drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-light">
              <span className="text-blue-500">Viz.ai is revolutionizing the</span>
              <span className="text-white"> way patient care is</span>
              <br />
              <span className="text-white">delivered.</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              From disease detection to life-saving treatments.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.viz.ai/wp-content/uploads/2023/06/patient-dr.png.webp"
              alt="Patient and Doctor"
              className="w-full h-auto max-w-md rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoSection;
