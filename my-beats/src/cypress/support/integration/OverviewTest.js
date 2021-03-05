describe('Overview  Test', function () {
    it('Tests Elements in Overview', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();

    })
})

describe('Overview  Test', function () {
    it('Tests Elements in Overview', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
        cy.get('h5');

    })
})
describe('Overview  Test', function () {
    it('Tests Elements in Overview', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
        cy.get('h6');

    })
})