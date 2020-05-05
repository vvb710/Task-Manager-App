const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vvb710@outlook.com',
        subject: 'Thanks for joining!!!',
        text: `Hi ${name}, Welocme to the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vvb710@outlook.com',
        subject: 'Sorry to see you go!!!',
        text: `GoodBye ${name}. I hope to see you again soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

