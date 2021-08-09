var express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require("mongoose"),
  Journal = require("./models/journalsModel"), //created model loading here
  bodyParser = require("body-parser");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/SatiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

const routes = require("./routes/journalsRoutes"); //importing route
routes(app); //register the route

const contactRoutes = require("./routes/contactRoutes");
contactRoutes(app);

app.listen(port);

console.log("Sati.tn API server started on: " + port);
