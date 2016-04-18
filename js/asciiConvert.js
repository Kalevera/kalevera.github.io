(function(){
    'use-strict'
	var asciiConvert = angular.module("asciiDirective",[])
    .factory('asciiFactory',['$http',function($http){
        return{
            get:function(){
                return $http.get('/js/stories.json');
            },
            create: function (title, desc,imgUrl){
                this.id = Math.random()*(60+Math.random());
                this.title = title;
                this.description = desc;
                this.image = imgUrl;
                return this;
            }
        }
    }])
    .controller('asciiConvertController',['$scope','asciiFactory',function($scope,asciiFactory){
     
        
    }]).directive('asciiConvertCard',function(){
        function link (scope, element, attrs){

        }
        return{
            link: link,
            restirct:'E',
            templateUrl: '/u/ascii-convert-card.html'
        };
    })
})();