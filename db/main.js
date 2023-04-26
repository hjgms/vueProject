var express = require("express");
var app = express();

const apiUid = "";

/* API TEST */
app.get("/"+apiUid,(req,res)=>{
    res.send({
        "json":{
            "data":[
                {
                    "name":"",
                    "id":""
                },
                {
                    "name":"",
                    "id":""
                }
            ]
        }
    });
});

app.listen(3000, function () {
    console.log("listen api");
});