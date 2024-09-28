import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { Tooltip } from "bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Link } from "react-router-dom";
import "../index.css";
import eventsData from "../../data/eventsData";

// Component for events sign up form.
// RI: eventName.prop === events.json.title
export default function EventSignUpForm({
  eventName,
  posterImage,
  firestorePath,
  BGImage,
  rsvp = false,
}) {
  const [colleges, setColleges] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isWARegistered, setIsWARegistered] = useState(true);
  const [subscribe, setSubscribe] = useState(true);

  // Loader
  const [isLoading, setIsLoading] = useState(false);

  // Events
  const [eventsSet, setEventsSet] = useState(new Set());
  const getEvents = () => {
    setEventsSet(new Set(eventsData));
  };
  useEffect(getEvents, []);

  // Add state for Proof of Payment file
  const [proofOfPaymentFile, setProofOfPaymentFile] = useState(null);
  const [proofOfPaymentError, setProofOfPaymentError] = useState("");

  // Modal
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // During h-1 of event at 11:59 PM, we want to close the registration,
  // and show modal indicating to register OTS.
  const [showOTSModal, setShowOTSModal] = useState(false); // Modal state for OTS registration

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
      document.body.style.overflow = "hidden";

      const handleEsc = (event) => {
        if (event.key === "Escape") {
          setShowSuccessModal(false);
          setShowErrorModal(false);
        }
      };
      window.addEventListener("keydown", handleEsc);

      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleEsc);
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
      setTimeout(() => setIsVisible(true), 50);
    } else {
      setIsVisible(false);
    }
  }, [showSuccessModal, showErrorModal]);

  const closeModal = () => {
    setIsVisible(false);
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

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e);
    setValue("phoneNumber", e);
    clearErrors("phoneNumber");
  };

  const handleProofOfPaymentFile = (e) => {
    const file = e.target.files[0];
    setProofOfPaymentFile(file);
    clearErrors("proofOfPayment");
    console.log("proof of payment file", file);
  };

  // TODO: implement update to spreadsheets in real time using Google Sheets API.
  const onSubmit = async (data) => {
    setIsLoading(true);
    let proofOfPaymentURL = "";

    if (rsvp && proofOfPaymentFile) {
      // Only upload if rsvp is true and file is selected
      const storageRef = ref(
        storage,
        `2024/seathrough/proofs-of-payment/${proofOfPaymentFile.name}`
      );
      const uploadResult = await uploadBytes(storageRef, proofOfPaymentFile);
      proofOfPaymentURL = await getDownloadURL(uploadResult.ref);
    }

    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      selectedCollege: selectedCollege,
      isWARegistered: isWARegistered,
      subscribe: subscribe,
      proofOfPayment: proofOfPaymentURL, // Include proofOfPayment URL only if rsvp is true
      timestamp: new Date(),
    };

    try {
      await addDoc(collection(db, firestorePath), formData);
      setShowSuccessModal(true);
    } catch (e) {
      console.error("Error adding document: ", e);
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectCollege = (collegeName) => {
    setSelectedCollege(collegeName);
    setSearchInput(collegeName);
    setShowSuggestions(false);
  };

  // Function to check if registration should be closed based on the event's date
  const checkRegistrationStatus = () => {
    const event = Array.from(eventsSet).find((e) => e.title === eventName);
    console.log("Event", event);

    if (event) {
      console.log("event.date", event.date);
      // Parse event date
      const [eventMonth, eventDay, eventYear] = event.date.split("/");
      const eventDate = new Date(
        `${eventYear}-${eventMonth}-${eventDay}T00:00:00`
      );

      // Subtract one day from event date
      const oneDayBeforeEvent = new Date(eventDate);
      oneDayBeforeEvent.setDate(oneDayBeforeEvent.getDate() - 1);

      // Format the current date to MM/DD/YYYY
      const currentDateUnformatted = new Date(); // Gets the current date and time
      const currentDate = `${(currentDateUnformatted.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${currentDateUnformatted
        .getDate()
        .toString()
        .padStart(2, "0")}/${currentDateUnformatted.getFullYear()}`;

      // Format one day before the event date to MM/DD/YYYY
      const oneDayBefore = `${(oneDayBeforeEvent.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${oneDayBeforeEvent
        .getDate()
        .toString()
        .padStart(2, "0")}/${oneDayBeforeEvent.getFullYear()}`;

      const currentHours = currentDateUnformatted.getHours();
      const currentMinutes = currentDateUnformatted.getMinutes();

      // Check if the current date is one day before the event date
      if (currentDate === oneDayBefore) {
        // Check if current time is 11:59 PM or later
        if (currentHours === 23 && currentMinutes >= 59) {
          setShowOTSModal(true); // Trigger the OTS modal
        }
      } else if (currentDate > oneDayBefore) {
        // If current date is after one day before the event, show OTS modal
        setShowOTSModal(true);
      } else {
        // If the current date is before one day before the event, do not show OTS modal
        setShowOTSModal(false);
      }
    } else {
      console.log("event not found in events.json");
    }
  };
  // Check registration status when component mounts or eventsSet changes
  useEffect(() => {
    checkRegistrationStatus();
  }, [eventsSet]);

  const OTSModal = (
    <div
      id="modal-overlay"
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        showOTSModal ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-white w-11/12 sm:w-96 rounded-xl shadow-lg p-6 transform transition-all duration-300">
        <h2 className="text-center text-xl font-bold text-gray-900 mb-2">
          Registration Closed
        </h2>
        <p className="text-center text-gray-600 text-sm">
          Registration for {eventName} is now closed. Please register{" "}
          <span className="font-bold">on-site</span>.
        </p>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-[#941A1A] hover:bg-[#7a1414] text-white py-2 px-4 rounded-lg w-full text-center transition-all flex justify-center items-center gap-2"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="justify-content-center align-items-center h-100">
      {showOTSModal && OTSModal}
      <div
        className="bg-cover bg-center bg-no-repeat w-full min-h-[80rem] md:min-h-[158vh]"
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
              alt="event poster"
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
                      renderCollegeListTemp(e.target.value);
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

                {/* Proof of Payment */}
                {rsvp && (
                  <div className="mb-3">
                    <label htmlFor="proofOfPayment" className="form-label">
                      Proof of Payment <span className="text-red-500"> *</span>
                    </label>
                    <input
                      id="proofOfPayment"
                      name="proofOfPayment"
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      className="form-control"
                      {...register("proofOfPayment", {
                        required: "Proof of payment is required.",
                      })}
                      onChange={(value) => {
                        handleProofOfPaymentFile(value);
                      }}
                    />
                    {proofOfPaymentError && (
                      <div className="text-danger">{proofOfPaymentError}</div>
                    )}
                    {errors.proofOfPayment && (
                      <div className="text-danger">
                        {errors.proofOfPayment.message}
                      </div>
                    )}
                    <small className="form-text text-muted">
                      Please upload a screenshot of your payment. Payments can
                      be sent via:
                      <br />
                      <div style={{ marginLeft: "20px" }}>
                        Zelle: octaviog@uw.edu
                      </div>
                      <div style={{ marginLeft: "20px" }}>
                        Venmo: @ISAUW-Finance
                      </div>
                      When making the payment, please include your registered
                      name in the note section.
                    </small>
                  </div>
                )}

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
                      handlePhoneNumber(value);
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

                <button
                  type="submit"
                  className={`w-full py-2 px-4 bg-[#941A1A] hover:bg-[#7a1414] text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-[#941A1A] focus:ring-opacity-75 transition duration-300 ${
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
                              strokeWidth="2"
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
                        you and see you on {eventName}!
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
