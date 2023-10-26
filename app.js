import express ,{json }from "express"
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/lostAndFound")
    .then("Database Connected Successfully")
    .catch((err) => {
        console.log(err);
    });

app.use(json({limit:"50mb"}));

app.post("/register", function(req,res){






    
});

app.listen(5000, function(req,res){
    console.log("Server started on Port 5000");
});