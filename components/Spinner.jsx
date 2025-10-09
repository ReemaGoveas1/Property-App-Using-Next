"use client";
import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <ClipLoader
      color="#FF0000"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="loading-spinner"
    />
  );
};

export default Spinner;
