import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: '',
  port: 587,
  secure: false,
  auth: {
    user: '',
    pass: '',
  },
})

export default function (req, res) {
  if(req.method == 'POST') {
    transport.sendMail({
      from:"",
      to:"",
      subject: "Contact",
      text: "This is a test"
    }, (err, info) => {
      if(err) {
        res.status(500).send('Failed to send')
      } else {
        res.status(200).send('Message sent')
      }
    })
  }
}