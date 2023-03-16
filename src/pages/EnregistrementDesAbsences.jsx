import React from "react";
import TableAbsences from "../components/TableAbsences";

export default function EnregistrementDesAbsences() {
  return (
    <div className="bg-white py-6 md:px-6 px-0 overflow-y-auto h-full rounded-xl shadow-lg">
      <div className="lg:px-12 md:py-8 py-4 md:px-8 px-2.5">
        <TableAbsences />
      </div>
    </div>
  );
}
