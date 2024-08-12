const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(cors({
    origin: "*",
    methods: "GET,POST",
}))

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

// Default Home Routes
app.get('/', (req, res) => {
    res.json({'message':'hello world!'});
})

app.post('/', (req, res) => {
    res.status(200).json({'message':'post hello world!'});
})

// Import Routes
const verification = require('./routes/verify');
const testMethod = require('./routes/test');
const user = require('./routes/user');

app.use('/user/', user);
app.use('/test/', testMethod)
app.use('/verify/', verification)

app.listen(port, () => {
    console.log("Server running on port", port);
});