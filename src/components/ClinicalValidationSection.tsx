function ClinicalValidationSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            <span className="text-blue-500">Clinically validated.</span>
            <span className="text-gray-800"> Real-world performance.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Significantly save time and improve patient and economic outcomes with our AI-powered care coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center border-4 border-gray-300">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-gray-600 font-semibold mb-2">CTA COMPLETION</p>
              <div className="relative">
                <div className="w-20 h-20 bg-[#0f2f6d] rounded-full flex items-center justify-center mx-auto text-yellow-400 font-bold text-2xl border-4 border-yellow-400">
                  73%
                </div>
                <p className="text-yellow-500 font-bold mt-2">FASTER</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center border-4 border-gray-300">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-gray-600 font-semibold mb-2">TEAM NOTIFICATION</p>
              <div className="relative">
                <div className="w-20 h-20 bg-[#0f2f6d] rounded-full flex items-center justify-center mx-auto text-yellow-400 font-bold text-2xl border-4 border-yellow-400">
                  42%
                </div>
                <p className="text-yellow-500 font-bold mt-2">FASTER</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center border-4 border-gray-300">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-gray-600 font-semibold mb-2">DOOR TO INTERVENTION</p>
              <div className="relative">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400 font-bold text-2xl border-4 border-gray-300">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-[#0f2f6d] text-white font-bold px-8 py-3 rounded-md hover:bg-[#1a3f7d] transition">
            See the data
          </button>
        </div>
      </div>
    </section>
  );
}

export default ClinicalValidationSection;
