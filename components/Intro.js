import Image from "next/image";
import facilities from "@/public/images/facilities.jpg";
import { Chevron } from "@/public/icons/icons";

const Intro = () => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[400px] bg-gradient bg-gray-100 rounded-3xl`}
    >
      <div className="w-full h-[300px] sm:h-[400px] lg:hover:translate-x-5 transition-transform duration-500 relative overflow-hidden rounded-3xl">
        <Image
          fill
          className="object-cover"
          placeholder="blur"
          src={facilities}
          alt="production facilities"
        />
      </div>
      <div className="p-10 md:p-14 h-[350px] lg:h-auto flex flex-col justify-between">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
          Creating sustainable future
        </h1>

        <a
          href="#about"
          className="text-lg leading-6 font-normal group flex flex-row justify-between"
        >
          <span className="text-gray-800 group-hover:text-green-400 transition-text duration-500">
            Learn more
          </span>
          <span className="group-hover:translate-x-2 transition-transform duration-500">
            <Chevron />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Intro;
