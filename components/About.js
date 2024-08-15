import { useState } from "react";
import Image from "next/image";
import { tabs } from "@/data/tabs";
import Tabs from "./Tabs";

const About = () => {
  const [active, setActive] = useState("Explore");
  const handleTab = (title) => {
    setActive(title);
  };
  return (
    <div id="about" className="h-auto pt-20 sm:pt-24">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 text-center md:text-left ">
        What we do
      </h1>
      <p className="text-lg sm:text-xl font-normal text-gray-500 text-justify sm:text-center md:text-left md:mx-0 mx-auto leading-7 w-full md:w-[80%] min-w-96 mt-5">
      Established in 2012, Rockstar Petroleum is a leading name in the oil and gas sector, partnering with over 100 Canadian and international companies. As a top 
      producer in Canada, we manage every stage of the production cycle, from exploration to distribution. Our focus on reliability and efficiency ensures we meet 
      the high demands of our global clientele
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row mt-12 gap-4 mb-8 md:justify-start justify-center">
          <Tabs active={active} handleTab={handleTab} />
        </div>
        <div className="h-auto bg-gray-50 p-8 xl:p-10">
          {tabs
            .filter((tab) => tab.title === active)
            .map((tab) => {
              return (
                <>
                  <Image
                    key={tab.id}
                    src={tab.image}
                    alt="explore"
                    height="70"
                    width="70"
                    className="mb-10"
                  />
                  <hr className="h-0.5 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10" />
                  <p className="text-lg xl:text-xl text-gray-400">
                    {tab.description}
                  </p>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default About;
