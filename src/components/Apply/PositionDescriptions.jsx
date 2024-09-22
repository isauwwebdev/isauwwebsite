import React from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import {
  FaPeopleCarry,
  FaCalendarCheck,
  FaPaintBrush,
  FaPiggyBank,
  FaMoneyBillWave,
  FaHandshake,
  FaPhotoVideo,
  FaPencilRuler,
  FaUsers,
  FaCode,
} from "react-icons/fa";

function PositionDescriptions() {
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
      title: "Documentation",
      description:
        "In charge of capturing pictures and videos during ISAUW’s events. Select, edit, and finalize pictures and videos. Proficient in iMovie and/or Final Cut Pro.",
      icon: <FaPhotoVideo />,
    },
    {
      title: "Design",
      description:
        "Design eye catching posters, flyers, and banners for ISAUW’s events and other promotional materials. Proficient in software tools like Photoshop and/or Illustrator.",
      icon: <FaPencilRuler />,
    },
    {
      title: "Marketing Communication",
      description:
        "Develop marketing strategies and promote events both online and offline on campus. Monitor social media engagement insights and create marketing plans accordingly.",
      icon: <FaUsers />,
    },
    {
      title: "Web Development",
      description:
        "Maintaining ISAUW’s website by designing user interfaces to improve user experience. Writing and reviewing HTML, CSS and JavaScript (React) code.",
      icon: <FaCode />,
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    focusOnSelect: true,
    className: "position-descr-slider",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.08,
        },
      },
    ],
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
      <div style={{ height: "inherit", marginRight: "1rem" }}>
        <Card style={{ height: "inherit", borderColor: "#ced4da" }}>
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
    <div className="my-3">
      <Slider {...settings}>
        {departmentDescriptions.map((event, i) => {
          return (
            <PositionDescriptionCard
              title={event.title}
              description={event.description}
              icon={event.icon}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default PositionDescriptions;
