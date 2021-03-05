describe('Displays music data in MyData ', function () {
    it('Tests functionality in MyData', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
        cy.contains('MyData').click()
        cy.get('h5');


    })
})

describe('Displays music data in MyData ', function () {
    it('Tests functionality in MyData', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
        cy.contains('MyData').click()
        cy.get('h6');


    })
})

describe('Displays music data in MyData ', function () {
    it('Tests functionality in "Favorite Genre"', function () {

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

describe('Displays music data in MyData ', function () {
    it('Tests functionality in "Favorite Artits"', function () {

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

describe('Displays music data in MyData ', function () {
    it('Tests functionality in "Listening Time"', function () {

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

describe('Displays music data in MyData ', function () {
    it('Tests functionality of "Favorite Songs"', function () {

        cy.visit('/')

        cy.contains('Login').click()
        cy.get('form');
        cy.get('input[name="email"]').type("123username@testemail.com");
        cy.get('input[name="password"]').type("password");
        cy.get('form').submit();
        cy.contains('MyData').click()
        cy.contains('Favorite Songs').click()


    })
})

describe('Displays music data in MyData ', function () {
    it('Tests functionality of downloading music data', function () {

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