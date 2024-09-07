import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Tooltip } from "bootstrap";

export default function SignUpForm() {
  const [colleges, setColleges] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    setError,
    clearErrors,
  } = useForm();

  // Fetch colleges based on user input (name)
  const renderCollegeList = async (name) => {
    try {
      if (name) {
        setIsLoading(true);
        const response = await axios.get(
          `http://universities.hipolabs.com/search`,
          {
            params: { name },
          }
        );
        // Filter the results to only show colleges in the US
        const filteredColleges = response.data.filter(
          (college) => college.country === "United States"
        );
        setColleges(filteredColleges);
        setShowSuggestions(true);
        setIsLoading(false);
      } else {
        setColleges([]);
        setShowSuggestions(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching colleges:", error);
      setIsLoading(false);
    }
  };

  const onSubmit = (data) => {
    if (!phoneNumber) {
      setError("phone_number", {
        type: "manual",
        message: "Phone number is required",
      });
      return;
    }

    if (isValidPhoneNumber(phoneNumber)) {
      clearErrors("phone_number");
      data.phone_number = phoneNumber;
      data.selectedCollege = selectedCollege;
      console.log("Form Results:", data); // HERES THE RESULTS
    } else {
      setError("phone_number", {
        type: "manual",
        message: "Invalid phone number",
      });
    }
  };

  // Function to handle selecting a college from suggestions
  const handleSelectCollege = (collegeName) => {
    setSelectedCollege(collegeName);
    setSearchInput(collegeName);
    setShowSuggestions(false);
  };

  return (
    <div className="justify-content-center align-items-center h-100">
      <div
        style={{
          backgroundImage: `url('../images/formBGEdited.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "140vh",
        }}
      >
        <div className="flex justify-center">
          <div className="bg-light rounded-lg w-10/12 md:w-2/5 mt-28 md:mt-24 mb-24 shadow-md">
            {/* Carousel */}
            <div className="">
              <Carousel>
                <Carousel.Item>
                  <img
                    alt="isauwbird"
                    src="../images/isauwcard.jpg"
                    className="mb-2 object-fill w-100 rounded-t-lg h-42 brightness-75"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    alt="isauwbird"
                    src="../images/isauwcard.png"
                    className="mb-2 object-fill w-100 rounded-t-md h-42 brightness-75"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    alt="isauwbird"
                    src="../images/isauwcard.jpg"
                    className="mb-2 object-fill w-100 rounded-t-md h-42 brightness-75"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

            {/* Form Starts */}
            <div className="p-4 overflow-hidden">
              <h1 className="text-center mb-4 text-lg font-bold">
                Seattle Stamp Quest Registration
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
                      required: "First Name is required",
                      pattern: /^[A-Za-z]+$/i,
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
                  <div className="flex flex-row gap-1">
                    Last Name <div className="text-red-500"> *</div>
                  </div>
                  <input
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    placeholder="Enter your last name"
                    autoComplete="last-name"
                    {...register("lastName", {
                      required: "Last Name is required",
                      pattern: /^[A-Za-z]+$/i,
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
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email.message}</div>
                  )}
                </div>

                {/* University Search and Suggest */}
                <div className="mb-3">
                  <label htmlFor="collegeSearch" className="form-label">
                    University / College
                  </label>
                  <input
                    type="text"
                    id="collegeSearch"
                    className="form-control"
                    placeholder="Search for a University / College"
                    value={searchInput}
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                      renderCollegeList(e.target.value);
                    }}
                  />
                  {/* Show spinner while loading */}
                  {isLoading && (
                    <div className="d-flex justify-content-center mt-2">
                      <Spinner animation="border" variant="primary" />
                    </div>
                  )}
                  {/* TODO: on click away from form, setShowSugges(false) */}
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
                  <label htmlFor="phone_number" className="form-label">
                    <div className="flex flex-row gap-1">
                      Phone Number
                      <div className="text-red-500"> *</div>
                    </div>
                  </label>
                  <PhoneInput
                    id="phone_number"
                    international
                    autoComplete="phone-number"
                    defaultCountry="US"
                    value={phoneNumber}
                    onChange={(value) => {
                      setPhoneNumber(value);
                      clearErrors("phone_number");
                    }}
                    className="form-control"
                  />
                  <small>
                    We will send only event reminders through{" "}
                    <i className="fa fa-whatsapp"></i>{" "}
                    <a
                      href="https://whatsapp.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                    .
                  </small>
                  {errors.phone_number && (
                    <div className="text-danger">
                      {errors.phone_number.message}
                    </div>
                  )}
                </div>

                {/* Boolean Whatsapp */}
                <div className="flex flex-row gap-2">
                  <label htmlFor="isWARegistered" className="form-label">
                    Registered on{" "}
                    <a
                      href="https://whatsapp.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                    ?
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
                      defaultChecked
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
                      defaultChecked
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-1">
                  <div className="text-red-500"> *</div>
                  <small> indicates required fields </small>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
