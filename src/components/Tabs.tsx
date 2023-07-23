import React, { PropsWithChildren } from "react";

const TabButton: React.FC<{ title: string, active: boolean, onClick: () => void, first: boolean, last:boolean }> = ({title, active, first, last, onClick}) => {
    return (
      <div
        className={`flex-1 text-center items-center justify-center font-semibold text-lg ${
          !first ? "border-l" : "rounded-l-xl"
        } ${!last ? "border-r" : "rounded-r-xl"} border-secondary ${
          active ? "bg-secondary text-white" : "text-secondary hover:bg-secondary_hover"
        }`}
        onClick={onClick}
        style={{
            cursor: 'pointer'
        }}
      >
        <div className={`py-2`}>{title}</div>
      </div>
    );
    }

export const Tabs: React.FC<{
  titles: string[];
  children?: (activeTab: number) => React.ReactNode;
}> = ({ children, titles }) => {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  return (
    <>
      <div className="sm:hidden">
        <select
          id="tabs"
          className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={activeTab}
          onChange={(e) => setActiveTab(parseInt(e.target.value))}
        >
          {titles.map((title, index) => (
            <option value={index}>{title}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="flex flex-1 flex-row items-center justify-center outline outline-secondary outline-2 rounded-xl">
          {titles.map((title, index) => (
            <TabButton
              title={title}
              active={index == activeTab}
              first={index == 0}
              last={index == titles.length - 1}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
      </div>
      {children?.(activeTab)}
    </>
  );
};

export const TabSection: React.FC<PropsWithChildren<{ active: boolean }>> = ({
  children,
  active,
}) => {
  return <>{active ? children : null}</>;
};
