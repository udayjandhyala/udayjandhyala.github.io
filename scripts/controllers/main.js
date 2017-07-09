'use strict';

/**
 * @ngdoc function
 * @name mdPracticeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mdPracticeApp
 */
angular.module('mdPracticeApp')
  .controller('MainCtrl', ['UserService', '$mdSidenav', function (userService, $mdSidenav) {
    var vm = this;

    vm.users = [];
    vm.selected = null;

    userService.getUsers().then(function (data) {
      console.log(data);
      vm.users = data;
      vm.selected = data[0];
    });

    vm.promiseTesting = function () {
      new Promise(function(resolve) {
        console.log('first');
        resolve('second');

      }).then (function (data) {
        console.log(data);
        return 'third';

      }).then (function (data) {
        console.log(data);
        return 'fourth';

      }).then (function (data) {
        console.log(data);
      });
    }

    vm.setSelected = function (selectedItem) {
      vm.selected = selectedItem;
    };

    vm.toggleUsersList = function () {
      $mdSidenav('left').toggle();
    };

    vm.promiseTesting();

  }]);
