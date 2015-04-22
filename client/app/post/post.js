'use strict';

angular.module('applicationtonightApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/post', {
        templateUrl: 'app/post/post.html',
        controller: 'PostCtrl',
        authenticate: true
      });
  });

function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#profilePicEdit')
                        .attr('src', e.target.result)
                        // .width(150)
                        // .height(150);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }