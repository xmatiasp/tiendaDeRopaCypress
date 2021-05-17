
describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Login with incorrect email', ()=>{
        cy.login('something', '1234')
        cy.fixture('logIn').then((login)=>{
            cy.get(login.incorrectLoginBanner).should('contain', 'Invalid email address.')
        })
    })
})