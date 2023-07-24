import React, { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Page: React.FC<PropsWithChildren<{
    includeHeader?: boolean;
    includeFooter?: boolean;
}>> = ({ children, includeFooter, includeHeader }) => {
    return (
      <main className="font-sans prose min-h-screen flex flex-col">
        {includeHeader && <Header />}
        <div className="w-screen flex-1">
          <div className="container mx-auto">
            {children}
          </div>
        </div>
        {includeFooter && <Footer />}
      </main>
    );
};