import React, { PropsWithChildren } from "react";

export const Section: React.FC<PropsWithChildren<{title?: React.ReactNode}>> = ({ children, title}) => {
  return (
    <div className="flex flex-1 py-8 flex-col item-center justify-center">
      <h1 className="text-center">{title}</h1>
      {children}
    </div>
  );
};