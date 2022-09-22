import React from 'react';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import { FaPeopleCarry, FaCalendarCheck, FaPaintBrush, FaPiggyBank, FaMoneyBillWave, FaHandshake, FaPhotoVideo, FaPencilRuler, FaUsers, FaCode } from 'react-icons/fa';

function PositionDescriptions() {
    const departmentDescriptions = [
        { title: "Inventory", description: "Providing necessary items before, during, and after events. Bring in food and purchase additional supplies. Ensure that everything owned by the company is handled, understood, and accounted for.", icon: <FaPeopleCarry size={25} /> },
        { title: "Event Organization", description: "Organize events, paying particular attention to concept, topic, substance, and flow. Plan the arrangements and evaluate the event's logistics.", icon: <FaCalendarCheck size={25} /> },
        { title: "Creative Management", description: "Plan and design artistic needs for organization’s events, specifically physical decorations. Execute the concept and design for organization’s events.", icon: <FaPaintBrush size={25} /> },
        { title: "Treasury", description: "Accountable for overseeing and distributing the organization's finances. Prepare financial reports following each event and responsible for the organization's transactional activities. ", icon: <FaPiggyBank size={25} /> },
        { title: "Fundraising", description: "Research and development of new and or existing fundraising menu. Planning fundraising activities (date, menu, location). Work with the the rest of finance team to make sure all fundraising runs smoothly (workflow, order status, etc).", icon: <FaMoneyBillWave size={25} /> },
        { title: "Sponsorship", description: "Responsible for getting funds from sponsors and other organizations. Understand the funding resources that the organization can obtain. Write sponsorship proposals for funding purposes.", icon: <FaHandshake size={25} /> },
        { title: "Documentation", description: "Must know or be comfortable with iMovie and/or Final Cut Pro. Document events, select, and finalize all pictures and videos.", icon: <FaPhotoVideo size={25} /> },
        { title: "Design", description: "Design posters, flyers, and banners. Must know or be comfortable with graphics editor preferably Photoshop and/or Illustrator.", icon: <FaPencilRuler size={25} /> },
        { title: "Marketing Communication", description: "Develop marketing strategies and promote events. Handle all media publication outreach", icon: <FaUsers size={25} /> },
        { title: "Web Development", description: "Maintaining ISAUW’s website by designing user interfaces to improve user experience. Writing and reviewing HTML, CSS and JavaScript (React) code.", icon: <FaCode size={25} /> }
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
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.08,
                }
            }
        ]
    };

    function PositionDescriptionCard(props) {
        const { title, description, icon } = props;

        return (
            <div className="mx-2">
                <Card className="position-descr-card">
                    <Card.Body>
                        <div className="justify-content-center">
                            <Card.Title>{icon}</Card.Title>
                        </div>
                        <Card.Subtitle>{title}</Card.Subtitle>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    return (
        <div className="my-3">
            <Slider {...settings}>
                {departmentDescriptions.map((event, i) => {
                    return (
                        <PositionDescriptionCard title={event.title} description={event.description} icon={event.icon} />
                    )
                })}
            </Slider>
        </div>
    )
}

export default PositionDescriptions