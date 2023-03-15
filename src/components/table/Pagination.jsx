export default function Pagination({ currentPage, totalPages, handlePageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-2 py-1 border rounded mr-2"
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`px-8 ${
            currentPage === number ? "bg-blue-500 text-white" : ""
          } mx-1 border rounded`}
        >
          {number}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-2 py-1 border rounded ml-2"
      >
        Next
      </button>
    </div>
  );
}
