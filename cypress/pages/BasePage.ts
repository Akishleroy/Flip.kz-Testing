export class BasePage {
    static visitPage(pageUrl) {
      cy.visit(pageUrl);
    }
  
    static typeIntoField(selector, text) {
      cy.get(selector).type(text);
    }
  
    static clickElement(selector) {
      cy.get(selector).click();
    }
  
    static verifyElementVisible(selector) {
      cy.get(selector).should('be.visible');
    }
  
    static verifyElementContainsText(selector, text) {
      cy.get(selector).should('contain', text);
    }
  }
  