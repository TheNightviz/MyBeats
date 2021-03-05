describe('Account Link Test', function () {
    it('Tests Account link', function () {
        expect(true).to.equal(true)

        cy.visit('/')

        cy.contains('Create an Account').click()

        cy.url()
            .should('include', '/SignUpPage')

    })
})

describe('Account Registration Form', function () {
    it('Tests Account Registration Form', function () {

        cy.visit('/')

        cy.contains('Create an Account').click()
        cy.get('form');


    })
})

describe('Account Registration Form', function () {
    it('Tests username input on registration form', function () {

        cy.visit('/')

        cy.contains('Create an Account').click()
        cy.get('form');
        cy.get('input[name="username"]').type("123username");


    })
})

describe('Account Registration Form', function () {
    it('Tests email input on registration form', function () {

        cy.visit('/')

        cy.contains('Create an Account').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");


    })
})

describe('Account Registration Form', function () {
    it('Tests password input on registration form', function () {

        cy.visit('/')

        cy.contains('Create an Account').click()
        cy.get('form');
        cy.get('input[name="passwordOne"]').type("password");


    })
})

describe('Account Registration Form', function () {
    it('Tests password confirmation input on registration form', function () {

        cy.visit('/')

        cy.contains('Create an Account').click()
        cy.get('form');
        cy.get('input[name="passwordTwo"]').type("password");


    })
})

describe('Account Registration Form', function () {
    it('Tests Registration sign up feature', function () {

        cy.visit('/')

        cy.contains('Create an Account').click()
        cy.get('form');
        cy.get('input[name="username"]').type("123username");
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="passwordOne"]').type("password");
        cy.get('input[name="passwordTwo"]').type("password");

        cy.get('form').submit();



    })
})

