import Navbar from "../components/navbar";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${openSans.className}`}>
      <div className="w-full h-full bg-red-500 ">
        <Navbar />
        <h1 className="bg-blue-500">Hoddme</h1>
      </div>
    </main>
  );
}
