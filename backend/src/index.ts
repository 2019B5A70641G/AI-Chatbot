import app from "./app.js";
import {connectToDatabase} from "./db/connection.js";

//connections and listeners
const PORT = process.env.PORT || 5011;

connectToDatabase()
  .then(() => {
    app.listen(PORT,()=>
      console.log("Connected to DB and Server Opened")
    );
  })
  .catch((err)=>console.log(err));