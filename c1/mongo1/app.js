
const dns = require ("node:dns/promises"); 
dns.setServers(["1.1.1.1"]);
const mongoose = require("mongoose");
const UserModel = require("./users");



const URI = "mongodb+srv://markostojanovski001:marko123123123@cluster0.3bszln3.mongodb.net/test?appName=Cluster0";
const connectDb = () => {
    try {
      mongoose.connect(URI);
      console.log("connected");
    } catch(err) {
        console.log(err)
    }
}

connectDb();

const main = async() => {
    // Create
    const newUser = new UserModel({
        name: "John",
    age: 20,
    email: "john@email.com",
    hobbies: ["Reading", "Cycling"],
    address: {
        street: "Street X",
        city: "Gotham",
    },
    })

    await newUser.save();



    //Read

    const foundUser = await UserModel.findOne({ name: "John"});
    console.log("Found user:" , foundUser)
    //Update

    const updateUser = await  UserModel.updateOne(
        {_id: "69cec003c6aa5e765247aad1"},
        { age: 21 },
    );

    console.log("updated user", updateUser);

    //Delete

    
};


main();


