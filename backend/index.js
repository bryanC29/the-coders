const express = require('express');
const app = express();
const port = 4173;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log("Server running on port ", port);
});