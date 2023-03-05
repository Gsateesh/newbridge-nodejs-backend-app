const nodemailer = require('nodemailer');
const ServiceModel = require('../models/model.service');
const addService = async (request, response) => {
    let incomingService = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        companyName: request.body.companyName,
        email: request.body.email,
        phoneNumber: request.body.phoneNumber,
        message: request.body.message,
        createdOn: request.body.createdOn,
    }
    const dataToStore = new ServiceModel(incomingService);
    dataToStore.save().then(
        res => {
            const mailOptions = {
                from: 'salesteam.newbridge@gmail.com',
                to: incomingService.email,
                cc: 'salesteam.newbridge@gmail.com',
                subject: 'Voila',
                html: `
                <table>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                <tr>
                    <td>Name</td>
                    <td>${request.body.firstName} &nbsp; ${request.body.lastName}</td>
                </tr>
                <tr>
                    <td>Company Name</td>
                    <td>${request.body.companyName}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>${request.body.email}</td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td>${request.body.phoneNumber}</td>
                </tr>
                <tr>
                    <td>Message</td>
                    <td>${request.body.message}</td>
                </tr>
                <tr>
                    <td>Requested On</td>
                    <td>${request.body.createdOn}</td>
                </tr>
                </table>

                <b>We have received you service request, one of our sales person will get in touch with you soon!</b> <br>
                Of course, you can replay to this email anytime for more help.
                `
            };
            var transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'salesteam.newbridge@gmail.com',
                    pass: 'bzmnneojomdbqsvs'
                }
            });
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    response.status(500).json(
                        {
                            message: 'Something went wrong.'
                        }
                    )
                } else {
                    response.status(201).json(
                        {
                            message: 'Thank for contacting us. We have received the request details, will get in touch with you soon! You can check your email inbox for our confirmation.'
                        }
                    )
                }
            });

            // response.status(201).json(
            //     {
            //         message: 'Thank for contacting us. We have received the request details, will get in touch with you soon!'
            //     }
            // )
        }

    ).catch(error => {
        if (error) {
            console.log("error", error);
            response.status(500).json(
                {
                    message: 'Something went wrong. Please try again later.'
                }
            )
        }
    })
}
module.exports = { addService };
