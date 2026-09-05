import express from 'express';
import 'dotenv/config';

const app = express();
import SimpleRoute from './routes/Simple.routes.js';

app.use(express.json());



// export function increment_function(val){
//     if([USERS_ID , ORGANIZATION_ID, BOARD_ID, ISSUES_ID].includes(val)){
//         return val++;
//     }
// }



export const USERS = [];

export const ORGANIZATION = [
     {
        id: 1,
        title: '100xdevs',
        discription: 'Learning coding platform',
        admin: 1,
        members: [2]
    },
];

export const BOARD = [
   {
    id: 1,
    title:'Website frontend ',
    organization_id: 1,
   }
];

export const ISSUES = [
    {
        id: 1,
        title:'Add Dark MODE',
        board_id:  1,
        status: "IN_PROGRESS" // "ACHIVED" || "DONE" 
    }
];

app.use('/', SimpleRoute);

app.listen(process.env.PORT, () => { console.log('Server started at localhist:' + process.env.PORT) });
