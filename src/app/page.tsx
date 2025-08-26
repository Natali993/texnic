import { Footer } from './Footer';
import { Header } from './Header';
import { SectionFirst } from './SectionFirst';
import { SectionSecond } from './SectionSecond';
import { SectionThree } from './SectionThree';
import { SectionFourth } from './SectionFourth';

export default function Home() {
  return (

    <div className="flex flex-col min-h-screen font-sans text-gray-700">
      <Header />
      <main className="flex-1 p-4 bg-white mt-24">
        {/* Content sections go here */}
        <SectionFirst/>
        <SectionSecond/>
        <SectionThree/>
        <SectionFourth/>
      </main>
      <Footer />
    </div>
  );
}