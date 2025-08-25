import Link from "next/link";

export default function Posluhi() {
  return (

    <div className="flex bg-white flex-col min-h-screen font-sans text-gray-700">
      Послуги
      <Link href={"/"}>На головну</Link>
    </div>
  );
}