/// <reference types="Cypress" />
import Header from "../POM/header"
import Login from "../POM/login"
import MyAccount from "../POM/myAccount"

import Data from "../fixtures/user.json"

describe('Being logged click on Manage Address Book box', () => {


    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
        });

        
    it('Verify that I can select the Manage Address Book box', () => {
        
        const header = new Header();
        const login = new Login();
        const myaccount = new MyAccount();
        let user = Data.users[0];

        header.getLoginOrRegisterOption().click();
        login.getLoginNametxt().type(user.user);
        login.getPasswordtxt().type(user.password);
        login.getBtnLogin().click();
        myaccount.getMyAccountLabel().should('have.text', ' My Account');
        myaccount.getManageAddressBookBox().click();

    })


   
})