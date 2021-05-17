describe('Search elements', () =>{
    beforeEach(() =>{
        cy.visit('/')
    })
    it('searchs for elements with multiple results', () =>{
        cy.search('dress')
        cy.fixture('searchResults').then((searchResult)=>{
            cy.get(searchResult.title).should('contain', 'dress');
        })
    })

    it('Search for elements with no results', () =>{
        cy.search('qwerty')
        cy.fixture('searchResults').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain', 'No results were found for your search');
        })
    })
})