### Homework 

### app.js

    - Фајлот започнува со стартување на express и еxpressjwt, потоа се поврзуваме со mongoDB 
    со функцијата connectDB.
    - После тоа ја импортираме функцијата getSection(development,live,staging) и исто така ги   импортираме и login и register функциите од handlers/auth
    -Наредно ги импротираме сите event related функции од handlers/event.
    -После тоа креираме express апликација и со express.json овозможуваме парсирање документи од req.body што се во JSON во јава скрипт објекти.
    - Следува app.use expressjwt и со тоа ги обезбедуваме сите рути освен auth login и register,
    кога стига барањето проверува дали токенот е валиден и врз основа да тоа одлучува дали да продолжи со барањето.
    - Наредни се рутите за евентите што веќе знаеме што прават мислам дека нема потреба од објаснување, самообјаснувачки се.
    - И на крај со app listen го отвараме серверот на порта 3000 и го спремаме за да слуша барања.

### handlers/auth.js
   - Овој фајл започнува со земање на bcyrptjs(хеширање/криење пасворди) и jsonwebtoken aka jwt што креира токени.
   - Наредно ги земаме сите account related фунцкии од pkg/account/аccounts - функции за работење со акаунти во DB
   - Наредно ги земаме const {
  create: createOrganization,
  getByName: getOrganizationByName,
  } = require("../pkg/organization/index"); - функции за креирање и земање организации реименувани затоа што претходно беа премногу генерични реименувањето ги специфицира
  - Наредни се 
  getSection - чита вредности како port, jwt secrete,DB credentials
  ValidateSchema - го валидира req.body
  AccountLogin, AccountRegister - правила за валидација

  # LOGIN
  - Следува login фунцкијата, правиме await на validateSchema-та(проверува дали има емаил и пасворд), после тоа правима деструктуирање со const= {email, password} = req.body за да екстракција на информациите. 
  - Наредно со const account = await getByEmail(email); го земаме user-от. и со if (!account) проверуваме дали постои и доколку не постои updateAccount го зголемува logFail бројот само што незнам како ќе го зголеми бројот на logFail коа акаунтот не постои. И на крај праќаме ерор 404.
  - После тоа if (!bcrypt.compareSync(password, account.password))  ги споредува и проверува дали хеширани пасворди се точни, доколку да, продолжува доколку не фрла ерор и го зголемува logFail за 1.
  -Наредно е const = payload ова e javascript објект што содржи информации за некој user како што се username,email,id,etc. 
  - Следува const token = jwt.sign(payload, getSection("development").jwt_secret); - креирање на токен,ја зема датата од payload и ја претвара во JWT token string,јwt_secret ова е клучот за токенот и овој е битен за кога user-от го испраќа назад токенот да се провери дали токенот е вистински.
  - Со await updateAccount(account._id, { logSuccess: account.logSuccess + 1 }); најавува успешно логирање и го зголемува logFail бројот за + 1.
  - return res.status(200).send({ token }); - го испраќа токенот.
  
  # REGISTER
  - const register = async (req, res) => - Креираме регистер фунцкија
  - await validateSchema(req.body, AccountRegister); - го валидираме инпутот
  - const { username, email, password, confirmPassword, organizationName } = req.body; - екстрактираме информации од req.body
  - if (password !== confirmPassword) - Проверува дали пасвордите се идентични, доколку не испраќа ерор
  - const accountExists = await getByEmail(email);
  if (accountExists) - проверува дали акаунт со тој email веќе постои.
  - let organization = await getOrganizationByName(organizationName);

    if (!organization) {
    organization = await createOrganization({ name: organizationName });
    } - проверува дали организацијата постои, доколку да и се придружува,  доколу не креира нова.
    - const account = await createAccount({
        username,
        email,
        password: bcrypt.hashSync(password), - хешираме пасворд, без ова секој што има пристап до DB ќе може да го види.
        organizationId: organization._id, - ИД на организацијата го спојува со акаунтот
      }); - Креира акаунтот.


