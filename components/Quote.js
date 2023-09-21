const Quote = ({ quote }) => {
  return (
    <div className="bg-slate-50 h-auto w-full p-20 mt-20 relative overflow-hidden">
      <div className="h-full bg-slate-50 relative">
        <h1 className="text-4xl text-center font-light italic text-slate-900 line mt-10 mb-10 leading-tight">
          {`"${quote}"`}
        </h1>
      </div>
    </div>
  );
};

export default Quote;
