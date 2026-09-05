import express from 'express';
import 'dotenv/config';

const app = express();

app.get('/', (req, res)=>{
    res.end({message:"Server is running "});
});

app.listen(process.env.PORT, ()=>{  console.log('Server started at localhist:'+process.env.PORT)    });
