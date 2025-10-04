import React from "react";
import FilterSection from "@/components/FilterSection";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import connectDB from "@/config/database";

const MainPage = async () => {
  console.log(process.env.MONGODB_URI);
  await connectDB();
  return (
    <>
      <FilterSection />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default MainPage;
