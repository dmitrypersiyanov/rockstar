import { vacancies } from "@/data/vacancies";
import Vacancy from "@/components/Vacancy";
import Image from "next/image";

const Vacancies = () => {
  return (
    <>
      <div className="overflow-hidden h-auto lg:h-[450px] w-full relative grid grid-cols-1 lg:grid-cols-2 mb-20 rounded-3xl box-border">
        <div className="order-2 lg:order-1 bg-slate-800 w-full flex flex-col justify-between items-center gap-10 py-10 px-10 sm:px-20 sm:py-20 lg:py-14">
          <h2 className="text-4xl text-slate-100 font-bold text-left">
            Be the first to shape your future. Check out{" "}
            <span onClick={() => toggleModal()} className="text-green-400">
              our career paths
            </span>
          </h2>
          <p className="text-slate-300 text-left">
            We want people with any level of experience to see a clear path of
            growth ahead of them when they join our team
          </p>
        </div>
        <div className="w-full relative h-96 lg:h-full order-1 lg:order-2">
          <Image
            blurDataURL="/images/placeholder.jpg"
            placeholder="blur"
            alt="team"
            fill
            objectFit="cover"
            src="/images/team.jpg"
          />
        </div>
      </div>
      <h2 className="text-3xl text-center font-bold mb-10 text-slate-800">
        {vacancies.length} jobs available
      </h2>
      <div className="flex flex-col gap-6">
        {vacancies.map((vacancy, index) => {
          return <Vacancy key={index} {...vacancy} />;
        })}
      </div>
    </>
  );
};

export default Vacancies;
