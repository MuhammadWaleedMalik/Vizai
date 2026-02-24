function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-light mb-16 text-blue-500">
          What our customers are saying
        </h2>

        <div className="bg-white rounded-lg p-12 max-w-3xl mx-auto mb-12">
          <div className="border-l-4 border-blue-500 pl-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Our partnership with Viz.ai aligns with our commitment to delivering exceptional patient care by utilizing groundbreaking advancements in technology. This software holds immense potential for transforming the way we approach patient care.
            </p>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
            <div>
              <p className="font-semibold text-gray-800">Shetraj Gandhi, MD</p>
              <p className="text-sm text-gray-600">Chief Medical Information Officer and Medical Director of Hospital Medicine at Cooper</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t">
            <div>
              <p className="font-semibold text-gray-800 mb-2">Don Frie, MD</p>
              <p className="text-sm text-gray-600">Director, Neurointerventional Surgery, Radiology Imaging Associates, RIA Neurovascular and Swedish Medical Center, Denver</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-2">Philip Batista, MD</p>
              <p className="text-sm text-gray-600">Vascular Surgeon, Associate Program Director of Vascular and Endovascular Surgery Residency, Cooper University Health Care</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <img
                src="https://www.viz.ai/wp-content/uploads/2023/06/icon_clinically-validated.svg"
                alt="Research optimization"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Research optimization</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From accelerating patient access and adherence and closing gaps in patient care to clinical trial enrollment, we've got you covered with specialized tools for the sciences.
            </p>
            <a href="#" className="inline-block bg-[#0f2f6d] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#1a3f7d] transition">
              Learn more
            </a>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <img
                src="https://www.viz.ai/wp-content/uploads/2023/06/icon_real-time-comm.svg"
                alt="Real-time communications"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Real-time communications</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get connected within seconds of suspected disease—wherever and without delay on a mobile or desktop device. Activate teams and improve patient access to life-saving treatments.
            </p>
            <a href="#" className="inline-block bg-[#0f2f6d] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#1a3f7d] transition">
              Discover now
            </a>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <img
                src="https://www.viz.ai/wp-content/uploads/2023/06/icon_simple-integration.svg"
                alt="Easily integrated"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Easily integrated</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Smart. Simple. Supportive. Equipped with dedicated 24/7 on-call clinical specialists, implementation experts, and customer success team, we are always here to assist you.
            </p>
            <a href="#" className="inline-block bg-[#0f2f6d] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#1a3f7d] transition">
              Get support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
