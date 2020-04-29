const nodemailer = require('nodemailer');


// async..await is not allowed in global scope, must use a wrapper
function transporter(targetmail, mail) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport

    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport({
            pool: true,
            host: 'smtp.ionos.de',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_ADRESS,
                pass: process.env.MAIL_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        if (!transporter) reject("failed to connect to your SMTP account")
        // send mail with defined transport object
        transporter.sendMail({
            from: 'monkey@baizuo.online', // sender address
            to: targetmail, // list of receivers
            subject: mail.subject, // Subject line
            text: mail.text || "",
            html: mail.html || ""
        }, (error, response) => {
            if (error) {
                console.log("failed sending to: " + targetmail)
                reject("failed to send mail")
            }
            resolve(response);
        });


    })


}


module.exports = transporter;