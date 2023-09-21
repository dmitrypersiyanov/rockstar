import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "1",
    title: "Explore",
    bg: "bg-slate-800",
    border: "border-green-500",
    color: "text-green-400",
  },
  {
    id: "2",
    title: "Extract",
    bg: "bg-slate-800",
    border: "border-green-500",
    color: "text-green-400",
  },
  {
    id: "3",
    title: "Supply",
    bg: "bg-slate-800",
    border: "border-green-500",
    color: "text-green-400",
  },
];

const About = () => {
  const [active, setActive] = useState("Explore");

  return (
    <div id="about" className="h-auto pt-32">
      <h1 className="text-5xl font-bold text-left text-gray-800">What we do</h1>
      <p className="text-xl font-normal text-gray-500 text-left leading-7 w-[80%] min-w-96 mt-3">
        Established in 2012, Rockstar Petroleum has positioned itself as a
        reliable partner to 100+ Canadian and international companies. Being
        among the top oil and gas producers in Canada, we run the whole cycle of
        production
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row mt-12 gap-4 mb-4">
          {tabs.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setActive(item.title)}
                className={`${
                  active == item.title ? `${item.color}` : "text-slate-200"
                } hover:scale-105 flex flex-col px-6 py-3 w-32 justify-center box-border items-center transition-transform duration-200 cursor-pointer rounded-full ${
                  item.bg
                }`}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="h-auto bg-gray-50 p-10">
          {active === "Explore" ? (
            <>
              <Image
                src="/images/exploration.png"
                alt="explore"
                height="70"
                width="70"
                style={{ marginBottom: "40px" }}
              />
              <hr className="h-0.5 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10" />
              <p className="text-xl text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                faucibus porta posuere. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Proin
                molestie efficitur nisi id elementum. Quisque nec leo
                consectetur, porta augue a, semper augue. Maecenas tincidunt
                eros ut eros vestibulum sodales. Quisque non consequat justo, id
                vestibulum tellus. Duis.
              </p>
            </>
          ) : active === "Extract" ? (
            <>
              <Image
                src="/images/extraction.png"
                alt="extract"
                height="70"
                width="70"
                style={{ marginBottom: "40px" }}
              />
              <hr className="h-0.5 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10" />
              <p className="text-xl text-gray-400">
                Quisque faucibus porta posuere. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Proin molestie efficitur nisi id elementum. Quisque nec
                leo consectetur, porta augue a, semper augue. Maecenas tincidunt
                eros ut eros vestibulum sodales. Quisque non consequat justo, id
                vestibulum tellus. Duis.
              </p>
            </>
          ) : (
            <>
              <Image
                src="/images/shipping.png"
                alt="shipping"
                height="70"
                width="70"
                style={{ marginBottom: "40px" }}
              />
              <hr className="h-0.5 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10 " />
              <p className="text-xl text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                faucibus porta posuere. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Proin
                molestie efficitur nisi id elementum. Quisque nec leo
                consectetur, porta augue a, semper augue. Maecenas tincidunt
                eros ut eros vestibulum sodales.{" "}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default About;
