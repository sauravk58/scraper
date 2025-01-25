const puppeteer = require('puppeteer');

exports.scrapeYouTube = async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: 'URL is required' });

    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2' });

        const title = await page.$eval('meta[name="title"]', el => el.content);
        const subscribers = await page.$eval('#subscriber-count', el => el.innerText);

        await browser.close();
        res.json({ title, subscribers });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
