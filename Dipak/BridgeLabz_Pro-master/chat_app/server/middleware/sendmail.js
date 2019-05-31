/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    - sendmail.js
 *@author  - Dipak Patil
 *@version - 1.0
 *@since   - 25/05/2019
 **************************************************************************************************/
const nodemailer = require('nodemailer');
exports.sendEmailFunction = (url,email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        },
    });
    const mailOptions = {
<<<<<<< HEAD
        from: 'patildipak363@gmail.com',
=======
        from:' patildipak363@gmail.com',
>>>>>>> d757c37f89567705041b3c76f9904fc5ee311341
        to: email,
        subject: 'Chat-app password reset link ',
        text: 'Click on the link provided to reset your password:\n\n' + url
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("Invalid username or password");
            console.log("ERROR: while sending the mail", err)
        }
        else
            console.log('Information regarding the mail sent', info);
    });
}
