import Link from "next/link";
import { Header } from "../Header";
import { Footer } from "../Footer";

export default function Posluhi() {
  return (

    <div className="flex bg-white flex-col min-h-screen font-sans text-gray-700">
      <Header/>
      Прокат
      <Link href={"/"}>На головну</Link>
      <Footer/>
    </div>
  );
}