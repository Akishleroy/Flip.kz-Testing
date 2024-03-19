import { BasePage } from "./BasePage";
export class AddToCart extends BasePage {
    getters = {


        productSize:() =>cy.get('[name="size_av"]').first(),
        productAmount:() =>cy.get('[name="cart_count_produce"]').first(),
        addToCartButton:() =>cy.get('#cart_button'),
        goToCartButton:() => cy.contains("Перейти в корзину"),
        selectBook:() =>cy.get('[class="good-list-item"]').first(),
        selectBookAmount:()=>cy.get('.small'),

        



    };

    
    actions = {
        visit:()=>{
            cy.visit('https://www.flip.kz/catalog?prod=3102270')
        },

        
        selectProductSize:()=>{
            this.getters.productSize().click({force:true})
        },

        selectProductAmount:()=>{
            this.getters.productAmount().select('4')
        },

        addToCartProduct:()=>{
            this.getters.addToCartButton().click()
        },

        goToCart:()=>{
            this.getters.goToCartButton().click({force:true})
        },

        selectBook:()=>{
            this.getters.selectBook().click()
        },

        selectBookAmount:()=>{
            this.getters.selectBookAmount().select('4')

        }


       


    };
}