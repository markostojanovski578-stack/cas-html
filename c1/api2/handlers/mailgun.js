const { sendMail } = require("../pkg/mailer")
const { validate , MailgunFieldsWelcome, MailgunFieldsPassword } = require("../pkg/mailer/validate")

const sendWelcomeMail = async(req, res) => {
    try {
        await validate(req.body, MailgunFieldsWelcome); 
        const result = await sendMail(req.body.to, "WELCOME", req.body.message);
        // req.body.message = { first_name,last_name,email}
        return res.status(200).send(result);
    } catch(err) {
        console.error(err);
        return res.status(500).send("Internal server error");
    }
}

const sendPasswordResetMail = async(req, res) => {
    try {
        await validate(req.body, MailgunFieldsPassword);  
        const result = await sendMail(req.body,PASSWORD_TEMPLATE, req.body.message);

        return res.status(200).send(result);

    } catch(err) {
        console.error(err);
        return res.status(500).send("Internal server error");
    }
}

module.exports = {
    sendWelcomeEmail,
    sendPasswordResetMail,
}