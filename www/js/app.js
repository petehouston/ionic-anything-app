// Inject ngStorage
angular.module('starter', ['ionic', 'ngStorage'])

// create a new factory
.factory ('StorageService', function ($localStorage) {

  $localStorage = $localStorage.$default({
    things: []
  });

  var _getAll = function () {
    return $localStorage.things;
  };

  var _add = function (thing) {
    $localStorage.things.push(thing);
  }

  var _remove = function (thing) {
    $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
  }

  return {
    getAll: _getAll,
    add: _add,
    remove: _remove
  };
})

// controller
.controller( 'MainCtrl', function ($scope, StorageService) {
  $scope.things = StorageService.getAll();

  $scope.add = function (newThing) {
    StorageService.add(newThing);
  };

  $scope.remove = function (thing) {
    StorageService.remove(thing);
  };
})