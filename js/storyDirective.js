(function(){
    'use-strict'
	var Stories = angular.module("storyDirective",[])
    .factory('storyFactory',['$http',function($http){
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
    .controller('storyController',['$scope','storyFactory',function($scope,storyFactory){
        $scope.scroller= function (){
            var it = document.body.scrollTop;
            console.log(it);
        }
        storyFactory.get().success(function(data){
            $scope.stories = data["stories"];

            console.log($scope.stories);
        }).error(function(err){
            console.log('Error: ' + err);
        })
    }]).directive('cardHolder',function(){
        function link (scope, element, attrs){

        }
        return{
            link: link,
            restirct:'E',
            templateUrl: '/u/my-card.html'
        };
    })
})();