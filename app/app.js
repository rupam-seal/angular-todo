  const myNinjaApp = angular.module("myNinjaApp", ["ngRoute", 'ngAnimate']);

  myNinjaApp.config(["$routeProvider", function($routeProvider){
    $routeProvider
      .when('/home', {
        templateUrl: './views/home.html',
        controller: 'NinjaController'
      })
      .when('/directory', {
        templateUrl: './views/directory.html',
        controller: 'NinjaController'
      })
      .when('/contact', {
        templateUrl: './views/contact.html',
        controller: 'ContactController'
      })
      .when('/contact-success', {
        templateUrl: './views/contact-success.html',
        controller: 'ContactController'
      })
      .otherwise({
        redirectTo: '/home'
      })
  }])

  myNinjaApp.directive("randomNinja", [function(){
    return {
      restrict: 'E',
      scope: {
        ninjas: '=',
        title: '='
      },
      templateUrl: './views/randomNinja.html',
      transclude: true,
      replace: true,
      controller: function($scope){
        $scope.random = Math.floor(Math.random() * 4)
      }
    };
  }])

  myNinjaApp.controller("NinjaController", ['$scope', '$http', function($scope, $http){
    $scope.removeNinja = function(ninja) {
      var removeNinja = $scope.ninjas.indexOf(ninja);
      $scope.ninjas.splice(removeNinja, 1);
    }

    $scope.addNinja = function() {
      $scope.ninjas.push(
        {
          name: $scope.newninja.name,
          belt: $scope.newninja.belt,
          rate: parseInt($scope.newninja.rate),
          available: true,
          thumb: "./content/img/pic" + ($scope.ninjas.length + 1) + ".jpg",
        }
      )
      $scope.newninja.name = '';
      $scope.newninja.belt = '';
      $scope.newninja.rate = '';
    }

    $scope.removeAll = function() {
      $scope.ninjas = []; 
    }

    $http.get('./data/ninjas.json').then(function(response){
        $scope.ninjas = response.data
    })

}])

myNinjaApp.controller("ContactController", ['$scope', '$location', function($scope, $location){
  $scope.sendMessage = function() {
    $location.path('/contact-success');
  }
}])


