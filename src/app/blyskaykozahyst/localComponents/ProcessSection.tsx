export const ProcessSection = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Етапи роботи</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
            1
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Обстеження</h3>
          <p className="text-gray-600">Аналіз об'єкта та розрахунок ризиків</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
            2
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Проектування</h3>
          <p className="text-gray-600">Розробка проекту системи захисту</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
            3
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Монтаж</h3>
          <p className="text-gray-600">Встановлення обладнання та заземлення</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
            4
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Тестування</h3>
          <p className="text-gray-600">Перевірка працездатності системи</p>
        </div>
      </div>
    </div>
  );
};
