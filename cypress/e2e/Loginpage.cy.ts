import { LoginPage } from "../pages/LoginPage"


describe('Logining Tests', () => {

  const loginpage=new LoginPage
  let testData:any


  before(() => {
    cy.fixture('LoginPage').then((data)=>{
      testData=data;})
  })


  it('passes', function() {
    loginpage.actions.visit()
    loginpage.actions.fillTheUsername(testData.username)
    loginpage.actions.fillThePassword(testData.password)
    loginpage.actions.clickSubmitButton()
  }); 
})
      