import dotenv  from "dotenv"
import connectdb from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectdb()











/*
(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(err)=>{
        console.log("errr:",error);
        throw err
       })
       app.listen(process.env.PORT,()=>{
        console.log(`app listening om port:${process.env.PORT}`)
       })
    } catch (error) {
        console.error("error:", error)
        throw err
    }
})()*/