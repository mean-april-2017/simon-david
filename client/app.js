
var app = angular.module("simonApp", []);
app.controller("simonController", function ($scope) {
    $scope.player = 1;
    $scope.lastClicked = null;

    $scope.clicked = function (color) {
        $scope.lastClicked = { background: color };
        if ($scope.player === 0) {
            $scope.player = 1;
        } else {
            $scope.player = 2;
        }
    }
});
