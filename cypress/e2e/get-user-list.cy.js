describe('Get User List', ()=>{
    it('Verify the list users will displyed', () =>{
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users?page=2&per_page=1&delay=3',
        }).as('users')

        cy.get('@users').its('status').should('equal', 200)
    });

    it('Verify the list users will displyed without params', () =>{
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users',
        }).as('users')

        cy.get('@users').its('status').should('equal', 200)
    });

    it('Add a new user', ()=>{
        var user = {
            "name" : 'Morpheus',
            "job"  : 'Leader'
        }

        cy.request('POST', 'https://reqres.in/api/users', user).as('add_user')

        cy.get('@add_user').should((response)=>{
            expect(response.body.name).to.equal(user.name);
            expect(response.body.job).to.equal(user.job);
            
        })
    })
})