### handlers/events.js
  - const { validateSchema } = require("../helper/validation"); - валидира req.body, проверува дали датата е точна
  - const {
   get,
   getById,
   create,
   update,
   remove,
   addAttendee,
  } = require("../pkg/event/index");
  const { EventCreate, EventUpdate } = require("../pkg/event/validate"); - функции евенти, прилично самообјаснувачки се.
  - const { EventCreate, EventUpdate } = require("../pkg/event/validate"); - правила за валидација
  # getAllEvents
  - const getAllEvents = async (req, res) - функција за зимање евенти
  - const events = await get(req.auth.organizationId);
    return res.status(200).send(events);-  земи ги евентите само од мојата организација 
  # getEventById
  - const getEventById = async (req, res) => {
     try {
      const { id } = req.params; - земање на ид на евент
      const event = await getById(id, req.auth.organizationId); - дај ми го овој евент само доколку припаѓа на мојата организација, id - ид на евентот, organizationId- проверка на безбедност.
  # createEvent
  - await validateSchema(req.body, EventCreate); - проверува дали датата е валидна
  - const data = {
    ...req.body, - земи се од req.body
    createdBy: req.auth.id,
    organizationId: req.auth.organizationId,
  }; - додава кој го направил евентот и од која организација е.
  # updateEvent 
  - await update(req.params.id, req.auth.organizationId, req.body); - update само доколку припаѓа на мојата организација
  # deleteEvent
  - await remove(req.params.id, req.auth.organizationId); - мора да припаѓа на организацијата за да може да го избрише.
  # joinEvent
  - const { id, attendeeId } = req.params; - ID евентот и ID на тој што се приклучува
    const userId = req.auth.id; - ID на user-от што е моментално логиран.
  - const event = await getById(id, req.auth.organizationId); проверка на дали евентот постои и дали припаѓа на организација
  - if (event.createdBy.toString() !== userId.toString()) {
  return res.status(400).send("You are not the owner of this event!");
  } - само тој што го креирал евентот ќе може да додава attendees.
  - if (event.ticketsAvailable <= event.attendees.length) {
  return res.status(400).send("Not enough tickets!");
  } - проверува дали има доволно карти
  - await addAttendee(id, req.auth.organizationId, attendeeId); - додавање на attendee
  ги става attendees во низа во DB, пример attendees: ["user1", "user2", "user3"].
  - Структурата на евентот
  createdBy: userId
  organization: organizationId
  attendees: ["user1", "user2", "user3"]
  - На крај правиме module export на сите овие.

### helper/validation.js
  - const { Validator } = require("node-input-validator");  - импортираме ноде инпут валидатор библиотека што проверува дали датата е според поставените правила
  - const validateSchema = async (data, schema) =>  data- тоа шо user испратил, schema - правилата на schema(required fields) 
  - const validator = new Validator(data, schema); го креираме валидаторот
  const validationChecker = await validator.check(); - потврдува дали е валидна или инвалидна датата
  - if (!validationChecker) {
      throw {
      code: 400,
      error: "Greska na klient!",
     };
   } - ако датата е невалидна фрли ерор 

### pkg/account/accounts.js
  - Првично импортираме-const mongoose = require("mongoose");
  - const accountSchema = mongoose.Schema - ја креира скимата, кажуваме што треба да има и дали ќе биде string или number
  - organizationId: {
  type: mongoose.SchemaTypes.ObjectId,
  ref: "Organization",
  required: true,
  }, - ова ни кажува дека секој акаунт че припаѓа на некоја организација
  - const Account = mongoose.model("Account", accountSchema, "accounts"); моделот, структурата на датата, името на колекцијата. 
  - const createAccount = async (accountData) => {
  const newAccount = new Account(accountData);
  return await newAccount.save();
  }; - креирање на нов user, accountData се фактички сите клучеви и вредности шо се наоѓаат во accountSchema
  - const getByEmail = async (email) => {
  return await Account.findOne({ email });
  }; - земаме подениечен акаунт со меил
  - const getAccounts = async () => {
  return await Account.find();
  }; - ги зема сите акаунти
  - const updateAccount = async (_id, accountData) => {
  return await Account.updateOne({ _id }, accountData);
  }; - update на акаунт
  - const removeAccount = async (_id) => {
  return await Account.deleteOne({ _id });
  }; - бришење на акаунт
  - и на крај експортираме

### pkg/account/validate.js 
  - const AccountLogin = {
      email: "required|email", 
      password: "required|string",
   }; - кој информации се потребни/мора да се имаат за логин

   - const AccountRegister = {
   username: "required|string",
   email: "required|email",
   password: "required|string",
   confirmPassword: "required|string",
   organizationName: "required|string", - ако не постои организација, ова креира, ако постој организација само и се приклучуваш
   };

   - const AccountUpdate = {
   username: "string",
   email: "email",
   password: "string",
  }; - нема required затоа што тогаш ќе мора сите да бидат required а нас можеби ќе ни треба да смениме само едно нешто.

### pkg/config/index.js  
  - const fs = require("fs"); - Земаме file system за да можеме read/write да направиме.
  - const CONFIG_SOURCE = `${__dirname}/../../config.json`; патеката до config.json /../../ значи оди два фолдери нагоре, почни од pkg/config и оди два фолдери нагоре.
  - let config = null; - празна вариабла затоа што уште не сме ја прочитале 
  - if (config === null) {
    const file = fs.readFileSync(CONFIG_SOURCE, "utf-8");  
    config = JSON.parse(file);
    } - ако config е празно прочитај го фајлот config.json што е во константата CONFIG_SOURCE и парсирај од ЈSON во Јава скрипт објект.
  - const getSection = (section) => {
    if (!config[section]) {
    throw `Configuration section ${section} does not exist!`;
    }

   return config[section];
   }; - проверува дали одделот постој, доколку не фрла ерор, доколку постои го зема тој оддел.
  - на крај експортираме со module.exports

### pkg/db/config.js

  - const mongoose = require("mongoose"); повикуваме прво mongoose
  - const { getSection } = require("../config/index"); ја земаме getSection функцијаta 
  - const { MONGO_USERNAME, MONGO_PASSWORD } = getSection("development"); - ги земаме пасвордот и username од config.json од одделот develompent.
  - const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.12jzasd.mongodb.net/grupa-5754?retryWrites=true&w=majority`; - ова не поврзува со монго дб
  - async function connect() {
   try {
    await mongoose.connect(uri);
    console.log("MongoDB connected!");
    } catch (err) {
    console.error(err);
    }
    }

   module.exports = connect; - чека да види дали е точно URI, доколку е си продолжуваме доколку не е фрла ерор.
   - и на крај експортираме.
### pkg/event/index.js
   - const mongoose = require("mongoose"); започнуваме со повикување на mongoose
   - const eventSchema = mongoose.Schema - структурата што мора да ја следи некој што креира евент
   - createdBy: {
     type: mongoose.SchemaTypes.ObjectId,
     ref: "Account",
     required: true,
  } го зачувува ID на корисникот што го креирал евентот
  - organizationId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Organization",
    required: true,
  } - го поврзува евентот со ID на организацијата што го креирала
  - attendees: [
  {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Account",
   },
   ] - прави низа од ID на луѓето што ќе присуствуваат
  - const Event = mongoose.model("Event", eventSchema, "events"); 1. името на моделот што ќе го користиме во функциите. 2. структурата на скимата, 3. името на колекцијата во MongoDB
  - const get = async (organizationId) => {
  return await Event.find({ organizationId })
    .populate({
      path: "attendees",
      select: "-_id email username",
    })
    .populate({
      path: "createdBy",
      select: "-_id username",
    });
    }; - populate i path го користиме за да знаеме чије ИД на кого припаѓа без него ќе добиеме само ИД, select користиме за да знаеме кој полиња да ги инклудира и изостави. Ова ги зема сите евенти од една органзиација
   - const getById = async (_id, organizationId) => {
  return await Event.findOne({ _id, organizationId });
  }; - проверува дали ИД на евентот и ИД на органзиацијата се точни и ако да го зема евентот.
   - const create = async (data) => {
  const newEvent = new Event(data);
  return await newEvent.save();
}; - креира нов евент
   - const update = async (_id, organizationId, data) => {
  return await Event.updateOne({ _id, organizationId }, data);
}; - за update на евент потребни се ИД на евенто, ид на организацијата и датата што сака да ја смени
   - const remove = async (_id, organizationId) => {
  return await Event.deleteOne({ _id, organizationId });
}; - брише евент
  - const addAttendee = async (eventId, organizationId, accountId) => {
  return await Event.updateOne(
    { _id: eventId, organizationId }, -
    { $push: { attendees: accountId } },
  );
}; бара евент со ИД и ИД на органзиација и после тоа со $push додаваме attendee со неговиот акаунт ИД
- и на крај правиме module.export на сите фунцкии.
### pkg/event/validate.js
  -  const EventCreate = {
  title: "required|string",
  date: "required|date",
  location: "required|string",
  price: "required|integer",
  ticketsAvailable: "required|integer",
};  - даваме правила за како тоа треба да и изгледа и што треба да има еден евент. стринг е стринг, date е дата, integer е бројка.

- const EventUpdate = {
  title: "string",
  date: "date",
  location: "string",
  price: "integer",
  ticketsAvailable: "integer",
}; за update не ставаме required затоа што тогаш ќе мора се да се смени.

- и на крај module.export.
### pkg/organization/index.js
- const mongoose = require("mongoose"); повикуваме mongoose
- const organizationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }, - дата и час за кога е направена организацијата
); - структурата на скимата, што мора да има внатре за да се креира органзиација

- const Organization = mongoose.model(
  "Organization", - модел
  organizationSchema, - структурата
  "organizations", - колекцијата
); 
- const get = async () => {
  return await Organization.find();
}; - да ни ги прикаже сите организации

- const getById = async (_id) => {
  return await Organization.findOne({ _id });
}; - да земе само 1

- const getByName = async (name) => {
  return await Organization.findOne({ name });
}; -да земе само една но овој пат не со ИД туку со име

- const create = async (data) => {
  const newOrganization = new Organization(data);
  return await newOrganization.save();
}; -да креира.
- на крај ги експортираме сите.




 
  
    