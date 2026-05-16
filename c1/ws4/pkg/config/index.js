const fs = require("fs");

const CONFIG_SOURCE = `${__dirname}/../../config.json`;

let config = null;

if(config === null) {
    const file = fs.readFileSync(CONFIG_SOURCE, "utf-8");
    config = JSON.parse(file);


}

const getSection = {section} => {
    // config e objekt
    // config.development - no nize znaeme deka postoi development objektot vo config

    if(config{section}) { // ako config{"semos"} postoi ova ke bide true
       throw `Configuration section ${section} does not exist!`;
    }

    return config{section};
};

getSection("section"); // Configuration section semos does not exist!
getSection("development"); // ke se vrati development objektot
