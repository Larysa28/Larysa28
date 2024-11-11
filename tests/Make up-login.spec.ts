import { test, expect } from '@playwright/test';

const URL = 'https://makeup.com.ua/';
const emailInputSelector = '[name="user_login"]';  
const passwordInputSelector = '[name="user_pw"]';  
const submitButtonSelector = '.button.full-width';
const loginTriggerSelector = '.header-office.authorized';
const email = 'larisa.stupina.93@ukr.net';  
const password = 'Lara2828)';
const nameInputSelector = '#name'; 
const surnameInputSelector = '#surname';
const expectedName = 'Лариса';
const expectedSurname = 'Ступіна'; 

test('Open and login on makeup.com.ua, then verify name and surname', async ({ page }) => {
  
  await test.step('Navigate to the Makeup website', async () => {
    await page.goto(URL);
  });

  await test.step('Open the login modal', async () => {
    const loginTriggerSelector = '[data-popup-handler="auth"].header-office';
    await page.waitForSelector(loginTriggerSelector); 
    await page.click(loginTriggerSelector); 
  });

  await test.step('Fill in login form', async () => { 
    await page.fill(emailInputSelector, email);  
    await page.fill(passwordInputSelector, password);  
    await page.click(submitButtonSelector); 
  });
  
  await test.step('Click to open the login modal and verify name & surname', async () => {
    await page.waitForSelector(loginTriggerSelector); 
    await page.click(loginTriggerSelector);
  
    const nameValue = await page.inputValue(nameInputSelector);
    const surnameValue = await page.inputValue(surnameInputSelector);
    expect(nameValue).toBe(expectedName);
    expect(surnameValue).toBe(expectedSurname);
  });
});
