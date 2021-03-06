"use strict";

app.controller("Highway1Ctrl", ["$scope",
  function($scope) {
    $scope.highwayName = { name: "Route 66"};
    $scope.highwayDescription ={ description: "When construction originally began in 1926, Route 66 was considered a super-highway that would offer a new kind of driving freedom. The Depression postponed its completion until 1938, when it became the first road to connect Chicago to Los Angeles via rural communities. Today, this primarily two-lane highway rarely appears on traditional maps, but drivers can still peek into its past and catch a nostalgic glimpse—with well-preserved ticky-tacky tourist shops, attractions, and motels found alongside the road."};
}]);