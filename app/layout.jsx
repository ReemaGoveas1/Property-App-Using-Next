import React from "react";
import "../assets/styles/global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Property Application | Find your best place",
  description: "Find your peace with our properties",
  keywords: "rental, property, find rentals, best place, stay away",
};

const PropertyLayout = ({ children }) => {
  return (
    // <AuthProvider>
      <html lang="en">
        <body>
          <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          </AuthProvider>
        </body>
      </html>
    //  </AuthProvider>
  );
};

export default PropertyLayout;
