import { vacancies } from "@/data/vacancies";
import Vacancy from "@/components/Vacancy";
import Image from "next/image";

const Vacancies = () => {
  return (
    <>
      <div className="overflow-hidden h-auto lg:h-[450px] w-full relative flex flex-col lg:flex-row mb-20 rounded-3xl box-border">
        <div className="bg-slate-800 w-full flex flex-col justify-between items-center gap-10 py-20">
          <h2 className="text-4xl text-slate-100 font-bold text-left px-20">
            Be the first to shape your future. Check out{" "}
            <span onClick={() => toggleModal()} className="text-green-400">
              our career paths
            </span>
          </h2>
          <p className="text-slate-300 px-20 text-left">
            We want people with any level of experience to see a clear path of
            growth ahead of them when they join our team
          </p>
        </div>
        <div className="w-full">
          <Image
            width="1000"
            height="1000"
            alt="team"
            style={{
              objectFit: "cover",
            }}
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
