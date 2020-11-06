import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.EMAIL_API_KEY)

export default function (req, res) {
  if(req.method == 'POST') {
    const msg = {
      to: 'it@aesir.se',
      from: 'it@aesir.se',
      subject: `Website message: ${req.body.name} : ${req.body.email}`,
      text: req.body.message,
    }
    sgMail.send(msg)
      .then(() => res.status(200).end())
      .catch(() => res.status(200).end())
  }
}