module.exports=function(t){var e={};function a(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=6)}({0:function(t,e){t.exports=flarum.core.compat.app},6:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r);n.a.initializers.add("justoverclock/custom-header",(function(){n.a.extensionData.for("justoverclock-custom-header").registerSetting({setting:"justoverclock-custom-header.headerBackgroundImage",name:"justoverclock-custom-header.headerBackgroundImage",type:"url",label:n.a.translator.trans("custom-header.admin.headerBackgroundImage"),help:n.a.translator.trans("custom-header.admin.headerBackgroundImage-help")}).registerSetting({setting:"justoverclock-custom-header.headerTitle",name:"headerTitle",type:"text",label:n.a.translator.trans("custom-header.admin.headerTitle"),help:n.a.translator.trans("custom-header.admin.headerTitle-help")}).registerSetting({setting:"justoverclock-custom-header.headerTagline",name:"headerTagline",type:"text",label:n.a.translator.trans("custom-header.admin.headerTagline"),help:n.a.translator.trans("custom-header.admin.headerTagline-help")}).registerSetting({setting:"justoverclock-custom-header.twitterIcon",name:"twitterIcon",type:"text",label:n.a.translator.trans("custom-header.admin.twitterIcon"),help:n.a.translator.trans("custom-header.admin.twitterIcon-help")}).registerSetting({setting:"justoverclock-custom-header.facebookIcon",name:"facebookIcon",type:"text",label:n.a.translator.trans("custom-header.admin.facebookIcon"),help:n.a.translator.trans("custom-header.admin.facebookIcon-help")}).registerSetting({setting:"justoverclock-custom-header.youtubeIcon",name:"youtubeIcon",type:"text",label:n.a.translator.trans("custom-header.admin.youtubeIcon"),help:n.a.translator.trans("custom-header.admin.youtubeIcon-help")}).registerSetting({setting:"justoverclock-custom-header.githubIcon",name:"githubIcon",type:"text",label:n.a.translator.trans("custom-header.admin.githubIcon"),help:n.a.translator.trans("custom-header.admin.githubIcon-help")}).registerSetting({setting:"justoverclock-custom-header.buttonText",name:"buttonText",type:"text",label:n.a.translator.trans("custom-header.admin.button-text"),help:n.a.translator.trans("custom-header.admin.button-text-help")}).registerSetting({setting:"justoverclock-custom-header.LinkButtonOne",name:"LinkButtonOne",type:"URL",label:n.a.translator.trans("custom-header.admin.link-button-one"),help:n.a.translator.trans("custom-header.admin.link-button-one-help")}).registerSetting({setting:"justoverclock-custom-header.button2Text",name:"button2Text",type:"text",label:n.a.translator.trans("custom-header.admin.button2-text"),help:n.a.translator.trans("custom-header.admin.button2-text-help")}).registerSetting({setting:"justoverclock-custom-header.LinkButtonTwo",name:"LinkButtonTwo",type:"URL",label:n.a.translator.trans("custom-header.admin.link-button-two"),help:n.a.translator.trans("custom-header.admin.link-button-two-help")})}))}});
//# sourceMappingURL=admin.js.map