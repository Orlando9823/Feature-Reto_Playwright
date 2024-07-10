import { test, expect } from '@playwright/test';

test('crear empleado', async ({ page }) => {

  //Abrir URL en el navegador
  await page.goto('https://opensource-demo.orangehrmlive.com');
  
  await expect(page.locator('.oxd-text--h5')).toBeVisible();

  const txtUser = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input');
  await txtUser.fill("Admin");

  const txtPass = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input');
  await txtPass.fill('admin123');

  const btnLogin = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button');
  await btnLogin.click();

  await expect(page.locator('.oxd-text--h6')).toBeVisible();


  const btnPIM = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a');
  await btnPIM.click();

  await expect(page.locator('.oxd-button--secondary:nth-child(1)')).toBeVisible();

  const btnAdd = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button');
  await btnAdd.click();

  await expect(page.locator('.orangehrm-main-title')).toBeVisible();

  // Click the submit button to trigger upload
  const imagen = await page.locator('input[type="file"]');
  await imagen.setInputFiles("C:\\Users\\ovalencia\\Documents\\PlayWrightLogueo\\IMG\\usuario.jpg");

  const txtFirstName = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[1]/div[2]/input');
  await txtFirstName.fill("Orlando");

  const txtMiddleName = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[2]/div[2]/input');
  await txtMiddleName.fill('Aldair');

  const txtLastname = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[3]/div[2]/input');
  await txtLastname.fill('Valencia Giraldo');

  const firstNameValue = await page.inputValue('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-2.orangehrm-full-width-grid > div > div > div:nth-child(2) > input');
  const newValue = (parseInt(firstNameValue) + 1).toString();
  console.log("ID del empleado: " + newValue);

  const txtCodigo = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input');
  await txtCodigo.fill(newValue);

  const toggleLoginDetails = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[2]/div/label/span');
  await toggleLoginDetails.click();

  await expect(page.locator('.oxd-form-row:nth-child(4) .oxd-grid-item:nth-child(1) .oxd-label')).toBeVisible();

  await page.evaluate(() => {
    // Aquí puedes personalizar el comportamiento de scroll según tus necesidades
    window.scrollTo({
      top: 10000,  // Cambia este valor según la posición a la que desees desplazarte
      behavior: 'smooth'  // Opciones adicionales: 'auto', 'instant', 'smooth'
    });
  });

  const txtUserName = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div[1]/div/div[2]/input');
  await txtUserName.fill('Orlando1234');

  const txtPassword = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[4]/div/div[1]/div/div[2]/input');
  await txtPassword.fill('pelotas1234');

  const txtPasswordC = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[4]/div/div[2]/div/div[2]/input');
  await txtPasswordC.fill('pelotas1234');

  const btnSave = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]');
  await btnSave.click();

  // Esperar a que el elemento sea visible con un tiempo de espera aumentado
  const locator = page.locator('.orangehrm-horizontal-padding > .oxd-text--h6');
  await page.waitForSelector('.orangehrm-horizontal-padding > .oxd-text--h6', { timeout: 10000 });
  await expect(locator).toBeVisible({ timeout: 10000 });

  await page.close();
});