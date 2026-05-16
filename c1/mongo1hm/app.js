const dns = require ("node:dns/promises"); 
dns.setServers(["1.1.1.1"]);
const mongoose = require("mongoose");
const StudentModel = require("./students")

const URI = "mongodb+srv://markostojanovski001:marko123123123@cluster0.3bszln3.mongodb.net/studenti?appName=Cluster0";

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Connected to DB");
    } catch (err) {
        console.log(err)
    };
}; 

const main = async () => {
    console.log("START");

  await connectDb();

  console.log("AFTER CONNECT");

  console.log("App is running...");

  try {
    const students = await StudentModel.find();
    console.log("DATA:", students);
  } catch (err) {
    console.log("QUERY ERROR:", err);
  }

  console.log("END");

    //1. Kreirame student
    await StudentModel.create({
        ime: "Petar",
    prezime: "Petrovski",
    prosek: 7.9,
    grad: "Skopje",
    godini: 22,
    fakultet: "FINKI",
    nasoka: "Mrezno inzenjerstvo",
    predmeti: ["Mrezi", "Operativni sistemi"],
    stipendija: false,
    });
    
    //2. Kreirame povekje studenti so insertMany
    await StudentModel.insertMany([
    {
      ime: "Sara",
      prezime: "Janevska",
      prosek: 9.2,
      grad: "Tetovo",
      godini: 20,
      fakultet: "FINKI",
      nasoka: "Softversko",
      predmeti: ["JS", "Web"],
      stipendija: true,
    },
    {
      ime: "Luka",
      prezime: "Georgiev",
      prosek: 8.3,
      grad: "Bitola",
      godini: 21,
      fakultet: "Tehnicki",
      nasoka: "Elektrotehnika",
      predmeti: ["Elektronika", "Matematika"],
      stipendija: false,
    },
  ]);
    
    //3. Prochitaj gi site studenti
    const allStudents = await StudentModel.find();
    console.log("All students:", allStudents);

    //4. Prochitaj studenti so prosek > 9
    const topStudents = await StudentModel.find({prosek: {$gt: 9}});
    console.log("Top students: ", topStudents);

    //5. Prochitaj studenti od Skopje
    const skopjeStudents = await StudentModel.find({grad: "Skopje"});
    console.log("Skopje students:", skopjeStudents);

    //6. Prochitaj studenti sho se na finki i imaat stipendija
    const finkiScholars = await StudentModel.find({
        $and: [{fakultet: "FINKI"}, {stipendija: true}]
    });
    
    //7. Da ni prochita studenti od skopje ili bitola so $or
    const cities = await StudentModel.find({
        $or: [{grad: "Skopje"}, {grad: "Bitola"}]
    });

    //8. Prochitaj studenti so bez stipendija so not operator
    const noScholarship = await StudentModel.find({stipendija: {$ne: true}});
    console.log("Students without scholarship", noScholarship);

    //9. Promena na prosek so updateOne
    await StudentModel.updateOne({ime: "Ana"}, {$set: {prosek: 9.6}});

    //10. Update na site studenti od skopje so updateMany
    await StudentModel.updateMany({grad: "Skopje"}, {$set: {grad: "SKOPJE"}});

    //11. Update na predmet
    await StudentModel.updateOne(
        {ime: "Marko"},
        {$push: {predmeti: "Programiranje 2"}}
    );

    //12. Brishenje na studenti
    await StudentModel.deleteOne({ime: "Stefan"});

    //13. Brishenje na studenti so prosek pod 8 
    await StudentModel.deleteMany({prosek: {$lt: 8}});

    console.log("All 13 calls executed successfully");
};

main();