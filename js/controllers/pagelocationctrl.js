angular.module('chartbook')
  .controller('PageLocationCtrl',
    ['$routeParams', '$location', 'PageFactory',
    function($routeParams, $location, PageFactory){

      // get page count
      PageFactory
        .getBook()
        .then(function(){
          this.pageCount = PageFactory.pageCount;
        }.bind(this));

      // get current page index
      this.pageIndex =  parseInt($routeParams.pageIndex) || 0;

      this.previousPageNum = function(pageIndex) {
        var previousPage;
        if (pageIndex > 0) {
          previousPage = pageIndex - 1;
        } else {
          previousPage = 0;
        }
        return previousPage;
      }

      this.nextPageNum = function(pageIndex, pageCount) {
        var nextPage;
        if (pageIndex < pageCount - 1) {
          nextPage = pageIndex + 1;
        } else {
          nextPage = pageIndex;
        }
        return nextPage;
      }

      this.changePage = function(newPage) {
        $location.path('/' + newPage);
      }

  }]);