import Image from "next/image";
import { useState, useEffect } from "react";
import { MinusIcon, PlusIcon } from "@/public/icons/icons";
import { boardmembers } from "@/data/boardmembers";
import { mds } from "@/data/mds";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const leadershipTitle = {
  visible: { y: 0, transition: { duration: 0.5 } },
  hidden: { y: 100 },
};

const Leadership = () => {
  const [isHidden, setIsHidden] = useState(true);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const handleAccordion = () => {
    setIsHidden((isHidden) => !isHidden);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const canadianMembers = boardmembers.filter(
    (member) => member.nationality == "canadian"
  );
  const ukrainianMembers = boardmembers.filter(
    (member) => member.nationality == "ukrainian"
  );

  return (
    <>
      <div
        id="leadership"
        className="p-24 pt-36 flex flex-col gap-20 bg-slate-800 mt-40 rounded-sm relative"
      >
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={leadershipTitle}
          className="absolute rounded-md min-w-[300px] top-[-60px] left-[calc(50%-250px)] w-[500px] h-[120px] z-0 bg-green-400 flex justify-center items-center"
        >
          <h1 className="text-[36px] font-semibold text-center text-slate-800 z-10">
            <span className="font-bold">Our leadership team</span>
          </h1>
        </motion.div>
        <div className="flex flex-row justify-between w-full gap-20 z-10">
          {mds.map((md) => {
            return (
              <div
                key={md.id}
                className="w-full min-h-96 bg-white py-10 px-14 rounded-lg"
              >
                <div className="flex justify-between flex-row mb-14">
                  <h3 className="text-xl font-semibold text-left text-gray-800">
                    {md.country}
                  </h3>
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src={md.flag}
                      alt={md.country}
                      width="100"
                      height="100"
                    />
                  </div>
                </div>
                <div className="shadow-dark h-[300px] bg-red-200 mt-6 mb-5 mx-auto overflow-hidden rounded-lg">
                  <Image
                    src={md.image}
                    width="1000"
                    height="1000"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt="alt"
                  />
                </div>
                <h4 className="font-bold text-lg mb-0 text-left">{md.name}</h4>
                <h5 className="font-normal text-lg m-0 text-left">
                  {md.title}
                </h5>
                <div className="flex flex-row justify-between mt-10">
                  <Link
                    href={`profile/${md.name}`}
                    className="px-4 py-3 bg-slate-100 rounded-md"
                  >
                    Learn more
                  </Link>
                  <div className="flex flex-row items-center">
                    <a
                      className="inline-block"
                      href="https://www.linkedin.com/"
                    >
                      <span className="inline-block -mb-1">
                        <Image
                          alt="linkedin"
                          src="/images/linkedin.png"
                          width="20"
                          height="20"
                        />
                      </span>
                    </a>
                    <a className="inline-block" href="https://www.twitter.com/">
                      <span className="inline-block ml-1 -mb-1">
                        <Image
                          alt="twitter"
                          src="/images/twitter.png"
                          width="20"
                          height="20"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={`w-full h-auto bg-white py-10 px-14 rounded-lg`}>
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-center gap-6">
              <h2 className="text-lg">Board and leadership team</h2>
              <div className="flex flex-row">
                {boardmembers.map((bm, index) => {
                  return (
                    <div
                      key={index}
                      className={`w-8 h-8 ${
                        isHidden ? "opacity-100" : "opacity-0"
                      } rounded-full bg-gray-100 -ml-2 transition-opacity duration-500 overflow-hidden border-[2px] border-slate-200`}
                    >
                      <Image
                        alt={bm.name}
                        src={bm.image}
                        width="1000"
                        height="1000"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="cursor-pointer" onClick={handleAccordion}>
              {isHidden ? <PlusIcon /> : <MinusIcon />}
            </div>
          </div>
          <div
            className={`${
              isHidden
                ? "max-h-0 pt-0 opacity-0"
                : "max-h-[1200px] opacity-100 pt-10 "
            } bg-white overflow-hidden transition-all delay-100 duration-300 flex flex-col gap-8`}
          >
            <div className="flex flex-row flex-nowrap gap-8 ">
              {canadianMembers.map((member) => {
                return (
                  <div
                    key={member.id}
                    className="w-full min-h-48 flex flex-col rounded-md overflow-hidden"
                  >
                    <a href={`profile/${member.name}`}>
                      <div>
                        <Image
                          src={member.image}
                          alt="member"
                          width="1000"
                          height="1000"
                          style={{
                            width: "100%",
                            height: "250px",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </div>
                      <div className="px-0">
                        <h3 className="text-lg font-bold mt-5">
                          {member.name}
                        </h3>
                        <h4 className="text-lg mb-10">{member.title}</h4>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-row flex-nowrap gap-8 ">
              {ukrainianMembers.map((member) => {
                return (
                  <div
                    key={member.id}
                    className="w-full min-h-48 flex flex-col rounded-md overflow-hidden group"
                  >
                    <a href={`profile/${member.name}`}>
                      <div>
                        <Image
                          src={member.image}
                          alt="member"
                          width="1000"
                          height="1000"
                          style={{
                            width: "100%",
                            height: "250px",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </div>
                      <h3 className="text-lg font-bold mt-5">{member.name}</h3>
                      <h4 className="text-lg mb-10">{member.title}</h4>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadership;
