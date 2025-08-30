import { Footer } from '../app/Footer';
import { Header } from '../app/Header';

export const CustomLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-700">
      <Header />
      <main className="flex-1 max-w-[1140px] mx-auto p-4 pt-24 md:pt-28 lg:pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
};
