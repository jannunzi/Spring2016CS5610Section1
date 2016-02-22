(function(){
    angular
        .module("MovieApp")
        .controller("DetailsController", DetailsController);

    function DetailsController($routeParams, $http, $scope) {
        var imdbID = $routeParams.imdbID;
        $http.get("http://www.omdbapi.com/?i="+imdbID)
            .success(renderMovie);

        function renderMovie(response) {
            $scope.movie = response;
        }
    }
})();