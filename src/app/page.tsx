import { Footer } from './Footer';
import { Header } from './Header';
import { SectionFirst } from './SectionFirst';
import { SectionSecond } from './SectionSecond';
import { SectionThree } from './SectionThree';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-700">
      <Header />
      <main className="flex-1 bg-white">
        <SectionFirst />
        <SectionSecond />
        <SectionThree />
      </main>
      <Footer />
    </div>
  );
}