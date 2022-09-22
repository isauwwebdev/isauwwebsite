import React, {useEffect, useState, useMemo} from 'react';
import Form from 'react-bootstrap/Form';
import FormHelper from './FormHelper';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import PositionDescriptions from './PositionDescriptions';

function Apply() {
  const standingOptions = useMemo(() => [
    {value: "default", text: "Select your class standing"},
    {value: "Freshman", text: "Freshman"},
    {value: "Sophomore", text: "Sophomore"},
    {value: "Junior", text: "Junior"},
    {value: "Senior", text: "Senior"},
    {value: "Graduate", text: "Graduate"},
  ], []);
  const positionOptions = useMemo(() => [
    {value: "default", text: "Select your preferred position"},
    {value: "EO", text: "Event Organization"},
    {value: "Inventory", text: "Inventory & Logistics"},
    {value: "CM", text: "Creativity Management"},
    {value: "Sponsorship", text: "Sponsorship"},
    {value: "Treasury", text: "Treasury"},
    {value: "MarCom", text: "Marketing Communication"},
    {value: "Design", text: "Documentation & Design"},
    {value: "WebDev", text: "Web Development"},
  ], []);

  const [appContent, setAppContent] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailUW: "",
    emailPersonal: "",
    major: "",
    standing: "",
    firstChoice: "",
    secondChoice: "",
    thirdChoice: "",
    strengthsWeaknesses: "",
    pastExperiences: "",
    whyISAUW: "",
    resume: ""
  });
  const handleChange = (e) => {
    setAppContent({...appContent, [e.target.name]: e.target.value});
  }

  const [resumeFile, setResumeFile] = useState(null);
  const handleFile = (e) => {
    const fileObj = e.target.files && e.target.files[0];
    if (fileObj) {
      setResumeFile(fileObj);
      if (validated) { // validated and file is uploaded
        // set upload button color to green, and add check mark
        const color = window.getComputedStyle(document.getElementById("resume")).borderColor;
        document.getElementById("fakeResume").style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")`;
        document.getElementById("fakeResume").style.backgroundPosition = `right 0.75rem center,center right 2.25rem`;
        document.getElementById("fakeResume").style.backgroundSize = `calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)`;
        document.getElementById("fakeResume").style.backgroundRepeat = `no-repeat`;
        document.getElementById("fakeResume").style.borderColor = color;
        document.getElementById("fakeResumeText").style.color = color;
      }
    }
  }

  const [options1, setOptions1] = useState(positionOptions);
  const [options2, setOptions2] = useState(positionOptions);
  const [options3, setOptions3] = useState(positionOptions);
  const [showPortfolio, setShowPortfolio] = useState(false);
  // remove concurrently selected options from the options list, and show portfolio message if needed
  useEffect(() => {
    setOptions1(positionOptions.filter((option) => option.value !== appContent.secondChoice).filter((option) => option.value !== appContent.thirdChoice));
    setOptions2(positionOptions.filter((option) => option.value !== appContent.firstChoice).filter((option) => option.value !== appContent.thirdChoice));
    setOptions3(positionOptions.filter((option) => option.value !== appContent.firstChoice).filter((option) => option.value !== appContent.secondChoice));

    const set = new Set();
    set.add(appContent.firstChoice);
    set.add(appContent.secondChoice);
    set.add(appContent.thirdChoice);

    if (set.has("CM") || set.has("Design")) {
      setShowPortfolio(true);
    } else {
      setShowPortfolio(false);
    }
  }, [appContent.firstChoice, appContent.secondChoice, appContent.thirdChoice, positionOptions]);

  const [validated, setValidated] = useState(false);
  const {firstName, lastName, phoneNumber, emailUW, emailPersonal, major, standing, firstChoice, secondChoice, thirdChoice, strengthsWeaknesses, pastExperiences, whyISAUW} = appContent;
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
    e.preventDefault();
    setLoadingSpinner(true);

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('phoneNumber', phoneNumber);
    formData.append('personalEmail', emailPersonal);
    formData.append('uwEmail', emailUW);
    formData.append('major', major);
    formData.append('standing', standing);
    formData.append('choice1', firstChoice);
    formData.append('choice2', secondChoice);
    formData.append('choice3', thirdChoice);
    formData.append('strengthsWeaknesses', strengthsWeaknesses);
    formData.append('pastExperiences', pastExperiences);
    formData.append('whyISAUW', whyISAUW);

    const reader = new FileReader();
    reader.readAsDataURL(resumeFile);
    reader.onload = function (e) {
      const rawLog = reader.result.split(',')[1];
      var dataSend = {
        dataReq: {
          data: rawLog,
          name: resumeFile.name,
          type: resumeFile.type
        },
        fname: "uploadFilesToGoogleDrive"
      };

      // upload to Google Drive
      fetch('https://script.google.com/macros/s/AKfycbzS7gM0878oabxpLc1eB442C90L3-DJANDxDIpVD3w77i9oLtPfJxcyG9vjwoP_gr8T/exec', {method: 'POST', body: JSON.stringify(dataSend)})
        .then(res => res.json()).then((a) => {
          console.log(a);
          formData.append('resume', a.url);

          // update Google Sheets
          fetch('https://script.google.com/macros/s/AKfycbzCwqJl0_tfZrPQsVyYmCWfjmpfLwXkJwK9VW4ihZBmIGoZnWv01nais7SNnWeKya4/exec', {method: 'POST', body: formData})
            .then(response => {
              console.log('Success', response);
              setLoadingSpinner(false);
              setShowThankYou(true);
            });
        }).catch(error => console.error('Error', error.message));
    }
  }

  // show styling validation on the upload resume button
  useEffect(() => {
    if (validated) {
      const color = window.getComputedStyle(document.getElementById("resume")).borderColor;
      if (color === 'rgb(25, 135, 84)') { // if color is green, show check mark
        document.getElementById("fakeResume").style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")`;
      } else { // else show warning icon
        document.getElementById("fakeResume").style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")`;
      }
      document.getElementById("fakeResume").style.backgroundSize = `calc(.75em + .375rem) calc(.75em + .375rem)`;
      document.getElementById("fakeResume").style.backgroundPosition = `right 0.75rem center,center right 2.25rem`;
      document.getElementById("fakeResume").style.backgroundRepeat = `no-repeat`;
      document.getElementById("fakeResume").style.borderColor = color;
      document.getElementById("fakeResumeText").style.color = color;
    }
  }, [validated]);

  const [showThankYou, setShowThankYou] = useState(false);
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  return (
    <div style={{fontSize: "14px"}}>
      <div className="navbar-overlay" style={{position: "relative"}}>
        <img
          className="d-block w-100"
          src="../images/officers/isauw-group.jpg"
          alt=""
          style={{height: "calc(50vh + 10vw)"}}
        />
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} className="my-5">
            <div>
              <h1><strong>'22-'23 ISAUW Officer Application</strong></h1>
              <p style={{fontSize: "14px"}}>
                We are thrilled to welcome new members to ISAUW this year!
                Please fill in the form below to apply.
                Selected applicants will be contacted for an interview.
              </p>
              <p style={{fontSize: "14px"}}>
                Reach out to us on Instagram @isauwhuskies or email us at isauw@uw.edu for any questions.
              </p>
              <p style={{fontSize: "14px"}}><strong style={{fontSize: "14px"}}>Requirement:</strong> Currently enrolled as a UW student.</p>
            </div>

            <Form noValidate validated={validated} onSubmit={submitForm} className="mx-auto" style={{display: "flex", flexDirection: "column"}}>
              <section className="my-3">
                <h1><strong style={{fontSize: `calc(0.8vw + 20px)`}}>Personal Information</strong></h1>
                <div className="row">
                  <div className="col-6" style={{paddingRight: "6px"}}>
                    <FormHelper name="firstName" label="First Name" datatype="text" handleChange={handleChange} feedback="Please enter your first name" />
                  </div>
                  <div className="col-6" style={{paddingLeft: "6px"}}>
                    <FormHelper name="lastName" label="Last Name" datatype="text" handleChange={handleChange} feedback="Please enter your last name" />
                  </div>
                </div>
                <FormHelper name="phoneNumber" label="US Phone Number" datatype="tel" handleChange={handleChange} feedback="Please enter a valid US phone number" pattern="[\(]\d{3}[\)] \d{3}[\-]\d{4}" />
                <FormHelper name="emailPersonal" label="Personal Email" datatype="email" handleChange={handleChange} feedback="Please enter a valid email address" />
                <FormHelper name="emailUW" label="UW Email" datatype="email" handleChange={handleChange} feedback="Please enter a valid UW email address" pattern="^\w+@uw.edu" />
                <FormHelper name="major" label="Major/Intended Major" datatype="text" handleChange={handleChange} feedback="Please enter a valid major" />
                <FormHelper name="standing" label="Class Standing" type="select" options={standingOptions} handleChange={handleChange} />

                {/* Wrapper to hide file input with custom button */}
                {/* TODO: Add validation */}
                <div>
                  <Row>
                    <Row>
                      <Col xs={4}>
                        <label id="fakeResume" class="btn" for="resume" style={{fontSize: "14px", fontWeight: "300", textTransform: "none", margin: "0", width: "100%", boxShadow: "none", border: "1px solid #ced4da"}}>
                          Upload Resume
                          <FormHelper name="resume" type="file" accept=".doc,.docx,application/pdf" handleChange={handleFile} />
                        </label>
                      </Col>
                      <Col className="col-md-auto" style={{margin: "auto 0", padding: "0"}}>
                        <span id="fakeResumeText" style={{fontSize: "14px"}}>{resumeFile ? resumeFile.name : "No file selected."}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p style={{fontSize: "12px", margin: "8px 0 0", padding: "0", textAlign: "center"}}>DOC, DOCX, PDF</p>
                      </Col>
                    </Row>
                  </Row>
                </div>

              </section>

              <section className="my-3" >
                <h1><strong style={{fontSize: `calc(0.8vw + 20px)`}}>Rank Your Positions</strong></h1>
                <PositionDescriptions />
                <FormHelper name="firstChoice" label="First Choice" type="select" options={options1} value={appContent.firstChoice} handleChange={handleChange} />
                <FormHelper name="secondChoice" label="Second Choice" type="select" options={options2} value={appContent.secondChoice} handleChange={handleChange} />
                <FormHelper name="thirdChoice" label="Third Choice" type="select" options={options3} value={appContent.thirdChoice} handleChange={handleChange} />

                {showPortfolio &&
                  <span style={{color: "rgba(129, 27, 20, 1.0)"}}>
                    You have indicated that you are applying for the position of Creativity Management and/or Documentation & Design.
                    Please be sure to bring your portfolio should you be contacted for an intervew.
                  </span>
                }
              </section>

              <section className="my-3" >
                <h1><strong style={{fontSize: `calc(0.8vw + 20px)`}}>More About You</strong></h1>
                <FormHelper name="strengthsWeaknesses" label="What are your strengths and weaknesses? 2 each and why." type="textarea" rows="5" handleChange={handleChange} />
                <FormHelper name="pastExperiences" label="What past experiences could you bring to ISAUW?" type="textarea" rows="5" handleChange={handleChange} />
                <FormHelper name="whyISAUW" label="Why do you want to join ISAUW?" type="textarea" rows="5" handleChange={handleChange} />
              </section>

              <button type="submit" className="btn btn-dark" style={{width: "60%", textTransform: "none", fontSize: `calc(14px + 0.1vw)`, fontWeight: "600", height: "50px", alignSelf: "center"}}>
                {loadingSpinner ? <Spinner animation="border" style={{width: "1.5rem", height: "1.5rem"}}></Spinner> : "Submit"}
              </button>
            </Form>
          </Col>
        </Row>

        <Modal
          show={showThankYou}
          onHide={() => setShowThankYou(false)}
          backdrop="static"
          keyboard={false}
          centered
          size="lg"
        >
          {/* redirects to home ("/") within 5 seconds of the modal rendering */}
          <meta http-equiv="refresh" content="5;url=/" />
          <Modal.Header>
            <Modal.Title>We appreciate your time.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Thank you for applying. We will get back to you regarding the status of your application.
            <br />
            You will be automatically redirected to the home page in 5 seconds.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" href="/" style={{textTransform: "none"}}>Back to Home</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div >
  );
}
export default Apply;