import React from "react";
import Link from "next/link";

const PropertiesPage = () => {
  console.log("hey!!");
  return (
    <div>
      <h1 className="text-3xl">Property Page</h1>
      <Link href="/">Go to main Page</Link>
    </div>
  );
};

export default PropertiesPage;
