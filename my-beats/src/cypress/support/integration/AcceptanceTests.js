describe('Feature: Registration', function () {
    it('Scenario: Registering with a pre-existing email', function () {

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

describe('Feature: Registration', function () {
    it('Scenario: Registering with mismatched passwords', function () {

        cy.visit('/')

        cy.contains('Create an Account').click()
        cy.get('form');
        cy.get('input[name="username"]').type("123username");
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="passwordOne"]').type("password");
        cy.get('input[name="passwordTwo"]').type("123349999999999999");

        cy.get('form').submit();

    })
})

describe('Feature: Registration', function () {
    it('Scenario: Registration with a valid email and password combination', function () {

        cy.visit('/')

        cy.contains('Create an Account').click()
        cy.get('form');
        cy.get('input[name="username"]').type("testUser");
        cy.get('input[name="email"]').type("test@testemail.com");
        cy.get('input[name="passwordOne"]').type("password");
        cy.get('input[name="passwordTwo"]').type("password");

        cy.get('form').submit();

    })
})

describe('Feature: Login/Logout', function () {
    it('Scenario: Login', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();

    })
})

describe('Feature: Login/Logout', function () {
    it('Scenario: Logout', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();

        cy.contains('Logout').click()

    })
})

describe('Feature: Charting', function () {
    it('Scenario: Charting favorite artists ', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
        cy.contains('MyData').click()
        cy.contains('Favorite Artists').click()


    })
})

describe('Feature: Charting', function () {
    it('Scenario: Charting favorite genres', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
        cy.contains('MyData').click()
        cy.contains('Favorite Genre').click()


    })
})


describe('Feature: Charting ', function () {
    it('Scenario: Charting listening time', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
        cy.contains('MyData').click()
        cy.contains('Listening Time').click()


    })
})

describe('Feature: Charting ', function () {
    it('Scenario: Share music data with friends', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
        cy.contains('MyData').click()
        cy.get('button').click();


    })
})