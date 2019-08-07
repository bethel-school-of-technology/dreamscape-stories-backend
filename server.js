import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const router =express.Router

mongoose.connect('') //something needs to go here inside quotes once mongodb is running

const connection =mongoose.connection;
connection.once('open', () =>  {console.log('MongoDB database connection established successfully');

app.use('/', router);

})

app.use(cors());
app.use(bodyparser.json());
app.listen(4000, () => console.log('Express server is totally running on this port which is 4000'));