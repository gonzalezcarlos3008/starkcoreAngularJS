// App.js


// include ngRoute for all our routing needs
var shippingApp = angular.module('shippingApp', ['ngRoute']);

// configure our routes
shippingApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'app/html/Shippin.html',
            controller: 'ShippingController'
        })

        .when('/index', {
            templateUrl: 'app/html/Shippin.html',
            controller: 'ShippingController'
        })

        // route for the message page
        .when('/message', {
            templateUrl: 'app/html/General.html',
            controller: 'MessageController'
        })

        // route for the wishlist page
        .when('/wishlist', {
            templateUrl: 'app/html/General.html',
            controller: 'WishlistController'
        })

        // route for the settigns page
        .when('/settings', {
            templateUrl: 'app/html/General.html',
            controller: 'SettingsController'
        })

        // route for the my account page
        .when('/myaccount', {
            templateUrl: 'app/html/General.html',
            controller: 'MyAccountController'
        });
    $locationProvider.html5Mode(true);
});