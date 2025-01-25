const axios = require('axios');
const cheerio = require('cheerio');

exports.scrapeInstagram = async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: 'URL is required' });

    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const username = $('meta[property="og:title"]').attr('content');
        const bio = $('meta[property="og:description"]').attr('content');

        res.json({ username, bio });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
