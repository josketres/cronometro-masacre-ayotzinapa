"use strict";angular.module("cronometroMasacreAyotzinapaApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","google-maps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("cronometroMasacreAyotzinapaApp").controller("MainCtrl",["$scope","dateService","$timeout",function(a,b,c){a.eventDate=new Date(2014,8,26,21,0,0),a.calculateDate=function(){var c=a.eventDate,d=b.now(),e=Math.floor((d.getTime()-c.getTime())/1e3),f=e%60;e=Math.floor(e/60);var g=e%60;e=Math.floor(e/60);var h=e%24;e=Math.floor(e/24);var i;i=e>=365?e-365*Math.floor(e/365):e,e=Math.floor(e/365);var j=e;a.hour=new Number(h),a.min=new Number(g),a.sec=new Number(f),a.day=new Number(i),a.year=new Number(j)},a.calculateDate();var d=function(){a.calculateDate(),c(d,1e3)};c(d,1e3),a.map={center:{latitude:18.34673,longitude:-99.54201},zoom:14,options:{scrollwheel:!0},draggable:!0}}]),angular.module("cronometroMasacreAyotzinapaApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("cronometroMasacreAyotzinapaApp").service("dateService",function(){this.now=function(){return new Date}}),angular.module("cronometroMasacreAyotzinapaApp").directive("facebookLike",function(){return{restrict:"E",template:'<div class="fb-like" data-href="{{page}}" data-colorscheme="light" data-layout="box_count" data-action="like" data-show-faces="true" data-send="false"></div>'}});