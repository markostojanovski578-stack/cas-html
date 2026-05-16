const fs = require ("fs");


const getAnaliza = async (req, res) => {
    try {
        const form = await parseTemplate("analiza-form");
        return res.status(200).send(form);
    } catch (err) {
        return res.status(500).send("Internal server error")

    }
};

const postAnaliza = async (req, res) => {
    try {
        const {text} = req.body; // ili samo req.body.text
        
        if (!text || text.trim() === "") {
            return res.status(400).send("Bad request");
        };
       

        const brojkiNaKarakteri = text.length;
        const words = text.trim().split(/\s+/);
        const brojNaZborovi = words.length;


        let pomaliOdPet = 0;
        let pogolemiOdPet = 0;
        let ednakviNaPet = 0
        let pocnuvaatNaSamoglaski = 0;

       const samoglaski = ["а", "е", "и", "о", "у"];

        words.forEach((word)=> {
            const cleanWord = word.toLowerCase();

            if (cleanWord.length < 5) pomaliOdPet++;
            else if (cleanWord.length > 5) pogolemiOdPet++;
            else ednakviNaPet++;

            if (samoglaski.includes(cleanWord[0])) {
                pocnuvaatNaSamoglaski++;
            }
        });

        const sentences = text.split(/[.!?]+/).filter(s => s.trim() !== "");
        const brojNaRecenici = sentences.length;

        const output = await parseTemplate("analiza", {
            brojkiNaKarakteri,
            pomaliOdPet,
            pogolemiOdPet,
            ednakviNaPet,
            brojNaRecenici,
            brojNaZborovi,
            pocnuvaatNaSamoglaski
        });

       return res.status(200).send(output);

    } catch(err) {
        return res.status(500).send("Internal Server Error");
    }
    
};

const parseTemplate = async (template, data = null) => {
    return new Promise ((resolve, reject) => {
        const path = `${__dirname}/../views/${template}.html`;

        fs.readFile(path, "utf-8", (err, content) => {
            if (err) reject (err);

            if (data) {
                for (const key in data) {
                    content = content.replace(`{{${key}}}`, data[key]);
                }
            }
            resolve(content);
        });
    });
};

module.exports = {
    getAnaliza,
  postAnaliza,
}