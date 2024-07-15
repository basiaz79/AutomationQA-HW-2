export class Login {
    // Navigate to page
    navigate() {
      cy.visit("https://www.edu.goit.global/account/login");
    }
  
    // Validate Login Form
    validateLoginForm() {
      cy.get("#user_email").should("be.visible");
      cy.get("#user_password").should("be.visible");
      cy.contains('Log in').should("be.visible");
    }

    // Login Input Credentials
    typeLogInCredentials(loginCredential, passwordCredential) {
        //Typing and validating login credentials
        cy.get("#user_email").type(loginCredential);
        cy.get("#user_email").should('have.value', loginCredential);
        // Typing and validating password credentials
        cy.get("#user_password").type(passwordCredential);
        cy.get("#user_password").should('have.value', passwordCredential);
    }

    // Submit login credentials 
    loginSubmit() {
        cy.contains('Log in').click();
    }
}
  
    