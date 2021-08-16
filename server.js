require("dotenv").config();
var express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require("mongoose"),
  Journal = require("./models/journalsModel"), //created model loading here
  bodyParser = require("body-parser");
const cors = require("cors");

const corsOptions = {
  origin: process.env.CLIENT_API,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// const connectToDatabase = async () => {
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/SatiDB", {
// const client = await
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
  tlsCAFile: "./certificate.crt",
});

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

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
