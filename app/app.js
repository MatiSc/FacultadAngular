var myApp = angular.module('myApp', ['ui.router']).
//Config For Router-UI
config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/gameslist');
  // Now set up the states
    $stateProvider
        .state('games-list-finder', {
            url: "/gameslist",
                views: {
                    "main":
                        {
                            templateUrl: "templates/game-finder.html",
                            controller: "GameListController"
                        },
                    "gamelist":
                        {
                            templateUrl: "templates/games-list.html",
                            controller: "GameListController"
                        },
                    "navbar-game-finder":
                    {
                        templateUrl: "templates/navbar-game-finder.html",
                        controller: "GameListController"
                    }
                 }
            }
        );
    }
);




