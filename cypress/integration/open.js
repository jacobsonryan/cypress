const url = 'https://smportal.jpmorganchase.com/siteminderagent/SSOMFALogin.fcc?TYPE=33554433&REALMOID=06-000b93ee-fb5d-129c-978e-1f0ea95350b4&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$zK108OjYqC1yuhfexYm0wGsnbiWeVYdXtqEcNV5YvsIy1JsAR3%2bsdb7kZQSwkj8%2f&TARGET=$SM$HTTPS%3a%2f%2fme%2ejpmorganchase%2ecom%2f'

// Test steps 
describe('Open Webpage', () => {
  it(`Opens ${url}`, () => {
      cy.visit(url)
      cy.checkPageA11y()
  })
})

describe('Types SID', () => {
  it('Inputs SID', () => {
    cy.get('input#USER').type('F669682')
  })
})

describe('Types password', () => {
  it('Inputs password', () => {
    cy.get('input#PASSWORD').type(password)
  })
})

describe('Submits form', () => {
  it('Logs in', () => {
    cy.get('input.submitbutton').first().click()
    cy.checkPageA11y()
  })
})
