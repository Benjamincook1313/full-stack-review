require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./messages_controller');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('Connected to database');
});

app.get('/api/messages', ctrl.getAllMessages);

app.get('/api/message/:id', ctrl.getMessage);

app.post('/api/message', ctrl.createMessage);

app.delete('/api/message/:id', ctrl.deleteMessage);

app.put('/api/message/:id', ctrl.updateMessage);

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
