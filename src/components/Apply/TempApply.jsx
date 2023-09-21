// code for personal information section:

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
      <Col xs={7} sm={6} md={5} lg={4}>
        <label id="fakeResume" class="btn" for="resume" style={{fontSize: "14px", fontWeight: "300", textTransform: "none", margin: "0", width: "100%", boxShadow: "none", border: "1px solid #ced4da"}}>
          Upload Resume
          <FormHelper name="resume" type="file" accept=".doc,.docx,application/pdf" handleChange={handleFile} />
        </label>
      </Col>
      <Col xs={5} sm={6} md={7} lg={8} style={{margin: "auto 0", padding: "0", overflow: "hidden", textOverflow: "ellipsis"}}>
        <span id="fakeResumeText" style={{fontSize: "14px"}}>{resumeFile ? resumeFile.name : "No file selected."}</span>
      </Col>
    </Row>
    <Row>
      <Col xs={7} sm={6} md={5} lg={4}>
        <p style={{fontSize: "12px", margin: "8px 0 0", padding: "0", textAlign: "center"}}>DOC, DOCX, PDF</p>
      </Col>
    </Row>
  </Row>
</div>

</section>