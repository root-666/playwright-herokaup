// @ts-check


const { test, expect } = require('@playwright/test');
import{loginpage} from '../pages/login'

test('login ', async ({ page }) => {
  const login = new loginpage(page)
 

  //functions for login and accessing login page 
await login.gotologinpage()
await login.login('tomsmith','SuperSecretPassword!')


 // await page.goto('https://the-internet.herokuapp.com/login');
  //await page.getByLabel('Username').fill('tomsmith')
  //await page.getByLabel('Password').fill('SuperSecretPassword!');
  //await page.getByRole('button', { name: ' Login' }).click();
  //await page.pause()


});
