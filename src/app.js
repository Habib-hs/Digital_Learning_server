const express = require("express");
const app = express();

//routes
// const hotelsRouter = require("./routes/hotelsRouter.js");

// //middlewares
// app.use(express.json()); //I can use app.use(express.json()) instead. Bothwe use as a middleware that introduces
// // incoming request as a json Object.



// app.use("/api/hotels", hotelsRouter);

// //Error Middleware
// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || "Something went wrong!";
//   return res.status(errorStatus).json({
//     success: false,
//     status: errorStatus,
//     message: errorMessage,
//     stack: err.stack,
//   });
// });

module.exports = app;