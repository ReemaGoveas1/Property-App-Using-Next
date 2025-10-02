import React from "react";
import "../assets/styles/global.css";

export const metadata = {
  title: "Property Application | Find your best place",
  description: "Find your peace with our properties",
  keywords: "rental, property, find rentals, best place, stay away",
};

const PropertyLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default PropertyLayout;
