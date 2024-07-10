import { test, expect } from '@playwright/test';

/*test('abrir la web de OrangeHRM', async ({ page }) => {

  //Abrir URL en el navegador
  await page.goto('https://opensource-demo.orangehrmlive.com');
  
  await page.waitForTimeout(5000);

});*/

test('validar empleado', async ({ page }) => {

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

  const txtNameEmpleado = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input');
  await txtNameEmpleado.fill('Orlando');

  const btnSearch = await page.waitForSelector('xpath=/html/body/div[1]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');
  await btnSearch.click();

  await page.evaluate(() => {
    // Aquí puedes personalizar el comportamiento de scroll según tus necesidades
    window.scrollTo({
      top: 10000,  // Cambia este valor según la posición a la que desees desplazarte
      behavior: 'smooth'  // Opciones adicionales: 'auto', 'instant', 'smooth'
    });
  });

await page.waitForTimeout(5000);

  //const employeeName = await page.locator(".oxd-table-cell:nth-child(3) > div").textContent();
  //expect(employeeName).toContain("Orlando Aldair");

const divs = page.locator(".oxd-table-cell:nth-child(2) > div");
const numeroDivs = await divs.count();
let nombreEncontrado = false;


for (let i = 0; i < numeroDivs; i++) {
  const divText = await divs.nth(i).textContent();
  if (divText?.includes('429')) {
    nombreEncontrado = true;
    break;
  }
}

if (nombreEncontrado) {
  console.log(`El empleado Orlando Aldair Valencia Giraldo fue encontrado exitosamente en la lista de empleados.`);
} else {
  console.log(`El empleado Orlando no fue encontrado en en la lista de empleados`);
}  

await page.close();
});