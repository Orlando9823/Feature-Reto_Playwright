import { test, expect } from '@playwright/test';

/*test('abrir la web de OrangeHRM', async ({ page }) => {

  //Abrir URL en el navegador
  await page.goto('https://opensource-demo.orangehrmlive.com');
  
  await page.waitForTimeout(5000);

});*/


test('logueo en la web de OrangeHRM', async ({ page }) => {

  //Abrir URL en el navegador
  await page.goto('https://opensource-demo.orangehrmlive.com');
  
  await page.waitForTimeout(3000);

});