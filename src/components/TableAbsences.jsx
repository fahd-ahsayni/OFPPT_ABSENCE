import React, { useState } from "react";
import Pagination from "./table/Pagination";
import { Typography } from "@material-tailwind/react";

export default function TableAbsences() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const data = [
    {
      id: 1,
      name: "Fahd AHSAYNI",
      contact: "fahd.ahsayni@ofppt-edu.ma",
      status: "Absent",
    },
    {
      id: 2,
      name: "Meryem LFKIR",
      contact: "Meryem.lfkir@ofppt-edu.ma",
      status: "Present",
    },
    {
      id: 3,
      name: "Bob Johnson",
      contact: "bob.johnson@ofppt-edu.ma",
      status: "Absent",
    },
    {
      id: 4,
      name: "Sarah Lee",
      contact: "sarah.lee@ofppt-edu.ma",
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
  const totalPages = 1;

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
              <Typography variant="h6" className="f">{item.name}</Typography>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>{item.contact}</td>
        <td>
          <span className="py-1.5 px-5 rounded-xl  text-sm bg-red-50 text-red-700">
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
      <div className="flex justify-between items-center mb-4">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
