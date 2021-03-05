describe('Home Link Test', function () {
    it('Tests Home link', function () {

        cy.visit('/')

    })
})

describe('Home Test', function () {
    it('Tests paragraph container from Home page', function () {

        cy.visit('/')

        cy.get('p');
        // cy.get('input[name="email"]').type("123username@testemail.com");


    })
})

describe('Home Test', function () {
    it('Tests paragraph container from Home page', function () {

        cy.visit('/')

        cy.get('h6');


    })
})

describe('Home Test', function () {
    it('Tests Video container from Home page', function () {

        cy.visit('/')

        cy.get('video');


    })
})