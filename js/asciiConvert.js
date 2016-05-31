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
        $scope.asciiArray=[];
        $scope.charArray=[]
        $scope.asciiSpliceString=function(str){
            var seperator = /\,/;
            $scope.asciiArray = str.split(seperator);
            $scope.charArray = [];
            for(var i=0; i<$scope.asciiArray.length;i++){
                $scope.charArray.push(String.fromCharCode($scope.asciiArray[i]))

                console.log(String.fromCharCode($scope.asciiArray[i]))
            }
            console.log($scope.charArray)
            console.log( $scope.asciiArray);
            $scope.finalString= $scope.charArray.join('');
            document.getElementById("messageConverted").innerHTML = $scope.finalString;
        }

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