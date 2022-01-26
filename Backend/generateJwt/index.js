const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
// const bodyparser = require("body-parser");
// app.use(bodyparser());
app.use(express.json());


app.post('/login',(req,res) => {
    const user = req.body.user;

    if(!user){
        return res.status(404).json({message:"user not found"});
        
    }

    let token = jwt.sign(user,"secrete",{expiresIn:'10min'});
    return res.status(201).json({
        token
    });
});

app.listen(3000,() => {
    console.log("listening on port 3000");
});

