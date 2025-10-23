import React from "react";
import FilterSection from "@/components/FilterSection";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import connectDB from "@/config/database";
import FeaturedProperties from "@/components/FeaturedProperties";

const MainPage = async () => {
  console.log(process.env.MONGODB_URI);
  await connectDB();
  return (
    <>
      <FilterSection />
      <InfoBoxes />
      <FeaturedProperties/>
      <HomeProperties />
    </>
  );
};

export default MainPage;
