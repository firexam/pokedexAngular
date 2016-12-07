'use strict';

/**
 * @ngdoc function
 * @name pokedexAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokedexAngularApp
 */

app.controller('MainCtrl', ['$scope','pokemonFactory',function ($scope,pokemonFactory) {
$scope.pokemonList=[];
$scope.url="";
          $scope.loadMoreRecords = function () {
            $scope.loading = true;
              pokemonFactory.getList($scope.url).success(function(data){
              for(var i=0;i<data.results.length;i++){
                $scope.pokemonList.push(data.results[i]);
              }
                 $scope.url=data.next;
                 $scope.loading = false;
             });
          };


  }]);


app.factory('pokemonFactory',['$http',function($http){
  var service={},
      urlBase='http://pokeapi.co/api/v2';
  service.getList=function(url){
    url=url===""?(urlBase+'/pokemon'):url;
  return  $http.get(url);
  };
  return service;
}]);

app.directive('loading', function () {
      return {
        restrict: 'E',
        replace:true,
        template: '<div class="loading"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20" />LOADING...</div>',
        link: function (scope, element, attr) {
              scope.$watch('loading', function (val) {
                  if (val)
                      $(element).show();
                  else
                      $(element).hide();
              });
        }
      }
  });
