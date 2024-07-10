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

  const txtUsuario = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input')
  await txtUsuario.fill('Admin');

  const txtContraseña = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input')
  await txtContraseña.fill('admin123');

  const btnIngresar = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button')
  await btnIngresar.click();

  const result = await page.textContent('xpath=/html/body/div[1]/div[1]/div[1]/header/div[1]/div[1]/span/h6');
  expect(result).toContain('Dashboard');

  await page.waitForTimeout(3000);

});