describe('Login Test using Custom Command', () => {
    it('Should login via API and visit main page', () => {
      cy.loginViaAPI(); // Memanggil custom command
      cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });
  });
  