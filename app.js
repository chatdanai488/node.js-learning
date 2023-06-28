const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const { default: chalk } = require('chalk');
const app = express();
const port = 3000;

app.use(morgan('combined'));


app.get("/",(req,res)=>{

    res.send('Hello mf');
})

app.listen(port,()=>{

    debug("listening "+chalk.green(port));
})