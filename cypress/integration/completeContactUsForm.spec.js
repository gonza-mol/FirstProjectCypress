/// <reference types="Cypress" />
import Footer from "../POM/footer"
import ContactUs from "../POM/contactUs"

describe('Test Complete Contact Us form', () => {


    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
        });
        

    it('Complete the Contact Us form', () => {
        
        const footer = new Footer();
        const contactUs = new ContactUs();
        
        cy.scrollTo(0, 2700);
        footer.getContactUsHyperlink().click();
        contactUs.getContactUsTitle().should('have.text', 'Contact Us Form');
        contactUs.getLblFirstName().type("Pepe");
        contactUs.getLblEmail().type("pepe-lol@hotmail.com");
        contactUs.getLblEnquiry().type("This is the first message from pepe");
        contactUs.getbtnSubmit().click();
        contactUs.getSuccessfulMessageSent().should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        contactUs.getbtnContinue().click();


        

    })

   
})