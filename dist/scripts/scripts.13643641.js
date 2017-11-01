"use strict";angular.module("angularJsexamApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","ui.router"]).config(["$stateProvider","$urlRouterProvider","$routeProvider",function(a,b,c){b.otherwise("/"),a.state("main",{url:"/",templateUrl:"views/main.html",controller:"MainCtrl"}).state("login",{url:"/login",templateUrl:"views/login.html",controller:"LoginCtrl"}).state("signup",{url:"/signup",templateUrl:"views/signup.html",controller:"SignupCtrl"}).state("user-list",{url:"/user/list",templateUrl:"views/user-list.html",controller:"UserListCtrl"}).state("user-detail",{url:"/user/detail",templateUrl:"views/user-detail.html",controller:"UserDetailCtrl"}).state("user-withdraw",{url:"/user/withdraw",templateUrl:"views/user-withdraw.html",controller:"UserWithdrawCtrl"})}]),angular.module("angularJsexamApp").factory("Data",["$http","$q",function(a,b){return{getData:function(c){var d=b.defer();return a({method:"GET",url:c,headers:{"Content-Type":"application/text;charset=utf-8"}}).then(function(a){d.resolve(a)},function(a){window.alert(JSON.stringify(a))}),d.promise},setData:function(c,d){var e=b.defer();return a({method:"POST",url:c,data:d,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){e.resolve(a)},function(a){e.resolve(a)}),e.promise},modifyData:function(c,d){var e=b.defer();return a({method:"PUT",url:c,data:d,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){e.resolve(a)},function(a){e.resolve(a)}),e.promise},deleteData:function(c,d){var e=b.defer();return a({method:"DELETE",url:c,data:d,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){e.resolve(a)},function(a){e.resolve(a)}),e.promise}}}]).controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularjsExamApp").run(["$templateCache",function(a){a.put("views/login.html",'<div class="jumbotron"> <h1>LOGIN</h1> <p class="lead"> <img src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>MAIN</h1> <p class="lead"> <img src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/menu.html",'<div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="\r\n		#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#/">AngularJSExam</a> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <ul class="nav navbar-nav"> <li class="dropdown"> <a ui-sref="main" class="dropdown-toggle" data-toggle="dropdown">Home</a> </li> <li class="dropdown"> <a ui-sref="login" class="dropdown-toggle" data-toggle="dropdown">Login</a> </li> <li class="dropdown"> <a ui-sref="signup" class="dropdown-toggle" data-toggle="dropdown">Signup</a> </li> <li class="dropdown"> <a ui-sref="user-detail" class="dropdown-toggle" data-toggle="dropdown">UserDetail</a> </li> <li class="dropdown"> <a ui-sref="user-list" class="dropdown-toggle" data-toggle="dropdown">UserList</a> </li> <li class="dropdown"> <a ui-sref="user-withdraw" class="dropdown-toggle" data-toggle="dropdown">UserWithdraw</a> </li> </ul> </div> </div>'),a.put("views/signup.html",'<div class="jumbotron"> <h1>SIGNUP</h1> </div> <div class="row"> <div class="form-group"> <label for="user_name">Name:</label> <input type="text" class="form-control" ng-model="name" id="user_name"> </div> <div class="form-group"> <label for="user_age">Age:</label> <input type="text" class="form-control" ng-model="age" id="user_age"> </div> <button type="button" class="btn btn-primary" ng-click="saveUserInfo()">회원가입</button> </div>'),a.put("views/user-detail.html",'<div class="jumbotron"> <h1>USER-DETAIL</h1> <p class="lead"> <img src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/user-list.html",'<div class="jumbotron"> <h1>USER LIST</h1> <table class="table"> <thead><tr><th>id</th><th>name</th><th>age</th><th>수정</th><th>삭제</th></tr></thead> <tbody> <tr ng-repeat="obj in userList"> <!-- Trigger the modal with a button --> <td><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" ng-click="getUserInfo(obj.id)">{{obj.id}}</button></td> <td><input type="text" class="form-control" ng-model="obj.name"></td> <td><input type="text" class="form-control" ng-model="obj.age"></td> <td><button type="button" class="btn btn-warning" ng-click="modifyUserInfo(obj.id,obj.name,obj.age)">Edit</button></td> <td><button type="button" class="btn btn-danger" ng-click="deleteUserInfo(obj.id)">Danger</button></td> </tr> </tbody> </table> <!-- Modal --> <div id="myModal" class="modal fade" role="dialog"> <div class="modal-dialog"> <!-- Modal content--> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal">&times;</button> <h4 class="modal-title">User Info</h4> </div> <div class="modal-body"> <table class="table"> <tr><td>ID</td><td>{{userInfo.id}}</td></tr> <tr><td>NAME</td><td>{{userInfo.name}}</td></tr> <tr><td>AGE</td><td>{{userInfo.age}}</td></tr> </table> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">닫기</button> </div> </div> </div> </div> </div>'),a.put("views/user-withdraw.html",'<div class="jumbotron"> <h1>USER-WITHDRAW</h1> <p class="lead"> <img src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);