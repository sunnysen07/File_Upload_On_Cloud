const mongoose = require('mongoose')
function connectedToDB(){
    mongoose.connect(process.env.Mongo_Url).then(()=>{
        console.log("connected to database");
    })
}

module.exports = connectedToDB;