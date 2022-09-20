import React, { useEffect, useState } from 'react';
// import FileUploaded from './FileUploaded';
import Carousel from 'react-bootstrap/Carousel';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form';


function Apply() {
  // gdrive client ID: 799175424998-b3j32lo9hpli5lkc3e886d9lft6vicmg.apps.googleusercontent.com
  // gdrive client secret: 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
  const [info, setInfo] = useState({
    name: "",
    personal_email: "",
    uw_email: "",
    major: "",
    year: "",
    strengths: "",
    past: "",
    why: "",
  });

  const [choices, setChoices] = useState({
    c1: "",
    c2: "",
    c3: "",
  })

  const updateSheetsURL = 'https://script.google.com/macros/s/AKfycbzCwqJl0_tfZrPQsVyYmCWfjmpfLwXkJwK9VW4ihZBmIGoZnWv01nais7SNnWeKya4/exec'
  const uploadToGDriveURL = 'https://script.google.com/macros/s/AKfycbzS7gM0878oabxpLc1eB442C90L3-DJANDxDIpVD3w77i9oLtPfJxcyG9vjwoP_gr8T/exec'


  const [resume, setResume] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const [phone, setPhone] = useState("");
  const [validated, setValidated] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const { name, personal_email, uw_email, major, year, strengths, past, why} = info;
  const { c1, c2, c3} = choices;

  const handleChange = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  }


  const handleFile = (e) => {
    const fileObj = e.target.files && e.target.files[0];
    if (!fileObj) {
      return;
    }
    setResume(fileObj)
  }

  const submitForm = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity() === false) {
      return;
    }

    // data prep
    const data = {
      name: name,
      personal_email: personal_email,
      uw_email: uw_email,
      phone: phone,
      major: major,
      year: year,
      strengths: strengths,
      past: past,
      why: why,
      c1: c1,
      c2: c2,
      c3: c3,
      portfolio: portfolio,
      resume: resume
    }
    e.preventDefault();

    var formData = new FormData();
    formData.append('name', data.name);
    formData.append('personal_email', data.personal_email);
    formData.append('uw_email', data.uw_email);
    formData.append('phone', data.phone);
    formData.append('major', data.major);
    formData.append('year', data.year);
    formData.append('strengths', data.strengths);
    formData.append('past', data.past);
    formData.append('why', data.why);
    formData.append('c1', data.c1);
    formData.append('c2', data.c2);
    formData.append('c3', data.c3);
    formData.append('portfolio', data.portfolio);
    formData.append('resume', data.resume.name);

    const file = resume
    const reader = new FileReader()
    if (file && file.type.match('application/pdf')) {
      reader.readAsDataURL(file);
    } else {
      alert("please upload a pdf")
    }
      reader.onload = function (e) {
      const rawLog = reader.result.split(',')[1];
      var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
      fetch(uploadToGDriveURL, //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
        .then(res => res.json()).then((a) => {
          console.log(a.url) //See response
          formData.append('link', a.url);

          // update Google Sheets
          fetch(updateSheetsURL, { method: 'POST', body: formData })
            .then(response => {
              console.log('Success!', response)
              setShowForm(false)
          })
            .catch(error => console.error('Error!', error.message));

          }).catch(e => console.log(e)) // Or Error in console
    }
  };

  // credits to Jevin for this phone number handler
  function formatPhoneNumber(value) {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value;

    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, "");

    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length;

    // we need to return the value with no formatting if its less then four digits
    // this is to avoid weird behavior that occurs if you  format the area code to early
    if (phoneNumberLength < 4) return phoneNumber;

    // if phoneNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    // finally, if the phoneNumberLength is greater then seven, we add the last
    // bit of formatting and return it.
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

  const handlePhoneInput = (e) => {
    // this is where we'll call the phoneNumberFormatter function
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    // we'll set the input value using our setInputValue
    setPhone(formattedPhoneNumber);
  };

  const handleChoice = async (e) => {
    setChoices({ ...choices, [e.target.name]: e.target.value });
  }

  useEffect(() =>{
    const set = new Set()
    const values = Object.keys(choices).map(function(key){
      console.log(choices[key])
      set.add(choices[key])
    });
    // (choices.contains("Documentary")) || (e.target.value ==="Design") || (e.target.value ==="Creativity Management" )
    if(set.has("Documentary") || set.has("Design") || set.has("Creativity Management")){
      setPortfolio("exists")
    }else{
      setPortfolio("")
    }
  },[choices])

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
      {showForm && (
      <div>      
      <h1 className="apply-title"> Apply form </h1>
      <h6>ISAUW Officer Recruitment 22'-23'</h6>
      <h6>We are thrilled to welcome new members to ISAUW!</h6>
      <h6>We are currently recruiting enthusiastic, driven and collaborative students in the UW community to join our 2022-2023 cabinet.</h6>
      <h6>Please fill in this form to apply, qualified students will be contacted for an interview.</h6>
      <h6>Do not hesitate to contact us on Instagram @isauwhuskies or email us at isauw@uw.edu if you have any questions.</h6>
      <h6>Requirement: currently enrolled as a UW student.</h6>
      
        <Form noValidate validated={validated} onSubmit={submitForm} id="form">
        <Form.Group>
          <FloatingLabel label="Full Name" >
            <Form.Control name="name" type="text" onChange={handleChange} placeholder="Full Name" autoFocus required></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please enter your complete name
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group>
          <FloatingLabel label="Personal Email" >
            <Form.Control name="personal_email" type="email" onChange={handleChange} placeholder="Personal Email" required></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group style={{ margin: "16px 0" }}>
          <FloatingLabel label="UW Email" >
            <Form.Control name="uw_email" type="email" onChange={handleChange} pattern="^\w+@uw.edu" placeholder="UW Email" autoComplete="on" required></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please enter the email address from UW
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group>
          <FloatingLabel label="Phone" >
            <Form.Control name="tel" type="tel" onChange={(e) => handlePhoneInput(e)} placeholder="WA Phone Number" value={phone} pattern="[\(]\d{3}[\)] \d{3}[\-]\d{4}" title="Please enter a valid phone number." required></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please enter a valid phone number
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group>
          <FloatingLabel label="Major/Intended Major" >
            <Form.Control name="major" type="text" onChange={handleChange} placeholder="Major/Intended Major" required></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please enter your major or intended major
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group required>
          <FloatingLabel label="Current Year" required>
            <Form.Select required name="year" onChange={handleChange}>
              <option selected disabled value="" >Select Your Current Standing</option>
              <option value="freshman">Freshman</option>
              <option value="sophomore">Sophomore</option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
              <option value="graduate">Graduate</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select your current standing
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group>
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
            <br />
            <p>Want to know more about the positions? <a href='https://docs.google.com/presentation/d/1WZyhpHxiMuP-IsPmlmj5wFNDYkGTLTTxwPLy_uXqvLE/edit?usp=sharing'>Roles of Each Position</a></p>
          </ul>
          <br />

          <h5>Please rank the positions you are interested in (1 being the most)</h5>
          <h5>*For Design, Documentation, and Creativity Management Officers, please attach a portfolio/collection of your work and bring a hard/soft copy to the interview.</h5>
          <h5>*For all officers, please bring a hard/soft copy of your Resume if you have one.</h5>

          <br />
          <p>From most to least priority, list up to 3 positions that you are most interested in and explain why.</p>
          <br />
        </Form.Group>

        <Form.Group required>
          <FloatingLabel label="Choice 1" required>
            <Form.Select required name="c1" onChange={handleChoice} >
              <option selected disabled value="" >Select 1st option</option>
              <option value="Event Organizers">Event Organizers</option>
              <option value="Inventory and Logistics">Inventory & Logistics</option>
              <option value="Creativity Management">Creativity Management *</option>
              <option value="Sponsorship">Sponsorship</option>
              <option value="Treasury">Treasury</option>
              <option value="Marketing Communication">Marketing Communication</option>
              <option value="Documentary">Documentary *</option>
              <option value="Design">Design *</option>
              <option value="Information Technology">Information Technology</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a position you are most interested in
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group required>
          <FloatingLabel label="Choice 2" required>
            <Form.Select required name="c2" onChange={handleChoice}>
              <option selected disabled value="" >Select 2nd option</option>
              <option value="Event Organizers">Event Organizers</option>
              <option value="Inventory and Logistics">Inventory & Logistics</option>
              <option value="Creativity Management">Creativity Management *</option>
              <option value="Sponsorship">Sponsorship</option>
              <option value="Treasury">Treasury</option>
              <option value="Marketing Communication">Marketing Communication</option>
              <option value="Documentary">Documentary *</option>
              <option value="Design">Design *</option>
              <option value="Information Technology">Information Technology</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a position you are interested in
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group required>
          <FloatingLabel label="Choice 3" required>
            <Form.Select required name="c3" onChange={handleChoice}>
              <option selected disabled value="" >Select 3rd option</option>
              <option value="Event Organizers">Event Organizers</option>
              <option value="Inventory and Logistics">Inventory & Logistics</option>
              <option value="Creativity Management">Creativity Management *</option>
              <option value="Sponsorship">Sponsorship</option>
              <option value="Treasury">Treasury</option>
              <option value="Marketing Communication">Marketing Communication</option>
              <option value="Documentary">Documentary *</option>
              <option value="Design">Design *</option>
              <option value="Information Technology">Information Technology</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a position you are interested in
            </Form.Control.Feedback>
          </FloatingLabel>
          <b>* please bring portfolio</b>

        </Form.Group>

        <Form.Group required style={{ display: portfolio ? "" : "none" }}>
          <Form.Label>You have indicated that you are applying for the position of Documentary, Design or Creativity Management. Please provide a link to your portfolio below</Form.Label>
          <FloatingLabel label="Link to portfolio" required>
            <Form.Control name="portfolio" type="text" required onChange={handleChange} placeholder="Link to portfolio" pattern='\w+'></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please provide a link to your portfolio
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>


        <h4>Tell us a bit about yourself!</h4>

        <Form.Group className='strengths_weaknesses' controlId="strengths_weakness" required>
          <Form.Label>What would you say are your strengths and weaknesses? (2 each) and why?</Form.Label>
          <Form.Control name="strengths" as="textarea" rows={5} onChange={handleChange} required />
          <Form.Control.Feedback type="invalid">
            Please answer the prompt
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='past_experience' controlId="past_experience" required>
          <Form.Label>What past experiences have you had that would be an asset for ISAUW?</Form.Label>
          <Form.Control name="past" as="textarea" rows={5} onChange={handleChange} required />
          <Form.Control.Feedback type="invalid">
            Please answer the prompt
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='why_isauw' controlId="why_isauw" required>
          <Form.Label>Why do you want to join ISAUW? (brief description)</Form.Label>
          <Form.Control name="why" as="textarea" rows={5} onChange={handleChange} required />
          <Form.Control.Feedback type="invalid">
            Please answer the prompt
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formFile">
          <Form.Label>Resume (in pdf):</Form.Label>
          <Form.Control
            type="file"
            required
            name="resume"
            onChange={(e) => { handleFile(e) }}
          />
          <Form.Control.Feedback type="invalid">
            file cannot be read
          </Form.Control.Feedback>
        </Form.Group>
        <div>
          <button type="submit" className="apply-button">Submit</button>
        </div>
      </Form>
      </div>
      )}

    {!showForm && (
      <div>      
      <h1 className="apply-title"> Thank you for Applying.</h1>
      </div>
      )}
    </div>
  );
}
export default Apply;
