describe('Validate Content', ()=>{
    it('Successfully validate content', () =>{
        cy.request('https://pokeapi.co/api/v2/pokemon/charmeleon').as('charmeleon')
        cy.get('@charmeleon').its('body').should('include', {name : "charmeleon"})
    })

    it('Successfull Validate Limber', ()=>{
        cy.request('https://pokeapi.co/api/v2/ability/7').then((response)=>{
            expect(response.body.name).to.eq('limber')
        })

    })
})