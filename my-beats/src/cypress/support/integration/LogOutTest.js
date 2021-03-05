describe('LogOut Function', function () {
    it('Tests login to account then logging out', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
        cy.contains('Logout').click()
    })
})

describe('LogOut Function', function () {
    it('Tests logging out from Overview page', function () {

        cy.visit('/OverView')
        cy.contains('Logout').click()
    })
})

describe('LogOut Function', function () {
    it('Tests logging out from MyData page', function () {

        cy.visit('/MyData')
        cy.contains('Logout').click()
    })
})

describe('LogOut Function', function () {
    it('Tests logging out from MyAccount page', function () {

        cy.visit('/MyAccount')
        cy.contains('Logout').click()
    })
})