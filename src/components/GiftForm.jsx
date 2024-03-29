import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPenNib,
  FaPhoneAlt,
  FaPlus,
  FaSkating,
  FaUser,
} from "react-icons/fa";

function GiftForm() {
  const [formData, setFormData] = useState({
    name: "",
    challengeName: "",
    wardNo: "",
    villageName: "",
    invitationMember1: "",
    invitationMember2: "",
    post: false,
    contactNumber: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(null);

  const villageData = {
    1: [
      "পশ্চিম বেরুবাড়ী",
      "মোবাল্লেক পাড়া",
      "মিরার ভিটা",
      "বেরুবাড়ী সদর",
      "সাতানী",
    ],
    2: ["মওয়ামারী", "গাছপাড়ী"],
    3: ["শালমারা", "টুপামারী"],
    4: ["বালিয়ার কুটি", "চররহমানের কুটি"],
    5: ["চর বেরুবাড়ী"],
    6: ["চর বেরুবাড়ী"],
    7: ["চিলমারী", "নকুলারপাড়"],
    8: ["খেলারভিটা", "খামারনকুলা"],
    9: ["নতুনচর", "বামনের ভিটা", "ইসলামপুর"],
    // Add more ward-village mappings as needed
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    console.log(name, value, checked, type);

    if (name === "wardNo") {
      // Set villageName to the default value corresponding to the selected wardNo
      const defaultVillageName = villageData[value]
        ? villageData[value][0]
        : "";
      setFormData((prevData) => ({
        ...prevData,
        wardNo: value,
        villageName: defaultVillageName,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
    console.log(formData);
  };

  console.log(formData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (!formData.post) {
      // If not checked, show an error message or handle it as needed
      setError("সপ্তাহে দুইটি করে পোস্ট গ্রুপে লিখেন— Yes ঘরটি মার্ক করুন");
      return; // Prevent form submission
    } else {
      setError(null);
      try {
        const response = await fetch(
          "https://pg-backend-nine.vercel.app/giftdata",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to submit form data");
        }
        setSuccessMessage("আপনার তথ্য জমা সফল হয়েছে");
        console.log("Form data submitted successfully");
        // Optionally, reset the form fields after successful submission
        setFormData({
          name: "",
          challengeName: "",
          wardNo: "",
          villageName: "",
          invitationMember1: "",
          invitationMember2: "",
          post: false,
          contactNumber: "",
        });
      } catch (error) {
        console.error("Error submitting form data:", error.message);
        // Handle error and display on UI
        // For example, set an error state to display an error message on the UI
        setError("তথ্য জমা ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const villageOptions = villageData[formData.wardNo] || [];

  return (
    <div
      className="container mx-auto px-4 py-8"
      style={{
        fontFamily: 'Google Sans, "Helvetica Neue", sans-serif',
        fontWeight: 400,
      }}
    >
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
        পুরস্কার গ্রহণ করুন
      </h2>
      <p className="text-lg text-gray-600 lg:text-center mb-4">
        চ্যালেঞ্জ জেতার পরে আপনার তথ্য জমা দিন। আপনার তথ্য Pure Generation কারো
        সাথে শেয়ার করে না।
      </p>
      <p className="text-sm text-gray-600 text-center mb-8">
        {" "}
        তথ্য জমা দেওয়ার ৭-১০ দিন পর আপনি পুরস্কার পাবেন।
      </p>
      <p className="text-md text-red-500 text-center mb-5">
        {error ? error : successMessage}
      </p>
      {isSubmitting && (
        <p className="text-center transition-opacity duration-300 opacity-100 mb-3">
          তথ্য পাঠানো হচ্ছে...
        </p>
      )}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <div className="mb-4 flex items-center">
            <FaUser className="text-blue-500 mr-2" />
            <div className="border-b-2 border-black-500 flex-grow">
              <input
                type="text"
                name="name"
                placeholder="আপনার নাম"
                className="border-none focus:outline-none w-full"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
          </div>
        </div>

        {/* challenge select input */}

        <div className="mb-4 flex items-center">
          <FaSkating className="text-green-500 mr-2" />
          <div className="relative flex-grow">
            <select
              name="challengeName"
              className="form-select appearance-none border-b-2 border-black-500 w-full py-2 focus:outline-none"
              onChange={handleChange}
              value={formData.challengeName}
              required
            >
              <option value="">আপনি কয়দিনের চ্যালেঞ্জ শেষ করেছেন?</option>
              <option value="7day">৭ দিন</option>
              <option value="30day">৩০ দিন</option>
              <option value="90day">৯০ দিন</option>
              <option value="120day">১২০ দিন</option>
              <option value="365day">৩৬৫ দিন</option>
              {/* Add more options */}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L10 9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A1 1 0 0 1 10 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-4 flex items-center space-x-2">
          <FaMapMarkerAlt className="text-orange-500" />
          <select
            name="wardNo"
            className="form-select focus:outline-none"
            onChange={handleChange}
            value={formData.wardNo}
            required
          >
            <option value="">আপনার ওয়ার্ড নাম্বার</option>
            <option value="1">ওয়ার্ড ১</option>
            <option value="2">ওয়ার্ড ২</option>
            <option value="3">ওয়ার্ড ৩</option>
            <option value="4">ওয়ার্ড ৪</option>
            <option value="5">ওয়ার্ড ৫</option>
            <option value="6">ওয়ার্ড ৬</option>
            <option value="7">ওয়ার্ড ৭</option>
            <option value="8">ওয়ার্ড ৮</option>
            <option value="9">ওয়ার্ড ৯</option>
            {/* Add more options */}
          </select>

          {/* Always render the villageName select */}
          <select
            name="villageName"
            className="form-select focus:outline-none"
            onChange={handleChange}
            value={formData.villageName}
            required
          >
            {formData.wardNo ? null : <option value="">গ্রামের নাম</option>}
            {villageOptions.map((villageName, index) => (
              <option key={index} value={villageName}>
                {villageName}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center mt-5">
          <span className="text-xs text-green-400">
            উপহার পেতে ফেসবুক গ্রুপে কমপক্ষে ২ জন মেম্বার জয়েন করাতে হবে, উনাদের
            নাম:
          </span>
        </div>
        <div className="mb-4 mt-4 flex items-center space-x-2">
          <FaPlus className="text-purple-500" />
          <input
            type="text"
            name="invitationMember1"
            placeholder="১ম জনের নাম লিখুন"
            className="border-b-2 focus:outline-none w-full"
            onChange={handleChange}
            value={formData.invitationMember1}
            required
          />

          <FaPlus className="text-purple-500" />
          <input
            type="text"
            name="invitationMember2"
            placeholder="২য় জনের নাম লিখুন"
            className="border-b-2 focus:outline-none w-full"
            onChange={handleChange}
            value={formData.invitationMember2}
            required
          />
        </div>

        <div className="mb-4 flex items-center space-x-2 border-b-2 border-black-500 flex-grow">
          <FaPhoneAlt className="text-blue-500" />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            className="border-none focus:outline-none w-full"
            onChange={handleChange}
            value={formData.contactNumber}
            required
          />
        </div>

        <div className="mb-4 flex items-center space-x-2">
          <FaPenNib className="text-green-500" />
          <label htmlFor="post" className="select-none text-md">
            সপ্তাহে ২ টি পোস্ট ফেসবুক গ্রুপে লিখেছেন?
          </label>
          <input
            type="checkbox"
            name="post"
            id="post"
            className="form-checkbox h-5 w-5 text-blue-600"
            onChange={handleChange}
            checked={formData.post}
          />
          <span className="mr-2">Yes</span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
        >
          তথ্য জমা দিন
        </button>
      </form>
    </div>
  );
}

export default GiftForm;
