describe('Testing in Sample React Jsx App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.wait(2000);
    })
    it('sample-test-case', () => {        
        cy.get('.App-logo').should('have.attr','src').should('include','/static/media/logo.6ce24c58.svg');
        // cy.get('.App-logo').should('include','/static/media/logo.6ce24c58.svg');
        cy.get('p').should('have.text','Edit src/App.js and save to reload.');
        cy.get('.App-link').click();
    })
})
