describe('Login Link Test', function () {
    it('Tests Login link', function () {

        cy.visit('/')

        cy.contains('Login').click()

        cy.url()
            .should('include', '/Login')

    })
})

describe('Login Form', function () {
    it('Tests Login Form', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');


    })
})

describe('Login Form', function () {
    it('Tests username input on login form', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");


    })
})

describe('Login Form', function () {
    it('Tests password input on login form', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="password"]').type("123username");


    })
})

describe('Login Form', function () {
    it('Tests Login sign in feature', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();



    })
})


