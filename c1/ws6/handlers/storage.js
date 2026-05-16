const fs = require("fs");
const makeId = require("../helper/strings");

const MAX_FILESIZE = 10 * 1024 * 1024;
const ALLOWED_FILETYPES = ['image/jpeg','image/jpng','image/png'];


const upload = async(req,res) => {
    console.log('files',req.files);
    //slika01.png
    // da ja smestime vo uploads/user_1/timeline_0121.png

    if(!req.files) {
        return res.status(400).send("No file was uploaded");


    }

    if(MAX_FILESIZE < req.files.document.size) {
        return res.status(400).send("FIle exceeds max file size")
    }

    if(!ALLOWED_FILETYPES.includes(req.file.document.mimetype)) {
        return res.status(400).send("File type not allowed")
    }

    const userDir = `user_${req.auth.id}`;
    const userDirPath = `${__dirname}/../uploads/${userDir}`;

    if(!fs.existsSync(userDirPath)) {
        fs.mkdirSync(userDirPath)
    }

    const newFileName = req.files.document.name.split('.');

    const fileName = `${newFileName[0]}_${makeId(6)}.${newFileName[1]};`
    const filePath = `${userDirPath}/${fileName}`;
};


const download = async(req,res) => {};