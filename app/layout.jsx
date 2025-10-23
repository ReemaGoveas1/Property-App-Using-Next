import React from "react";
import "../assets/styles/global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/global.css";
import { GlobalProvider } from "@/context/GlobalContext";
import "photoswipe/dist/photoswipe.css"

export const metadata = {
  title: "Property Application | Find your best place",
  description: "Find your peace with our properties",
  keywords: "rental, property, find rentals, best place, stay away",
};

const PropertyLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          <AuthProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </AuthProvider>
        </GlobalProvider>
      </body>
    </html>
  );
};

export default PropertyLayout;
