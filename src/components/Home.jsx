import React, { useContext, useState } from "react";
import { UserContext } from "../context/usercontext";
import { Link } from "react-router-dom";

const Home = () => {
  const { users, loading, searchTerm } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  if (loading) return <p>Loading...</p>;
  
  const filterUsers = users.filter((user) => {
    const fullName = user.name.toLowerCase().split(" ");
    const searchChars = searchTerm.toLowerCase().split(""); 
  
    return fullName.some((namePart) => {
      return searchChars.every((char) => namePart.includes(char)); 
    });
  });
  
  
  

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filterUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filterUsers.length / usersPerPage);
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="bg-sky-50 min-h-[100vh] px-10 py-20 w-full mt-14 ">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-x-6 gap-y-14 w-full min-w-0">
        {currentUsers.map((user, index) => (
          <div
            className="border-[0.5px] border-gray-200 rounded-lg p-6 flex flex-col gap-4 shadow-sm overflow-hidden w-full bg-white max-w-sm"
            key={index}
          >
            <h1 className="text-xl font-semibold mb-2">{user.name}</h1>
            <div className="flex flex-wrap gap-3">
              <label className="text-gray-500 ">Username: </label>
              <p className="text-gray-700 font-medium">{user.username}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <label className="text-gray-500 ">Email:</label>
              <p className="text-gray-700 font-medium">{user.email}</p>
            </div>
            <Link to={`/user/${user.id}`}>
              <button className="bg-transparent hover:bg-sky-800 text-sky-700 font-semibold hover:text-white py-2 px-4 border border-sky-600 hover:border-transparent rounded-lg transition duration-900 mt-2">
                Read more →
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-[90%] flex flex-wrap justify-center items-center gap-2 sm:gap-4 px-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="text-white bg-cyan-900 py-2 px-3 sm:px-4 rounded-lg hover:bg-cyan-700 transition duration-500 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm md:text-base"
        >
          &lt; Previous
        </button>
        <span className="text-xs sm:text-sm md:text-base font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="text-white bg-cyan-900 py-2 px-3 sm:px-4 rounded-lg hover:bg-cyan-700 transition duration-500 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm md:text-base"
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default Home;
