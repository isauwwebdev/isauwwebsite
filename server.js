const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const bodyParser = require('body-parser')

// TODO: these IDs and secrets should come from a .env file.
const CLIENT_ID = '872495884254-dfijj5j631d0i60cdu47m4uv960uode6.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//048oEQ-2a7ph1CgYIARAAGAQSNgF-L9IrYr-q8SmKzw82BtUGtZlOErfKk9gAug1w2UeFNrZHJJrs_wKj2Xvodo9eSFHFv-mIiw';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}`));

const jsonParser = bodyParser.json()

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(mail) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'isauw@uw.edu',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const result = await transport.sendMail(mail);
    return result;
  } catch (error) {
    return error;
  }
}

app.post('/send', jsonParser, (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const mail = {
    from: name,
    to: email,
    subject: 'Order',
    text: message,
    html: '<h1>Hello from gmail email using API</h1>',
  }

  sendMail(mail);
})