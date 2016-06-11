angular.module("app")
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/faves', {
        templateUrl: 'views/faves.html'
      })
      .when('/faves/croatia', {
        templateUrl: 'views/faves/croatia.html'
      })
      .when('/faves/sintra', {
        templateUrl: 'views/faves/sintra.html'
      })
      .when('/faves/cinqueterre', {
        templateUrl: 'views/faves/cinqueterre.html'
      })
      .when('/budgettraveleurope', {
        templateUrl: 'views/budgettraveleurope.html'
      })
      .when('/europe', {
        templateUrl: 'views/europe.html'
      })
      .when('/northAmerica', {
        templateUrl: 'views/northAmerica.html'
      })
      .when('/northAmerica/colorado', {
        templateUrl: 'views/northAmerica/colorado.html'
      })
      .when('/cruising', {
        templateUrl: 'views/cruising.html'
      })
      .when('/helpfulmaps', {
        templateUrl: 'views/helpfulmaps.html'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html'
      })
      .when('/spain', {
        templateUrl: 'views/spain.html'
      })
      .when('/spain/valencia', {
        templateUrl: 'views/spain/valencia.html'
      })
      .when('/spain/palma', {
        templateUrl: 'views/spain/palma.html'
      })
      .when('/spain/catalonia', {
        templateUrl: 'views/spain/catalonia.html'
      })
      .when('/southernFrance', {
        templateUrl: 'views/southernFrance.html'
      })
      .when('/southernFrance/marseille', {
        templateUrl: 'views/southernFrance/marseille.html'
      })
      .when('/southernFrance/montpellier', {
        templateUrl: 'views/southernFrance/montpellier.html'
      })
      .when('/portugal', {
        templateUrl: 'views/portugal.html'
      })
      .when('/portugal/porto', {
        templateUrl: 'views/portugal/porto.html'
      })
      .when('/portugal/lisbonArea', {
        templateUrl: 'views/portugal/lisbonArea.html'
      })
      .when('/belgium', {
        templateUrl: 'views/belgium.html'
      })
      .when('/belgium/bruges', {
        templateUrl: 'views/belgium/bruges.html'
      })
      .when('/belgium/brussels', {
        templateUrl: 'views/belgium/brussels.html'
      });

  });
