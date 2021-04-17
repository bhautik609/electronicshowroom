var email = require("emailjs");
var emailsend = {
    sendMail: function (emailsend, callback) {
        console.log("inside mail");

        var server = email.server.connect({
            service:'gmail',
            user: 'giftvilla2020@gmail.com',
            host: 'smtp.gmail.com',
            ssl: true,
            port: 465
        });
        server.send({
            text: emailsend.message,
            from: 'giftvilla2020@gmail.com',
            to: emailsend.name,
            subject: emailsend.subject
        }, callback);
    }

}
module.exports = emailsend;