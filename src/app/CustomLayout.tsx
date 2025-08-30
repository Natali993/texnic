import { Footer } from './Footer';
import { Header } from './Header';

export const CustomLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-700">
      <Header />
      <main className="flex-1 max-w-[1140px] mx-auto p-4 mt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};
