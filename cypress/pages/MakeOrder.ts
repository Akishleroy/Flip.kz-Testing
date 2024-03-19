import { BasePage } from "./BasePage";
export class MakeOrder extends BasePage {
    getters = {
        makeOrderButton:() =>cy.get('[value="Оформить заказ"]').last(),
        chooseAddressButton:() =>cy.get('[value="Выбрать"]'),
        pickUpPointButton:() =>cy.get('[name="order_method_item"]').first(),
        selectAndContinueButton:() =>cy.get('[class="nbtn accepted_mark yellow"]'),
        courierDeliveryButton:() => cy.get('[class="nbtn yellow accepted_mark"]').last(),
        kazpostDeliveryButton:() => cy.get('.item-2 > .table > .cell > .nbtn')



    };

    
    actions = {
        visit:()=>{
            cy.visit('https://www.flip.kz/cart')
        },
        
        makeOrder:()=>{
            this.getters.makeOrderButton().click({force:true})
        },

        chooseAddress:()=>{
            this.getters.chooseAddressButton().click()
        },

        selectDeliveryType:(deliveryType:string)=>{
            cy.contains(deliveryType).click()
        },

        selectPickUpPoint:()=>{
            this.getters.pickUpPointButton().check({force:true})
        },

        selectAndContinue:()=>{
            this.getters.selectAndContinueButton().click({force:true})
        },

        selectCourierDelivery:()=>{
            this.getters.courierDeliveryButton().click({force:true})
        },

        selectKazpostDelivery:()=>{
            this.getters.kazpostDeliveryButton().click({force:true})
        }


    };
}