const mongoose = require('mongoose');

const Lib = {
    async setUpDB(){
        try{
            await mongoose.connect(process.env.DB_URI,{
                useNewUrlParser:true,
                useFindAndModify:false,
                useCreateIndex:true,
                useUnifiedTopology:true,
            });
            console.log('Database connection was successfull');

        }catch(err){
            console.log(err);
        }
    }
}

module.exports = Lib