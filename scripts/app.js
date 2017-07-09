'use strict';

/**
 * @ngdoc overview
 * @name mdPracticeApp
 * @description
 * # mdPracticeApp
 *
 * Main module of the application.
 */
angular
  .module('mdPracticeApp', ['ngMaterial'])
  .config(function ($mdIconProvider, $mdThemingProvider) {
    $mdIconProvider.defaultIconSet('../images/svg/avatars.svg');
    $mdIconProvider.icon('menu', '../images/svg/menu.svg');

    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');
  });
