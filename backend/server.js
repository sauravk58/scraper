const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const scraperRoutes = require('./routes/scraperroutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the Social Media Scraper API');
});
app.use('/api/scrape', scraperRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
