describe('UserNav Link Test', function () {
    it('Tests Home to Create Account link', function () {

        cy.visit('/')

        cy.contains('Create an Account').click()

    })
})

describe('UserNav Link Test', function () {
    it('Tests Home to Login link', function () {

        cy.visit('/')

        cy.contains('Login').click()

    })
})

describe('UserNav Link Test', function () {
    it('Tests Home to Create an Account to Login link', function () {

        cy.visit('/')
        cy.contains('Create an Account').click()
        cy.contains('Login').click()

    })
})

describe('UserNav Link Test', function () {
    it('Tests Home to Login to Create an Account link', function () {

        cy.visit('/')
        cy.contains('Login').click()
        cy.contains('Create an Account').click()

    })
})
