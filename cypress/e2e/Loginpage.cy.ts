import { LoginPage } from "../pages/LoginPage"


describe('Logining Tests', () => {

    const loginpage=new LoginPage

  it('passes', function() {
    loginpage.actions.visit()
    loginpage.actions.fillTheUsername()
    loginpage.actions.fillThePassword()
    loginpage.actions.clickSubmitButton()
  }); 
})
      
//npx cypress open --config baseUrl=https://dev.dmms.kz/work-tasks-master/main --env username=test@test.ru,password=Qwerty12
//https://dev.dmms.kz/work-tasks-master/main
