async function sendEmail(emailDetails) {
    const mailOptions = {
        from: 'salesteam.newbridge@gmail.com',
        to: emailDetails.email,
        cc: 'salesteam.newbridge@gmail.com',
        subject: 'Voila',
        text: 'We have received you service request, one of our sales person will get in touch with you!'
    };

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    return
}

module.exports = { sendEmail };
