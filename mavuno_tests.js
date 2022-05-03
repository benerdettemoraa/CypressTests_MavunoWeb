describe('Login',()=>{
  it('User Login',()=>{
    // Visit signin page
    cy.visit('/');
 
  // Enter username and password in form inputs
 cy.get("input[name=username").type('Moraa');
  cy.get("input[name=password]").type('lerato95');
  cy.contains('Login').click()
  })
})
