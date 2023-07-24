import React, { PropsWithChildren } from "react"
import logo from '../assets/logo.png';
import { navigate } from "gatsby";
const FooterButton: React.FC<PropsWithChildren<{path: string}>> = ({ children, path }) => (
    <span className="my-4 text-center hover:text-secondary" style={{cursor: 'pointer'}} onClick={() => navigate(path)}>{children}</span>
);

export const Footer:React.FC = () => {
    return (
      <footer className="w-screen pb-4 pt-14 bg-slate-50">
        <div className="container mx-auto font-bold">
          <div className="flex flex-row items-center">
            <span className="flex-row flex items-center text-2xl cursor-pointer" onClick={() => navigate("/")}>
              <img src={logo} className="w-10 h-10 my-0 mr-4" />
              MNStudio
            </span>
            <div className="flex-1"></div>
            <FooterButton path="/contact">Contact</FooterButton>
          </div>
          <div className="border flex-1"></div>
          <div className="flex flex-1 flex-row items-center justify-center my-4">
          <span className="text-sm text-center text-gray-500 font-normal">© 2023 MNStudio™. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    );
}