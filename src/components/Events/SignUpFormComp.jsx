import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { Tooltip } from "bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import "../index.css";

// Component for Event Sign Up Forms
export default function SignUpFormComponent({
  eventName,
  posterImage,
  firestorePath,
  BGImage,
}) {
  const [colleges, setColleges] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isWARegistered, setIsWARegistered] = useState(true); // State for WhatsApp registration
  const [subscribe, setSubscribe] = useState(true); // State for newsletter subscription

  // State for modals
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const seattleColleges = [
    { name: "University of Washington" },
    { name: "University of Washington Tacoma" },
    { name: "University of Washington Bothell" },
    { name: "Shoreline Community College" },
    { name: "Edmonds Community College" },
    { name: "Bellevue College" },
    { name: "North Seattle College" },
    { name: "Cascadia College" },
    { name: "Northwest University" },
    { name: "Seattle University" },
    { name: "Green River College" },
    { name: "Seattle Pacific University" },
    { name: "Seattle Central College" },
    { name: "Whatcom Community College" },
  ];

  // Function to handle scrolling and escape key
  useEffect(() => {
    if (showSuccessModal || showErrorModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling

      const handleEsc = (event) => {
        if (event.key === "Escape") {
          setShowSuccessModal(false);
          setShowErrorModal(false);
        }
      };
      window.addEventListener("keydown", handleEsc); // Add listener for ESC key

      return () => {
        document.body.style.overflow = "auto"; // Enable scrolling when modal closes
        window.removeEventListener("keydown", handleEsc); // Cleanup ESC listener
      };
    }
  }, [showSuccessModal, showErrorModal]);

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      setShowSuccessModal(false);
      setShowErrorModal(false);
    }
  };

  // Handle modal transitions
  useEffect(() => {
    if (showSuccessModal || showErrorModal) {
      setTimeout(() => setIsVisible(true), 50); // Slight delay for smoother animation
    } else {
      setIsVisible(false);
    }
  }, [showSuccessModal, showErrorModal]);

  // Close the modal with fade out
  const closeModal = () => {
    setIsVisible(false); // Start fade-out animation
    setShowSuccessModal(false);
    setShowErrorModal(false);
  };

  // Initialize tooltips
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new Tooltip(tooltipTriggerEl);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm();

  const renderCollegeListTemp = (name) => {
    if (name) {
      // Filter the seattleColleges based on the input
      const filteredColleges = seattleColleges.filter((college) =>
        college.name.toLowerCase().includes(name.toLowerCase())
      );

      if (filteredColleges.length > 0) {
        setColleges(filteredColleges);
        setShowSuggestions(true);
        setSelectedCollege(name);
      } else {
        setColleges([{ name }]);
        setShowSuggestions(true);
        setSelectedCollege(name);
      }
    } else {
      setColleges([]);
      setShowSuggestions(false);
      setSelectedCollege("");
    }
  };

  // Timeout for stopped typing (if wanna use API)
  useEffect(() => {
    const timeout = setTimeout(() => {
      renderCollegeListTemp(searchInput);
    }, 100);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  const onSubmit = async (data) => {
    // console.log(data);
    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      selectedCollege: selectedCollege,
      isWARegistered: isWARegistered, // Use state value
      subscribe: subscribe, // Use state value
      timestamp: new Date(),
    };

    try {
      setIsLoading(true); // Show loader when form is being submitted
      await addDoc(collection(db, firestorePath), formData);
      setShowSuccessModal(true); // Show success modal
    } catch (e) {
      console.error("Error adding document: ", e);
      setShowErrorModal(true); // Show error modal
    } finally {
      setIsLoading(false); // Hide loader after submission is complete
    }
  };

  const handleSelectCollege = (collegeName) => {
    setSelectedCollege(collegeName);
    setSearchInput(collegeName);
    setShowSuggestions(false);
  };

  return (
    <div className="justify-content-center align-items-center h-100">
      <div
        class="bg-cover bg-center bg-no-repeat w-full min-h-[146vh] md:min-h-[158vh]"
        style={{
          backgroundImage: `url('/images/${BGImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="flex justify-center">
          <div className="bg-light rounded-lg w-10/12 md:w-2/5 mt-28 md:mt-24 shadow-md">
            <img
              src={`/images/${posterImage}`}
              alt="stamp quest poster"
              className="mb-2 object-fill h-42 rounded-t-lg"
            />

            <div className="p-4 overflow-hidden">
              <h1 className="text-center mb-4 text-lg font-bold">
                {`${eventName} Registration`}
              </h1>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* First Name */}
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    <div className="flex flex-row gap-1">
                      First Name <div className="text-red-500"> *</div>
                    </div>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    autoComplete="first-name"
                    placeholder="Enter your first name"
                    className="form-control"
                    {...register("firstName", {
                      required: "First Name is required.",
                    })}
                  />
                  {errors.firstName && (
                    <div className="text-danger">
                      {errors.firstName.message}
                    </div>
                  )}
                </div>

                {/* Last Name */}
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    <div className="flex flex-row gap-1">
                      Last Name <div className="text-red-500"> *</div>
                    </div>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    placeholder="Enter your last name"
                    autoComplete="last-name"
                    {...register("lastName", {
                      required: "Last Name is required.",
                    })}
                  />
                  {errors.lastName && (
                    <div className="text-danger">{errors.lastName.message}</div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <div className="flex flex-row gap-1">
                      Email
                      <div className="text-red-500"> *</div>
                    </div>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="form-control"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required." })}
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email.message}</div>
                  )}
                </div>

                {/* University Search and Suggest */}
                <div className="mb-3">
                  <label htmlFor="selectedCollege" className="form-label">
                    University / College
                  </label>
                  <input
                    id="selectedCollege"
                    name="selectedCollege"
                    type="text"
                    className="form-control"
                    placeholder="Enter your University / College"
                    value={searchInput}
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                    }}
                  />
                  {showSuggestions && !isLoading && (
                    <ul
                      className="list-group mt-2"
                      style={{
                        maxHeight: "200px",
                        overflowY: "auto",
                        overflowX: "hidden",
                      }}
                    >
                      {colleges.map((college, index) => (
                        <li
                          key={index}
                          className="list-group-item list-group-item-action"
                          onClick={() => handleSelectCollege(college.name)}
                          style={{ cursor: "pointer" }}
                        >
                          {college.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Phone Number */}
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    <div className="flex flex-row gap-1">
                      Phone Number
                      <div className="text-red-500"> *</div>
                    </div>
                  </label>
                  <PhoneInput
                    id="phoneNumber"
                    name="phoneNumber"
                    className="form-control"
                    placeholder="Enter your phone number"
                    international
                    defaultCountry="US"
                    value={phoneNumber}
                    {...register("phoneNumber", {
                      required: "Phone Number is required",
                      validate: (value) => {
                        return (
                          isValidPhoneNumber(value) ||
                          "Phone Number should be valid and is required."
                        );
                      },
                    })}
                    onChange={(value) => {
                      setPhoneNumber(value);
                      setValue("phoneNumber", value);
                      clearErrors("phoneNumber");
                    }}
                  />

                  <small>
                    Enter a <i className="fa fa-whatsapp"></i>
                    <a
                      href="https://whatsapp.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      WhatsApp
                    </a>{" "}
                    registered number to opt for event reminders.
                  </small>
                  {errors.phoneNumber && (
                    <div className="text-danger">
                      {errors.phoneNumber.message}
                    </div>
                  )}
                </div>

                {/* Boolean Whatsapp */}
                <div className="flex flex-row gap-2">
                  <label htmlFor="isWARegistered" className="form-label">
                    Whatsapp registered number?
                  </label>
                  <div
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Check if your number is WhatsApp registered"
                  >
                    <input
                      type="checkbox"
                      id="isWARegistered"
                      className="form-check-input"
                      checked={isWARegistered}
                      onChange={(e) => setIsWARegistered(e.target.checked)}
                    />
                  </div>
                </div>

                {/* Boolean Subscribe Newsletter */}
                <div className="mb-3 flex flex-row gap-2">
                  <label htmlFor="subscribe" className="form-label">
                    Subscribe to our newsletter?
                  </label>

                  <div
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Subscribe to get updates about ISAUW, and much more!"
                  >
                    <input
                      type="checkbox"
                      id="subscribe"
                      className="form-check-input"
                      checked={subscribe}
                      onChange={(e) => setSubscribe(e.target.checked)}
                    />
                  </div>
                </div>

                {/* Indication required fields */}
                <div className="flex flex-row gap-1">
                  <div className="text-red-500"> *</div>
                  <small> indicates required fields </small>
                </div>

                <button
                  type="submit"
                  className={`w-full py-2 px-4 bg-[#941A1A] text-white font-semibold rounded-lg shadow-md hover:bg-[#7a1414] focus:outline-none focus:ring-2 focus:ring-[#941A1A] focus:ring-opacity-75 transition duration-300 ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Spinner
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="mr-2"
                      />
                      Registering...
                    </>
                  ) : (
                    "Register"
                  )}
                </button>

                {/* Success Modal */}
                {showSuccessModal && (
                  <div
                    id="modal-overlay"
                    onClick={handleOutsideClick}
                    className={`fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div
                      className={`bg-white w-11/12 sm:w-96 rounded-xl shadow-lg p-6 transform transition-all duration-300 ${
                        isVisible
                          ? "scale-100 opacity-100"
                          : "scale-90 opacity-0"
                      }`}
                    >
                      <div className="flex justify-end">
                        <button
                          className="text-gray-500 hover:text-gray-700"
                          onClick={closeModal}
                        >
                          ✕
                        </button>
                      </div>
                      <div className="flex justify-center items-center mb-4">
                        <div className="bg-[#107614] rounded-full p-2">
                          <svg
                            className="h-8 w-8 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                              className="tick"
                            />
                          </svg>
                        </div>
                      </div>
                      <h2 className="text-center text-xl font-bold text-gray-900 mb-2">
                        You're All Set!
                      </h2>
                      <p className="text-center text-gray-600 text-sm">
                        Your registration has been successfully submitted! Thank
                        you and see you on Seattle Stamp Quest!
                      </p>
                      <div className="flex flex-row gap-2 mt-4">
                        <Link
                          to="/"
                          className="bg-[#107614] text-white py-2 px-4 rounded-lg w-full text-center hover:bg-[#095F0C] transition-all flex justify-center items-center gap-2"
                        >
                          See you there!
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Modal */}
                {showErrorModal && (
                  <div
                    id="modal-overlay"
                    onClick={handleOutsideClick}
                    className={`fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div
                      className={`bg-white w-11/12 sm:w-96 rounded-xl shadow-lg p-6 transform transition-all duration-300 ${
                        isVisible
                          ? "scale-100 opacity-100"
                          : "scale-90 opacity-0"
                      }`}
                    >
                      <div className="flex justify-end">
                        <button
                          className="text-gray-500 hover:text-gray-700"
                          onClick={closeModal}
                        >
                          ✕
                        </button>
                      </div>
                      <div className="flex justify-center items-center mb-4">
                        <div className="bg-red-500 rounded-full p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <h2 className="text-center text-xl font-bold text-gray-900 mb-2">
                        Error
                      </h2>
                      <p className="text-center text-gray-600 text-sm">
                        There was an error submitting your registration. Please
                        try again.
                      </p>
                      <div className="flex justify-center mt-4">
                        <button
                          className="bg-red-500 text-white py-2 px-4 rounded-lg w-full hover:bg-red-700 transition-all"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* End modal */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
