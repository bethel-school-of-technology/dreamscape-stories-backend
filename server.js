import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import app from './app';

const app = express();
const router =express.Router;

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method'); //when run, this is bringing up html text code and not the message
  });
  
  app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
  });
  
  app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
  
  app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });
  

mongoose.connect('') //something needs to go here inside quotes once mongodb is running

const connection =mongoose.connection;
connection.once('open', () =>  {console.log('MongoDB database connection established successfully');

app.use('/', router);

})

app.use(cors());
app.use(bodyparser.json());
app.listen(4200, () => console.log('Express server is totally running on this port which is 4000'));//4200 is port kellan created