(this["webpackJsonpgame-test"]=this["webpackJsonpgame-test"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":"","letter":"A","found":false,"active":"notSelected"},{"id":"","letter":"A","found":false,"active":"notSelected"},{"id":"","letter":"B","found":false,"active":"notSelected"},{"id":"","letter":"B","found":false,"active":"notSelected"},{"id":"","letter":"C","found":false,"active":"notSelected"},{"id":"","letter":"C","found":false,"active":"notSelected"},{"id":"","letter":"D","found":false,"active":"notSelected"},{"id":"","letter":"D","found":false,"active":"notSelected"},{"id":"","letter":"F","found":false,"active":"notSelected"},{"id":"","letter":"F","found":false,"active":"notSelected"},{"id":"","letter":"G","found":false,"active":"notSelected"},{"id":"","letter":"G","found":false,"active":"notSelected"},{"id":"","letter":"H","found":false,"active":"notSelected"},{"id":"","letter":"H","found":false,"active":"notSelected"},{"id":"","letter":"J","found":false,"active":"notSelected"},{"id":"","letter":"J","found":false,"active":"notSelected"}]')},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n(8),o=n.n(i),l=(n(15),n(16),n(2)),d=n(5),r=n(6),u=(n(17),n(9));n(18);var f=function(e){console.log(e.id);var t="Item blue";!0===e.found&&(t="Item red"),t+=" ".concat(e.active);var n="selected"===e.active?null:function(t){e.myFunc(t),e.changeActiveClass(e.id)};return Object(c.jsx)("div",{className:t,onClick:n,children:Object(c.jsx)("h2",{children:e.letter})})};var s=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(0),s=Object(r.a)(o,2),v=s[0],j=s[1],b=Object(a.useState)([]),O=Object(r.a)(b,2),S=O[0],m=O[1];Object(a.useEffect)((function(){var e=u.map((function(e){return e.id=Math.floor(1+1e5*Math.random()),e}));e.sort((function(e,t){return e.id-t.id})),i((function(){return e}))}),[]);var h=function(e){var t=Object(d.a)(n).map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{active:"selected"}):t}));i(t)},p=function(e){j(v+1),console.log(e.target.id),m((function(){return[].concat(Object(d.a)(S),[e.target.innerText])}))},g=n.map((function(e,t){return Object(a.createElement)(f,Object(l.a)(Object(l.a)({},e),{},{myFunc:p,changeActiveClass:h,key:t}))})),x=function(){j(0),m([])};if(2===v&&S[0]===S[1]){var A=Object(d.a)(n);A=n.map((function(e){return e.letter===S[0]?Object(l.a)(Object(l.a)({},e),{},{found:!0}):e})),i(A),x()}if(3===v){var C=n.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{active:"notSelected"})}));i(C),x()}return Object(c.jsx)("div",{className:"AllItems",children:g})};var v=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(s,{})})};o.a.render(Object(c.jsx)(v,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.d61e821f.chunk.js.map