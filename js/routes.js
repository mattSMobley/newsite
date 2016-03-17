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
      })
      .when('/europe', {
        templateUrl: 'views/europe.html'
      })
      .when('/usa', {
        templateUrl: 'views/usa.html'
      })
      .when('/cruising', {
        templateUrl: 'views/cruising.html'
      })
      .when('/helpfulmaps', {
        templateUrl: 'views/helpfulmaps.html'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html'
      });

  });
