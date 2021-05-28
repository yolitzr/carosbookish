import express from 'express';
import Mailchimp from 'mailchimp-api-v3';

const API_KEY = process.env.MAILCHIMP_API_KEY || '7ae9578dfdbe679809ca8d67191fb8fe-us19'
const AUDIENCE_ID = process.env.MAILCHIMP_LIST_ID || '7b93d52554';
const mailchimp = new Mailchimp(API_KEY);

const app = express();
app.use(express.json());

app.post('/subscribe', async(req, res) => {
  const { email: email_address } = req.body;
  const { name: FNAME } = req.body;

  try {
    const response = await mailchimp.request({
      method: 'post',
      path: `/lists/${AUDIENCE_ID}/members`,
      body: {
        email_address,
        status: "subscribed",
        merge_fields: {
          FNAME,
        }
      }
    })
    res.status(response.statusCode).json(response.status);
  } catch(error) {
    res.status(error.status).send(error)
  }
})

module.exports = app