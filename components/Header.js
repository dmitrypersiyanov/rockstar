import styles from "../styles/Header.module.css";
import Contact from "./Contact";
import { useState } from "react";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && <Contact toggleModal={toggleModal} />}
      <nav className={styles.navigation}>
        <a href="/" className="font-bold text-2xl text-green-500">
          rockstar
        </a>
        <div className="flex flex-row gap-3">
          <a
            className="px-3 py-3 bg-white cursor-pointer hover:text-green-400 rounded-sm"
            href="/#about"
          >
            About us
          </a>

          <a
            className="px-3 py-3 bg-white cursor-pointer hover:text-green-400 rounded-sm"
            href="/#leadership"
          >
            Our team
          </a>
          <a
            className="px-3 py-3 bg-white cursor-pointer hover:text-green-400 rounded-sm"
            href="/vacancies"
          >
            Career
          </a>
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
