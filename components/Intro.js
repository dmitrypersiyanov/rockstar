import Image from "next/image";
import { Chevron } from "@/public/icons/icons";

const Intro = () => {
  return (
    <div
      className={`grid grid-cols-2 h-[400px] bg-gradient bg-gray-100 rounded-3xl`}
    >
      <div className="w-full h-full hover:translate-x-5 transition-transform duration-500 relative overflow-hidden rounded-3xl">
        <Image
          width="1000"
          height="1000"
          src="/images/facilities.jpg"
          alt="production facilities"
          style={{ objectFit: "fill" }}
        />
      </div>
      <div className="p-14 flex flex-col justify-between">
        <h1 className="text-5xl font-bold text-gray-800">
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
