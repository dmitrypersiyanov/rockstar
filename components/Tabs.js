import { tabs } from "@/data/tabs";

const Tabs = ({ handleTab, active }) => {
  return (
    <>
      {tabs.map((tab) => {
        return (
          <div
            key={tab.id}
            onClick={() => handleTab(tab.title)}
            className={`${
              active == tab.title ? `${tab.color}` : "text-slate-200"
            } sm:hover:scale-105 flex flex-col px-6 py-3 sm:w-32 w-full justify-center box-border items-center transition-transform duration-200 cursor-pointer rounded-full ${
              tab.bg
            }`}
          >
            {tab.title}
          </div>
        );
      })}
    </>
  );
};

export default Tabs;
