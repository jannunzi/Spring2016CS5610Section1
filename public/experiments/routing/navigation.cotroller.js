(function(){
    angular
        .module("MovieApp")
        .controller("NavController", NavController);

    function NavController($location, $scope) {
        $scope.$location = $location;
    }
})();