import { LoginPage } from "../pages/LoginPage"
import 'cypress-if';
import { MakeOrder } from "../pages/MakeOrder";


describe('Tests for delivery methods', () => {

    const loginpage=new LoginPage
    const makeOrder= new MakeOrder
    let testData:any

  before(() =>{
    cy.fixture('AddToCart').then((data)=>{
      testData=data;})
  })

  beforeEach(() =>{
    loginpage.actions.visit()
    loginpage.actions.fillTheUsername(testData.username)
    loginpage.actions.fillThePassword(testData.password)
    loginpage.actions.clickSubmitButton()
    
  })

  it('test 1. pick-up point delivery ', function() {
    makeOrder.actions.visit()
    makeOrder.actions.makeOrder()
    makeOrder.actions.chooseAddress()
    makeOrder.actions.selectPickUpPoint()
    makeOrder.actions.selectAndContinue()

  }); 

  it('test 2. courier delivery ', function() {
    makeOrder.actions.visit()
    makeOrder.actions.makeOrder()
    makeOrder.actions.chooseAddress()
    makeOrder.actions.selectDeliveryType("Курьерская доставка ")
    makeOrder.actions.selectCourierDelivery()
  }); 

  
  it('test 3. tastamat delivery ', function() {
    makeOrder.actions.visit()
    makeOrder.actions.makeOrder()
    makeOrder.actions.chooseAddress()
    makeOrder.actions.selectDeliveryType("Постамат «Тастамат» ")
    makeOrder.actions.selectPickUpPoint()
    makeOrder.actions.selectAndContinue()
   
  }); 

  it('test 3. kazpost delivery ', function() {
    makeOrder.actions.visit()
    makeOrder.actions.makeOrder()
    makeOrder.actions.chooseAddress()
    makeOrder.actions.selectDeliveryType("Почта KazPost ")
    makeOrder.actions.selectKazpostDelivery()
   
  }); 




})
