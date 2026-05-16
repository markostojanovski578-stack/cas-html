const mongoose = require("mongoose");

const {getSection} = require("../config/index");

const MONGO_USERNAME = getSection("development").MONGO_USERNAME;
const MONGO_PASSWORD = getSection("development").MONGO_PASSWORD;


const URI = 