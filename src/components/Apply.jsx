import React, { useState, useEffect } from 'react';
// import FileUploaded from './FileUploaded';
import Carousel from 'react-bootstrap/Carousel';


function Apply() {
// gdrive client ID: 799175424998-b3j32lo9hpli5lkc3e886d9lft6vicmg.apps.googleusercontent.com
// gdrive client secret: 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
  const [info, setInfo] = useState({
      name: "",
      phoneNumber: "",
      email: "",
      major: "",
      year: "",
      strengths: "",
      past: "",
      c1:"",
      c2:"",
      c3:"",
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
  const[resume, setResume] = useState(null);
  const[link, setLink] = useState("");

  const {name, phoneNumber, email, major, year, strengths, past, c1, c2, c3} = info;

  const handleChange = (event) => {
      setInfo({ ...info, [event.target.name]: event.target.value });
  }

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);


const handleFile = (e) =>{
  const fileObj = e.target.files && e.target.files[0];
    if (!fileObj) {
      return;
    }
    console.log('fileObj is', fileObj);

    setResume(fileObj)
    console.log(e.target.files[0])
    uploadFile(e);
}

    const uploadFile = (e) => {
      let file = resume
      let reader = new FileReader()
      try{
        reader.readAsDataURL(file)
      }catch(err){
        alert("file failed to upload")
        e.target.value = null;
      }

      reader.onload = function(e){
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

const submitForm = async (e) => {
  delay(10000);
};

  return (
    <div>
    <div className="navbar-overlay" style={{position: "relative"}}>
      <img
        className="d-block w-100"
        src="../images/officers/isauw-group.jpg"
        alt=""
        style={{height: "calc(50vh + 10vw)"}}
      />
      <Carousel.Caption style={{top: "40%", bottom: "60%"}} className="animated fadeInUp">
        <h1 className="carousel-title" style={{zIndex: "100", fontFamily: "brandon_grotesque, sans-serif", fontWeight: "400", color:"red"}}>Your Journey at ISAUW starts here!!!</h1>
      </Carousel.Caption>    </div>

      <form
      className="apply-form"
      method="POST"
      action="https://script.google.com/macros/s/AKfycbzCwqJl0_tfZrPQsVyYmCWfjmpfLwXkJwK9VW4ihZBmIGoZnWv01nais7SNnWeKya4/exec"
      >
        <h3> Apply form </h3>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="on"
            required
           />
        </label>
        <br/>
        <label>
          Phone:
          <input
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            international = {false}
            onChange={handleChange}
            autoComplete="on"
            defaultCountry={'US'}
            countries={["NG", "MG", "SC", "KM", "BW", "MR"]}
            required
           />
        </label>
        <br/>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="on"
            required
           />
        </label>
        <br />
        <label>
          Major:
          <input
            type="text"
            name="major"
            value={major}
            onChange={handleChange}
            autoComplete="on"
            required
           />
        </label>
        <br />
        <label>
        Current Year:
          <select name="year" value={year} onChange={handleChange}>
            <option value="freshman">Freshman</option>
            <option value="sophomore">Sophomore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </select>
        </label>
        <br />
          From most to least priority, list up to 3 positions that you are most interested in and explain why.
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
          Resume:
          <br />
          <input type="file" name="resume" onChange={(e)=>{
            handleFile(e)
          }
        }/>
        <br/>
        <label>
          What would you say are your strengths and weaknesses?
          <br />
          <textarea
          type="text"
          name="strengths"
          value={strengths}
          onChange={handleChange}
          required
          />
        </label>
        <br />
        <label>
          Describe a past experience that you think will help you contribute to ISAUW.
          <br />
          <textarea
          type="text"
          name="past"
          value={past}
          onChange={handleChange}
          required
          />
        </label>
        <br />

        <input type="hidden" name="link"  value={link}/>
          <br />
          <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
}
export default Apply;
