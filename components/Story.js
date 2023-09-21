import { useRef } from "react";
import { story } from "@/data/story";
import StoryItem from "./StoryItem";
import { useInView } from "framer-motion";

const Story = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <>
      <div id="story" ref={ref} className="pt-32 mt-20">
        <div className="flex flex-col justify-center items-start mb-10">
          <h1 className="text-5xl font-bold text-center w-full text-gray-800 mb-5">
            Our story
          </h1>
          <p className="text-2xl font-normal text-gray-500 text-center mx-auto leading-7 mt-3">
            The smell was unmistakable. It was a smell you could see. The <br />
            vapours rose clearly. It was a smell you could see. <br />
            It was a smell you could see.
          </p>
        </div>
        <div className="flex flex-row justify-start">
          <div className="grid grid-cols-1 gap-y-0 min-h-96 gap-x-0 mt-14 mb-10 w-full sm:w-[900px] sm:mx-auto">
            {story.map((item, key) => {
              return <StoryItem key={key} {...item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
