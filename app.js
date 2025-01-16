const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Dockerized Node.js udaykiran is  a tester in yuma !");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});


