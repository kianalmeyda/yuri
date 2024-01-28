const express = require("express");
const app = express();
const port = 3000;
var axios = require("axios").default;

app.get("/ai/yuri", async (req, res) => {
  const content = req.query.message || "hi";
  var options = {
    method: "GET",
    url: "https://yuriai.deno.dev/process?message=" + content,
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "insomnia/8.6.0",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      const data = response.data;
      const content = data.text;
      res.status(200).json({ yuri: content });
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(port, () => {
  console.log("Your Server Running on " + port + " go fuck you self");
});
