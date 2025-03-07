angular.module("studentApp", []).controller('studentController', function($scope, $http) {

    $scope.students = [];
    $scope.sortColumn = "name";
    $scope.reverseSort = false;

    $http.get("student.json").then(function(response) {

        $scope.students = response.data.students;
        console.log("loading students: ", $scope.students)

    });

    $scope.sortBy = function(column) {

        if ($scope.sortColumn === column) {

            $scope.reverseSort = !$scope.reverseSort;

        }
        else
        {
            $scope.sortColumn = column;
            $scope.reverseSort = false;
        }

    }

});