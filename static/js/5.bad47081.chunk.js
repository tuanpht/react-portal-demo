(this["webpackJsonpreact-portal-demo"]=this["webpackJsonpreact-portal-demo"]||[]).push([[5],{28:function(t,e,n){"use strict";var r=n(1);n(0);e.a=function(t){var e=t.title,n=t.children;return Object(r.jsxs)("div",{className:"px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center",children:[Object(r.jsx)("h1",{className:"display-4",children:e}),Object(r.jsx)("div",{className:"lead",children:n})]})}},29:function(t,e,n){"use strict";var r=n(0),a=n(14);e.a=function(t){var e=t.children,n=t.container,o=Object(r.useMemo)((function(){return n instanceof HTMLElement?n:document.getElementById("root")}),[n]);return Object(a.createPortal)(e,o)}},30:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return a}))},37:function(t,e,n){"use strict";n.r(e);var r=n(30),a=n(1),o=n(0),c=n(2),i=n(28),s=n(29);var l=function(t){var e=t.isOpen,n=t.onClose,r=t.onConfirm,o=t.title,c=t.children,i=t.cancelLabel,l=void 0===i?"Close":i,d=t.confirmLabel,u=void 0===d?"OK":d,b=e?"modal fade show":"modal fade";return Object(a.jsxs)(s.a,{children:[Object(a.jsx)("div",{className:b,tabIndex:"-1",style:e?{display:"block"}:{},children:Object(a.jsx)("div",{className:"modal-dialog",children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsxs)("div",{className:"modal-header",children:[Object(a.jsx)("h5",{className:"modal-title",children:o}),Object(a.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:n})]}),Object(a.jsx)("div",{className:"modal-body",children:c}),Object(a.jsxs)("div",{className:"modal-footer",children:[Object(a.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:n,children:l}),Object(a.jsx)("button",{type:"button",className:"btn btn-primary",onClick:r,children:u})]})]})})}),e&&Object(a.jsx)("div",{className:"modal-backdrop fade show"})]})};e.default=function(){var t=Object(o.useState)(!1),e=Object(r.a)(t,2),n=e[0],s=e[1],d=Object(c.f)();return Object(a.jsxs)(i.a,{title:"You are in the Sun?!",children:["No surprise!! Too hot...",Object(a.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return s(!0)},children:"Escape"}),Object(a.jsx)(l,{title:"Escape?",isOpen:n,onClose:function(){return s(!1)},onConfirm:function(){s(!1),alert("Go home, you are drunk!"),d.push("/")},children:Object(a.jsx)("p",{children:"Do you want take a shower?"})})]})}}}]);
//# sourceMappingURL=5.bad47081.chunk.js.map