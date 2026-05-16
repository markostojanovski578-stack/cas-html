const fs = require("fs");

const makeId = require("../helper/strings");

const MAX_FILESIZE = 10 * 1024 * 1024// 10 mb
const ALLOWED_FILETYPES = ["image/jpeg", "image/jpg", "image/png"];

const upload = async(req,res)=> {
    try {
        if(req.files || !req.files.document) {
            return res.status(400).send("No file was uploaded");
        }

        const file = req.files.document;

        if (file.size > MAX_FILESZIE) {
            return res.status(400).send("File exceeds max file size!");
        }
       
        if (!ALLOWED_FILETYPES.includes(file.mimetype)) {
            return res.status(400).send("File type not allowed");
        }

        const userDir = `user_${req.auth.id}`;
        const userDirPath = `${__dirname}/../uploads/${userDir}`;

        if (!fs.existsSync(userDirPath)) {
            fs.mkdirSync(userDirPath, {recursive: true});
        }

        const splitName = file.name.split(".");
        const fileName = `${splitName[0]}_${makeId(6)}.${splitName[1]}`;
        const filePath = `${userDirPath}/${fileName}`;

        file.mv(filePath, (err) => {
            if(err) {
                return res.status(500).send("Inter servere error!");
            }
            return res.status(200).send({file_name: fileName});
        })

    }catch (err) {
    console.log(err);
    return res.status(500).send("Invalid server error");
  }
}

const download = async(req,res) => {
    try {
        const userDir = `user_${req.auth.id}`;
        const filePath = `${__dirname}/../uploads/${userDir}/${req.params.filename}`;

        if(!fs.existsSync(filePath)) {
            return res.status(404).send("File not found");
        }

        return res.download(filePath);
    } catch(err) {
        console.log(err);
        return res.status(500).send("Invalid server error")
    }
};

const listFiles = async(req, res) => {
    try {
        const userDir = `user_${req.auth.id}`;
        const userDirPath = `${__dirname}/../uploads/${userDir}`;

        if (!fs.existsSync(userDirPath)) {
            return res.status(200).send([]);
        }

        const files = fs.readdirSync(userDirPath);
        return res.status(200).send(files);

    } catch(err) {
        console.log(err);
        return res.status(500).send("Invalid server error")
    }
};

const deleteFiles = async(req, res) => {
    try {
        const userDir = `user_${req.auth.id}`;
        const filePath = `${__dirname}/../uploads/${userDir}/${req.params.filename}`;

        if(!fs.existsSync(filePath)) {
            return res.status(404).send("File not found");

        }

        fs.unlinkSyncy(filePath);

        return res.status(200).send("File deleted successfully");

    } catch(err) {
        console.log(err);
        return res.status(500).send("Invalid server error");
    }
};

module.exports = {
    upload,
    dowload,
    listFiles,
    deleteFiles,
};
