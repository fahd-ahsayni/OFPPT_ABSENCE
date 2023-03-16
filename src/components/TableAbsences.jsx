import React, { useState } from "react";
import Pagination from "./table/Pagination";
import { Typography } from "@material-tailwind/react";
import { FiSearch } from "react-icons/fi";

import { dataTable as data } from "../data";
import InputSelect from "./inputs/InputSelect";

export default function TableAbsences() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // const data =""

  // Filter data based on search term
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Change page number
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableRows = () => {
    return currentItems.map((item) => (
      <tr key={item.id}>
        <td>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </td>
        <td>{item.id}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <Typography variant="h6" className="text-gray-800">
                {item.name}
              </Typography>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          {item.contact.mobile}
          <br />
          <span className="badge badge-ghost badge-sm">
            {item.contact.email}
          </span>
        </td>
        <td>
          <span
            className={`inline-block whitespace-nowrap rounded-[0.27rem]  px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none ${
              item.status === "Absent"
                ? "bg-[#FAE5E9] text-[#B0233A]"
                : "bg-[#D6FAE4] text-[#0E7537]"
            }`}
          >
            {item.status}
          </span>
        </td>
        <td>
          <button>details</button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <Typography variant="h2" className="text-blue-600">
          Enregistrement des Absences
        </Typography>
        <div className="w-[350px] px-2 py-2 mb-2">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Rechercher"
              className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              value={searchTerm}
              name="search"
              id="search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
                <FiSearch />
              </kbd>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto w-full mt-6">
        <Typography variant="h4" className="text-green-600">
          Tableau d'Absence
        </Typography>
        <Typography variant="small" className="text-gray-600 mb-4">
          Veuillez vérifier les informations d’absence avant d’enregistrer
        </Typography>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-1 mb-5">
          <div>
            <Typography variant="small" className="text-gray-700">
              Groupe
            </Typography>
            <InputSelect />
          </div>
          <div>
            <Typography variant="small" className="text-gray-700">
              Seance
            </Typography>
            <InputSelect />
          </div>
          <div>
            <Typography variant="small" className="text-gray-700">
              Module
            </Typography>
            <InputSelect />
          </div>
        </div>

        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Nome et Prénom</th>
              <th>Contact</th>
              <th>Statut</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
        <div className="w-full flex justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}
