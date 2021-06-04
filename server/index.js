const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortune = [
    "You have 7 days to live!",
    "Cool shirt, but did you know you'll be giving that up today?!",
    "Be more like Budha",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});

app.get("/api/help", (req, res) => {
  const help = [
    "Deep breaths. Everything is ok until it isn't. If you still need help, click the additional 'Help Me God button now'",
  ];

  res.status(200).send(help);
});

app.get("/api/god", (req, res) => {
  const god = [
    "Maybe pray to a different God",
    "Maybe it is you",
    "You matter. Heaven is thinking about you. Problem is Hell is too",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * god.length);
  let randomCompliment = god[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/feelings", (req, res) => {
  const feelings = ["Did you try to input something? I'm sorry, nobody cares."];

  res.status(200).send(feelings);
});

app.listen(4000, () => console.log("Server running on 4000"));
