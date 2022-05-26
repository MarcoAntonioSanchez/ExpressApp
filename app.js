const express = require("express");
const app = express();
const port = 3000; //localhost:3000

app.get("/", (req, res) => {
  res.send("Hola amigo...");
});

//localhost 3000/launchx
app.get("/launchx", (req, res) => {
  res.send("Welcome to launchx!");
});

app.get("/node", (req, res) => {
  const explorer1 = { id: 1, name: "explorer" };
  res.send(explorer1);
});

app.listen(port, () => {
  console.log("Server live on port: 3000");
});
