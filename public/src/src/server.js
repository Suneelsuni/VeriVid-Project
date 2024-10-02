const express = require('express');
const multer = require('multer');
const Web3 = require('web3');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });
const web3 = new Web3('http://127.0.0.1:7545'); // Ganache

app.use(express.static(path.join(__dirname, '../public')));

// Upload route
app.post('/upload', upload.single('video'), (req, res) => {
    const videoPath = req.file.path;
    // Here you would add your AI detection logic and blockchain interaction
    res.json({ message: "Video uploaded successfully!" });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
