class loginLocators{
    constructor(){
        this.loginName = '#loginFrm_loginname'
        this.password = '#loginFrm_password'
        this.btnLogin = '#loginFrm>fieldset>button'
       

    }

}

export default class Help{
     constructor(){
         this.locators = new loginLocators();
     }

     getLoginNametxt(){
        return cy.get(this.locators.loginName);
    }

    getPasswordtxt(){
        return cy.get(this.locators.password);
    }

    getBtnLogin(){
        return cy.get(this.locators.btnLogin);
    }
}