// Inject ngStorage
angular.module('starter', ['ionic', 'ngStorage'])

// create a new factory
.factory ('StorageService', function ($localStorage) {

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

    getAll: getAll,
    add: _add,
    remove: _remove
  };
})