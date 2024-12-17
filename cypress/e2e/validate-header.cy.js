describe('Validate Header', ()=>{
    it.only('Successfully validate content-type',()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
    })

    it.only('Successfully validate body',()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon')
          .its('body')
          .its('abilities')
          .should((abilities) => {
            const abilityNames = abilities.map((a) => a.ability.name);
            expect(abilityNames).to.include('limber');
          })
    })
})