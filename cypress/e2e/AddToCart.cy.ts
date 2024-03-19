import { AddToCart } from "../pages/AddToCart";
import { LoginPage } from "../pages/LoginPage"
import 'cypress-if';


describe('Tests for Adding different products to cart', () => {

    const loginpage= new LoginPage
    const addToCart= new AddToCart

  before(() => {
    loginpage.actions.visit()
    loginpage.actions.fillTheUsername()
    loginpage.actions.fillThePassword()
    loginpage.actions.clickSubmitButton()
  })

  it('test 1.Adding books to cart', () => {
    addToCart.actions.visit()
    addToCart.actions.selectProductSize()
    addToCart.actions.selectProductAmount()
    addToCart.actions.addToCartProduct()
    addToCart.actions.goToCart()

  }); 

  it('test 2.Adding t-shirts to cart', () => {
    cy.visit('https://www.flip.kz/catalog?subsection=1')
    addToCart.actions.selectBook()
    addToCart.actions.selectBookAmount()
    addToCart.actions.addToCartProduct()
    addToCart.actions.goToCart()

  }); 



})
      
//npx cypress open --config baseUrl=https://dev.dmms.kz/work-tasks-master/main --env username=test@test.ru,password=Qwerty12
//https://dev.dmms.kz/work-tasks-master/main
