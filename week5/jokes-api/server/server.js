const express = require("express");
const app = express();
    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const JokeRoutes = require("./routes/joke.routes");
JokeRoutes(app);
    
app.listen(8001, () => console.log("The server is all fired up on port 8000"));