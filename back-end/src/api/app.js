require('express-async-errors');
const express = require('express');
const loginRouter = require('../routes/login.route');
const userRouter = require('../routes/user.router');
const errorMiddleware = require('../middlwares/error.middleware');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRouter);
app.use('/user', userRouter);

app.use(errorMiddleware);

module.exports = app;
