require('dotenv').config()
const mongoose  = require('mongoose');
mongoose.set("strictQuery", false);
const connectToMongo = () => {
    mongoose.connect(process.env.DATABASE,{
       
    }).then(()=> {
        console.log(`connection established`);
    }).catch((err) => console.log(err));
}

module.exports = connectToMongo

