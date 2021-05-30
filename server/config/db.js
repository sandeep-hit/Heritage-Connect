const mongoose = require("mongoose");


const connectDB = async () => {
    const MONGOLOCAL="mongodb+srv://sandeep-heritage:Riddhi@619@sandydevdata.cp3fx.mongodb.net/heritageconnectdb?retryWrites=true&w=majority";
      try {
        const conn = await mongoose.connect(`${MONGOLOCAL}`, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
        });
        console.log(`MongoDB Connected: Localhost-27017`);
      } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
      }
};

module.exports = connectDB;