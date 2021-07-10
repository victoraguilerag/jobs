
const puppeteer = require('puppeteer');

const getPage = async (target) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://twitter.com/home', {
        waitUntil: 'networkidle2',
    });
    const element  = await page.evaluate((target) => {
        let elements = document.getElementsByClassName(target);
        return elements[0]
    });
    // const element = await page.$eval("#\\31", el => console.log("elemnet is:", el.innerText));

    await browser.close();

    return element
}

module.exports = async (target) => getPage;