import { Mongoose } from "mongoose";

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//Connect to the Mongo DB
Mongoose.connect(MONGODB_URI);

