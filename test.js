const puppeteer = require('puppeteer');

describe('Static Page Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('file://' + __dirname + '/index.html');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('La página tiene el título correcto', async () => {
    const title = await page.title();
    expect(title).toBe('Página de Inicio');
  });

  test('La página contiene un encabezado de bienvenida', async () => {
    const headerText = await page.$eval('header h1', element => element.textContent);
    expect(headerText).toBe('Bienvenido a Mi Página Web');
  });

  test('La navegación contiene el enlace "Inicio"', async () => {
    const navLinks = await page.$$eval('nav a', links => links.map(link => link.textContent));
    expect(navLinks).toContain('Inicio');
  });

  test('El contenido principal tiene un encabezado "Contenido Principal"', async () => {
    const mainHeaderText = await page.$eval('main h2', element => element.textContent);
    expect(mainHeaderText).toBe('Contenido Principal');
  });

  test('El pie de página contiene el texto de derechos de autor', async () => {
    const footerText = await page.$eval('footer p', element => element.textContent);
    expect(footerText).toBe('© 2024 Mi Página Web. Todos los derechos reservados.');
  });
});
