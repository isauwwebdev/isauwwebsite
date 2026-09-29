import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPeopleCarry,
  FaCalendarCheck,
  FaPaintBrush,
  FaPiggyBank,
  FaMoneyBillWave,
  FaHandshake,
  FaPhotoVideo,
  FaPencilRuler,
  FaCode,
} from "react-icons/fa";

function PositionDescriptionsOld() {
  const departmentDescriptions = [
    {
      title: "Inventory",
      description:
        "Providing necessary items before, during, and after events. Bring in food and purchase additional supplies. Ensure that everything owned by the company is handled, understood, and accounted for.",
      icon: <FaPeopleCarry />,
    },
    {
      title: "Event Organizer",
      description:
        "Organize events, paying particular attention to concept, topic, substance, and flow. Responsible for planning, including logistics, arrangements, and post-event evaluations for each event.",
      icon: <FaCalendarCheck />,
    },
    {
      title: "Creative Engineering",
      description:
        "Plan and design artistic needs for organization’s events, specifically physical decorations. Execute the concept and design for organization’s events.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Treasury",
      description:
        "Accountable for overseeing and distributing the organization's finances. Prepare financial reports following each event and responsible for the organization's transactional activities. ",
      icon: <FaPiggyBank />,
    },
    {
      title: "Fundraising",
      description:
        "Research and development of new and or existing fundraising menu. Planning fundraising activities (date, menu, location). Work with the the rest of finance team to make sure all fundraising runs smoothly (workflow, order status, etc).",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Sponsorship",
      description:
        "Responsible for getting funds from sponsors and other organizations. Understand the funding resources that the organization can obtain. Write sponsorship proposals for funding purposes.",
      icon: <FaHandshake />,
    },
    {
      title: "Media & Marketing",
      description:
        "Capture pictures and videos during ISAUW’s events, then select, edit, and finalize them. Develop marketing strategies and promote events both online and offline on campus. Monitor social media engagement insights and create marketing plans accordingly. Experience with iMovie and/or Final Cut Pro is a plus.",
      icon: <FaPhotoVideo />,
    },
    {
      title: "Design",
      description:
        "Design eye catching posters, flyers, and banners for ISAUW’s events and other promotional materials. Proficient in software tools like Photoshop and/or Illustrator.",
      icon: <FaPencilRuler />,
    },
    {
      title: "Web Development",
      description:
        "Maintaining ISAUW’s website by designing user interfaces to improve user experience. Writing and reviewing HTML, CSS and JavaScript (React) code.",
      icon: <FaCode />,
    },
  ];
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // disable the arrow on whichever side has nothing left to scroll to
  const updateArrows = () => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 1);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  // scroll to the nearest card whose left edge is past the current position
  const scrollToCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const cardStarts = Array.from(track.children).map((card) => card.offsetLeft);
    const current = track.scrollLeft;
    const target =
      direction > 0
        ? cardStarts.find((left) => left > current + 1)
        : cardStarts.reverse().find((left) => left < current - 1);
    if (target !== undefined) {
      track.scrollTo({ left: target, behavior: "smooth" });
    }
  };

  const generateBulletsFromDescription = (desc) => {
    const bulletArr = desc.match(/[^.!?]+[.!?]+/g);

    console.log(bulletArr);

    return bulletArr.map((bullet) => {
      console.log(bullet);
      return (
        <li
          style={{
            color: "#747373",
            fontWeight: "300",
            fontSize: "14px",
            marginBottom: "10px",
          }}
        >
          {bullet}
        </li>
      );
    });
  };

  const PositionDescriptionCard = (props) => {
    const { title, description, icon } = props;

    return (
      <div className="position-card">
        <Card style={{ height: "100%", borderColor: "#ced4da" }}>
          {/* +10px is used to compensate for the ul's 10px marginBottom */}
          <Card.Body style={{ padding: `calc(1.5rem + 10px) 1rem 1.5rem` }}>
            <div
              className="position-icon"
              style={{
                display: "grid",
                placeItems: "center",
                textAlign: "center",
                color: "#212529",
              }}
            >
              {icon}
            </div>
            <p
              style={{
                color: "#212529",
                fontWeight: "700",
                fontSize: "18px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textAlign: "center",
                marginTop: "12px",
              }}
            >
              {title}
            </p>
            <ul
              style={{
                listStylePosition: "outside",
                listStyleType: "disc",
                paddingLeft: "1rem",
              }}
            >
              {generateBulletsFromDescription(description)}
            </ul>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <div className="my-3 position-carousel">
      <button
        type="button"
        className="position-arrow position-arrow-left"
        aria-label="Previous position"
        disabled={atStart}
        onClick={() => scrollToCard(-1)}
      >
        <FaChevronLeft />
      </button>
      <div className="position-track" ref={trackRef} onScroll={updateArrows}>
        {departmentDescriptions.map((event) => {
          return (
            <PositionDescriptionCard
              key={event.title}
              title={event.title}
              description={event.description}
              icon={event.icon}
            />
          );
        })}
      </div>
      <button
        type="button"
        className="position-arrow position-arrow-right"
        aria-label="Next position"
        disabled={atEnd}
        onClick={() => scrollToCard(1)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default PositionDescriptionsOld;
