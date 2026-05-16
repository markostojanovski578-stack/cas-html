const express = require("express");

const connectDB = require("./pkg/db/config");
connectDB();
const {getSection} = require("./pkg/db/index");
const { expressjwt } = require("express-jwt");

const app = express();

app.use(express.json());

app.use(
    expressjwt({
        secret: getSection('development').jwt_secret,
        algorithms: ["HS256"]
    })
)

app.post("/auth/login", login);

app.listen(getSection("development").port, () => console.log(`Server started at port $(getSection("development).port)`));


