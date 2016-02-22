(function(){
    angular
        .module("MovieApp")
        .controller("SearchController", searchController);

    function searchController($location, MovieService, $scope, $http, $routeParams) {

        var title = $routeParams.title;

        if(title) {
            search(title);
        }

        // event handler declarations
        $scope.search = search;

        // event handler implementation
        function search(title) {
            console.log(title);
            $location.url("/search/"+title);
            MovieService.findMoviesByTitle(title, render);
        }

        function render(response) {
            console.log(response);
            $scope.data = response;
        }
    }
})();