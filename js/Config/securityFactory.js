var requestServices = angular.module('securityModule', [ 'ngResource' ]);
 
 
requestServices
                               .factory(
                                                               'securityFactory',
                                                               [
                                                                                              '$resource', '$http',
                                                                                              function($resource, $http) {
                                                                                                              $http.defaults.withCredentials = true;
                                                                                                              return $resource(
                                                                                                                                             'http://uioas006.andespetro.com:7001/identity/restapi/authentication/user')
                                                                                                                                             .get();
                                                                                              } ]);
