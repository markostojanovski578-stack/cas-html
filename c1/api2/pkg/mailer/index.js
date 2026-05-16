const fs = require(`fs`);
const formData = require("form-data");

const Mailgun = require("mailgun.js"); // third party

const {getSection} = require("../config"); // lokalen modul
const { get } = require("http");

// constants
const mailgun = new Mailgun(formData);

const mailTemplates = {
    PASSWORD_TEMPLATE: {
        title: "Your password reset link has been generated!",
        template: "reset_password.html",
    },
    WELCOME: {
        title: "Welcome to our website!",
        template: "welcome.html",
    }
};

const sendMail = async (to, type, data) => {
    const mg = mailgun.client({
        username: "api",
        key: getSection("development").api_key,

    })

    const title = mailTemplates[type].title;
    const templatePath = `${__dirname}/../../email_templates/${mailTemplates[type].template}`
    let content = await readTemplate(templatePath);

    for(let kluc in data) {
        // vo podatok se sodrzi: 
        //firs_name: "John",
        //last_name: "Doe"
        //email ili link - john@doe.com, http://test.com
        console.log(`${kluc}`)
        // {{first_name}} -> dinamicno `{{${podatok}}`
        let regex = new RegExp(`\{\{${podatok}\}\}`, "g")
        content = content.replace(reqgex, data[kluc]);
    }

    const options = {
        from: getSection("development").sender_email, //mejlot so koj e napraven nashiot mailgun
        to: to,
        subject: title,
        html: content,
    };

    try{ 
      return await mg.messages.create(getSection("development").domain, options);
    } catch(err) {
        throw(err);
    }
};

const readTemplate = async(filename) => {
    return new Promise((resolve,reject) =>{
        fs.readFile(filename,"utf-8", (err,data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })
}

module.exports = {
    sendMail,
}