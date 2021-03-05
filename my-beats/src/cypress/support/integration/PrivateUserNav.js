describe('Private UserNav Function', function () {
    it('Tests UserNav once user is logged in to the account', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
        cy.contains('MyData').click()

    })
})

describe('Private UserNav Function', function () {
    it('Tests UserNav once user is logged in to the account', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
        cy.contains('MyAccount').click()

    })
})

describe('Private UserNav Function', function () {
    it('Tests UserNav once user is logged in to the account', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
        cy.contains('MyData').click()
        cy.contains('MyAccount').click()
        cy.contains('Logout').click()

    })
})

describe('Private UserNav Function', function () {
    it('Tests UserNav once user is logged in to the account', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
        cy.contains('MyAccount').click()        
        cy.contains('MyData').click()
        cy.contains('Logout').click()

    })
})


describe('Private UserNav Function', function () {
    it('Tests UserNav once user is logged in to the account', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
        cy.contains('MyData').click()
        cy.contains('MyOverview').click()       
        cy.contains('MyAccount').click()
        cy.contains('Logout').click()

    })
})