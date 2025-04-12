import 'dotenv/config'
import express from "express"
import mongoose from "mongoose"
import { classRouter } from "./routes/class.js"
import { resourceRouter } from "./routes/resource.js"

const app = express()
app.use(express.json())

app.use("/class", classRouter)
app.use("/resource", resourceRouter)



app.listen(5000, () => console.log("Server is running on PORT 5000"))

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected with success"))
.catch((error) => console.log("Error in DB connection : " + error))