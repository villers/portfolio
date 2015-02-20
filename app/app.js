var app = angular.module("app",['ngRoute']);

app.config(function($routeProvider, $locationProvider){

    $routeProvider.when('/', {
        templateUrl:"app/templates/home.html",
        controller:"HomeController"
    })
    .when('/profil', {
        templateUrl:"app/templates/profil.html",
        controller:"ProfilController"
    })
    .when('/competences', {
        templateUrl:"app/templates/competences.html",
        controller:"CompetencesController"
    })
    .when('/projets', {
        templateUrl:"app/templates/projets.html",
        controller:"ProjetsController"
    })
    .when('/contact', {
        templateUrl:"app/templates/contact.html",
        controller:"ContactController"
    })
    .otherwise({
        redirectTo:'/'
    });
});

app.controller('HomeController', function($scope){

});

app.controller('ProfilController', function($scope){

});

app.controller('CompetencesController', function($scope, $http){
    $http.get('app/competences.json').then(function(response) {
        $scope.talents = response.data;
    }, function(err) {
        console.error('ERR', err);
    });
});

app.controller('ProjetsController', function($scope, $http){
    $http.get('app/projects.json').then(function(response) {
        $scope.projects = response.data;
    }, function(err) {
        console.error('ERR', err);
    });
});

app.controller('ContactController', function($scope){

});
