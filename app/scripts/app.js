'use strict';

/**
 * @ngdoc overview
 * @name pokedexAngularApp
 * @description
 * # pokedexAngularApp
 *
 * Main module of the application.
 */
var app=
angular
  .module('pokedexAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'infinite-scroll'
  ]);

  app
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/detail/:param', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
        controllerAs: 'detail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
