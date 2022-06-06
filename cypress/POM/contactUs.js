class contactUsLocators{
    constructor(){
        this.contactUsTitle = '.heading3'
        this.lblFirstName = '#ContactUsFrm_first_name'
        this.lblEmail = '#ContactUsFrm_email'
        this.lblEnquiry = '#ContactUsFrm_enquiry'
        this.btnSumbit = '.col-md-6> .btn'
        this.lblSuccessSendForm = '.mb40>:nth-child(3)'
        this.btnContinue = '.mb40 > .btn'

    }

}

export default class Help{
     constructor(){
         this.locators = new contactUsLocators();
     }

     
     getContactUsTitle(){
        return cy.get(this.locators.contactUsTitle);
    }

    getLblFirstName(){
        return cy.get(this.locators.lblFirstName);
    }

    getLblEmail(){
        return cy.get(this.locators.lblEmail);
    }

    getLblEnquiry(){
        return cy.get(this.locators.lblEnquiry);
    }

    getbtnSubmit(){
        return cy.get(this.locators.btnSumbit);
    }

    getSuccessfulMessageSent(){
        return cy.get(this.locators.lblSuccessSendForm);
    }

    getbtnContinue(){
        return cy.get(this.locators.btnContinue);
    }


    

}