const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const cors = require('cors');
require('dotenv').config();

// App
const app = express();
app.use(cors());   
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(express.urlencoded({extended: true}));

//DATABASE
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, { useNewUrlParser: true }).catch(err => {
    console.log('Erro ao tentar se conectar com o MongoDB');
})

const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

// Load models
const Forms = require('./models/form');

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const formRoutes = require('./routes/form-routes');
app.use('/register', formRoutes);

module.exports = app;