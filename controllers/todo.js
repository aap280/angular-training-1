'use strict'


var app = angular.module("toDoList", []);
app.constant('baseURL', 'http://localhost:4000/todo');
//put this here to try and override the options header?
app.config(['$httpProvider', function ($httpProvider) {
  //Reset headers to avoid OPTIONS request (aka preflight)
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
}]);

app.controller("toDoCtrl", function($scope, $http, baseURL) {
  $http.get(baseURL).success(function(data){
    $scope.items = data;
  });
  $scope.addItem = function() {
    var name = $scope.addMe;
    $http.post(baseURL,{"name":'name'}).success(function(){});
  }
  //addItem
  //if name present, kickback errortext
  //add name as JSON
  //$scope.addItem = function (addMe) {
    //var name = {"name": addMe};
   // $http.post(baseURL, name).success(function () {
    /*
    $scope.errortext = "";
    if (!$scope.addMe) {return;}
    else {
    };
    else {
      $scope.errortext = "Duplicate Task";
    };*/
  //});

  });
  /* listen to this noise later
  $scope.removeItem = function (x) {
    $scope.errortext = "";
    $scope.items.splice(x,1);
  }

  $scope.myEnter = function(keyEvent) {
    if (keyEvent.which === 13) {
      if (!$scope.addMe) {return;}
      if ($scope.items.indexOf($scope.addMe) == -1) {
      $scope.items.push($scope.addMe);
      }
      else {
        $scope.errortext = "Duplicate Task";
      }
    }
  } 
});*/


/* 
OLD CONTROLLER (basically)
var app = angular.module("toDoList", []);
app.constant('baseURL', 'https://localhost:4000/todo');
app.controller("toDoCtrl", function($scope, $http, baseURL) {
  //$scope.items = ["Wake Up", "What happened?"];
  $scope.getItems = function () {
    $http.get(baseURL).success(function (data) {
      $scope.items = data;
    });
  }
  $scope.addItem = function () {
    $scope.errortext = "";
    if (!$scope.addMe) {return;}
    if ($scope.items.indexOf($scope.addMe) == -1) {
    $scope.items.push($scope.addMe);
    }
    else {
      $scope.errortext = "Duplicate Task";
    }
  }
  $scope.removeItem = function (x) {
    $scope.errortext = "";
    $scope.items.splice(x,1);
  }
  $scope.myEnter = function(keyEvent) {
    if (keyEvent.which === 13) {
      if (!$scope.addMe) {return;}
      if ($scope.items.indexOf($scope.addMe) == -1) {
      $scope.items.push($scope.addMe);
      }
      else {
        $scope.errortext = "Duplicate Task";
      }
    }
  }
});
*/