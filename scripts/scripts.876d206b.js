"use strict";angular.module("multi2App",["ngAnimate","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/users/:userId/forms/:formId?/:q?",{templateUrl:"/views/forms.html",controller:"FormsCtrl"}).when("/users/:id?",{templateUrl:"/views/users.html",controller:"UsersCtrl"}).otherwise({redirectTo:"/users"})}]),angular.module("multi2App").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("multi2App").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("multi2App").controller("FormsCtrl",["$scope","$routeParams","$location","forms","users","storage",function(a,b,c,d,e,f){a.ri=b,a.forms=d,a.users=e,a.answers={};var g=c.path();f.load(g).then(function(b){console.log(b),a.answers=b})["finally"](function(){a.$watch("answers",function(a){a&&f.save(g,a)},!0)})}]),angular.module("multi2App").service("forms",["$http",function(a){var b=this;a.get("/data/forms.json").then(function(a){b.list=a.data})}]),angular.module("multi2App").controller("UsersCtrl",["$scope","users",function(a,b){a.users=b}]),angular.module("multi2App").service("users",["$http",function(a){var b=this;a.get("/data/users.json").then(function(a){b.list=a.data})}]),angular.module("multi2App").service("storage",["$window","$q",function(a,b){var c=this,d=a.localStorage,e="STORAGE";c.load=function(a){return b(function(b,c){var f=d.getItem(e+":"+a);if(f)try{var g=JSON.parse(f);return b(g)}catch(h){return c("Storage service: error parsing json - "+h)}return c("Storage service: Could not load data for key.")})},c.save=function(a,c){return b(function(b){return b(d.setItem(e+":"+a,JSON.stringify(c)))})},c.clear=function(){return b(function(a){localStorage.clear(),a()})}}]),angular.module("multi2App").run(["$templateCache",function(a){a.put("/views/about.html","<p>This is the about view.</p>"),a.put("/views/forms.html",'<div class="container"> <div ng-if="!forms.list[ri.formId]"> <div class="panel panel-default" ng-repeat="form in forms.list"> <header class="panel-heading"> <a ng-href="#/users/{{ri.userId}}/forms/{{$index}}"> <span class="form">Form {{$index + 1}}</span> <span class="title"> {{form.title}} </span> </a> </header> {{form.questions.length}} Questions </div> </div> <div ng-if="forms.list[ri.formId]"> <h1> {{forms.list[ri.formId].title}} <span class="glyphicon glyphicon-check" ng-if="form.$valid"></span> </h1> <form name="form" class="form-horizontal"> <div ng-repeat="q in forms.list[ri.formId].questions" class="row"> <div class="form-group form-group-sm"> <label class="col-sm-2 control-label" for="input-{{$index}}">{{$index+1}}. {{q.text}}</label> <div class="col-sm-9" ng-switch="q.type"> <select ng-switch-when="select" class="form-control" id="input-{{$index}}" ng-required="o.required" ng-model="answers[$index]" ng-options="o for o in q.options"></select> <input ng-switch-default id="input-{{$index}}" ng-pattern="q.pattern" ng-required="q.required" class="form-control" ng-model="answers[$index]" type="{{q.type}}"> </div> </div> </div> </form> </div> <div ng-if="forms.list[ri.formId][ri.questionId]"> </div> <footer class="pull-right"> The current user is {{users.list[ri.userId].name || \'unknown\'}}. </footer> </div>'),a.put("/views/main.html",""),a.put("/views/partials/navbar.html",'<div class="navbar navbar-default" role="navigation"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#/">Forms</a> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <ul class="nav navbar-nav"> <li><a href="#/users">Users</a></li> </ul> </div> </div> </div>'),a.put("/views/users.html",'<div class="container"> <div class="panel panel-default" ng-repeat="user in users.list"> <a ng-href="#/users/{{$index}}/forms"> <header class="panel-heading"> {{user.name}} </header> {{user.lastForm}} </a> </div> </div>')}]);