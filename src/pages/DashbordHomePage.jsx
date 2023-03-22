import { Typography } from "@material-tailwind/react";
import Chart from "../components/Chart";
import React from "react";

const DashbordHomePage = () => {
  return (
    <>
      <Typography variant="h2" className="text-blue-600">
        Les statistiques d'absence
      </Typography>
      <Chart />
    </>
  );
};

export default DashbordHomePage;


