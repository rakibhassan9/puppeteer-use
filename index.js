import puppeteer from 'puppeteer';

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto('https://www.google.com');
  
    await page.type('.gLFyf', 'data structures and algorithms');
    await page.keyboard.press('Enter');
  
    await page.waitForSelector('h3');
  
    const results = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a h3')).map(e => e.parentElement);
      return links.map(link => link.href);
    });
  
    console.log(results);
  
    await browser.close();
  })();