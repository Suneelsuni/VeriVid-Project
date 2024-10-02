const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    creator: String,
    videoPath: String,
    verified: Boolean,
});

const Video = mongoose.model('Video', videoSchema);
module.exports = Video;
