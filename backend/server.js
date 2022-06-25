const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database")

//handling uncaught error
process.on("uncaughtException", (err) => {
    console.log("Error : ", err.message);
    console.log('Shutting down the server due to uncaught error.');
    process.exit(1);
})



//set config file
dotenv.config({ path: "backend/config/config.env" });

//connect to db
connectDB()


const myServer = app.listen(process.env.PORT, () => {
    console.log("Server is running on http://localhost:", process.env.PORT);
});


// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });

//Unhandle promise rejection
process.on("unhandledRejection", err => {
    console.log('Error : ', err.message);
    console.log("Shutting down the server due to unhandled promise rejection");

    myServer.close(() => {
        process.exit(1);
    });
})