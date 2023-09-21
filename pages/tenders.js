import { tenders } from "@/data/tenders";

const Tenders = () => {
  const toNum = (num) => num.toLocaleString();

  const formatDate = (currentDate) => currentDate.toLocaleDateString();

  return (
    <>
      <h3 className="text-3xl font-bold text-slate-900 text-center">
        Discover our upcoming tenders
      </h3>
      <table className="table-auto mt-10 w-full overflow-hidden rounded-md">
        <thead>
          <tr>
            <th className="text-left py-5 pl-10 bg-slate-800 font-semibold text-green-400">
              Number
            </th>
            <th className="text-left py-5 pl-10 bg-slate-800 font-semibold text-green-400">
              Type
            </th>
            <th className="text-left py-5 pl-10 bg-slate-800 font-semibold text-green-400">
              Description
            </th>
            <th className="text-left py-5 pl-10 bg-slate-800 font-semibold text-green-400">
              Est. Value
            </th>
            <th className="text-left py-5 pl-10 bg-slate-800 font-semibold text-green-400">
              Start Date
            </th>
            <th className="text-left py-5 pl-10 bg-slate-800 font-semibold text-green-400">
              Closing Date
            </th>
          </tr>
        </thead>
        <tbody>
          {tenders.map((tender, index) => {
            return (
              <tr className="bg-slate-50 hover:bg-slate-100" key={index}>
                <td className="text-left py-5 pl-10 text-slate-600">
                  {tender.number}
                </td>
                <td className="text-left py-5 pl-10 text-slate-600">
                  {tender.type}
                </td>
                <td className="text-left py-5 pl-10 text-slate-600">
                  {tender.description}
                </td>
                <td className="text-left py-5 pl-10 text-slate-600">
                  {toNum(tender.value)}
                </td>
                <td className="text-left py-5 pl-10 text-slate-600">
                  {formatDate(tender.established)}
                </td>
                <td className="text-left py-5 pl-10 text-slate-600">
                  {formatDate(tender.due)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="w-full bg-green-400 p-14 rounded-md mt-10">
        <h2 className="text-lg font-normal text-slate-800 mt-2">
          In case you want to take part in one of our tenders you may apply via
          email{" "}
          <span className="font-semibold text-slate-800">
            tenders@paraparaparadise.com
          </span>
        </h2>
      </div>
    </>
  );
};

export default Tenders;
