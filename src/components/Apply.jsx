import React, { useState } from 'react';
// import FileUploaded from './FileUploaded';
import Carousel from 'react-bootstrap/Carousel';


function Apply() {
  // gdrive client ID: 799175424998-b3j32lo9hpli5lkc3e886d9lft6vicmg.apps.googleusercontent.com
  // gdrive client secret: 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
  const [info, setInfo] = useState({
    name: "",
    phoneNumber: "",
    personal_email: "",
    uw_email: "",
    major: "",
    year: "",
    strengths: "",
    past: "",
    why: "",
    c1: "",
    c2: "",
    c3: "",
  });

  // const CLIENT_ID = '799175424998-b3j32lo9hpli5lkc3e886d9lft6vicmg.apps.googleusercontent.com';
  // const CLIENT_SECRET = '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';
  // const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
  //
  // const REFRESH_TOKEN = '1//04KVspinox46jCgYIARAAGAQSNwF-L9IrHMcg3FsLH0JGVe3ExJn1TqCK-qo7eLHCVDl0fBc_LZ2vQchGLDy3rRRg9HRAYj_USnE';
  //
  // const oauth2Client = new google.auth.OAuth2(
  //   CLIENT_ID,
  //   CLIENT_SECRET,
  //   REDIRECT_URI
  // );
  //
  // oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

  // need time to upload resume, need to delay their responses
  const [resume, setResume] = useState(null);
  const [link, setLink] = useState("");

  const { name, phoneNumber, personal_email, uw_email, major, year, strengths, past, why, c1, c2, c3 } = info;

  const handleChange = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  }

  const handleFile = (e) => {
    const fileObj = e.target.files && e.target.files[0];
    if (!fileObj) {
      return;
    }
    setResume(fileObj)
    // console.log(e.target.files[0])
    uploadFile(e);
  }

  const uploadFile = (e) => {
    let file = resume
    let reader = new FileReader()
    try {
      reader.readAsDataURL(file)
    } catch (err) {
      alert("file failed to upload")
      e.target.value = null;
    }

    reader.onload = function (e) {
      let rawLog = reader.result.split(',')[1];
      var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
      fetch('https://script.google.com/macros/s/AKfycbzS7gM0878oabxpLc1eB442C90L3-DJANDxDIpVD3w77i9oLtPfJxcyG9vjwoP_gr8T/exec', //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
        .then(res => res.json()).then((a) => {
          console.log(a.url) //See response
          setLink(a.url)
        }).catch(e => console.log(e)) // Or Error in console
    }
  };
  const showMessage =() =>{
    if(link === ""){
    return(
    <p>resume has not finish uploading</p>
    )}
  };
  const submitForm = () => { };

  return (
    <div>
      <div className="navbar-overlay" style={{ position: "relative" }}>
        <img
          className="d-block w-100"
          src="../images/officers/isauw-group.jpg"
          alt=""
          style={{ height: "calc(50vh + 10vw)" }}
        />
        <Carousel.Caption style={{ top: "40%", bottom: "60%" }} className="animated fadeInUp">
          <h1 className="carousel-title" style={{ zIndex: "100", fontFamily: "brandon_grotesque, sans-serif", fontWeight: "400", color: "red" }}>
            Your Journey at ISAUW starts here!!!</h1>
        </Carousel.Caption>
      </div>

      <h1 className="apply-title"> Apply form </h1>
      <h6>ISAUW Officer Recruitment 22'-23'</h6>
      <h6>We are thrilled to welcome new members to ISAUW!</h6>
      <h6>We are currently recruiting enthusiastic, driven and collaborative students in the UW community to join our 2022-2023 cabinet.</h6>
      <h6>Please fill in this form to apply, qualified students will be contacted for an interview.</h6>
      <h6>Do not hesitate to contact us on Instagram @isauwhuskies or email us at isauw@uw.edu if you have any questions.</h6>
      <h6>Requirement: currently enrolled as a UW student.</h6>
      <form
        className="apply-form"
        method="POST"
        action="https://script.google.com/macros/s/AKfycbzCwqJl0_tfZrPQsVyYmCWfjmpfLwXkJwK9VW4ihZBmIGoZnWv01nais7SNnWeKya4/exec"
      >
        <span className="input"></span>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Full name"
          onChange={handleChange}
          autoComplete="off"
          title="Format: Xx[space]Xx (e.g. Alex Cican)"
          autoFocus
          required
          pattern="^\w+\s\w+$"
        />
        <br />
        <input
          type="email"
          name="personal_email"
          value={personal_email}
          onChange={handleChange}
          autoComplete="off"
          placeholder="Personal Email"
          required
        />
        <br />
        <input
          type="email"
          name="uw_email"
          value={uw_email}
          onChange={handleChange}
          autoComplete="on"
          placeholder="UW Email"
          title="Format: xxx@uw.edu"
          required
          pattern="^\w+@uw.edu"
        />
        <br />
        <span className="input"></span>
        <input
          type="tel"
          name="phoneNumber"
          pattern="[0-9]+"
          value={phoneNumber}
          onChange={handleChange}
          autoComplete="on"
          placeholder="WA Phone Number"
          required
        />
        <br />
        <input
          type="text"
          name="major"
          value={major}
          onChange={handleChange}
          autoComplete="on"
          placeholder="Major/Intended Major"
          required
        />
        <br />
        <select className="curr_year" name="year" value={year} onChange={handleChange} required>
          <option disabled value="">  Current Year</option>
          <option value="freshman">Freshman</option>
          <option value="sophomore">Sophomore</option>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
          <option value="graduate">Graduate</option>
        </select>
        <br />
        <ul className='positions'>ISAUW officer position options:

          <li>Event Organizer</li>
          <li>Creativity Management</li>
          <li>Inventory</li>
          <br />
          <li>Sponsorship</li>
          <li>Fundraising</li>
          <li>Treasury</li>
          <br />
          <li>Marketing Communication</li>
          <li>Design</li>
          <li>Documentation</li>
          <li>Web Development</li>
          <p>Want to know more about the positions? <a href='https://docs.google.com/presentation/d/1WZyhpHxiMuP-IsPmlmj5wFNDYkGTLTTxwPLy_uXqvLE/edit?usp=sharing'>Roles of Each Position</a></p>
        </ul>
        <br />

        <h5>Please rank the positions you are interested in (1 being the most)</h5>
        <h5>*For Design, Documentation, and Creativity Management Officers, please attach a portfolio/collection of your work and bring a hard/soft copy to the interview.</h5>
        <h5>*For all officers, please bring a hard/soft copy of your Resume if you have one.</h5>

        <br />
        <p>Resume:</p>
        <input type="file" name="resume" className='resume_class' required onChange={(e) => { handleFile(e) }} />
        <br />
        <p>From most to least priority, list up to 3 positions that you are most interested in and explain why.</p>
        <br />
        choice 1:
        <br />
        <label>
          <select name="c1" value={c1} onChange={handleChange}>
            <option value="EO">Event Organizers</option>
            <option value="IO">Inventory & Logistics</option>
            <option value="CM">Creativity Management</option>
            <option value="Sponsor">Sponsorship</option>
            <option value="Treasury">Treasury</option>
            <option value="MarCom">Marketing Communication</option>
            <option value="Documentary">Documentary and Design*</option>
            <option value="IT">Information Technology</option>
          </select>
        </label>
        <br />
        choice 2:
        <br />
        <label>
          <select name="c2" value={c2} onChange={handleChange}>
            <option value="EO">Event Organizers</option>
            <option value="IO">Inventory & Logistics</option>
            <option value="CM">Creativity Management</option>
            <option value="Sponsor">Sponsorship</option>
            <option value="Treasury">Treasury</option>
            <option value="MarCom">Marketing Communication</option>
            <option value="Documentary">Documentary and Design*</option>
            <option value="IT">Information Technology</option>
          </select>
        </label>
        <br />
        choice 3:
        <br />

        <label>
          <select name="c3" value={c3} onChange={handleChange}>
            <option value="EO">Event Organizers</option>
            <option value="IO">Inventory & Logistics</option>
            <option value="CM">Creativity Management</option>
            <option value="Sponsor">Sponsorship</option>
            <option value="Treasury">Treasury</option>
            <option value="MarCom">Marketing Communication</option>
            <option value="Documentary">Documentary and Design*</option>
            <option value="IT">Information Technology</option>
          </select>
        </label>
        <br />
        <b>* bring portfolio.</b>
        <br />
        <h4>Tell us a bit about yourself!</h4>
        <label>
          What would you say are your strengths and weaknesses? (2 each) and why?
          <br />
          <textarea
            className='strengths_weaknesses'
            type="text"
            name="strengths"
            value={strengths}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          What past experiences have you had that would be an asset for ISAUW?
          <br />
          <textarea
            className="past_experience"
            type="text"
            name="past"
            value={past}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Why do you want to join ISAUW? (brief description)
          <br />
          <textarea
            className='why_isauw'
            type="text"
            name="why"
            value={why}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <input type="hidden" name="link" value={link} />
        <br />
        <div>
          <div disabled={!(!link)} style={{display: link==="" ? "block":"none"}}>Resume has not been uploaded</div>
          <button id="submitBtn" onClick={submitForm} disabled={!link} >Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Apply;
