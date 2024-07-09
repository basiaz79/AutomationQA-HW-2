describe('Login Test 1', () => {
    beforeEach("Go to page", () => {
        cy.visit("https://www.edu.goit.global/account/login")
    });

    it('Test 1 Login and Logout', () => {
        cy.get('#user_email').type("user888@gmail.com");
        cy.get('input[type="password"]').type("1234567890");
        cy.get('button[type="submit"]').click();
  
      // Znajdź przycisk w prawym górnym rogu i kliknij na niego, aby otworzyć menu
        cy.get('.header-right .menu-button').click();
  
      // Znajdź przycisk Log out w menu i kliknij na niego
        cy.contains('Log out').click();
  
      // Upewnij się, że wróciłeś do strony logowania
        cy.url().should('include', '/account/login');
    });
  });

  
describe('Login Test 2', () => {
    beforeEach("Go to page", () => {
        cy.visit("https://www.edu.goit.global/account/login")
    });

    it('Test 2: Login and Logout with different credentials', () => {
        cy.get('#user_email').type("testowyqa@qa.team");
        cy.get('input[type="password"]').type("QA!automation-1");
        cy.get('button[type="submit"]').click();
        
  
      // Znajdź przycisk w prawym górnym rogu i kliknij na niego, aby otworzyć menu
        cy.get('.header-right .menu-button').click();
  
      // Znajdź przycisk Log out w menu i kliknij na niego
        cy.contains('Log out').click();
  
      // Upewnij się, że wróciłeś do strony logowania
        cy.url().should('include', '/account/login');
    });
  });
  