import { Header } from '../app/Header';
import { Footer } from '../app/Footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-700">
      <Header />
      <main className={`flex-1 bg-white pt-28 lg:pt-24 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
