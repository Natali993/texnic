export const HeroSection = () => {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
        <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
          Протипожежна
        </span>{' '}
        обробка
      </h1>
      <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-4 sm:mb-6"></div>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
        Професійна протипожежна обробка дерев'яних та металевих конструкцій, кабельних ліній та повітропроводів для підвищення вогнестійкості
      </p>
    </div>
  );
};
