angular.module('myApp').controller('mainCtrl', function ($scope, serviceQuote) {



    $scope.getQuote = function () {
        $scope.quotes = serviceQuote.getQuote();
        return $scope.quotes;
    };
    $scope.getQuote();


    $scope.deleteQuote = function (quote) {
        serviceQuote.deleteQuote(quote);
    }

    $scope.addQuote = function (nq, na) {
        serviceQuote.addQuote(nq, na);
        $scope.newQuote = '';
        $scope.newAuthor = '';
    }


});
