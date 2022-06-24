const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database")

//set config file
dotenv.config({path:"backend/config/config.env"});

//connect to db
connectDB()


// app.listen(process.env.PORT, () => {
//     console.log("Server is running on http://localhost:${process.env.PORT}");
// });

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});