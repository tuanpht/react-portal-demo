(this["webpackJsonpreact-portal-demo"]=this["webpackJsonpreact-portal-demo"]||[]).push([[3],{28:function(e,t,r){"use strict";var n=r(1);r(0);t.a=function(e){var t=e.title,r=e.children;return Object(n.jsxs)("div",{className:"px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center",children:[Object(n.jsx)("h1",{className:"display-4",children:t}),Object(n.jsx)("div",{className:"lead",children:r})]})}},29:function(e,t,r){"use strict";var n=r(0),c=r(14);t.a=function(e){var t=e.children,r=e.container,a=Object(n.useMemo)((function(){return r instanceof HTMLElement?r:document.getElementById("root")}),[r]);return Object(c.createPortal)(t,a)}},30:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(o){c=!0,a=o}finally{try{n||null==l.return||l.return()}finally{if(c)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return c}))},31:function(e,t,r){"use strict";var n=r(30),c=r(1),a=r(0),i=r(7),l=r(29);t.a=function(e){var t=e.items,r=Object(a.useState)(null),o=Object(n.a)(r,2),u=o[0],s=o[1];return Object(a.useEffect)((function(){s(document.getElementById("breadcrumbs-portal"))}),[]),t&&t.length?u&&Object(c.jsx)(l.a,{container:u,children:Object(c.jsx)("nav",{"aria-label":"breadcrumb",children:Object(c.jsxs)("ol",{className:"breadcrumb",children:[Object(c.jsx)("li",{className:"breadcrumb-item",children:Object(c.jsx)(i.b,{to:"/",children:"Home"})}),t.map((function(e,t){return Object(c.jsx)(a.Fragment,{children:e.url?Object(c.jsx)("li",{className:"breadcrumb-item",children:Object(c.jsx)(i.b,{to:e.url,children:e.title})}):Object(c.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:e.title})},t)}))]})})}):null}},33:function(e,t,r){"use strict";r.r(t);var n=r(1),c=(r(0),r(28)),a=r(31);t.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(c.a,{title:"You are in the Milky Way!",children:"Let enjoy your journey..."}),Object(n.jsx)(a.a,{items:[{title:"Sometimes, Portal will appear here!"}]})]})}}}]);
//# sourceMappingURL=3.1796117e.chunk.js.map