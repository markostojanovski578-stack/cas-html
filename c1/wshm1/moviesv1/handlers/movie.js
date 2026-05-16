const {read, write} = require("../read-write");

const createMovie = async(req, res) => {
    try {
        const movies = await read("data.json");

        movies.push(req.body)

        await write("data.json", movies);
        return res.status(200).send("New movie added!");
    } catch(err) {
        return res.status(500).send("Internal server error!");
    }

};

const getMovies = async(req,res) => {
    try{
        const movies = await read("data.json");
        
        return res.status(200).send(movies);
    } catch(err) {
        return res.status(500).send("Internal server error!");
    }
};

const updateMovie = async (req, res) => {
  try {
    let movies = await read("data.json");

    const movieId = Number(req.params.id);

    movies = movies.map((movie, index) => {
      if (movieId === index) {
        return {
          ...movie,
          ...req.body,
        };
      }

      return movie;
    });

    await write("data.json", movies);

    return res.status(200).send(`Movie ${movieId} updated successfully!`);
  } catch (err) {
    return res.status(500).send("Internal server error!");
  }
};

const removeMovie = async(req,res) => {
    try {
        let movies = await read("data.json");

        const movieId = Number(req.params.id);

        movies = movies.filter((movie,index) => index !== movieId);

        await write("data.json", movies)
        return res.status(200).send(`Movie ${movieId} deleted successfully!`);
    } catch(err) {
        return res.status(500).send("Internal server error!");
    };
};

app.get("/movies", getMovies);
app.post("/movies", createMovie);
app.put("/movies/:id", updateMovie);
app.delete("/movies/:id", removeMovie);

app.listen(3000, () => {
  console.log("Server started on port 3000!");
});