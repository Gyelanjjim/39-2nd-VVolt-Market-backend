const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { routes } = require('./src/routes');
const { globalErrorHandler } = require('./src/utils/Error');

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(morgan('combined'));
  app.use(routes);
  app.use(globalErrorHandler);

  app.get("/ping", (req,res) =>{
    res.status(200).json({ message : "pong" })
  })

  return app;
};

module.exports = { createApp };
