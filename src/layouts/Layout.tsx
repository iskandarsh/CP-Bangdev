import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import React from "react";



const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
