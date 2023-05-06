const myNinjaApp = angular.module("myNinjaApp", [])

myNinjaApp.controller("NinjaController", ['$scope', function($scope){
  // $scope.message = "hey, all"
  // $scope.ninjas = ["yoshi", "crystal", "ryu", "shaun"]
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

  $scope.ninjas = [
    {
      name: "yoshi",
      belt: "green",
      rate: 50,
      available: true,
      thumb: "./content/img/pic1.jpg"
    },
    {
      name: "crystal",
      belt: "yellow",
      rate: 30,
      available: false,
      thumb: "./content/img/pic2.jpg"
    },
    {
      name: "ryu",
      belt: "orange",
      rate: 10,
      available: true,
      thumb: "./content/img/pic3.jpg"
    },
    {
      name: "shaun",
      belt: "black",
      rate: 100,
      available: true,
      thumb: "./content/img/pic4.jpg"
    },
  ]
}])


