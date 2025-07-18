import React from "react";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: { key: string; label: string }[];
}


const Tabs : React.FC<TabsProps> = ({ activeTab, setActiveTab, tabs }) => (
  <div className="flex justify-center gap-10 mt-10 mb-2 w-full">
    {tabs.map(tab => (
      <button
        key={tab.key}
        className={`text-xl md:text-2xl font-bold transition
          ${activeTab === tab.key
            ? "white-gradient-text"
            : "text-gray-400 hover:text-white"}
          relative pb-1`}
        onClick={() => setActiveTab(tab.key)}
      >
        {tab.label}
        {activeTab === tab.key && (
          <span className="block w-28 mt-2 border-t-2 border-gray-700 mx-auto"></span>
        )}
      </button>
    ))}
  </div>
);

export default Tabs;