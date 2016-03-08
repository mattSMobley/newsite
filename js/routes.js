angular.module("app")
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/faves', {
        templateUrl: 'views/faves.html'
      })
      .when('/croatia', {
        templateUrl: 'views/croatia.html'
      })
      .when('/sintra', {
        templateUrl: 'views/sintra.html'
      })
      .when('/cinqueterre', {
        templateUrl: 'views/cinqueterre.html'
      })
      .when('/budgettraveleurope', {
        templateUrl: 'views/budgettraveleurope.html'
      });

  });
