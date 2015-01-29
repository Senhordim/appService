angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  
  // Perform the login action when the user submits the login form
  
})

// .controller('PlaylistsCtrl', function($scope) {
//   $scope.playlists = [
//     { title: 'Reggae', id: 1 },
//     { title: 'Chill', id: 2 },
//     { title: 'Dubstep', id: 3 },
//     { title: 'Indie', id: 4 },
//     { title: 'Rap', id: 5 },
//     { title: 'Cowbell', id: 6 }
//   ];
// })


.controller('PlaylistsCtrl', function($scope, $http) {
 $http.get('http://localhost:3000/people.json').then(function(resp) {
    $scope.playlists = resp.data;
    console.log('Success', resp);
    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
})


