const moongose = require("mongoose");

const {MONGODB_USERNAME,
     MONGODB_PASSWORD, 
     MONGODB_CLUSTER, 
     MONGODB_DB_NAME,
    MONGODB_OPTIONS,
} = process.env;

const URI= "mongodb+srv://markostojanovski001:marko123123123@cluster0.3bszln3.mongodb.net/?appName=Cluster0";


const connectDb = async () => {
    try {
        mongoose.connect(URI)
        console.log("MongoDB connected")
    } catch(err) {
       console.log(err)
    }
}