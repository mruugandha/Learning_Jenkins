describe('My First Test', () => {
    it('Visits the index file', () => {
      cy.visit('/index.html')
      //cy.contains(" Hello World!")
      cy.get('body').should("have.text","Hello World!\n")
    })
  })