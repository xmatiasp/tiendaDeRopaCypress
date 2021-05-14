describe('Search elements', () =>{
    beforeEach(() =>{
        cy.visit('/')
    })
    it('searchs for elements with multiple results', () =>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResults').then((searchResult)=>{
            cy.get(searchResult.title).should('contain', 'dress');
        })
    })

    it('Search for elements with no results', () =>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResults').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain', 'No results were found for your search');
        })
    })
})