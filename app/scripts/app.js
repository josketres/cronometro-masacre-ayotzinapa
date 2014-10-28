'use strict';

/**
 * @ngdoc overview
 * @name cronometroMasacreAyotzinapaApp
 * @description
 * # cronometroMasacreAyotzinapaApp
 *
 * Main module of the application.
 */
angular
  .module('cronometroMasacreAyotzinapaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'google-maps',
    'angulike'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run([
    '$rootScope',
    function($rootScope) {
      $rootScope.facebookAppId = '982947961730970';
    }
  ]);