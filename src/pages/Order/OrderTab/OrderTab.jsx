import { useState } from "react";
import FoodCard from "../../../Components/FoodCard/FoodCard";

const ITEMS_PER_PAGE = 6; // Customize the number of items per page

const OrderTab = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {currentItems.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 mb-8 space-x-2 items-center">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-200 text-black cursor-not-allowed"
              : "bg-gray-200 text-black"
          }`}
          disabled={currentPage === 1}
        >
          {"<<"}
        </button>

        {/* Page Buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-200 text-black cursor-not-allowed"
              : "bg-gray-200 text-black"
          }`}
          disabled={currentPage === totalPages}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default OrderTab;
