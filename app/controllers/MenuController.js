//Menu Controller
shippingApp.controller('MenuController', function ($scope) {
    var menuC = this;
    menuC.changePage = changePage;
    menuC.template = "app/html/Menu.html";

    //Menu Options for view on template
    this.Options = [
        { Description: "Home", Active: true, Icon: "fas fa-home fa-2x", href:"/" },
        { Description: "Message", Active: false, Icon: "fas fa-envelope fa-2x", href: "/message" },
        { Description: "Wishlist", Active: false, Icon: "fas fa-star fa-2x", href: "/wishlist"},
        { Description: "Settings", Active: false, Icon: "fas fa-cog fa-2x", href: "/settings"},
        { Description: "My Account", Active: false, Icon: "fas fa-user fa-2x" , href: "/myaccount"}
    ];

    //Event executed when change de option in the menu
    function changePage(option) {
        for (var i = 0; i < menuC.Options.length; i++) {
            if (menuC.Options[i] === option) {
                var currentMenu = document.getElementById("MenuRedirect");
                currentMenu.href = menuC.Options[i].href;
                currentMenu.click();
                menuC.Options[i].Active = true;
            } else {
                menuC.Options[i].Active = false;
            }
        }
    };
   
});