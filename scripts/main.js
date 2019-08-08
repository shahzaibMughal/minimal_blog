$(document).ready(function(){





    //-----------------------
    // open menu & close main menu
    //------------------------
    const MENU_OPEN_BTN = $('#menu-open');
    const MENU_CLOSE_BTN = $('#menu-close');
    const MAIN_MENU = $('.main-menu');

    let openMenu = function(){
        // console.log("Todoo: Open the menu");
        MAIN_MENU.slideDown(200);
        MENU_OPEN_BTN.hide();
        MENU_CLOSE_BTN.show();

    };
    let closeMenu = function () {
        // console.log("Todoo: Close the menu");
        MAIN_MENU.slideUp(200);
        MENU_OPEN_BTN.show();
        MENU_CLOSE_BTN.hide();
    };



    closeMenu();  // default
    // openMenu();  // testing



    MENU_OPEN_BTN.on("click",openMenu);
    MENU_CLOSE_BTN.on("click",closeMenu);

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