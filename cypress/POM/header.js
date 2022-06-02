class headerLocators{
    constructor(){
        this.loginorRegisterOption = 'ul#customer_menu_top a'
        this.specialsOption = 'ul#main_menu_top li.dropdown:nth-child(1)'
        this.accountOption = 'ul#main_menu_top li.dropdown:nth-child(2)'
        this.carOption = 'ul#main_menu_top li.dropdown:nth-child(3)'
        this.checkoutOption = 'ul#main_menu_top li.dropdown:nth-child(4)'
        this.searchTextBox = 'input#filter_keyword'
        this.currencyBox = 'div.block_6 ul.nav.language.pull-left a.dropdown-toggle'
        this.itemsBox = 'div.block_7 ul.nav.topcart.pull-left a.dropdown-toggle'
        this.homeItems ='#categorymenu>nav>ul>li:nth-child(1)>a'
        this.apparelItems = '#categorymenu>nav>ul>li:nth-child(2)>a'
        this.makeupItems = '#categorymenu>nav>ul>li:nth-child(3)>a'
        this.skinCareItems = '#categorymenu>nav>ul>li:nth-child(4)>a'
        this.fraganceItems = '#categorymenu>nav>ul>li:nth-child(5)>a'
        this.menItems = '#categorymenu>nav>ul>li:nth-child(6)>a'
        this.hairCareItems = '#categorymenu>nav>ul>li:nth-child(7)>a'
        this.booksItems = '#categorymenu>nav>ul>li:nth-child(8)>a'

    }

}

export default class Help{
     constructor(){
         this.locators = new headerLocators();
     }

     getLoginOrRegisterOption(){
         return cy.get(this.locators.loginorRegisterOption);
     }

     getSpeacialsOption(){
        return cy.get(this.locators.specialsOption);
    }

    getAccountOption(){
        return cy.get(this.locators.accountOption);
    }

    getCarOption(){
        return cy.get(this.locators.carOption);
    }

    getCheckOutOption(){
        return cy.get(this.locators.checkoutOption);
    }

    getSearchTextOption(){
        return cy.get(this.locators.searchTextBox);
    }

    getCurrencyOption(){
        return cy.get(this.locators.currencyBox);
    }

    getItemsOption(){
        return cy.get(this.locators.itemsBox);
    }

    getHomeItems(){
        return cy.get(this.locators.homeItems);
    }

    getApparelItems(){
        return cy.get(this.locators.apparelItems);
    }
    
    getMakeUpItems(){
        return cy.get(this.locators.makeupItems);
    }

    getSkinCareItems(){
        return cy.get(this.locators.skinCareItems);
    }
    
    getHairCareItems(){
        return cy.get(this.locators.hairCareItems);
    }

    getMenuItems(){
        return cy.get(this.locators.menItems);
    }

    getBooksItems(){
        return cy.get(this.locators.booksItems);
    }

}