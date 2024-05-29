describe('Pruebas de la página de inicio', () => {
  beforeEach(() => {
    cy.visit('../../index.html')
  })

  it('El encabezado muestra el texto correcto', () => {
    cy.get('header h1').should('have.text', 'Bienvenido a Mi Página Web')
  })

  it('El menú de navegación contiene los enlaces correctos', () => {
    cy.get('nav a').should('have.length', 4)
    cy.get('nav a').eq(0).should('have.text', 'Inicio')
    cy.get('nav a').eq(1).should('have.text', 'Acerca de')
    cy.get('nav a').eq(2).should('have.text', 'Servicios')
    cy.get('nav a').eq(3).should('have.text', 'Contacto')
  })

  it('El pie de página muestra el texto de derechos de autor', () => {
    cy.get('footer p').should('have.text', '© 2024 Mi Página Web. Todos los derechos reservados.')
  })

})
