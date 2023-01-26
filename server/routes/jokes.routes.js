const JokeController = require("../controllers/jokes.controllers");

module.exports = (app) => {
  app.get("/api/jokes", JokeController.findAllJokes);
  app.get("/api/jokes/:id", JokeController.findOneJoke);
  app.get("/api/jokes/random", JokeController.findRandomJoke);
  app.post("/api/jokes/new", JokeController.createJoke);
  app.put("/api/jokes/update/:id", JokeController.updateJoke);
  app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
};
