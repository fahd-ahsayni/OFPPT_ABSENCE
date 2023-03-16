import { Typography } from "@material-tailwind/react";
import React from "react";

const DashbordHomePage = () => {
  return (
    <div className="bg-white py-6 md:px-6 px-0 overflow-y-auto h-full rounded-xl shadow-lg">
      <div className="lg:px-12 md:py-8 py-4 md:px-8 px-2.5">
        <Typography variant="h2" className="text-blue-600">
          Page Accueil
        </Typography>
      </div>
    </div>
  );
};

export default DashbordHomePage;
