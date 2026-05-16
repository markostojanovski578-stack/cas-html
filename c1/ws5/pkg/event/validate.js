const EventCreate = {
    title:"required|string",
    date: "required|date",
    location: "required|string",
    price: "required|integer",
    ticketsAvailable: "required|integer",

}

const EventUpdate = {
    title:"required|string",
    date: "required|date",
    location: "required|string",
    price: "required|integer",
    ticketsAvailable: "required|integer",

}

module.exports = [
    EventCreate,
    EventUpdate
]