const express = require('express');

const server = express();

//request handling methods
const handleAllTypesOfRequests = (req, res) => {
    res.send("Response from server.use");
}

const handlePutProfileRequest = (req, res) => {
    res.send("Put request responded to")
};
const handleGetRequest = (req, res) => {
    res.send("Welcome to the login page")
};
const handlePutSignUp = (req, res) => {
    res.send("Welcome to Signup Page")
};
server.post('/profile', handleAllTypesOfRequests)
server.get('/login', handleGetRequest);
server.put('/profile', handlePutProfileRequest);
server.get('/signup',handlePutSignUp);
server.post('/signup',handlePutSignUp);
server.listen(3002, () => console.log('server is ready'))