class footerLocators{
    constructor(){
        this.contactUsLink = '.info_links_footer>:nth-child(5)>a'
        

    }

}

export default class Help{
     constructor(){
         this.locators = new footerLocators();
     }

     
     getContactUsHyperlink(){
        return cy.get(this.locators.contactUsLink);
    }

   


    

}