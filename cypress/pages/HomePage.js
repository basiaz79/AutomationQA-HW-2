export class HomePage {
  // Navigate to menu
  openMenu() {
    cy.get('#open.menu').click();
  }

  logout() {
    cy.contains('Log out').click();
    }
}