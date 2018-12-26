(function(){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){

        $scope.newItems = "";
        $scope.message = "";
        $scope.getNewItems = function() {
            let items = $scope.newItems
                            .split(',')
                            .map(item => item.trim())
                            .filter(item => item.length > 0);

            if(items.length == 0) {
                $scope.message = "Please enter data first";
            } else if (items.length > 3) {
                $scope.message = "Too Much!";
            } else {
                $scope.message = "Enjoy!";
            }

        };
    };
})();