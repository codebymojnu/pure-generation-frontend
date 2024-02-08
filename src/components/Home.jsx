import React from "react";
import {
  FaBook,
  FaCertificate,
  FaDumbbell,
  FaGift,
  FaHeartbeat,
  FaTools,
  FaTshirt,
} from "react-icons/fa";

function Home() {
  return (
    <div
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8"
      style={{
        fontFamily: 'Google Sans, "Helvetica Neue", sans-serif',
        fontWeight: 400,
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 text-center">
          Pure Generation
        </h1>
        <h2 className="text-sm lg:text-lg lg:font-semibold text-gray-700 mb-6 text-center">
          তোমার স্বপ্ন, তোমার নিয়ন্ত্রণ, তোমার ভবিষ্যৎ
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          আমরা কাজ করি- ইয়াং জেনারেশনের স্বপ্ন বাস্তবায়নের উদ্দেশ্যে তাদেরকে
          (__) ভিডিও না দেখতে উৎসাহিত করা। এবং তাদের সকালে ঘুম থেকে উঠে
          ব্যায়ামের জন্য উৎসাহিত করা।
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-md p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              আমরা কি করি
            </h2>
            <div className="flex mb-4">
              <div className="mr-4">
                <FaDumbbell className="text-4xl text-blue-600" />
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">আমরা কাজ করছি:</span> (__)
                  ভিডিওকে না বলা, ইয়াং জেনারশনকে সূযোর্দয়ের আগে ঘুম থেকে উঠা ও
                  ব্যায়াম করার উৎসাহ দেয়া
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="mr-4">
                <FaHeartbeat className="text-4xl text-red-600" />
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">আমাদের উদ্দেশ্যে:</span>{" "}
                  তরুণদের স্বাস্থ্য ও স্বপ্ন নিয়ে কাজ করা
                </p>
              </div>
            </div>
            {/* Add more objectives */}
          </div>
          <div className="bg-white rounded-md p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              কি কি উপহার পাবে?
            </h2>
            <ul className="list-none list-inside">
              <li className="flex items-center">
                <FaCertificate className="text-green-600 mr-2" />৭ দিন: ডিজিটাল
                সার্টিফিকেট
              </li>
              <li className="flex items-center">
                <FaBook className="text-purple-600 mr-2" /> ৩০ দিন: একটি বই
              </li>
              <li className="flex items-center">
                <FaTshirt className="text-yellow-600 mr-2" /> ৯০ দিন: একটি
                টি-শার্ট
              </li>
              <li className="flex items-center">
                <FaTools className="text-indigo-600 mr-2" /> ১২০ দিন: ব্যায়ামের
                সরঞ্জাম
              </li>
              <li className="flex items-center">
                <FaGift className="text-pink-600 mr-2" /> ৩৬৫ দিন: Special gift
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              আমরা এখন শুধু বেরুবাড়ী ইউনিয়ন নিয়ে কাজ করছি
            </p>
          </div>
        </div>
      </div>
      <p className="text-center mt-4">
        এই এপ্লিকেশনে অনেক নতুন ফিচার আসবে। যেখানে ইউজাররা তাদের দিনকে ট্রাক
        করতে পারবে। তাদের হিসাব রাখবে। মানে জেতা ও হারার রেকর্ড তারা রাখতে
        পারবে।
      </p>
      <p className="text-red-500 mt-3 text-center">
        আপনি কি কি ফিচার চান, ফেসবুকে আমাকে বলতে পারেন। ফেসবুক ইউজার নেম: mojnu0
        অথবা কল করুন- 01788262433
      </p>
    </div>
  );
}

export default Home;
