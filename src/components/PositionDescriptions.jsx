import React from 'react';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import { FaPeopleCarry, FaCalendarCheck, FaPaintBrush, FaPiggyBank, FaMoneyBillWave, FaHandshake, FaPhotoVideo, FaPencilRuler, FaUsers, FaCode } from 'react-icons/fa';

function PositionDescriptions() {
    const departmentDescriptions = [
        { title: "Inventory", description: "Providing necessary items before, during, and after events. Bring in food and purchase additional supplies. Ensure that everything owned by the company is handled, understood, and accounted for.", icon: <FaPeopleCarry/> },
        { title: "Event Organization", description: "Organize events, paying particular attention to concept, topic, substance, and flow. Plan the arrangements and evaluate the event's logistics.", icon: <FaCalendarCheck/> },
        { title: "Creative Management", description: "Plan and design artistic needs for organization’s events, specifically physical decorations. Execute the concept and design for organization’s events.", icon: <FaPaintBrush/> },
        { title: "Treasury", description: "Accountable for overseeing and distributing the organization's finances. Prepare financial reports following each event and responsible for the organization's transactional activities. ", icon: <FaPiggyBank/> },
        { title: "Fundraising", description: "Research and development of new and or existing fundraising menu. Planning fundraising activities (date, menu, location). Work with the the rest of finance team to make sure all fundraising runs smoothly (workflow, order status, etc).", icon: <FaMoneyBillWave/> },
        { title: "Sponsorship", description: "Responsible for getting funds from sponsors and other organizations. Understand the funding resources that the organization can obtain. Write sponsorship proposals for funding purposes.", icon: <FaHandshake/> },
        { title: "Documentation", description: "Must know or be comfortable with iMovie and/or Final Cut Pro. Document events, select, and finalize all pictures and videos.", icon: <FaPhotoVideo/> },
        { title: "Design", description: "Design posters, flyers, and banners. Must know or be comfortable with graphics editor preferably Photoshop and/or Illustrator.", icon: <FaPencilRuler/> },
        { title: "Marketing Communication", description: "Develop marketing strategies and promote events. Handle all media publication outreach", icon: <FaUsers/> },
        { title: "Web Development", description: "Maintaining ISAUW’s website by designing user interfaces to improve user experience. Writing and reviewing HTML, CSS and JavaScript (React) code.", icon: <FaCode/> }
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

    const generateBulletsFromDescription = (desc) => {
        const bulletArr = desc.match( /[^.!?]+[.!?]+/g );

        console.log(bulletArr);

        return bulletArr.map((bullet) => {
            console.log(bullet);
            return (
                <li style={{color: "#747373", fontWeight: "300", fontSize: "14px", marginBottom: "10px"}}>
                    {bullet}
                </li>
            )
        });
    };

    const PositionDescriptionCard = (props) => {
        const { title, description, icon } = props;

        return (
            <div style={{height: "inherit", marginRight: "1rem"}}>
                <Card style={{height: "inherit", borderColor: "#ced4da"}}>
                    {/* +10px is used to compensate for the ul's 10px marginBottom */}
                    <Card.Body style={{padding: `calc(1.5rem + 10px) 1rem 1.5rem`}}>
                        <div className="position-icon" style={{textAlign: "center", color: "#212529"}}>
                            {icon}
                        </div>
                        <p style={{color: "#212529", fontWeight: "700", fontSize: "18px", letterSpacing: "2px", textTransform: "uppercase", textAlign: "center", marginTop: "12px"}}>
                            {title}
                        </p>
                        <ul style={{listStylePosition: "outside", listStyleType: "disc", paddingLeft: "1rem"}}>
                            {generateBulletsFromDescription(description)}
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        )
    };

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