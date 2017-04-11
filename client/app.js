
var app = angular.module("simonApp", []);
app.controller("simonController", function ($scope) {

    function reset () {
        $scope.player = 1;
        $scope.index = 0;
        $scope.clicks = [];
        $scope.lastClicked = null;
    }

    reset();

    $scope.clicked = function (color) {

        $scope.lastClicked = { background: color };

        if ($scope.index === $scope.clicks.length) {
            $scope.clicks.push(color);
            turnChange();
        } else {
            if ($scope.clicks[$scope.index] !== color) {
                alert("Incorrect Click!");
                reset();
            } else {
                $scope.index += 1;
            }
        }

    }

    function turnChange () {
        alert("Switch Players");
        if ($scope.player === 0) {
            $scope.player = 1;
        } else {
            $scope.player = 2;
        }
        $scope.index = 0;
    }
});
