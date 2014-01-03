"use strict";angular.module("angularjsItcUtilsApp",["ngResource","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("angularjsItcUtilsApp").constant("ValidationMessages",{validationMessages:{required:"Value is required!",email:"You should enter a valid email address!",minlength:"Enter more characters",maxlength:"You have entered to many characters",equals:"Password don't match",unique:"Your email should be unique"}}),angular.module("angularjsItcUtilsApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.credentials={email:null,password:null,passwordConfirmation:null},a.credentials2={email:null,password:null,passwordConfirmation:null},a.credentials3={email:null,password:null,passwordConfirmation:null},a.register=function(){a.registered=!0},a.tryAgain=function(){a.registered=!1,a.credentials={email:null,password:null,passwordConfirmation:null},a.credentials2={email:null,password:null,passwordConfirmation:null},a.credentials3={email:null,password:null,passwordConfirmation:null},a.registerForm.$setPristine(),a.registerForm2.$setPristine(),a.registerForm3.$setPristine()}}]),angular.module("angularjsItcUtilsApp").directive("itcSubmit",function(){return{restrict:"A",link:function(a,b,c){var d="ng-pristine",e="ng-dirty";if(!c.name)throw"Directive must be set on an element that has a 'name' attribute";angular.isUndefined(c.novalidate)&&c.$set("novalidate",""),b.bind("submit",function(f){f.preventDefault(),b.find(".ng-pristine").removeClass(d).addClass(e);var g=c.name,h=a[g];h.$setDirty(!0),angular.forEach(h,function(a,b){"$"!==b[0]&&(a.$dirty=!0,a.$pristine=!1)}),h.$invalid?(a.$apply(),b.find(".ng-invalid").first().focus(),a.$emit("formValidationErrors")):a.$apply(c.itcSubmit)})}}}),angular.module("angularjsItcUtilsApp").directive("itcValidationMessages",["ValidationMessages",function(a){return{restrict:"A",link:function(b,c,d){if(!d.name)throw"Directive must be set on an element that has a 'name' attribute";var e=d.itcValidationMessagesEvent,f=d.itcValidationMessagesType,g=d.name,h=b[g];b.$on("fieldValidationError",function(a,b){j(b.field,b.fieldName)}),b.$on("formValidationErrors",function(){i()}),angular.forEach(h,function(a,d){if("$"!==d[0]){var f=angular.element(c.context[d]);angular.isUndefined(e)?b.$watch(function(){return f.attr("class")},function(){b.$emit("fieldValidationError",{field:a,fieldName:d})}):f.bind(e,function(){j(a,d)})}});var i=function(){h.$pristine||angular.forEach(h,function(a,b){"$"!==b[0]&&j(a,b)})},j=function(a,b){var d={},e=angular.element(c.context[b]);if(angular.isUndefined(f)){var g,h=p(e);a.$valid&&!angular.isUndefined(h)?(o(e),g=h.$tip,g.removeClass("error")):a.$invalid&&a.$dirty&&(d=k(a),angular.isUndefined(h)?(l(e,d.key),n(e)):(g=h.$tip,angular.isUndefined(g)||(m(h,q(e,d.key)),g.hasClass("error")||g.addClass("error"),n(e))))}else if("block"===f){var i=v(e);a.$valid&&0!==i.length?u(i):a.$invalid&&a.$dirty&&(d=k(a),0===i.length?r(e,d.key):(s(i,q(e,d.key)),t(i)))}},k=function(a){var b={};return angular.forEach(a.$error,function(a,c){a&&$.isEmptyObject(b)&&(b={value:a,key:c})}),b},l=function(a,b){a.popover({placement:"right",trigger:"manual",delay:{show:200,hide:200},animation:!0,content:q(a,b),template:'<div class="popover error"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})},m=function(a,b){a.options.content=b},n=function(a){a.popover("show")},o=function(a){a.popover("hide")},p=function(a){return a.data("bs.popover")},q=function(b,c){var d,e=b.attr(c+"-message");return d=angular.isUndefined(e)?a.validationMessages[c]:e},r=function(a,b){a.after('<div class="alert alert-danger alert-'+a.attr("name")+'">'+q(a,b)+"</div>")},s=function(a,b){a.html(b)},t=function(a){a.show()},u=function(a){a.hide()},v=function(a){return a.parent().find(".alert-"+a.attr("name"))}}}}]),angular.module("angularjsItcUtilsApp").directive("itcDefaultMessage",function(){return{restrict:"A",link:function(a,b,c){if(!c.name)throw"Directive must be set on an element that has a 'name' attribute";var d=c.name,e=a[b.context.form.name][d],f=angular.element(b.context);b.bind("focus",function(){var a,b=k(f);(e.$valid||e.$pristine)&&(angular.isUndefined(b)?(g(f),i(f)):(a=b.$tip,angular.isUndefined(a)||(h(b),i(f))))}),b.bind("blur",function(){(e.$valid||e.$pristine)&&j(f)});var g=function(a){a.popover({placement:"right",trigger:"manual",delay:{show:200,hide:200},animation:!0,content:c.itcDefaultMessage,template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})},h=function(a){a.options.content=c.itcDefaultMessage},i=function(a){a.popover("show")},j=function(a){a.popover("hide")},k=function(a){return a.data("bs.popover")}}}}),angular.module("itcValidate",[]).directive("itcEquals",function(){return{restrict:"A",require:"^ngModel",link:function(a,b,c,d){var e=function(){var b=a.$eval(c.itcEquals),d=a.$eval(c.ngModel);return b===d};a.$watch(e,function(a){d.$setValidity("equals",a)})}}}).directive("itcUnique",["$resource",function(a){return{restrict:"A",require:"^ngModel",link:function(b,c,d,e){c.on("blur",function(){b.$apply(function(){a("/api/user/unique").get({value:b.$eval(d.ngModel)},function(a){e.$setValidity("unique",a)})})})}}}]);