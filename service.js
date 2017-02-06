'use strict'

var json = {
    "name": "Test"
};

angular.module('toDoList',[])
    .constant('baseURL', 'https://localhost:3000')
    //what do i do here ?? .config()
    .service('')

//==0=0=00=0=0=0=0=0=0=0=0=0=0=00=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0//
angular.module('SimpleRESTWebsite', ['angular-storage', 'ui.router', 'weblogng'])
    .constant('ENDPOINT_URI', 'https://simple-rest-api.herokuapp.com/api/')
    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider

    .service('ItemsModel', function ($http, ENDPOINT_URI) {
        var service = this,
            path = 'items/';

        function getUrl() {
            return ENDPOINT_URI + path;
        }

        function getUrlForId(itemId) {
            return getUrl(path) + itemId;
        }

        service.all = function () {
            return $http.get(getUrl());
        };

        service.fetch = function (itemId) {
            return $http.get(getUrlForId(itemId));
        };

        service.create = function (item) {
            return $http.post(getUrl(), item);
        };

        service.update = function (itemId, item) {
            return $http.put(getUrlForId(itemId), item);
        };

        service.destroy = function (itemId) {
            return $http.delete(getUrlForId(itemId));
        };
    })
