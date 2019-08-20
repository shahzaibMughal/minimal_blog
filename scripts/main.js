$(document).ready(function(){





    //-----------------------
    // open menu & close main menu
    //------------------------
    const MENU_OPEN_BTN = $('#menu-open');
    const MENU_CLOSE_BTN = $('#menu-close');
    const MENU_TOGGLER_CONTAINER = $('.menu-toggler-container');


    const MAIN_MENU = $('.main-menu');
    let isMenuOpen = false; // by default menu is closed

    let openMenu = function(){
        MAIN_MENU.slideDown(200);
        MENU_OPEN_BTN.hide();
        MENU_CLOSE_BTN.show();
    };
    let closeMenu = function () {
        MAIN_MENU.slideUp(200);
        MENU_OPEN_BTN.show();
        MENU_CLOSE_BTN.hide();
    };
    let toggleMenu = function () {
        isMenuOpen ? closeMenu() : openMenu();
        isMenuOpen=!isMenuOpen;
    };


    isMenuOpen ? openMenu() :closeMenu() ; // apply default


    MENU_OPEN_BTN.on("click",openMenu);
    MENU_CLOSE_BTN.on("click",closeMenu);
    MENU_TOGGLER_CONTAINER.on("click",toggleMenu);     // a little fix, without this, user can't open menu by click on "MENU" text


    //-----------------------
    // End of open menu & close main menu
    //------------------------




















    //-----------------------
    // open & close search box
    //------------------------
    const SEARCH_OPEN_BTN = $('#search-open');
    const SEARCH_CLOSE_BTN = $('#search-close');
    const SEARCH_BOX = $('#search-box');
    const SEARCH_BOX_INPUT = $('#search-box input');

    let openSearch = function(){
        // console.log("Todooo: Open the Search");
        SEARCH_BOX.show(100);
        SEARCH_BOX_INPUT.focus();
        SEARCH_OPEN_BTN.hide(100);
        SEARCH_CLOSE_BTN.show(100);

    };
    let closeSearch = function () {
        // console.log("Todoo: Close the Search");
        SEARCH_BOX.hide(100);
        SEARCH_OPEN_BTN.show(100);
        SEARCH_CLOSE_BTN.hide(100);
    };
    closeSearch(); // by default
    // openSearch(); // testing



    SEARCH_OPEN_BTN.on("click",openSearch);
    SEARCH_CLOSE_BTN.on("click",closeSearch);


    //-----------------------
    // End of open & close search box
    //------------------------


});