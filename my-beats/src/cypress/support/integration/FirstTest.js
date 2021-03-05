describe('My First Test', function(){
    it('Test', function()
    {
     expect(true).to.equal(true)
    cy.visit('http://localhost:3000/')
    
    cy.contains('Login').click()
    
    cy.url()
    .should('include','/Login')
    
    })
    })

    

// describe('My Test', function(){
//     it('Tests links', function()
//     {
//     //  expect(true).to.equal(true)
//     //cy.visit('https://localhost:3000/')
    
//     cy.contains('Create an Account').click()
    
//     cy.url()
//     .should('include','/SignUpPage')
    
//     })
//     })

    


    // it('Does not do much', function()
    // {
    //  expect(true).to.equal(true)
    // cy.visit('https://localhost:3000/')
    
    // cy.contains('Login').click()
    
    // cy.url()
    // .should('include','/Login')
    
    // })