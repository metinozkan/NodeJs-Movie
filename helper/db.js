const mongoose=require('mongoose');

module.exports =()=>{

    mongoose.connect('mongodb://movie_user:abcd.1234@ds139896.mlab.com:39896/heroku_6g2g8r3t',{useMongoClient:true})

    mongoose.connection.on('open',()=>{
        console.log("Mongodb:connected");
    });
    mongoose.connection.on('error',()=>{
        console.log("Mongodb:Errrorrr");
    })

}