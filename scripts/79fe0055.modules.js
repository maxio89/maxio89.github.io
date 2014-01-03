!function(a,b,c){"use strict";function d(a){return null!=a&&""!==a&&"hasOwnProperty"!==a&&h.test("."+a)}function e(a,b){if(!d(b))throw g("badmember",'Dotted member path "@{0}" is invalid.',b);for(var e=b.split("."),f=0,h=e.length;h>f&&a!==c;f++){var i=e[f];a=null!==a?a[i]:c}return a}function f(a,c){c=c||{},b.forEach(c,function(a,b){delete c[b]});for(var d in a)a.hasOwnProperty(d)&&"$"!==d.charAt(0)&&"$"!==d.charAt(1)&&(c[d]=a[d]);return c}var g=b.$$minErr("$resource"),h=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;b.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(a,d){function h(a){return i(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function i(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,b?"%20":"+")}function j(a,b){this.template=a,this.defaults=b||{},this.urlParams={}}function k(h,i,r){function s(a,b){var c={};return b=o({},i,b),n(b,function(b,d){q(b)&&(b=b()),c[d]=b&&b.charAt&&"@"==b.charAt(0)?e(a,b.substr(1)):b}),c}function t(a){return a.resource}function u(a){f(a||{},this)}var v=new j(h);return r=o({},l,r),n(r,function(e,h){var i=/^(POST|PUT|PATCH)$/i.test(e.method);u[h]=function(h,j,k,l){var r,w,x,y={};switch(arguments.length){case 4:x=l,w=k;case 3:case 2:if(!q(j)){y=h,r=j,w=k;break}if(q(h)){w=h,x=j;break}w=j,x=k;case 1:q(h)?w=h:i?r=h:y=h;break;case 0:break;default:throw g("badargs","Expected up to 4 arguments [params, data, success, error], got {0} arguments",arguments.length)}var z=this instanceof u,A=z?r:e.isArray?[]:new u(r),B={},C=e.interceptor&&e.interceptor.response||t,D=e.interceptor&&e.interceptor.responseError||c;n(e,function(a,b){"params"!=b&&"isArray"!=b&&"interceptor"!=b&&(B[b]=p(a))}),i&&(B.data=r),v.setUrlParams(B,o({},s(r,e.params||{}),y),e.url);var E=a(B).then(function(a){var c=a.data,d=A.$promise;if(c){if(b.isArray(c)!==!!e.isArray)throw g("badcfg","Error in resource configuration. Expected response to contain an {0} but got an {1}",e.isArray?"array":"object",b.isArray(c)?"array":"object");e.isArray?(A.length=0,n(c,function(a){A.push(new u(a))})):(f(c,A),A.$promise=d)}return A.$resolved=!0,a.resource=A,a},function(a){return A.$resolved=!0,(x||m)(a),d.reject(a)});return E=E.then(function(a){var b=C(a);return(w||m)(b,a.headers),b},D),z?E:(A.$promise=E,A.$resolved=!1,A)},u.prototype["$"+h]=function(a,b,c){q(a)&&(c=b,b=a,a={});var d=u[h].call(this,a,this,b,c);return d.$promise||d}}),u.bind=function(a){return k(h,o({},i,a),r)},u}var l={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},m=b.noop,n=b.forEach,o=b.extend,p=b.copy,q=b.isFunction;return j.prototype={setUrlParams:function(a,c,d){var e,f,i=this,j=d||i.template,k=i.urlParams={};n(j.split(/\W/),function(a){if("hasOwnProperty"===a)throw g("badname","hasOwnProperty is not a valid parameter name.");!new RegExp("^\\d+$").test(a)&&a&&new RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(j)&&(k[a]=!0)}),j=j.replace(/\\:/g,":"),c=c||{},n(i.urlParams,function(a,d){e=c.hasOwnProperty(d)?c[d]:i.defaults[d],b.isDefined(e)&&null!==e?(f=h(e),j=j.replace(new RegExp(":"+d+"(\\W|$)","g"),f+"$1")):j=j.replace(new RegExp("(/?):"+d+"(\\W|$)","g"),function(a,b,c){return"/"==c.charAt(0)?c:b+c})}),j=j.replace(/\/+$/,""),j=j.replace(/\/\.(?=\w+($|\?))/,"."),a.url=j.replace(/\/\\\./,"/."),n(c,function(b,c){i.urlParams[c]||(a.params=a.params||{},a.params[c]=b)})}},k}])}(window,window.angular),function(a,b){"use strict";function c(){function a(a,c){return b.extend(new(b.extend(function(){},{prototype:a})),c)}function c(a,b){var c=b.caseInsensitiveMatch,d={originalPath:a,regexp:a},e=d.keys=[];return a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,function(a,b,c,d){var f="?"===d?d:null,g="*"===d?d:null;return e.push({name:c,optional:!!f}),b=b||"",""+(f?"":b)+"(?:"+(f?b:"")+(g&&"(.+?)"||"([^/]+)")+(f||"")+")"+(f||"")}).replace(/([\/$\*])/g,"\\$1"),d.regexp=new RegExp("^"+a+"$",c?"i":""),d}var d={};this.when=function(a,e){if(d[a]=b.extend({reloadOnSearch:!0},e,a&&c(a,e)),a){var f="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";d[f]=b.extend({redirectTo:a},c(f,e))}return this},this.otherwise=function(a){return this.when(null,a),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(c,e,f,g,h,i,j,k){function l(a,b){var c=b.keys,d={};if(!b.regexp)return null;var e=b.regexp.exec(a);if(!e)return null;for(var f=1,g=e.length;g>f;++f){var h=c[f-1],i="string"==typeof e[f]?decodeURIComponent(e[f]):e[f];h&&i&&(d[h.name]=i)}return d}function m(){var a=n(),d=q.current;a&&d&&a.$$route===d.$$route&&b.equals(a.pathParams,d.pathParams)&&!a.reloadOnSearch&&!p?(d.params=a.params,b.copy(d.params,f),c.$broadcast("$routeUpdate",d)):(a||d)&&(p=!1,c.$broadcast("$routeChangeStart",a,d),q.current=a,a&&a.redirectTo&&(b.isString(a.redirectTo)?e.path(o(a.redirectTo,a.params)).search(a.params).replace():e.url(a.redirectTo(a.pathParams,e.path(),e.search())).replace()),g.when(a).then(function(){if(a){var c,d,e=b.extend({},a.resolve);return b.forEach(e,function(a,c){e[c]=b.isString(a)?h.get(a):h.invoke(a)}),b.isDefined(c=a.template)?b.isFunction(c)&&(c=c(a.params)):b.isDefined(d=a.templateUrl)&&(b.isFunction(d)&&(d=d(a.params)),d=k.getTrustedResourceUrl(d),b.isDefined(d)&&(a.loadedTemplateUrl=d,c=i.get(d,{cache:j}).then(function(a){return a.data}))),b.isDefined(c)&&(e.$template=c),g.all(e)}}).then(function(e){a==q.current&&(a&&(a.locals=e,b.copy(a.params,f)),c.$broadcast("$routeChangeSuccess",a,d))},function(b){a==q.current&&c.$broadcast("$routeChangeError",a,d,b)}))}function n(){var c,f;return b.forEach(d,function(d){!f&&(c=l(e.path(),d))&&(f=a(d,{params:b.extend({},e.search(),c),pathParams:c}),f.$$route=d)}),f||d[null]&&a(d[null],{params:{},pathParams:{}})}function o(a,c){var d=[];return b.forEach((a||"").split(":"),function(a,b){if(0===b)d.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];d.push(c[f]),d.push(e[2]||""),delete c[f]}}),d.join("")}var p=!1,q={routes:d,reload:function(){p=!0,c.$evalAsync(m)}};return c.$on("$locationChangeSuccess",m),q}]}function d(){this.$get=function(){return{}}}function e(a,c,d){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(e,f,g,h,i){function j(){l&&(l.$destroy(),l=null),m&&(d.leave(m),m=null)}function k(){var g=a.current&&a.current.locals,h=g&&g.$template;if(b.isDefined(h)){var k=e.$new(),p=a.current,q=i(k,function(a){d.enter(a,null,m||f,function(){!b.isDefined(n)||n&&!e.$eval(n)||c()}),j()});m=q,l=p.scope=k,l.$emit("$viewContentLoaded"),l.$eval(o)}else j()}var l,m,n=g.autoscroll,o=g.onload||"";e.$on("$routeChangeSuccess",k),k()}}}function f(a,b,c){return{restrict:"ECA",priority:-400,link:function(d,e){var f=c.current,g=f.locals;e.html(g.$template);var h=a(e.contents());if(f.controller){g.$scope=d;var i=b(f.controller,g);f.controllerAs&&(d[f.controllerAs]=i),e.data("$ngControllerController",i),e.children().data("$ngControllerController",i)}h(d)}}}var g=b.module("ngRoute",["ng"]).provider("$route",c);g.provider("$routeParams",d),g.directive("ngView",e),g.directive("ngView",f),e.$inject=["$route","$anchorScroll","$animate"],f.$inject=["$compile","$controller","$route"]}(window,window.angular);