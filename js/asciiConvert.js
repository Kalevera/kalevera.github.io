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
    .controller('asciiConvertController',['$scope','storyFactory',function($scope,storyFactory){
        storyFactory.get().success(function(data){
            $scope.stories = data["stories"];

            console.log($scope.stories);
        }).error(function(err){
            console.log('Error: ' + err);
        })
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