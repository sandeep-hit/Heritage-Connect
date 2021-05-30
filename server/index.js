import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import clubPostRoutes from './routes/clubPostRoutes.js';



const app=express();
app.use(cors());



app.use(bodyParser.json({limit:"30mb",extended : true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended : true}));



app.use('/feeds',clubPostRoutes);

const URL="mongodb+srv://sandeepchaudhary:Riddhi619@sandydevdata.cp3fx.mongodb.net/heritageconnectdb?retryWrites=true&w=majority";
const PORT =  5000;
mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>{
    app.listen(PORT,()=>{console.log(`Server running at ${PORT}`)})
  })
  .catch((error)=>{console.log(error.message)});

  mongoose.set('useFindAndModify',false);