!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.getElementById("accordion"),t=e.querySelectorAll(".button"),n=e.querySelectorAll(".panel");e.addEventListener("click",(function(e){var o=e.target;(o=o.closest(".button"))&&(e.preventDefault(),t.forEach((function(e,c){e===o&&function(e){for(var o=0;o<t.length-1;o++)e===o&&(n[o].querySelector(".collapse").classList.remove("in"),n[o+1].querySelector(".collapse").classList.add("in"))}(c)})))}))},c=function(){var e=document.querySelector(".add-sentence-btn"),t=document.querySelector(".sentence").querySelectorAll(".hidden, .visible-sm-block");e.addEventListener("click",(function(){t&&(t.forEach((function(e,n){t[n].classList.contains("hidden")?t[n].classList.remove("hidden"):t[n].classList.remove("visible-sm-block")})),e.style.display="none")}))},r=function(){var e=document.getElementById("accordion"),t=document.getElementById("myonoffswitch"),n=document.getElementById("myonoffswitch-two"),o=document.querySelectorAll("select")[0],c=document.querySelectorAll("select")[1],r=document.querySelectorAll("select")[2],l=document.querySelectorAll("select")[3],u=document.getElementById("calc-result"),i=document.querySelectorAll(".add"),a=function(){var e=0,a=1,s=1,d=1e4,f=0,p=+o.options[o.selectedIndex].value,y=+c.options[c.selectedIndex].value;t.value;t.checked?(i.forEach((function(e){e.style.display="none",a=1,s=1})),n.checked&&(f=1e3)):(i.forEach((function(e){e.style.display="inline-block"})),d=15e3,a=+r.options[r.selectedIndex].value,s=+l.options[l.selectedIndex].value,n.checked&&(f=2e3)),p&&y&&(e=d*p*y*a*s+f),u.value=+e};a(),e.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&a()}))},l=function(e,t,n){var o=document.querySelectorAll(e),c=document.querySelector(n);o.forEach((function(e){return e.addEventListener("click",(function(e){e.preventDefault(),function(e){var n=e.target;if(n=n.closest(t)){c.style.opacity=0,c.style.display="block";var o=setInterval((function(){c.style.opacity=+c.style.opacity+.05,+c.style.opacity>=1&&clearInterval(o)}),20)}}(e)}))})),c.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?c.style.display="none":(t=t.closest(".popup-content"))||(c.style.display="none")}))},u=function(){var e=document.querySelector(".popup-consultation").querySelector(".popup-content").querySelector("form"),t=document.querySelector("input[name=user_quest]");e.addEventListener("submit",(function(n){n.preventDefault();var o={question:t.value};new FormData(e).forEach((function(e,t){o[t]=e}));(function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(o).then((function(e){if(200!==e.status)throw new Error("status not 200")})).catch((function(e){console.error(e)}))}))};(function(){window.addEventListener("click",(function(e){var t=e.target;if(t=t.closest(".panel-heading")){e.preventDefault();var n=t.closest(".panel-group"),o=n.querySelectorAll(".panel-heading"),c=n.querySelectorAll(".panel"),r=o.length;o.forEach((function(e,n){e===t&&function(e,t,n){for(var o=0;o<t;o++)e===o?n[o].querySelector(".collapse").classList.add("in"):n[o].querySelector(".collapse").classList.remove("in")}(n,r,c)}))}}))})(),o(),c(),r(),l(".sentence",".discount-btn",".popup-discount"),l(".director",".director-btn",".popup-consultation"),l(".gauging",".gauging-button",".popup-check"),l(".container",".call-btn",".popup-call"),u()}]);