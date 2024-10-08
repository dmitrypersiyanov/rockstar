import { useRouter } from "next/router";
import { vacancies } from "@/data/vacancies";

const VacancyDescription = () => {
  const router = useRouter();
  const vacancyId = router.query.vacancyId;
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-slate-800">
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
              <div
                key={index}
                className="w-full bg-slate-50 p-8 sm:p-10 md:p-14 rounded-md"
              >
                <h4 className="text-md md:text-lg font-bold text-slate-700">
                  Description
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2 ">
                  {item.description}
                </h4>
                <hr className="my-5 md:my-10" />
                <h4 className="text-md md:text-lg font-bold text-slate-700">
                  Payment
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  USD {item.salary} hourly / {item.hours} hours per week
                </h4>
                <hr className="my-5 md:my-10" />
                <h4 className="text-md md:text-lg font-bold text-slate-700">
                  Experience
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.experience}-year experience
                </h4>
                <hr className="my-5 md:my-10" />
                <h4 className="text-md md:text-lg font-bold text-slate-700  ">
                  Education
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.education}
                </h4>
                <hr className="my-5 md:my-10" />
                <h4 className="text-md md:text-lg font-bold text-slate-700 ">
                  Languages
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.languages.map((item) => item).join(", ")}
                </h4>
                <hr className="my-5 md:my-10" />
                <h4 className="text-md md:text-lg font-bold text-slate-700 ">
                  Supervision
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.supervision > 1
                    ? `${item.supervision} people`
                    : `${item.supervision} person`}
                </h4>
                <hr className="my-5 md:my-10" />
                <h4 className="text-md md:text-lg font-bold text-slate-700">
                  Computer & Technology knowledge
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.technoSkills.map((item) => item).join(", ")}
                </h4>
                <hr className="my-5 md:my-10" />
                <h4 className="text-md md:text-lg font-bold text-slate-700">
                  Work conditions
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.workConditions.map((item) => item).join(", ")}
                </h4>
                <hr className="my-5 md:my-10" />
                <h4 className="text-md md:text-lg font-bold text-slate-700">
                  Personal suitability
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.personalSuitability.map((item) => item).join(", ")}
                </h4>
                <hr className="my-5 md:my-10" />
                <h4 className="text-md md:text-lg font-bold text-slate-700">
                  Advertised until
                </h4>
                <h4 className="text-md font-normal text-slate-500 mt-2">
                  {item.advertisedUntil}
                </h4>
              </div>
              <div className="w-full bg-green-400 p-8 sm:p-10 md:p-14 rounded-md mt-10">
                <h2 className="text-md sm:text-lg font-normal text-slate-700">
                Think this role is a good match for you? Apply by sending your resume to {" "}
                  <span className="font-bold">vacancies@rockstar.com</span>
                </h2>
              </div>
            </>
          );
        })}
    </>
  );
};

export default VacancyDescription;
