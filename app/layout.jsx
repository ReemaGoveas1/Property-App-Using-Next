import React from "react";
import "../assets/styles/global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Property Application | Find your best place",
  description: "Find your peace with our properties",
  keywords: "rental, property, find rentals, best place, stay away",
};

const PropertyLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default PropertyLayout;
