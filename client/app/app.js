'use strict';

var gulpApp = angular.module('app', []);

gulpApp.controller('GreetingController', function(){
   var app = this;
   app.greeting = 'hello world from angular, gulp, forever, and http-server!';
 });
