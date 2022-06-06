class myAccountLocators{
    constructor(){
        
        this.lblMyAccount = '#maincontainer div>h1>span.maintext'
        this.boxManageAddressBook = '#maincontainer div.col-md-9.col-xs-12.mt20 li:nth-child(3)'

    }

}

export default class Help{
     constructor(){
         this.locators = new myAccountLocators();
     }

     

    getMyAccountLabel(){
        return cy.get(this.locators.lblMyAccount);
    }

    getManageAddressBookBox(){
        return cy.get(this.locators.boxManageAddressBook);
    }


}