import { AddToCart } from "../pages/AddToCart";
import { LoginPage } from "../pages/LoginPage"
import 'cypress-if';


describe('Tests for Adding different products to cart', () => {

    const loginpage= new LoginPage
    const addToCart= new AddToCart
    let testData:any

  before(() => {
    cy.fixture('AddToCart').then((data)=>{
      testData=data;})
    
  })

  it('test 1.Adding t-shirts to cart', () => {
    loginpage.actions.visit()
    loginpage.actions.fillTheUsername(testData.username)
    loginpage.actions.fillThePassword(testData.password)
    loginpage.actions.clickSubmitButton()

    addToCart.actions.visit()
    addToCart.actions.selectProductSize(testData.productSize)
    addToCart.actions.selectProductAmount(testData.productAmount)
    addToCart.actions.addToCartProduct()
    addToCart.actions.goToCart()

  }); 

  it('test 2.Adding books to cart', () => {
    cy.visit('https://www.flip.kz/catalog?subsection=1')
    addToCart.actions.selectBook()
    addToCart.actions.selectProductAmount(testData.productAmount)
    addToCart.actions.addToCartProduct()
    addToCart.actions.goToCart()

  }); 

})
