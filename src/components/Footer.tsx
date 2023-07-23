import React, { PropsWithChildren } from "react"
import logo from '../assets/logo.png';
const FooterButton: React.FC<PropsWithChildren> = ({ children }) => (
    <span className="my-4 text-center">{children}</span>
);

export const Footer:React.FC = () => {
    return (
      <div className="w-screen pb-4 pt-14 bg-slate-50">
        <div className="container mx-auto font-bold">
          <div className="flex flex-row items-center">
            <span className="flex-row flex items-center text-2xl">
              <img src={logo} className="w-10 h-10 my-0 mr-4" />
              MNStudio
            </span>
            <div className="flex-1"></div>
            <FooterButton>Contact</FooterButton>
          </div>
          <div className="border flex-1"></div>
          <div className="flex flex-1 flex-row items-center justify-center my-4">
          <span className="text-sm text-center text-gray-500 font-normal">© 2023 MNStudio™. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    );
}