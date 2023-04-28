import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();


const app = express();
import connectDb from "./db/connect.js";
import { errorHandler, NotFound } from "./middleware/error-handler.js";

import mongoose from "mongoose";

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import visaRoute from "./routes/visaRoutes.js";
import userRoute from "./routes/userRoute.js";
import apartmentRoute from "./routes/apartmentRoutes.js";
import coinBaseRoute from "./routes/coinBaseRoutes.js";


app.use("/api/v1/visa", visaRoute);
app.use("/api/v1/investment", apartmentRoute);
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/pay", coinBaseRoute);

const __dirname = path.resolve();

app.use(
  "/public/uploads",
  express.static(path.join(__dirname, "/public/uploads"))
);

// console.log((path.join(__dirname, '/public/uploads')))

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("mongo has been connected");
  }
);




// production mode process
 if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '/frontend/build')))

   app.get('*', (req, res) =>
   //  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
   	res.sendFile(path.join(__dirname,'/frontend/build/index.html'))
   )
 } else {
   app.get('/', (req, res) => {
     res.send('API is running....')
   })
 }


// Middlewares
app.use(NotFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
