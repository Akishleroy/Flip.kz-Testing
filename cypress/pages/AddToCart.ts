import { BasePage } from "./BasePage";
export class AddToCart extends BasePage {
    getters = {
        productSizeField:() =>cy.get('[class="size-color"]'),
        productAmountField:() =>cy.get('[name="cart_count_produce"]'),
        addToCartButton:() =>cy.get('#cart_button'),
        goToCartButton:() => cy.contains("Перейти в корзину"),
        selectBook:() =>cy.get('[class="good-list-item"]').first(),
        selectBookAmount:()=>cy.get('.small'),
    };

    
    actions = {
        
        visit:()=>{
            cy.visit('https://www.flip.kz/catalog?prod=3102270')
        },

        
        selectProductSize:(productSize:number)=>{
            this.getters.productSizeField().contains(productSize).click({force:true})
        },

        selectProductAmount:(productAmount:number)=>{
            this.getters.productAmountField().if().select(productAmount).else()
            .log('no access to choose number')
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

    };
}