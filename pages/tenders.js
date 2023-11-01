import TendersTable from "@/components/TenderTable";

const Tenders = () => {
  return (
    <>
      <h3 className="text-3xl font-bold text-slate-900 text-center">
        Discover our upcoming tenders
      </h3>
      <TendersTable />
      <div className="w-full bg-green-400 p-8 sm:p-10 md:p-14 rounded-md mt-10">
        <h2 className="text-md sm:text-lg font-normal text-slate-800">
          In case you want to take part in one of our tenders you may apply via
          email{" "}
          <span className="font-semibold text-slate-800">
            tenders@rockstar.com
          </span>
        </h2>
      </div>
    </>
  );
};

export default Tenders;
