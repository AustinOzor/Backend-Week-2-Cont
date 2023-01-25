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
const handlePutSignUp = (req, res) => {    res.send("Welcome to Signup Page")
};

const middlewarefunction = (req, res,next) =>{
    console.log("Hello this is our middleware")
    //console.log(req)
    //make some checks and if it is true, then next is executed else throw an error
    next();
    //middel can send request and make respones
    //res.send("this is a middleware response")
}
//route specific middleware
const loginRouteSpecificMiddleware = (req, res, next) =>{
    console.log("login in route middleware executed")
    next();
}
const signupRouteMiddleWare =(req, res, next) => {
    console.log("signup middleware response")
    next();
}
const profileRouteMiddleWare =(req, res, next) => {
    console.log("profile middleware is functioning ")
    next();
}

//general middlewares
//server.use(middlewarefunction);

//route middleware
server.post('/profile',profileRouteMiddleWare ,handleAllTypesOfRequests)
server.get('/login',loginRouteSpecificMiddleware, handleGetRequest); //middlewares come before request defininstion
server.put('/profile',profileRouteMiddleWare ,handlePutProfileRequest);
server.get('/signup', signupRouteMiddleWare, handlePutSignUp);
server.post('/signup',handlePutSignUp);

server.listen(3002, () => console.log('server is ready'))