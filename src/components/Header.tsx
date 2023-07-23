import React, { PropsWithChildren } from "react"
import logo from '../assets/logo-white.png';
const HeaderButton: React.FC<PropsWithChildren> = ({ children }) => (
    <span className="flex-1 my-4 text-center">{children}</span>
);

export const Header:React.FC = () => {
    return (
      <div className="w-screen bg-primary sticky top-0 z-50">
        <div className="container mx-auto text-white font-bold">
          <div className="flex flex-row items-center">
            <img src={logo} className="w-10 h-10 my-0" />
            <HeaderButton>Home</HeaderButton>
            <HeaderButton>Bio</HeaderButton>
            <HeaderButton>Lessons</HeaderButton>
            <HeaderButton>Contact</HeaderButton>
          </div>
        </div>
      </div>
    );
}