import dotenv  from "dotenv"
import connectdb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})

connectdb()
.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`server running port on : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log(`db conection fail error: ${err}`  );
})











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