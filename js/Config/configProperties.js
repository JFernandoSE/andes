angular.module('formApp')
.controller('controllerConfig',function($scope, $rootScope){
               
                $rootScope.$broadcast('myService', {
                               url : 'http://uioas006.andespetro.com:7001/identity/restapi/authentication/user'
                });          
               
});
