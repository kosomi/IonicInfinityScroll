angular.module('starter.controllers', [])
.controller('TasksCtrl', function($scope, tasks) {
  
    var currentStart = 2;
    
    $scope.tasks = tasks.itens; 
    
    $scope.maxItems = function(){
        return ($scope.tasks.length <= $scope.items.length)? true : false;
    };
    
    $scope.refreshList = function(){
        tasks.refresh();
        $scope.$broadcast('scroll.refreshComplete');
    };

    var num = 0;
    $scope.addItems = function (){
        tasks.add( $scope.items[num] ); 
        if($scope.items[num+1]){
           tasks.add( $scope.items[num+1] );  
        }     
        if($scope.items[num+2]){
           tasks.add( $scope.items[num+2] );  
        }    
        if($scope.items[num+3]){
           tasks.add( $scope.items[num+3] );  
        }    
        if($scope.items[num+4]){
           tasks.add( $scope.items[num+4] );  
        }    
        if($scope.items[num+5]){
           tasks.add( $scope.items[num+5] );  
        }    
        if($scope.items[num+6]){
           tasks.add( $scope.items[num+6] );  
        } else {
            tasks.add( {
                      "titulo": "Finished! No more item!!"
                    })
        }       
        num += 7;
        $scope.$broadcast('scroll.infiniteScrollComplete');
    }; 

    $scope.items = [{
                      "titulo": "Andalax"
                    }, {
                      "titulo": "Job"
                    }, {
                      "titulo": "Temp"
                    }, {
                      "titulo": "Matsoft"
                    }, {
                      "titulo": "Rank"
                    }, {
                      "titulo": "Veribet"
                    }, {
                      "titulo": "Greenlam"
                    }, {
                      "titulo": "Prodder"
                    }, {
                      "titulo": "Flexidy"
                    }, {
                      "titulo": "Domainer"
                    }, {
                      "titulo": "Y-find"
                    }, {
                      "titulo": "Kanlam"
                    }, {
                      "titulo": "Alphazap"
                    }, {
                      "titulo": "Otcom"
                    }, {
                      "titulo": "Transcof"
                    }, {
                      "titulo": "Toughjoyfax"
                    }, {
                      "titulo": "Tresom"
                    }, {
                      "titulo": "Bamity"
                    }, {
                      "titulo": "Stim"
                    }, {
                      "titulo": "Veribet"
                    }, {
                      "titulo": "Aerified"
                    }, {
                      "titulo": "Veribet"
                    }, {
                      "titulo": "Viva"
                    }, {
                      "titulo": "Voyatouch"
                    }, {
                      "titulo": "Zathin"
                    }, {
                      "titulo": "Zathin"
                    }];  

});
