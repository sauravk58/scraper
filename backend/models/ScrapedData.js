const mongoose = require('mongoose');

const ScrapedDataSchema = new mongoose.Schema({
    platform: String,
    url: String,
    data: Object,
    scrapedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ScrapedData', ScrapedDataSchema);
