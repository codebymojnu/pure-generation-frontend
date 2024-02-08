import React, { useEffect, useState } from "react";
import { FaBook, FaHeart, FaTshirt, FaUserPlus } from "react-icons/fa";

function Team() {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    fetch("https://pg-backend-nine.vercel.app/members")
      .then((response) => response.json())
      .then((data) => {
        setMembers(data);
        setIsLoading(false); // Data loaded, hide loader
      })
      .catch(() => {
        // Handle API errors gracefully
        setIsLoading(false); // Stop loading animation even on error
        // Display an error message or fallback content
      });
  }, []);

  return (
    <div
      className="container mx-auto px-4 py-16 md:px-8 md:py-20 lg:px-12"
      style={{
        fontFamily: 'Google Sans, "Helvetica Neue", sans-serif',
        fontWeight: 400,
      }}
    >
      {/* Hero section */}
      <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:space-x-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            আমাদের টিমে জয়ন করুন
          </h2>
          <p className="text-xl text-gray-600 mt-4 md:text-2xl">
            ২ টি বই কিংবা ১ টি-শার্ট উপহার দিয়ে অথবা ফেসবুক গ্রুপে ১০ জন মেম্বার
            বাড়িয়ে আমাদের টিমে জয়েন হতে পারবেন।
          </p>

          <a
            href="https://www.facebook.com/groups/751938203217953"
            target="_blank"
            rel="noreferrer"
            className="text-green-700 mt-7"
          >
            https://www.facebook.com/groups/751938203217953
          </a>
        </div>
        <div className="flex items-center space-x-4 md:w-1/2 mt-10">
          <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full text-blue-500">
            <FaHeart className="mr-2" /> {/* ... (Dynamic text for gifts) */}
          </div>
          <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full text-green-500">
            <FaBook className="mr-2" />{" "}
            {/* ... (Dynamic text for book gifts) */}
          </div>
          <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full text-orange-500">
            <FaTshirt className="mr-2" />{" "}
            {/* ... (Dynamic text for tshirt gifts) */}
          </div>
          <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full text-purple-500">
            <FaUserPlus className="mr-2" />{" "}
            {/* ... (Dynamic text for member increase) */}
          </div>
        </div>
      </div>

      {/* Loader (Only display while data is loading) */}
      {isLoading && (
        <div className="flex justify-center items-center mt-16">
          <div className="spinner animate-spin h-16 w-16 border-b-2 border-gray-900 rounded-full" />
        </div>
      )}

      {/* Team members table (Only display after data is loaded) */}
      {!isLoading && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800">
            আমাদের গর্বিত সদস্যরা
          </h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full mt-8 border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left border border-gray-300">
                    Name
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-300">
                    Book
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-300">
                    T-shirt
                  </th>
                  <th className="px-4 py-2 text-center border border-gray-300">
                    Members
                  </th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border border-gray-300">
                      {member.name}
                    </td>
                    <td className="px-4 py-2 text-center border border-gray-300">
                      {member.boiGift}
                    </td>
                    <td className="px-4 py-2 text-center border border-gray-300">
                      {member.tshirtGift}
                    </td>
                    <td className="px-4 py-2 text-center border border-gray-300">
                      {member.increaseMember}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

export default Team;
