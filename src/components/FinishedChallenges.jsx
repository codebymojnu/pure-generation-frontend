import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaCheckCircle, FaPhone, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function FinishedChallenges() {
  const navigate = useNavigate();
  const [challenges, setChallenges] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to login page if token is not available
      navigate("/login");
    } else {
      // Fetch finished challenges data from backend using JWT token
      fetch(`https://pg-backend-nine.vercel.app/giftdata`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          // Create table rows with data
          setChallenges(data);
          setIsLoading(false);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
          setError("Failed to fetch data. Please try again later.");
        });
    }
  }, [navigate]);

  return (
    <div
      className="container mx-auto lg:px-20 py-8"
      style={{
        fontFamily: 'Google Sans, "Helvetica Neue", sans-serif',
        fontWeight: 400,
      }}
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
        কে কে উপহার পেয়েছে তাদের লিস্ট?
      </h2>
      <p className="text-sm text-center mb-16">
        এই তথ্য শুধু 'PURE GENERATION' এর এডমিন দেখতে পারে।
      </p>
      {error ? <p className="text-red-500 text-center">{error}</p> : null}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-2">তারিখ</th>
                <th className="px-4 py-2 text-left">বিজয়ীর নাম</th>
                <th className="px-4 py-2 text-left">চ্যালেঞ্জের নাম</th>
                <th className="px-4 py-2 hidden md:table-cell">Address</th>
                <th className="px-4 py-2 hidden md:table-cell">
                  Invitation Member
                </th>
                <th className="px-4 py-2 hidden md:table-cell">Post</th>
                <th className="px-4 py-2 hidden md:table-cell">
                  Contact Number
                </th>
              </tr>
            </thead>
            <tbody>
              {challenges?.map((challenge) => (
                <tr key={challenge._id} className="border-b border-gray-300">
                  <td className="px-4 py-2">
                    <FaCalendarAlt className="inline-block mr-1" />
                    {challenge.date}
                  </td>
                  <td className="px-4 py-2 lg:text-left">
                    <FaUser className="inline-block mr-1" />
                    {challenge.name}
                  </td>
                  <td className="px-4 py-2 lg:text-left">
                    {challenge.challengeName}
                  </td>
                  <td className="px-4 py-2 hidden md:table-cell">
                    ওয়ার্ড {challenge.wardNo}, {challenge.villageName}
                  </td>
                  <td className="px-4 py-2 hidden md:table-cell">
                    {challenge.invitationMember1}, {challenge.invitationMember2}
                  </td>
                  <td className="px-4 py-2 hidden md:table-cell">
                    <FaCheckCircle
                      className={`inline-block mr-1 ${
                        challenge.post ? "text-green-500" : "text-red-500"
                      }`}
                    />
                    {challenge.post ? "Yes" : "No"}
                  </td>
                  <td className="px-4 py-2 hidden md:table-cell">
                    <FaPhone className="inline-block mr-1" />
                    {challenge.contactNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default FinishedChallenges;
