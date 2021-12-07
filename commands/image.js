var Scraper = require('images-scraper');

const google = new Scraper({
  puppeteer: {
    headless: true
  }
})

module.exports = {
    name: 'image',
    description: "sends an image to discord",
    async execute(client, message, args, Discord){
        const image_query = args.join(' ');
        if(!image_query)return message.channel.send('Please enter a valid image');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_query[0].url);
    }
}