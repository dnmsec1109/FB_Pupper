const puppeteer = require('puppeteer');

(async () => {
    const cookies = [{
        name: 'presence',
        value: 'C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1651389275607%2C%22v%22%3A1%7D', // replace this!
        domain: '.facebook.com',
        url: 'https://www.facebook.com/',
        path: '/',
        httpOnly: true,
        secure: true,
      },
      {
          name: 'xs',
          value: '10%3Aa9KGTEK_SLO9DQ%3A2%3A1650551279%3A-1%3A6331%3A%3AAcUiIOO9Seon_SFILCzuTuNJAgZFUUWeRwchj3h05YY',
          domain: '.facebook.com',
          url: 'https://www.facebook.com/',
          path: '/',
          httpOnly: true,
          secure: true,
        },
      {
          name: 'c_user',
          value: '100027673153803',
          domain: '.facebook.com',
          url: 'https://www.facebook.com/',
          path: '/',
          httpOnly: true,
          secure: true,
        },
      {
          name: 'datr', 
          value: 'yGlhYq3YMyaSHhhpiEyC2uF1',
          domain: '.facebook.com',
          url: 'https://www.facebook.com/',
          path: '/',
          httpOnly: true,
          secure: true,
        },
      {
          name: 'fr', 
          value: '0ufngn3kDlTO9PhgD.AWUwJkWjORqLp6jjK1MHOCjzhRc.Bibi60._d.AAA.0.0.BibjMb.AWWoPExSu9w',
          domain: '.facebook.com',
          url: 'https://www.facebook.com/',
          path: '/',
          httpOnly: true,
          secure: true,
    },
      {
          name: 'sb', 
          value: 'xmlhYt-UnilXdvtL-V9QAWFr',
          domain: '.facebook.com',
          url: 'https://www.facebook.com/',
          path: '/',
          httpOnly: true,
          secure: true,
    },
    ];
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setCookie(...cookies);
  
  await page.goto('https://www.facebook.com/', {waitUntil: 'networkidle2'});
  await page.screenshot({ path: 'setcookie.png'})

  await browser.close();
})()
