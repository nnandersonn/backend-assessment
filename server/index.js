const express = require("express");
const cors = require("cors");
const { getGifs, addGif, editGif, deleteGif} = require("./controller")

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
  });

app.listen(4000, () => console.log("Server running on 4000"));

let fortunes = ['Failure is the chance to do better next time.',
    'Failure is the path of lease persistence.',
    'Fear and desire – two sides of the same coin.',
    'Fearless courage is the foundation of victory.',
    'Feeding a cow with roses does not get extra appreciation.',
    'First think of what you want to do; then do what you have to do.',
   ' Follow the middle path. Neither extreme will make you happy.',
    'For hate is never conquered by hate. Hate is conquered by love.',
    'For the things we have to learn before we can do them, we learn by doing them.',
   ' Fortune Not Found: Abort, Retry, Ignore?',
    'From listening comes wisdom and from speaking repentance.',
    'From now on your kindness will lead you to success.'
    ]

function getRandomFortune() {
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomCompliment = fortunes[randomIndex];
  return randomCompliment
}
app.get("/api/fortune", (req,res)=>{
  res.status(200).send(getRandomFortune())
})

app.get("/api/gifs", getGifs)
app.post("/api/gifs", addGif)
