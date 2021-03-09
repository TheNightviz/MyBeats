describe('Display MyAccount page', function () {
    it('Tests MyAccount page', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
              
        cy.contains('MyAccount').click()
        cy.get('h1');

        
    })
})


describe('Display MyAccount page', function () {
    it('Tests MyAccount page', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
              
        cy.contains('MyAccount').click()
        cy.get('h1');
        cy.contains('Logout').click()

        
    })
})

describe('Display MyAccount page', function () {
    it('Tests MyAccount page', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
              
        cy.contains('MyAccount').click()
        cy.get('h6');

        
    })
})

describe('Display MyAccount page', function () {
    it('Tests MyAccount page', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
              
        cy.contains('MyAccount').click()
        cy.get('h6');
        cy.contains('Logout').click()

        
    })
})