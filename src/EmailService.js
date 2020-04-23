// EmailService.js
const nodemailer = require('nodemailer')
const mailgunTransport = require('nodemailer-mailgun-transport')

var api_key = '642eb214bebd650a2c6cb410f5bc0bcf-3fb021d1-2c8e68bc';
var domain = 'www.oldfashioncleaning.org';

// Configure transport options
const mailgunOptions = {
  auth: {
    api_key: '642eb214bebd650a2c6cb410f5bc0bcf-3fb021d1-2c8e68bc',
    domain: 'www.oldfashioncleaning.org',
  }
};
const transport = mailgunTransport(mailgunOptions);
// EmailService
class EmailService {
  constructor() {
    this.emailClient = nodemailer.createTransport(transport)
  }
  sendText(to, from, subject, text) {
    return new Promise((resolve, reject) => {
      this.emailClient.sendMail({
        from,
        to,
        subject,
        text,
      }, (err, info) => {
        if (err) {
          reject(err)
        } else {
          resolve(info)
        }
      })
    })
  }
}
module.exports = new EmailService()
