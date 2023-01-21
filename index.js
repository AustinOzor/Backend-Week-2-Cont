const express = require('express');

const server = express();

//request handling methods
const handleAllTypesOfRequests = (req, res) => {
    res.send("Response from server.use");
}

const handlePutRequest = (req, res) => {
    res.send("Put request responded to")
};
const handleGetRequest = (req, res) => {
    res.send("Welcome to the login page")
}
server.post('/profile', handleAllTypesOfRequests)
server.get('/login', handleGetRequest);
server.put('/profile', handlePutRequest);
server.put('/signup', (req, res) => {
    res.send("Welcome to the signup page")
});
server.listen(3002, () => console.log('server is ready'))