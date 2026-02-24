function AutoDetectSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://www.viz.ai/wp-content/uploads/2023/08/UpdatedHomepageImage_v1-1-1024x313.png.webp"
            alt="Auto-detect diseases"
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-gray-600 text-lg mb-2">Auto-detect suspected diseases.</h3>
            <h2 className="text-4xl md:text-5xl font-light">
              <span className="text-blue-500">Accelerate time to diagnosis and treatment.</span>
            </h2>
          </div>

          <div className="border-l-4 border-gray-300 pl-6">
            <p className="text-gray-600 leading-relaxed">
              The all-in-one solution autodetects suspected diseases across a wide range of therapeutic areas in seconds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <button className="bg-[#0f2f6d] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#1a3f7d] transition-colors">
              View Provider Solutions
            </button>
            <button className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-600 transition-colors">
              View Life Sciences Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AutoDetectSection;
