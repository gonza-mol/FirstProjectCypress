/// <reference types="Cypress" />
import Header from "../POM/header"
import Login from "../POM/login"
import Data from "../fixtures/user.json"

describe('Tests de Login', () => {


    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
        });
        

    it('Primer Login Test', () => {
        
        const header = new Header();
        const login = new Login();
        let user = Data.users[0];

        header.getLoginOrRegisterOption().should('have.text', 'Login or register');
        header.getLoginOrRegisterOption().click();
        login.getLoginNametxt().type(user.user);
        login.getPasswordtxt().type(user.password);
        login.getBtnLogin().click();

    })
})