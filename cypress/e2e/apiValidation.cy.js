import Ajv from "ajv";

describe('API Validation with JSON Schema', () => {
    it('Validates API response against JSON Schema', ()=>{
        const ajv = new Ajv();

        cy.fixture('schema.json').then((schema) =>{
            cy.request('GET', 'https://reqres.in/api/users?page=2&per_page=1&delay=3').then((response)=>{
                console.log(response.body);

                const validate = ajv.compile(schema);
                const valid = validate(response.body);


                if(!valid){
                    console.error(validate.errors);
                }

                //expect(valid).to.be.true;
            })
        })
    })
})