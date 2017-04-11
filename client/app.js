
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
            // Finished the pattern .. Add new color and change turn
            $scope.clicks.push(color);
            turnChange();
        } else {
            // Continuing Pattern
            if ($scope.clicks[$scope.index] !== color) {
                // Player Lost
                alert("Incorrect Click!");
                reset();
            } else {
                // Okay Click
                $scope.index += 1;
            }
        }

    }

    function turnChange () {
        alert("Switch Players");
        // Toggle Players
        if ($scope.player === 0) {
            $scope.player = 1;
        } else {
            $scope.player = 2;
        }
        // Set back to beginning of pattern
        $scope.index = 0;
    }
});
