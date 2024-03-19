import { BasePage } from "./BasePage";
export class LoginPage extends BasePage {
    getters = {
        usernameField:() =>cy.contains('Телефон или E-mail'),
        passwordField:() =>cy.get('[id="password"]'),
        submitButton:() =>cy.get('.password-form > .nbtn'),
        categoryButton:() =>cy.get('[alt="Одежда и аксессуары"]'),
        productSelectButton:() =>cy.get('.good-list-item').first(),
        cartAddButton:() =>cy.get('#cart_button'),
        productSize:() =>cy.contains("52"),
        iconClose:() =>cy.get('.float-right'),
        goToCartButton:() =>cy.get('[id="w_cart"]'),
        makeOrderButton:()=>cy.get('[name="order_button"]').first(),
        credentialsFullName:()=>cy.get('#fullName'),
        credentialsStreet:()=>cy.get('#address1'),
        credentialsHouse:()=>cy.get('#building'),
        credentialsFlat:()=>cy.get('#flat'),
        credentialsEnterance:()=>cy.get('#entrance'),
        credentialsFloor:()=>cy.get('#floor'),
        credentialsBuzzer:()=>cy.get('#buzzer'),
        credentialsCommentary:()=>cy.get('#commentary'),
        saveCredentialsButton:()=>cy.get('.nbtn'),
        deliveryTypeButton:()=>cy.get('[data-method-id="1"]'),
        selectDeliveryAndContinue:()=>cy.get('[class="nbtn yellow accepted_mark"]').first(),
        saveAndPay:()=>cy.get('[class="nbtn yellow accepted_mark"]').first(),





        






       
    };

    
    actions = {
        visit:()=>{
            cy.visit('https://www.flip.kz/user?password')
        },

        fillTheUsername:()=>{
            this.getters.usernameField().type("azhankebaev@gmail.com")
        },

        fillThePassword:()=>{
            this.getters.passwordField().type("Miras2004")
        },

        clickSubmitButton:()=>{
            this.getters.submitButton().click()
        },

        selectProduct:()=>{
            this.getters.categoryButton().click()
            this.getters.productSelectButton().click()
        },
        
        selectProductSize:()=>{
            this.getters.productSize().click()
        },
        
        addToCartProduct:()=>{
            this.getters.cartAddButton().click()
            this.getters.iconClose().click()
        },

        goToCart:()=>{
            this.getters.goToCartButton().click()
        },

        makeOrder:()=>{
            this.getters.makeOrderButton().click()
        },

        fillCredentials:()=>{
            this.getters.credentialsFullName().type("Miras Kuandykov")
            this.getters.credentialsStreet().type("Zhirentaeve")
            this.getters.credentialsHouse().type("2")
            this.getters.credentialsFlat().type("501")
            this.getters.credentialsEnterance().type("1")
            this.getters.credentialsFloor().type("5")
            this.getters.credentialsBuzzer().type("501xxx")
            this.getters.credentialsCommentary().type("thank you")
            this.getters.saveCredentialsButton().click()
        },

        selectDeliveryType:()=>{
            this.getters.deliveryTypeButton().click()
            this.getters.selectDeliveryAndContinue().click()
        },


    };
}