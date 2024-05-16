import Image from "next/image";
import Header from "./Header";
import { Slides } from "./slides";

function Hero() {
  return (
    <>
      <Header />
      <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
        <div className="flex-1 flex flex-col gap-10">
          <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
            Explore And <span className="red-gradient">Enjoy The Best </span>
            Movies Of All Time
          </h1>
        </div>
        <div className="lg:flex-1 relative w-full h-[50vh] justify-center flex">
          <Image src="/bg.jpg" alt="anime" fill className="object-contain" />
          {/* <Slides /> */}
        </div>
      </header>
    </>
  );
}

export default Hero;
