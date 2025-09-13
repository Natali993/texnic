export const ServiceBlock = ({ service, index }: { service: any; index: number; }) => {
  return (
    <div
      key={index}
      id={service.id}
      className={`group relative w-full overflow-hidden min-h-[400px] max-w-[1100px] rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
      style={{
        backgroundImage: `url(${service.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for translucency and readability */}
      <div className={`absolute inset-0 bg-black opacity-60 group-hover:opacity-50 transition-all duration-300 rounded-2xl`}></div>

      {/* Gradient overlay using the consistent gradient */}
      <div className={`absolute inset-0 ${service.gradient} opacity-40 group-hover:opacity-30 transition-all duration-300 rounded-2xl`}></div>

      <div className="relative z-10 h-full flex flex-col justify-between text-white">
        <div>
          <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
          <p className="text-white/90 leading-relaxed mb-4">{service.description}</p>
          <ul className="space-y-2">
            {service.details.map((detail: string, detailIndex: number) => (
              <li key={detailIndex} className="flex items-center text-white/80 text-sm">
                <svg className="w-4 h-4 mr-2 text-cyan-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
