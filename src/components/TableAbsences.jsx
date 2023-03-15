import React, { useState } from "react";
import Pagination from "./table/Pagination";
import { Typography } from "@material-tailwind/react";

export default function TableAbsences() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);

  const data = [
    {
      id: 1,
      name: "Fahd AHSAYNI",
      contact: {
        mobile: "+212 649-781587",
        email: "fahd.ahsayni@ofppt-edu.ma",
      },
      status: "Absent",
    },
    {
      id: 2,
      name: "Meryem LFKIR",
      contact: {
        mobile: "+212 649-781587",
        email: "fahd.ahsayni@ofppt-edu.ma",
      },
      status: "Present",
    },
    {
      id: 3,
      name: "Bob Johnson",
      contact: {
        mobile: "+212 649-781587",
        email: "fahd.ahsayni@ofppt-edu.ma",
      },
      status: "Absent",
    },
    {
      id: 4,
      name: "Sarah Lee",
      contact: {
        mobile: "+212 649-781587",
        email: "fahd.ahsayni@ofppt-edu.ma",
      },
      status: "Present",
    },
    // Add more data as needed
  ];

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
    <div className="overflow-x-auto w-full">
      <div className="w-[350px]">
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700"
        >
          Quick search
        </label>
        <div className="relative mt-1 flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={searchTerm}
            name="search"
            id="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
              ⌘K
            </kbd>
          </div>
        </div>
        <div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
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
    </div>
  );
}
