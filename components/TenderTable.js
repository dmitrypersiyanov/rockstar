import { tenders } from "@/data/tenders";

const formatNumber = (num) => num.toLocaleString();
const formatDate = (currentDate) => currentDate.toLocaleDateString();

const TendersTable = () => {
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="mt-10 w-full whitespace-nowrap text-sm sm:text-lg">
          <thead>
            <tr>
              <th className="text-left py-5 pl-5 sm:pl-10 bg-slate-800 font-semibold text-green-400">
                Number
              </th>
              <th className="text-left py-5 pl-5 sm:pl-10 bg-slate-800 font-semibold text-green-400">
                Type
              </th>
              <th className="text-left py-5 pl-5 sm:pl-10 bg-slate-800 font-semibold text-green-400">
                Description
              </th>
              <th className="text-left py-5 pl-5 sm:pl-10 bg-slate-800 font-semibold text-green-400">
                Est. Value
              </th>
              <th className="text-left py-5 pl-5 sm:pl-10 bg-slate-800 font-semibold text-green-400">
                Start Date
              </th>
              <th className="text-left py-5 pl-5 sm:pl-10 pr-5 bg-slate-800 font-semibold text-green-400">
                Closing Date
              </th>
            </tr>
          </thead>
          <tbody>
            {tenders.map((tender, index) => {
              return (
                <tr className="bg-slate-50 hover:bg-slate-100" key={index}>
                  <td className="text-left py-5 pl-5 sm:pl-10 text-slate-600">
                    {tender.number}
                  </td>
                  <td className="text-left py-5 pl-5 sm:pl-10 text-slate-600">
                    {tender.type}
                  </td>
                  <td className="text-left py-5 pl-5 sm:pl-10 text-slate-600">
                    {tender.description}
                  </td>
                  <td className="text-left py-5 pl-5 sm:pl-10 text-slate-600">
                    {formatNumber(tender.value)}
                  </td>
                  <td className="text-left py-5 pl-5 sm:pl-10 text-slate-600">
                    {formatDate(tender.established)}
                  </td>
                  <td className="text-left py-5 pl-5 sm:pl-10 text-slate-600">
                    {formatDate(tender.due)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TendersTable;
