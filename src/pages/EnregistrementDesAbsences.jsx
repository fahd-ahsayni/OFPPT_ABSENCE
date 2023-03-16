import React from "react";
import TableAbsences from "../components/TableAbsences";
import { Typography } from "@material-tailwind/react";

export default function EnregistrementDesAbsences() {
  return (
    <div className="bg-white py-6 md:px-6 px-0 overflow-y-auto h-full rounded-xl shadow-lg">
      <div className="lg:px-12 md:py-8 py-4 md:px-8 px-2.5">
        <Typography variant="h2" className="text-blue-600">
          Enregistrement des Absences
        </Typography>
        <div className="px-2">
          <TableAbsences />
        </div>
      </div>
    </div>
  );
}
