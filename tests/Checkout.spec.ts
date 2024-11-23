import { test, expect } from '@playwright/test';

const perfumeLinkSelector = '[href="/ua/categorys/3/"]';
const pageHeaderSelector = 'h1.page-header';
const chanelLinkSelector = '#popularinput-checkbox-2243-23957';
const imgSelector = '[data-default-name="Chanel Chance Eau Tendre - Туалетная вода"]';
const buttonSelector = '.button.buy';
const completeCheckout = 'div.product-list__sidebar .button';
const newCustomer = 'body > div.site-wrap > div.main-wrap > div > div > div > div.user-column > div.checkout-header > h2';
const name = "Larysa";
const nameInputSelector = '#name';
const surnameInputSelector = '#surname';
const phoneInputSelector = '#phone';
const emailInputSelector = '#checkout-form > div.checkout__steps-tab.checkout__steps-tab1 > div:nth-child(2) > div:nth-child(2) > div.input-wrap.profile-form-group > label';
const surname = "Stupina";
const phoneNumber = "+380985177110";
const email = 'larisa.stupina.93@gmail.com';  
const buttonAhead = '#checkout-form > div.checkout__steps-tab.checkout__steps-tab1 > div:nth-child(2) > div.checkout__row.next-row > label';
const searchBoxSelector = '#select-city'

test('Open makeup.com.ua and click on Парфюмерия category', async ({ page }) => {
  
  await test.step('Navigate to makeup.com.ua', async () => {
    await page.goto('https://makeup.com.ua/');
  });

  await test.step('Click on Парфюмерия category', async () => {
    await page.waitForSelector(perfumeLinkSelector);
    await page.click(perfumeLinkSelector);
    await expect(page).toHaveURL(/categorys\/3\//);
    await expect(page.locator(pageHeaderSelector)).toContainText('Парфумерія');
  });

  await test.step('Select Chanel brand', async () => {
    await page.waitForSelector(chanelLinkSelector);
    await page.click(chanelLinkSelector);
    await expect(page).toHaveURL(/#o\[2243\]\[\]=23957/);
  });

  await test.step('Click on Chanel product', async () => {
    await page.waitForSelector(imgSelector);
    await page.click(imgSelector);
  });

  await test.step('Click on the Buy button', async () => {
    await page.waitForSelector(buttonSelector);
    await page.click(buttonSelector);   
  });

  await test.step('Click on the Buy button', async () => {
    await page.waitForSelector(completeCheckout);
    await page.click(completeCheckout); 
});

await test.step('Click on "I am a regular customer" (existed customer)', async () => {
    await page.waitForSelector(newCustomer);
    await page.click(newCustomer);
  }); 

  await test.step('Fill name', async () => { 
    await page.fill(nameInputSelector, name);  
  });

  await test.step('Fill surname', async () => { 
    await page.fill(surnameInputSelector, surname);  
  });

  await test.step('Fill phone', async () => { 
    await page.fill(phoneInputSelector, phoneNumber);  
  });

  await test.step('Fill email', async () => { 
    await page.fill(emailInputSelector, email);  
  });

  await test.step('Click on button Ahead', async () => {
    await page.waitForSelector(buttonAhead);
    await page.click(buttonAhead);
});

await test.step('Search for the city and select it', async () => {
   await page.fill(searchBoxSelector, 'Одесса, Одесская обл., Одеський р-н'); 
 });
});