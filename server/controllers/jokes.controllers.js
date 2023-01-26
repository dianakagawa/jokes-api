const Joke = require("../models/jokes.model");

// find all
module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => res.json({jokes: allJokes}))
    .catch((err) => res.json({message: "Something went wrong", error: err}));
};

// find one
module.exports.findOneJoke = (req, res) => {
  Joke.findOne({_id: req.params.id})
    .then((oneJoke) => res.json({joke: oneJoke}))
    .catch((err) => res.json({message: "Something went wrong", error: err}));
};

// random
module.exports.findRandomJoke = (req, res) => {
  Joke.aggregate([{$sample: {size: 1}}])
    .then((randomJoke) => res.json({joke: randomJoke}))
    .catch((err) => res.json({message: "Something went wrong", error: err}));
};

// crear
module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) => res.json({joke: newJoke}))
    .catch((err) => res.json({message: "Something went wrong", error: err}));
};

// actualizar
module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({_id: req.params.id}, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => res.json({joke: updatedJoke}))
    .catch((err) => res.json({message: "Something went wrong", error: err}));
};

// borrar
module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({_id: req.params.id})
    .then((result) => res.json({result: result}))
    .catch((err) => res.json({message: "Something went wrong", error: err}));
};
