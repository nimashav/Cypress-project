/// <reference types="cypress"/>


it('google test', function () {

  cy.visit('https://google.com')
  cy.get('[name="q"]').type('Automation Step by Step{enter}')

  //cy.get('[name="q"]', {timeout:6000}).type('Automation Step by Step{enter}')

  //cy.get(':nth-child(1) > .A6K0A > .wHYlTd > .N54PNb > .jGGQ5e > .yuRUbf > .b8lM7 > .V9tjod > .zReHs > .LC20lb').click()

  //cy.wait(4000)

  cy.contains('Videos').click()
})

it.only('login test', function () {

  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[name="username"]').type('Admin')
  cy.get('[name="password"]').type('admin123')
  cy.get('.oxd-button').click()
  cy.get(':nth-child(1) > .oxd-main-menu-item').click()
  cy.get('.orangehrm-header-container > .oxd-button').click()
  cy.get('.oxd-button--secondary').click()
})
