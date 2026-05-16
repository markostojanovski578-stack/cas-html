const {get} = require("../pkg/event/index");

const getAllEvents = async(req,res) => {
    try {
        // req.auth e definirano vo payload vo tokenot
    const events = await get(req.auth.organizationId);
    return res.status(200).send(events);
    }catch(err) {
        console.log(err);
        return res.status(500).send("Invalid server error");
    }
}

const getEventById = async(req,res) => {
    try {
      const { id } = req.params;
      const event = await getById(id, req.auth.organizationId);

      if(!event) {
        return res.status(404).send("Event not found!");
      }
    }catch(err) {
        console.log(err);
        return res.status(500).send("Invalid server error");
    }
}

const createEvent = async(req,res) => {
    try {
     await validateSchema(req.body, EventCreate)

    const = data {
        ... req.body,
        cratedBy: req.auth.id,
        organizationId: req.auht.organizationId,

    }

     const newEvent = await createEvent(data);
     return res.status(200).send(newEvent);

    }catch(err) {
        console.log(err);
        return res.status(500).send("Invalid server error");
    }
}

const updateEvent = async(req,res) => {
    try {

    }catch(err) {
        console.log(err);
        return res.status(500).send("Invalid server error");
    }
}

const deleteEvent = async(req,res) => {
    try {

    }catch(err) {
        console.log(err);
        return res.status(500).send("Invalid server error");
    }
}

const joinEvent = async(req,res) => {
    try {

    }catch(err) {
        console.log(err);
        return res.status(500).send("Invalid server error");
    }
}