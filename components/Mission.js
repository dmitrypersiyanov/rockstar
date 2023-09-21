import Image from "next/image";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const historyItems = {
  visible: { x: 0, transition: { duration: 1 } },
  hidden: { x: 1000 },
};

const Mission = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      id="mission"
      className="w-full bg-slate-900 py-24 px-24 mt-40 rounded-md overflow-hidden relative"
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={historyItems}
        className="bg-slate-800 relative rounded-xl box-border py-32 overflow-hidden"
      >
        <div className="pl-[10%] h-full">
          <div className="w-[700px] ">
            <h1 className="text-5xl font-bold text-green-400 uppercase text-left">
              Our mission
            </h1>
            <p className="text-2xl font-thin text-gray-200 leading-7 mt-4 text-left">
              We've set a new purpose and ambition – to reimagine energy for
              people and planet and to become a net zero company by 2050, or
              sooner, and help the world get to net zero.
            </p>
          </div>
          <Image
            src="/images/austronaut.svg"
            width="300"
            height="300"
            alt="austronaut"
            style={{
              width: "300px",
              position: "absolute",
              top: -8,
              right: -20,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Mission;
