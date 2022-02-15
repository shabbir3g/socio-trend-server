const mongoose = require("mongoose");

// connection creation DB
mongoose
  .connect(
    `mongodb+srv://socioTrend:IRQoxzoDVnAgK1vm@cluster0.tg4nc.mongodb.net/socioTrend?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connection is success"))
  .catch((err) => console.log(err));
