/**
 * Created by cong on 4/12/17.
 */
var scotchWish = angular.module('scotchWish', []);

function mainController($scope, $http) {
    $scope.formData = {};

    //show all
    $http.get('/api/wishs')
        .success(function(data) {
            $scope.wishs = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    //submit
    $scope.createWish = function() {
        $http.post('/api/wishs', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.wishs = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete
    $scope.deleteWish = function(id) {
        $http.delete('/api/wishs/' + id)
            .success(function(data) {
                $scope.wishs = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}

