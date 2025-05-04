// import dotenv from 'dotenv';
// import express from 'express';

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//     res.send("The server is listening");
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "First Joke",
            joke: "Why did the chicken cross the road? To get to the other side!"
        },
        {
            id: 2,
            title: "Second Joke",
            content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 3,
            title: "Third Joke",
            content: "What do you call fake spaghetti? An impasta!"
        },
        {
            id: 4,
            title: "Fourth Joke",
            content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 5,
            title: "Fifth Joke",
            content: "I told my wife she was drawing her eyebrows too high. She looked surprised!"
        }
    ];
    res.send(jokes);
});



app.get('/', (req, res) => {
    res.send("The server is listening");
    console.log("object")
}
);
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});