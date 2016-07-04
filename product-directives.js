/**
 * Created by EpaV on 04/07/2016.
 */

(function () {
    var app = angular.module('product-directive', []);

    app.directive("productTitle", function () {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html',
            controller: function () {
                this.current = 0;

                this.setCurrent = function (currentImage) {
                    this.current = currentImage || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });

    app.directive("productDescription", function () {
        return {
            restriction: 'E',
            templateUrl: 'product-description.html'
        };
    });

    app.directive("productSpecs", function () {
        return {
            restrict: 'A',
            templateUrl: "product-specs.html"
        };
    });

    app.directive("productReviews", function () {
        return {
            restrict: 'E',
            templateUrl: "product-reviews.html"
        };
    });

    app.directive("productGallery", function () {
        return {
            restrict: 'E',
            templateUrl: "product-gallery.html"
        };
    });

    app.directive("productTabs", function () {
        return {
            restrict: 'E',
            templateUrl: 'product-tabs.html',
            controller: function () {
                this.tab = 1;

                this.isSet = function (checkTab) {
                    return (this.tab === checkTab);
                };

                this.setTab = function (setTab) {
                    this.tab = setTab;
                };
            },
            controllerAs: 'tab'
        };
    });
})();