import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
