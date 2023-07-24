import React, { PropsWithChildren } from "react"
import { navigate } from "gatsby"
import logo from '../assets/logo-white.png';
const HeaderButton: React.FC<PropsWithChildren<{path: string}>> = ({ children, path }) => (
    <span className="flex-1 my-4 text-center hover:text-secondary" style={{cursor: 'pointer'}} onClick={() => {navigate(path)}}>{children}</span>
);

export const Header:React.FC = () => {
    return (
      <div className="w-screen bg-primary sticky top-0 z-50">
        <div className="container mx-auto text-white font-bold">
          <div className="flex flex-row items-center">
            <img src={logo} className="w-10 h-10 my-0 cursor-pointer" onClick={() => navigate("/")} />
            <HeaderButton path="/">Home</HeaderButton>
            <HeaderButton path="/bio">Bio</HeaderButton>
            <HeaderButton path="/lessons">Lessons</HeaderButton>
            <HeaderButton path="/contact">Contact</HeaderButton>
          </div>
        </div>
      </div>
    );
}