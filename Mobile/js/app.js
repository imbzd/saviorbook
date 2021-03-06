//appjs
define(["require", "jquery", "angular", "angular-route", "angular-sanitize"], function (require, jquery, angular){
    //注册angular.module-WebApp
	var WebApp = angular.module("WebApp", ["ngRoute","ngSanitize"]);

	//配置angularmodule
	WebApp.config(['$routeProvider', function($routeProvider) {
		//router路由
		$routeProvider
		.when('/', {
			templateUrl: 'Mobile/views/main.html',
			controller: 'BookController'
		})
		.when('/book', {
			templateUrl: 'Mobile/views/book.html',
			controller: 'BookController'
		})
		.when('/book/bookid/:bookid', {
			templateUrl: 'Mobile/views/book.html',
			controller: 'BookController'
		})
		.when('/chapter/bookid/:bookid/chapterid/:chapterid', {
			templateUrl: 'Mobile/views/chapter.html',
			controller: 'BookController'
		})
		.when('/aboutus', {
			templateUrl: 'Mobile/views/aboutus.html',
			controller: 'BookController'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);

	//运行angularmodule
	WebApp.run(['$rootScope', '$window', '$location', '$log', function ($rootScope, $window, $location, $log) {
		//监听事件 - 路由切换开始
		$rootScope.$on('$routeChangeStart', function (){
			//显示loading
			$("#loadingbox").show();
		});
		//监听事件 - 路由切换成功
		$rootScope.$on('$routeChangeSuccess', function (){
			//隐藏loading
			$("#loadingbox").hide();
		});
	}]);

	//返回模块对象
	return {
		WebApp: WebApp
	}
});