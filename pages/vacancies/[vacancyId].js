import { useRouter } from "next/router";
import { vacancies } from "@/data/vacancies";

const VacancyDescription = () => {
  const router = useRouter();
  const vacancyId = router.query.vacancyId;
  return (
    <>
      <h2 className="text-3xl font-bold text-center">
        Apply for the position of{" "}
        <span className="text-green-400">{vacancyId}</span> today
      </h2>
      {vacancies
        .filter((item) => item.title == vacancyId)
        .map((item, index) => {
          return (
            <>
              <p className="mt-2 mb-10 text-slate-500 text-center">
                Posted on {item.advertisedSince}
              </p>
              <div key={index} className="w-full bg-slate-50 p-14 rounded-md">
                <h4 className="text-lg font-bold text-slate-700">
                  Description
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2 ">
                  {item.description}
                </h4>
                <hr className="mt-10" />
                <h4 className="text-lg font-bold text-slate-700 mt-10 ">
                  Payment
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  USD {item.salary} hourly / {item.hours} hours per week
                </h4>
                <hr className="mt-10" />
                <h4 className="text-lg font-bold text-slate-700 mt-10 ">
                  Experience
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.experience}-year experience
                </h4>
                <hr className="mt-10" />
                <h4 className="text-lg font-bold text-slate-700 mt-10 ">
                  Education
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.education}
                </h4>
                <hr className="mt-10" />
                <h4 className="text-lg font-bold text-slate-700 mt-10 ">
                  Languages
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.languages.map((item) => item).join(", ")}
                </h4>
                <hr className="mt-10" />
                <h4 className="text-lg font-bold text-slate-700 mt-10 ">
                  Supervision
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.supervision > 1
                    ? `${item.supervision} people`
                    : `${item.supervision} person`}
                </h4>
                <hr className="mt-10" />
                <h4 className="text-lg font-bold text-slate-700 mt-10 ">
                  Computer & Technology knowledge
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.technoSkills.map((item) => item).join(", ")}
                </h4>
                <hr className="mt-10" />
                <h4 className="text-lg font-bold text-slate-700 mt-10 ">
                  Work conditions
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.workConditions.map((item) => item).join(", ")}
                </h4>
                <hr className="mt-10" />
                <h4 className="text-lg font-bold text-slate-700 mt-10 ">
                  Personal suitability
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.personalSuitability.map((item) => item).join(", ")}
                </h4>
                <hr className="mt-10" />
                <h4 className="text-lg font-bold text-slate-700 mt-10 ">
                  Advertised until
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.advertisedUntil}
                </h4>
              </div>
              <div className="w-full bg-green-400 p-14 rounded-md mt-10">
                <h2 className="text-lg font-normal text-slate-700 mt-2">
                  Feeling that this position fits you? Feel free to apply via
                  email{" "}
                  <span className="font-bold">
                    vacancies@paraparaparadise.com
                  </span>
                </h2>
              </div>
            </>
          );
        })}
    </>
  );
};

export default VacancyDescription;
