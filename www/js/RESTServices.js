angular.module('RESTConnection',	[])
    .constant('ENDPOINT_URL','https://tktest-backend-rcorbeil.c9.io/api/')
    .service('UserService',['$http','ENDPOINT_URL',
    function($http,	ENDPOINT_URL){
        var	service	=this,
        path='SSFUsers/';
        function getUrl(){
            return ENDPOINT_URL+path;
        }
        service.create=function	(user){
            return $http.post(getUrl(),	user);
        };
        service.login=function(user){
            return $http.post(getUrl()+"login",user);
        };
        service.logout = function(token) {
            return $http({
            url: getUrl()+"logout",
            method: "POST",
            headers: {
            'Authorization': token
            }
            });
        };
}]);