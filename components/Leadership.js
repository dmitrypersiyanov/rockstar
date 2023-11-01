import Image from "next/image";
import placeholderImage from "@/public/images/ukraine.png";
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
        className="p-0 sm:px-10 pb-10 md:pb-20 xl:p-24 pt-0 sm:pt-20 xl:pt-36 flex flex-col gap-10 xl:gap-20 bg-none sm:bg-slate-800 mt-10 sm:mt-24 xl:mt-40 rounded-sm relative"
      >
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={leadershipTitle}
          className="relative sm:absolute rounded-md w-full sm:min-w-[300px] sm:top-[-40px] xl:top-[-50px] sm:left-[calc(50%-150px)] xl:left-[calc(50%-250px)] sm:w-[300px] px-10 xl:w-[500px] h-[80px] xl:h-[100px] z-0 bg-green-400 flex justify-center items-center"
        >
          <h1 className="text-[25px] xl:text-[32px] font-bold text-center text-slate-800 z-10 leading-6">
            Our leadership team
          </h1>
        </motion.div>
        <div className="flex flex-col xl:flex-row justify-between w-full gap-10 xl:gap-20 z-10">
          {mds.map((md) => {
            return (
              <div
                key={md.id}
                className="w-full md:w-[450px] mx-auto xl:w-full min-h-96 bg-white py-8 px-8 sm:py-10 sm:px-10 lg:px-14 rounded-lg border-2 sm:border-none border-slate-100"
              >
                <div className="flex justify-between flex-row mb-10 xl:mb-14">
                  <h3 className="text-lg sm:text-xl font-semibold text-left text-gray-800">
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
                <div className="sm:shadow-dark h-[270px] sm:h-[350px] mt-6 mb-5 mx-auto overflow-hidden rounded-lg relative">
                  <Image
                    className="object-cover"
                    src={md.image}
                    fill
                    alt={md.name}
                    placeholder="blur"
                    blurDataURL="/images/placeholder.jpg"
                  />
                </div>
                <h4 className="font-bold text-md sm:text-lg mb-0 text-left">
                  {md.name}
                </h4>
                <h5 className="font-normal text-md sm:text-lg m-0 text-left">
                  {md.title}
                </h5>
                <div className="flex flex-row justify-between mt-10">
                  <Link
                    href={`profile/${md.name}`}
                    className="px-4 py-3 bg-slate-100 rounded-md text-sm sm:text-md"
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
        <div
          className={`w-full md:w-[450px] xl:w-full h-auto mx-auto bg-white py-8 px-8 sm:py-8 sm:px-10 lg:px-14 rounded-lg border-2 sm:border-none border-slate-100`}
        >
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-center gap-6">
              <h2 className="text-md sm:text-lg">Board and leadership team</h2>
              <div className="hidden xl:flex flex-row">
                {boardmembers.map((bm, index) => {
                  return (
                    <div
                      key={index}
                      className={`w-8 h-8 ${
                        isHidden ? "opacity-100" : "opacity-0"
                      } rounded-full bg-gray-800 -ml-2 transition-opacity duration-500 overflow-hidden border-[2px] border-slate-200 relative`}
                    >
                      <Image
                        alt={bm.name}
                        src={bm.image}
                        fill
                        className="object-cover"
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
                : "h-auto xl:max-h-[1200px] opacity-100 pt-10 "
            } bg-white overflow-hidden transition-all delay-100 duration-300 flex flex-col gap-8`}
          >
            <div className="flex flex-col xl:flex-row flex-nowrap gap-8 ">
              {canadianMembers.map((member) => {
                return (
                  <div
                    key={member.id}
                    className="w-full min-h-48 flex flex-col rounded-md overflow-hidden"
                  >
                    <Link href={`profile/${member.name}`}>
                      <div className="sm:shadow-dark h-[270px] sm:h-[350px] mx-auto relative overflow-hidden rounded-lg">
                        <Image
                          src={member.image}
                          alt="member"
                          fill
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL="/images/placeholder.jpg"
                        />
                      </div>
                      <div className="px-0">
                        <h3 className="text-md sm:text-lg font-bold mt-5">
                          {member.name}
                        </h3>
                        <h4 className="text-md sm:text-lg mb-10">
                          {member.title}
                        </h4>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col xl:flex-row flex-nowrap gap-8 ">
              {ukrainianMembers.map((member) => {
                return (
                  <div
                    key={member.id}
                    className="w-full min-h-48 flex flex-col rounded-md overflow-hidden group"
                  >
                    <Link href={`profile/${member.name}`}>
                      <div className="sm:shadow-dark h-[270px] sm:h-[350px] mx-auto relative overflow-hidden rounded-lg">
                        <Image
                          src={member.image}
                          alt="member"
                          fill
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL="/images/placeholder.jpg"
                        />
                      </div>
                      <h3 className="text-md sm:text-lg font-bold mt-5">
                        {member.name}
                      </h3>
                      <h4 className="text-md sm:text-lg mb-10">
                        {member.title}
                      </h4>
                    </Link>
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
