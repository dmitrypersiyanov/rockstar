import Contact from "./Contact";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && <Contact toggleModal={toggleModal} />}
      <nav className="shadow-navshadow bg-white h-[100px] flex justify-between items-center fixed left-0 right-0 top-0 bottom-0 z-20 px-[30px] md:px-[40px]">
        <Link href="/" className="font-bold text-2xl text-green-500">
          rockstar
        </Link>
        <div className="hidden md:flex flex-row gap-3">
          <Link
            className="px-3 py-3 bg-white cursor-pointer hover:text-green-400 rounded-sm"
            href="/#about"
          >
            About us
          </Link>

          <Link
            className="px-3 py-3 bg-white cursor-pointer hover:text-green-400 rounded-sm"
            href="/#leadership"
          >
            Our team
          </Link>
          <Link
            className="px-3 py-3 bg-white cursor-pointer hover:text-green-400 rounded-sm"
            href="/vacancies"
          >
            Career
          </Link>
        </div>
        <div>
          <button
            className="px-6 py-3 bg-slate-800 text-white hover:text-green-400 font-thin cursor-pointer rounded-3xl"
            onClick={toggleModal}
          >
            Contact us
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
