import { Footer } from './Footer';
import { Header } from './Header';
import { SectionFirst } from '../components/SectionFirst';
import { SectionSecond } from '../components/SectionSecond';
import { SectionThree } from '../components/SectionThree';
import { SectionFourth } from '../components/SectionFourth';
import { SectionFifth } from '../components/SectionFifth';
import { SectionSixth } from '../components/SectionSixth';
import { SSectionSeventh } from '../components/SectionSeventh';
import { SectionEighth } from '../components/SectionEighth';


const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-700">
      <Header />
      <main className="flex-1 max-w-[1140px] mx-auto p-4 mt-24">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default function Home() {
  return (
    <Layout>
      {/* Content sections go here */}
      <SectionFirst />
      <SectionSecond />
      <SectionThree />
      <SectionFourth />
      <SectionFifth />
      <SectionSixth />
      <SSectionSeventh />
      <SectionEighth />
    </Layout>
  );
}