import { PlusIcon } from "@/public/icons/icons";

const Contact = ({ toggleModal }) => {
  return (
    <>
      <div
        className={`w-screen h-screen top-0 left-0 right-0 bottom-0 fixed z-50 px-8 sm:px-10 md:px-14 xl:px-20 py-10 bg-slate-800`}
      >
        <div className="h-full w-full flex flex-col overflow-y-auto no-scrollbar">
          <div className="w-full">
            <button
              onClick={toggleModal}
              className="w-14 h-14 rounded-full bg-slate-300 ml-auto flex justify-center items-center rotate-[45deg] rotate hover:rotate-[135deg] transition-rotate duration-300"
            >
              <PlusIcon />
            </button>
          </div>
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-10 py-10 mt-0 xl:mt-10">
            <div className="row-span-2 rounded-xl">
              <h2 className="text-5xl text-green-400 font-bold">
                Get in touch
              </h2>
              <p className="text-slate-300 text-lg mt-5 leading-6">
                We are here to answer all your questions on any matter
              </p>
            </div>
            <div className="bg-green-400 rounded-xl p-8 sm:p-10">
              <h3 className="text-lg text-slate-800 font-semibold mb-5">
                Collaborate
              </h3>
              <p className="text-slate-800">E: collaborate@email.com</p>
              <p className="text-md text-slate-800">T: +1 (555) 905-2345</p>
            </div>
            <div className="bg-green-400 rounded-xl p-8 sm:p-10">
              <h3 className="text-lg text-slate-800 font-semibold mb-5">
                Join our team
              </h3>
              <p className="text-slate-800">E: jointeam@email.com</p>
              <p className="text-md text-slate-800">T: +1 (555) 905-2398</p>
            </div>
            <div className="bg-green-400 rounded-xl p-8 sm:p-10">
              <h3 className="text-lg text-slate-800 font-semibold mb-5">
                Press
              </h3>
              <p className="text-slate-800">E: press@email.com</p>
              <p className="text-md text-slate-800">T: +1 (555) 905-2317</p>
            </div>
            <div className="bg-green-400 rounded-xl p-8 sm:p-10">
              <h3 className="text-lg text-slate-800 font-semibold mb-5">
                Say hi
              </h3>
              <p className="text-slate-800">E: sayhi@email.com</p>
              <p className="text-md text-slate-800">T: +1 (555) 905-2323</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div ></div> */}
    </>
  );
};

export default Contact;
