/**
 * Created by yp on 17-3-14.
 */
var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    console.log('hello');
    res.send('hello world');

})