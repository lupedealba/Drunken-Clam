
// https://www.npmjs.com/package/puppeteer
// https://medium.com/@e_mad_ehsan/getting-started-with-puppeteer-and-chrome-headless-for-web-scrapping-6bf5979dee3e
// https://medium.com/@jsoverson/bypassing-captchas-with-headless-chrome-93f294518337
// https://www.screenshotbin.com/blog/handling-lazy-loaded-webpages-puppeteer
const fs = require('fs');
const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');
puppeteer.use(pluginStealth());

const listingData = []; //will hold array of objects containing data for each listing
let listing = {};

// const searchUrl = 'https://www.zillow.com/homes/Temecula-CA_rb';
const cityToSearch = `temecula`;
const stateToSearch = `ca`;
const searchUrl = `https://www.zillow.com/${cityToSearch}-${stateToSearch}/houses/`;

// function wait (ms) {
//   return new Promise(resolve => setTimeout(() => resolve(), ms));
// }


(async () => {
    const browser = await puppeteer.launch();
    //const browser = await puppeteer.launch({headless: false}); // default is true  , slowMo: 1000
    const page = await browser.newPage();
    await page.goto(searchUrl, { waitUntil: 'load' });
    await page.goto('https://www.zillow.com/homes/for_sale/', { waitUntil: 'load' });

    //   const searchBox = await page.$('input.react-autosuggest__input');
    //   const searchIcon = await page.$('span.searchBtnIcon.zsg-icon-searchglass');
    //   const inputValue = await page.$eval('input.react-autosuggest__input', el => el.value);
    //   console.log('inputValue ', inputValue);
    //   for (let i = 0; i < inputValue.length; i++) {
    //     await page.keyboard.down('Backspace');
    //   }
    // await page.$eval('input.react-autosuggest__input', (el, value) => el.value = value, 'Malibu ca');
    //await page.keyboard.type('Malibu ca');
    //await page.click('span.searchBtnIcon.zsg-icon-searchglass');
    //await page.keyboard.down("Enter");
    //await page.waitForNavigation({waitUntil: 'load'});
    //await wait(1000);

    let articleElements = await page.evaluate(() =>
        Array.from(document.querySelectorAll('article'))
            .map(elem => ({
                detailLink: elem.querySelector('a').href,
            }))
    );



    for (let i = 0; i < articleElements.length; i++) {
        //for (let i = 0; i < 3; i++) {
        console.log('Total Listings: ', articleElements.length, 'Listing Num:', i, articleElements[i].detailLink);

        await page.goto(articleElements[i].detailLink, { waitUntil: 'load' });

        listing.listingLink = articleElements[i].detailLink;

        try {
            await page.waitForSelector('.ds-address-container', { timeout: 5000 })
            listing.address = await page.$eval('.ds-address-container', element => element.innerText.trim());
        } catch (error) {
            console.log("Address Not Found.");
            listing.address = "Unknown";
        }
        try {
            await page.waitForSelector('.ds-value', { timeout: 5000 })
            listing.price = await page.$eval('.ds-value', element => element.innerText.trim());
        } catch (error) {
            console.log("Price Not Found.");
            listing.price = "Unknown";
        }
        try {
            await page.waitForSelector('header.ds-bed-bath-living-area-header > h3 > span:nth-child(1) > span:nth-child(1)', { timeout: 5000 })
            listing.bedrooms = await page.$eval('header.ds-bed-bath-living-area-header > h3 > span:nth-child(1) > span:nth-child(1)', element => element.innerText.trim());
        } catch (error) {
            console.log("Bedrooms Not Found.");
            listing.beds = "Unknown";
        }
        try {
            await page.waitForSelector('header.ds-bed-bath-living-area-header > h3 > span:nth-child(2) > span:nth-child(1)', { timeout: 5000 });
            listing.baths = await page.$eval('header.ds-bed-bath-living-area-header > h3 > span:nth-child(2) > span:nth-child(1)', element => element.innerText.trim());
        } catch (error) {
            console.log("Baths Not Found.");
            listing.baths = "Unknown";
        }
        try {
            await page.waitForSelector('header.ds-bed-bath-living-area-header > h3 > span:nth-child(3) > span:nth-child(1)', { timeout: 5000 });
            listing.houseSize = await page.$eval('header.ds-bed-bath-living-area-header > h3 > span:nth-child(3) > span:nth-child(1)', element => element.innerText.trim());
        } catch (error) {
            console.log("House Size Not Found.");
            listing.HouseSize = "Unknown";
        }
        try {
            await page.waitForSelector('ul.ds-home-fact-list > li:nth-child(2) > span.ds-body.ds-home-fact-value', { timeout: 1000 });
            listing.year = await page.$eval('ul.ds-home-fact-list > li:nth-child(2) > span.ds-body.ds-home-fact-value', element => element.innerText.trim());
        } catch (error) {
            console.log("Year Not Found.");
            listing.year = "Unknown";
        }
        try {
            await page.waitForSelector('ul.ds-home-fact-list > li:nth-child(3) > span.ds-body.ds-home-fact-value', { timeout: 1000 });
            listing.heating = await page.$eval('ul.ds-home-fact-list > li:nth-child(3) > span.ds-body.ds-home-fact-value', element => element.innerText.trim());
        } catch (error) {
            console.log("Heating Not Found.");
            listing.heating = "Unknown";
        }
        try {
            await page.waitForSelector('ul.ds-home-fact-list > li:nth-child(4) > span.ds-body.ds-home-fact-value', { timeout: 1000 });
            listing.cooling = await page.$eval('ul.ds-home-fact-list > li:nth-child(4) > span.ds-body.ds-home-fact-value', element => element.innerText.trim());
        } catch (error) {
            console.log("Cooling Not Found.");
            listing.cooling = "Unknown";
        }
        try {
            await page.waitForSelector('ul.ds-home-fact-list > li:nth-child(6) > span.ds-body.ds-home-fact-value', { timeout: 1000 });
            listing.lotSize = await page.$eval('ul.ds-home-fact-list > li:nth-child(6) > span.ds-body.ds-home-fact-value', element => element.innerText.trim());
        } catch (error) {
            console.log("Lot Size Not Found.");
            listing.lotSize = "Unknown";
        }
        try {
            await page.waitForSelector('.cf-listing-agent-display-name', { timeout: 1000 });
            listing.listingAgent = await page.$eval('.cf-listing-agent-display-name', element => element.innerText.trim())
        } catch (error) {
            console.log("Listing Agent Not Found.");
            listing.listingAgent = "Unknown";
        }
        try {
            await page.waitForSelector('.zsg-fineprint.cf-listing-agent-brokerage-name', { timeout: 1000 });
            listing.brokerage = await page.$eval('.zsg-fineprint.cf-listing-agent-brokerage-name', element => element.innerText.trim());
        } catch (error) {
            console.log("Brokerage Not Found.");
            listing.brokerage = "Unknown";
        }
        try {
            await page.waitForSelector('img.media-stream-photo.media-stream-photo--loader', { timeout: 1000 });
            listing.houseImage = await page.$eval('img.media-stream-photo.media-stream-photo--loader', element => element.src);
        } catch (error) {
            console.log("House Image Not Found.");
            listing.houseImage = "Unknown";
        }
        try {
            await page.waitForSelector('img.cf-listing-agent-image_small', { timeout: 1000 });
            listing.agentImage = await page.$eval('img.cf-listing-agent-image_small', element => element.src);
        } catch (error) {
            console.log("Agent Image Not Found.");
            listing.agentImage = "Unknown";
        }
        try {
            await page.waitForSelector('div.ds-expandable-card-section-default-padding > div:nth-child(2) > div > div:nth-child(1)', { timeout: 1000 });
            listing.details = await page.$eval('div.ds-expandable-card-section-default-padding > div:nth-child(2) > div > div:nth-child(1)', element => element.innerText.trim());
        } catch (error) {
            console.log("Details Image Not Found.");
            listing.details = "Unknown";
        }


        listingData.push(listing); // Push listing object onto ListingData Array
        listing = {}; // clear listing Object.  It doesn't seem to update properties in the loop if you don't

    }
    //   console.log('listingData', listingData);

    let filteredData = listingData.filter(obj => {
        return Object.values(obj).indexOf("Unknown") === -1;
    });

    //   fs.writeFile(
    //     '../json/output.json',
    //     JSON.stringify(listingData, null, 2),
    //     (err) => err ? console.error('Data not written!', err) : console.log('Data Written')
    //   );

    fs.writeFile(
        './SampleData.json',
        JSON.stringify(filteredData, null, 2),
        (err) => err ? console.error('Data not written!', err) : console.log('Data Written')
    );


    await browser.close();
})();