'use strict';

angular.module('applicationtonightApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/home',
      'icon': 'home.png'
    },
    {
      'title': 'Post',
      'link': '/post',
      'icon' : 'post.png'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/main');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });