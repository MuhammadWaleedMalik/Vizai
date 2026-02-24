function TherapeuticAreasSection() {
  const areas = [
    {
      title: 'Viz Life Sciences',
      description: 'In partnership with pharmaceutical and medical device companies, Viz.ai develops new customized solutions for treatable diseases.',
      image: 'https://www.viz.ai/wp-content/uploads/2023/06/home-4-768x514.png.webp',
      tag: 'Therapeutic areas',
      link: 'Learn more'
    },
    {
      title: 'Viz Neuro',
      description: 'AI-powered suite of solutions to accelerate the detection and treatment of suspected neurovascular diseases.',
      image: 'https://www.viz.ai/wp-content/uploads/2023/06/mock_2-phones_neuro.png.webp',
      tag: 'Therapeutic areas',
      link: 'More info'
    },
    {
      title: 'Viz Cardio',
      description: 'AI-powered suite of solutions developed to meet cardiovascular needs.',
      image: 'https://www.viz.ai/wp-content/uploads/2023/06/mock_comp-tablet-cardio-copy.png.webp',
      tag: 'Therapeutic areas',
      link: 'More info'
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="space-y-16">
          {areas.map((area, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              {index % 2 === 0 ? (
                <>
                  <div className="space-y-6">
                    <div className="bg-yellow-400 text-[#0f2f6d] inline-block px-4 py-2 rounded font-semibold text-sm">
                      {area.tag}
                    </div>
                    <h2 className="text-4xl font-light">
                      <span className="text-yellow-500">{area.title.split(' ')[0]}</span>
                      <span className="text-gray-800"> {area.title.split(' ').slice(1).join(' ')}</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {area.description}
                    </p>
                    <a href="#" className="inline-block text-yellow-500 font-semibold hover:text-yellow-600">
                      {area.link} →
                    </a>
                  </div>
                  <div className="flex justify-center">
                    <img src={area.image} alt={area.title} className="w-full h-auto max-w-md" />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-center order-2 md:order-1">
                    <img src={area.image} alt={area.title} className="w-full h-auto max-w-md" />
                  </div>
                  <div className="space-y-6 order-1 md:order-2">
                    <div className="bg-yellow-400 text-[#0f2f6d] inline-block px-4 py-2 rounded font-semibold text-sm">
                      {area.tag}
                    </div>
                    <h2 className="text-4xl font-light">
                      <span className="text-yellow-500">{area.title.split(' ')[0]}</span>
                      <span className="text-gray-800"> {area.title.split(' ').slice(1).join(' ')}</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {area.description}
                    </p>
                    <a href="#" className="inline-block text-yellow-500 font-semibold hover:text-yellow-600">
                      {area.link} →
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TherapeuticAreasSection;
