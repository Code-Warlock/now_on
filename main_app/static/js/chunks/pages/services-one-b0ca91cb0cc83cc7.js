(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6662],{8842:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services-one",function(){return s(4276)}])},50:function(e,r,s){"use strict";var i=s(5893),n=(s(7294),s(1664)),t=s.n(n);r.Z=function(e){var r=e.pageTitle,s=e.homePageUrl,n=e.homePageText,l=e.activePageText;return(0,i.jsx)("div",{className:"page-title-area bg-22",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"page-title-content",children:[(0,i.jsx)("h2",{children:r}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(t(),{href:s,children:(0,i.jsx)("a",{children:n})})}),(0,i.jsx)("li",{children:l})]})]})})})}},1551:function(e,r,s){"use strict";function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var s=0,i=new Array(r);s<r;s++)i[s]=e[s];return i}function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var i,n,t=[],l=!0,a=!1;try{for(s=s.call(e);!(l=(i=s.next()).done)&&(t.push(i.value),!r||t.length!==r);l=!0);}catch(c){a=!0,n=c}finally{try{l||null==s.return||s.return()}finally{if(a)throw n}}return t}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return i(e,r);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return i(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var t,l=(t=s(7294))&&t.__esModule?t:{default:t},a=s(1003),c=s(880),o=s(9246);var d={};function u(e,r,s,i){if(e&&a.isLocalURL(r)){e.prefetch(r,s,i).catch((function(e){0}));var n=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;d[r+"%"+s+(n?"%"+n:"")]=!0}}var m=function(e){var r,s=!1!==e.prefetch,i=c.useRouter(),t=l.default.useMemo((function(){var r=n(a.resolveHref(i,e.href,!0),2),s=r[0],t=r[1];return{href:s,as:e.as?a.resolveHref(i,e.as):t||s}}),[i,e.href,e.as]),m=t.href,f=t.as,h=l.default.useRef(m),p=l.default.useRef(f),x=e.children,j=e.replace,v=e.shallow,g=e.scroll,N=e.locale;"string"===typeof x&&(x=l.default.createElement("a",null,x));var y=(r=l.default.Children.only(x))&&"object"===typeof r&&r.ref,b=n(o.useIntersection({rootMargin:"200px"}),3),w=b[0],L=b[1],M=b[2],S=l.default.useCallback((function(e){p.current===f&&h.current===m||(M(),p.current=f,h.current=m),w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[f,y,m,M,w]);l.default.useEffect((function(){var e=L&&s&&a.isLocalURL(m),r="undefined"!==typeof N?N:i&&i.locale,n=d[m+"%"+f+(r?"%"+r:"")];e&&!n&&u(i,m,f,{locale:r})}),[f,m,L,N,s,i]);var k={ref:S,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,s,i,n,t,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(s))&&(e.preventDefault(),r[n?"replace":"push"](s,i,{shallow:t,locale:c,scroll:l}))}(e,i,m,f,j,v,g,N)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),a.isLocalURL(m)&&u(i,m,f,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var C="undefined"!==typeof N?N:i&&i.locale,_=i&&i.isLocaleDomain&&a.getDomainLocale(f,C,i&&i.locales,i&&i.domainLocales);k.href=_||a.addBasePath(a.addLocale(f,C,i&&i.defaultLocale))}return l.default.cloneElement(r,k)};r.default=m,("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},9246:function(e,r,s){"use strict";function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var s=0,i=new Array(r);s<r;s++)i[s]=e[s];return i}function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var i,n,t=[],l=!0,a=!1;try{for(s=s.call(e);!(l=(i=s.next()).done)&&(t.push(i.value),!r||t.length!==r);l=!0);}catch(c){a=!0,n=c}finally{try{l||null==s.return||s.return()}finally{if(a)throw n}}return t}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return i(e,r);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return i(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,s=e.rootMargin,i=e.disabled||!a,d=t.useRef(),u=n(t.useState(!1),2),m=u[0],f=u[1],h=n(t.useState(r?r.current:null),2),p=h[0],x=h[1],j=t.useCallback((function(e){d.current&&(d.current(),d.current=void 0),i||m||e&&e.tagName&&(d.current=function(e,r,s){var i=function(e){var r,s={root:e.root||null,margin:e.rootMargin||""},i=o.find((function(e){return e.root===s.root&&e.margin===s.margin}));i?r=c.get(i):(r=c.get(s),o.push(s));if(r)return r;var n=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),s=e.isIntersecting||e.intersectionRatio>0;r&&s&&r(s)}))}),e);return c.set(s,r={id:s,observer:t,elements:n}),r}(s),n=i.id,t=i.observer,l=i.elements;return l.set(e,r),t.observe(e),function(){if(l.delete(e),t.unobserve(e),0===l.size){t.disconnect(),c.delete(n);var r=o.findIndex((function(e){return e.root===n.root&&e.margin===n.margin}));r>-1&&o.splice(r,1)}}}(e,(function(e){return e&&f(e)}),{root:p,rootMargin:s}))}),[i,p,s,m]),v=t.useCallback((function(){f(!1)}),[]);return t.useEffect((function(){if(!a&&!m){var e=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[m]),t.useEffect((function(){r&&x(r.current)}),[r]),[j,m,v]};var t=s(7294),l=s(4686),a="undefined"!==typeof IntersectionObserver;var c=new Map,o=[];("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},4276:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return u}});var i=s(5893),n=(s(7294),s(3435)),t=s(50),l=function(){return(0,i.jsx)("div",{className:"security-area pt-100 pb-70",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"section-title",children:[(0,i.jsx)("h2",{children:"Complete Website Security"}),(0,i.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima sapiente."})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,i.jsxs)("div",{className:"single-security",children:[(0,i.jsx)("i",{className:"flaticon-bug"}),(0,i.jsx)("h3",{children:"Malware Detection Removal"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"})]})}),(0,i.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,i.jsxs)("div",{className:"single-security",children:[(0,i.jsx)("i",{className:"flaticon-content"}),(0,i.jsx)("h3",{children:"Content Delivery Network"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"})]})}),(0,i.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,i.jsxs)("div",{className:"single-security",children:[(0,i.jsx)("i",{className:"flaticon-support"}),(0,i.jsx)("h3",{children:"24/7 Cyber Security Support"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"})]})}),(0,i.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,i.jsxs)("div",{className:"single-security",children:[(0,i.jsx)("i",{className:"flaticon-profile"}),(0,i.jsx)("h3",{children:"Managed Web Application"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"})]})})]})]})})},a=s(1664),c=s.n(a),o=function(){return(0,i.jsx)("div",{className:"solutions-area section-width pb-100",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"section-title",children:[(0,i.jsx)("h2",{children:"High-Performance Solutions"}),(0,i.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima."})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-5",children:(0,i.jsx)("div",{className:"single-solutions solutions-time-bg-1",children:(0,i.jsxs)("div",{className:"solutions-content",children:[(0,i.jsx)("h3",{children:"Secure Managed IT"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorer"}),(0,i.jsx)(c(),{href:"/service-details",children:(0,i.jsx)("a",{className:"read-more",children:"Read More"})})]})})}),(0,i.jsx)("div",{className:"col-lg-7",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,i.jsx)("div",{className:"single-solutions solutions-time-bg-2",children:(0,i.jsxs)("div",{className:"solutions-content",children:[(0,i.jsx)("h3",{children:"Compliance"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet sed, consectetur adipiscing elit do"}),(0,i.jsx)(c(),{href:"/service-details",children:(0,i.jsx)("a",{className:"read-more",children:"Read More"})})]})})}),(0,i.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,i.jsx)("div",{className:"single-solutions solutions-time-bg-3",children:(0,i.jsxs)("div",{className:"solutions-content",children:[(0,i.jsx)("h3",{children:"Cyber Security"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet sed, consectetur adipiscing elit do"}),(0,i.jsx)(c(),{href:"/service-details",children:(0,i.jsx)("a",{className:"read-more",children:"Read More"})})]})})})]})}),(0,i.jsx)("div",{className:"col-lg-7",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,i.jsx)("div",{className:"single-solutions solutions-time-bg-4",children:(0,i.jsxs)("div",{className:"solutions-content",children:[(0,i.jsx)("h3",{children:"Disaster Planning"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet sed, consectetur adipiscing elit do"}),(0,i.jsx)(c(),{href:"/service-details",children:(0,i.jsx)("a",{className:"read-more",children:"Read More"})})]})})}),(0,i.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,i.jsx)("div",{className:"single-solutions solutions-time-bg-5",children:(0,i.jsxs)("div",{className:"solutions-content",children:[(0,i.jsx)("h3",{children:"Secure By Design"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet sed, consectetur adipiscing elit do"}),(0,i.jsx)(c(),{href:"/service-details",children:(0,i.jsx)("a",{className:"read-more",children:"Read More"})})]})})})]})}),(0,i.jsx)("div",{className:"col-lg-5",children:(0,i.jsx)("div",{className:"single-solutions solutions-time-bg-6",children:(0,i.jsxs)("div",{className:"solutions-content",children:[(0,i.jsx)("h3",{children:"Secure Awareness Training"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorer"}),(0,i.jsx)(c(),{href:"/service-details",children:(0,i.jsx)("a",{className:"read-more",children:"Read More"})})]})})}),(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsx)("div",{className:"page-navigation-area",children:(0,i.jsxs)("ul",{className:"pagination",children:[(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)(c(),{href:"#",children:(0,i.jsx)("a",{className:"page-link page-links",children:(0,i.jsx)("i",{className:"bx bx-chevrons-left"})})})}),(0,i.jsx)("li",{className:"page-item active",children:(0,i.jsx)(c(),{href:"#",children:(0,i.jsx)("a",{className:"page-link",children:"1"})})}),(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)(c(),{href:"#",children:(0,i.jsx)("a",{className:"page-link",children:"2"})})}),(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)(c(),{href:"#",children:(0,i.jsx)("a",{className:"page-link",children:"3"})})}),(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)(c(),{href:"#",children:(0,i.jsx)("a",{className:"page-link",children:(0,i.jsx)("i",{className:"bx bx-chevrons-right"})})})})]})})})]})]})})},d=s(6803),u=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.Z,{}),(0,i.jsx)(t.Z,{pageTitle:"Services Style One",homePageUrl:"/",homePageText:"Home",activePageText:"Services Style One"}),(0,i.jsx)(l,{}),(0,i.jsx)(o,{}),(0,i.jsx)(d.Z,{})]})}},1664:function(e,r,s){e.exports=s(1551)},1163:function(e,r,s){e.exports=s(880)}},function(e){e.O(0,[8918,3435,9774,2888,179],(function(){return r=8842,e(e.s=r);var r}));var r=e.O();_N_E=r}]);