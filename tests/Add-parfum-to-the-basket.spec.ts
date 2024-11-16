import { test, expect } from '@playwright/test';

const perfumeLinkSelector = '[href="/ua/categorys/3/"]';
const pageHeaderSelector = 'h1.page-header';
const chanelLinkSelector = '#popularinput-checkbox-2243-23957';
const imgSelector = '[data-default-name="Chanel Chance Eau Tendre - Туалетная вода"]';
const buttonSelector = '.button.buy';

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

  await test.step('Click on the Buy button twice', async () => {
    await page.waitForSelector(buttonSelector);
    await page.click(buttonSelector); 
  });
});
