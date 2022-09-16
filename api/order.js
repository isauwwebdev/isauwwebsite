const nodemailer = require('nodemailer');
const {google} = require('googleapis');

// TODO: these IDs and secrets should come from a .env file.
const CLIENT_ID = '872495884254-dfijj5j631d0i60cdu47m4uv960uode6.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//048oEQ-2a7ph1CgYIARAAGAQSNgF-L9IrYr-q8SmKzw82BtUGtZlOErfKk9gAug1w2UeFNrZHJJrs_wKj2Xvodo9eSFHFv-mIiw';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

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

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const {id, email, html} = req.body;

    const mail = {
      from: 'ISAUW',
      to: email,
      subject: `Your Order #${id}`,
      // text: message,
      html: html,
    }

    // for some reason we need to send a response back, otherwise the api call will timeout
    sendMail(mail)
      .then(response => {
        res.json({message: 'success'})
      })
      .catch(error => {
        res.json({message: 'failed'})
      })
  }
}