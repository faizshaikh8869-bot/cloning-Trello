
import { Router } from "express";
import { USERS } from "../index.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { _logFunc } from "nodemailer/lib/shared";

let USERS_ID  = 0;
let ORGANIZATION_ID = 0;
let BOARD_ID;
let ISSUES_ID = 0;

const route = Router();

// Create ROutes
route.post('/signup', (req, res) => {
    const { username, password , email} = req.body;

    if (!username || !password || !email) {
        res.status(301).json({
            message: 'Please enter username and password'
        });
        return;
    };

    //check is user Exist
    const UserExisit = USERS.find((user) => user.username === username);
    if (UserExisit) {
        return res.status(411).json({
            message: 'User with user name exist'
        });
    };

    console.log(USERS_ID);
    console.log(email);
    
    
    USERS.push({
        username,
        password,
        email,
        id: ++USERS_ID
    })

    res.status(201).json({
        message: 'User Created succesfully',
    })

});

route.post('/signin', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(301).json({
            message: 'Please enter username and password'
        });
        return;
    };

    const UserExisit = USERS.find((user) => user.username === username && user.password === password);
    console.log(UserExisit);

    if (!UserExisit) {
        res.status(403).json({
            message: 'User with user name dose not exist'
        });
    };



    // jwt generate 
    const token = jwt.sign({ id: UserExisit.id }, "MYsecretPassword");

    res.json({
        token
    })

});

route.post('/organization', (req, res) => {

});

route.post('/board', (req, res) => {

});

route.post('/issues', (req, res) => {

});

route.post('/boards', (req, res) => {

});


// Read Routes

// Update ROutes

// Delete ROutes 


export default route;