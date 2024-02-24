"use strict";(self.webpackChunkplanner_frontend=self.webpackChunkplanner_frontend||[]).push([[346],{5341:function(e,a,r){r.d(a,{FT:function(){return o}});var t=r(9439),n=r(2791),i=r(3329),s=["as","disabled"];function o(e){var a=e.tagName,r=e.disabled,t=e.href,n=e.target,i=e.rel,s=e.role,o=e.onClick,l=e.tabIndex,c=void 0===l?0:l,d=e.type;a||(a=null!=t||null!=n||null!=i?"a":"button");var f={tagName:a};if("button"===a)return[{type:d||"button",disabled:r},f];var v=function(e){(r||"a"===a&&function(e){return!e||"#"===e.trim()}(t))&&e.preventDefault(),r?e.stopPropagation():null==o||o(e)};return"a"===a&&(t||(t="#"),r&&(t=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:r?void 0:c,href:t,target:"a"===a?n:void 0,"aria-disabled":r||void 0,rel:"a"===a?i:void 0,onClick:v,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),v(e))}},f]}var l=n.forwardRef((function(e,a){var r=e.as,n=e.disabled,l=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,s),c=o(Object.assign({tagName:r,disabled:n},l)),d=(0,t.Z)(c,2),f=d[0],v=d[1].tagName;return(0,i.jsx)(v,Object.assign({},l,f,{ref:a}))}));l.displayName="Button",a.ZP=l},3360:function(e,a,r){var t=r(1413),n=r(9439),i=r(5987),s=r(1694),o=r.n(s),l=r(2791),c=r(5341),d=r(162),f=r(3329),v=["as","bsPrefix","variant","size","active","disabled","className"],u=l.forwardRef((function(e,a){var r=e.as,s=e.bsPrefix,l=e.variant,u=void 0===l?"primary":l,m=e.size,p=e.active,b=void 0!==p&&p,x=e.disabled,y=void 0!==x&&x,Z=e.className,N=(0,i.Z)(e,v),h=(0,d.vE)(s,"btn"),g=(0,c.FT)((0,t.Z)({tagName:r,disabled:y},N)),j=(0,n.Z)(g,2),w=j[0],P=j[1].tagName;return(0,f.jsx)(P,(0,t.Z)((0,t.Z)((0,t.Z)({},w),N),{},{ref:a,disabled:y,className:o()(Z,h,b&&"active",u&&"".concat(h,"-").concat(u),m&&"".concat(h,"-").concat(m),N.href&&y&&"disabled")}))}));u.displayName="Button",a.Z=u},241:function(e,a,r){r.d(a,{Z:function(){return te}});var t=r(1413),n=r(5987),i=r(1694),s=r.n(i),o=r(2007),l=r.n(o),c=r(2791),d=r(3329),f=["as","className","type","tooltip"],v={type:l().string,tooltip:l().bool,as:l().elementType},u=c.forwardRef((function(e,a){var r=e.as,i=void 0===r?"div":r,o=e.className,l=e.type,c=void 0===l?"valid":l,v=e.tooltip,u=void 0!==v&&v,m=(0,n.Z)(e,f);return(0,d.jsx)(i,(0,t.Z)((0,t.Z)({},m),{},{ref:a,className:s()(o,"".concat(c,"-").concat(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=v;var m=u,p=r(6882),b=r(4934),x=r(162),y=["bsPrefix","className","htmlFor"],Z=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.htmlFor,l=(0,n.Z)(e,y),f=(0,c.useContext)(b.Z).controlId;return r=(0,x.vE)(r,"form-check-label"),(0,d.jsx)("label",(0,t.Z)((0,t.Z)({},l),{},{ref:a,htmlFor:o||f,className:s()(i,r)}))}));Z.displayName="FormCheckLabel";var N=Z;var h=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],g=c.forwardRef((function(e,a){var r=e.id,i=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,f=void 0!==l&&l,v=e.reverse,u=void 0!==v&&v,y=e.disabled,Z=void 0!==y&&y,g=e.isValid,j=void 0!==g&&g,w=e.isInvalid,P=void 0!==w&&w,k=e.feedbackTooltip,I=void 0!==k&&k,C=e.feedback,F=e.feedbackType,O=e.className,E=e.style,R=e.title,z=void 0===R?"":R,S=e.type,T=void 0===S?"checkbox":S,V=e.label,L=e.children,_=e.as,D=void 0===_?"input":_,G=(0,n.Z)(e,h);i=(0,x.vE)(i,"form-check"),o=(0,x.vE)(o,"form-switch");var B=(0,c.useContext)(b.Z).controlId,H=(0,c.useMemo)((function(){return{controlId:r||B}}),[B,r]),M=!L&&null!=V&&!1!==V||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(L,N),U=(0,d.jsx)(p.Z,(0,t.Z)((0,t.Z)({},G),{},{type:"switch"===T?"checkbox":T,ref:a,isValid:j,isInvalid:P,disabled:Z,as:D}));return(0,d.jsx)(b.Z.Provider,{value:H,children:(0,d.jsx)("div",{style:E,className:s()(O,M&&i,f&&"".concat(i,"-inline"),u&&"".concat(i,"-reverse"),"switch"===T&&o),children:L||(0,d.jsxs)(d.Fragment,{children:[U,M&&(0,d.jsx)(N,{title:z,children:V}),C&&(0,d.jsx)(m,{type:F,tooltip:I,children:C})]})})})}));g.displayName="FormCheck";var j=Object.assign(g,{Input:p.Z,Label:N}),w=r(4942),P=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),k=c.forwardRef((function(e,a){var r,i,o=e.bsPrefix,l=e.type,f=e.size,v=e.htmlSize,u=e.id,m=e.className,p=e.isValid,y=void 0!==p&&p,Z=e.isInvalid,N=void 0!==Z&&Z,h=e.plaintext,g=e.readOnly,j=e.as,k=void 0===j?"input":j,I=(0,n.Z)(e,P),C=(0,c.useContext)(b.Z).controlId;(o=(0,x.vE)(o,"form-control"),h)?r=(0,w.Z)({},"".concat(o,"-plaintext"),!0):(i={},(0,w.Z)(i,o,!0),(0,w.Z)(i,"".concat(o,"-").concat(f),f),r=i);return(0,d.jsx)(k,(0,t.Z)((0,t.Z)({},I),{},{type:l,size:v,ref:a,readOnly:g,id:u||C,className:s()(m,r,y&&"is-valid",N&&"is-invalid","color"===l&&"".concat(o,"-color"))}))}));k.displayName="FormControl";var I=Object.assign(k,{Feedback:m}),C=(0,r(6543).Z)("form-floating"),F=["controlId","as"],O=c.forwardRef((function(e,a){var r=e.controlId,i=e.as,s=void 0===i?"div":i,o=(0,n.Z)(e,F),l=(0,c.useMemo)((function(){return{controlId:r}}),[r]);return(0,d.jsx)(b.Z.Provider,{value:l,children:(0,d.jsx)(s,(0,t.Z)((0,t.Z)({},o),{},{ref:a}))})}));O.displayName="FormGroup";var E=O,R=r(9439),z=["as","bsPrefix","className"],S=["className"];var T=c.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,i=e.className,o=(0,n.Z)(e,z);r=(0,x.vE)(r,"col");var l=(0,x.pi)(),c=(0,x.zG)(),d=[],f=[];return l.forEach((function(e){var a,t,n,i=o[e];delete o[e],"object"===typeof i&&null!=i?(a=i.span,t=i.offset,n=i.order):a=i;var s=e!==c?"-".concat(e):"";a&&d.push(!0===a?"".concat(r).concat(s):"".concat(r).concat(s,"-").concat(a)),null!=n&&f.push("order".concat(s,"-").concat(n)),null!=t&&f.push("offset".concat(s,"-").concat(t))})),[(0,t.Z)((0,t.Z)({},o),{},{className:s().apply(void 0,[i].concat(d,f))}),{as:a,bsPrefix:r,spans:d}]}(e),i=(0,R.Z)(r,2),o=i[0],l=o.className,c=(0,n.Z)(o,S),f=i[1],v=f.as,u=void 0===v?"div":v,m=f.bsPrefix,p=f.spans;return(0,d.jsx)(u,(0,t.Z)((0,t.Z)({},c),{},{ref:a,className:s()(l,!p.length&&m)}))}));T.displayName="Col";var V=T,L=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],_=c.forwardRef((function(e,a){var r=e.as,i=void 0===r?"label":r,o=e.bsPrefix,l=e.column,f=void 0!==l&&l,v=e.visuallyHidden,u=void 0!==v&&v,m=e.className,p=e.htmlFor,y=(0,n.Z)(e,L),Z=(0,c.useContext)(b.Z).controlId;o=(0,x.vE)(o,"form-label");var N="col-form-label";"string"===typeof f&&(N="".concat(N," ").concat(N,"-").concat(f));var h=s()(m,o,u&&"visually-hidden",f&&N);return p=p||Z,f?(0,d.jsx)(V,(0,t.Z)({ref:a,as:"label",className:h,htmlFor:p},y)):(0,d.jsx)(i,(0,t.Z)({ref:a,className:h,htmlFor:p},y))}));_.displayName="FormLabel";var D=_,G=["bsPrefix","className","id"],B=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.id,l=(0,n.Z)(e,G),f=(0,c.useContext)(b.Z).controlId;return r=(0,x.vE)(r,"form-range"),(0,d.jsx)("input",(0,t.Z)((0,t.Z)({},l),{},{type:"range",ref:a,className:s()(i,r),id:o||f}))}));B.displayName="FormRange";var H=B,M=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],U=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.size,o=e.htmlSize,l=e.className,f=e.isValid,v=void 0!==f&&f,u=e.isInvalid,m=void 0!==u&&u,p=e.id,y=(0,n.Z)(e,M),Z=(0,c.useContext)(b.Z).controlId;return r=(0,x.vE)(r,"form-select"),(0,d.jsx)("select",(0,t.Z)((0,t.Z)({},y),{},{size:o,ref:a,className:s()(l,r,i&&"".concat(r,"-").concat(i),v&&"is-valid",m&&"is-invalid"),id:p||Z}))}));U.displayName="FormSelect";var A=U,K=["bsPrefix","className","as","muted"],W=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.as,l=void 0===o?"small":o,c=e.muted,f=(0,n.Z)(e,K);return r=(0,x.vE)(r,"form-text"),(0,d.jsx)(l,(0,t.Z)((0,t.Z)({},f),{},{ref:a,className:s()(i,r,c&&"text-muted")}))}));W.displayName="FormText";var q=W,J=c.forwardRef((function(e,a){return(0,d.jsx)(j,(0,t.Z)((0,t.Z)({},e),{},{ref:a,type:"switch"}))}));J.displayName="Switch";var Q=Object.assign(J,{Input:j.Input,Label:j.Label}),X=["bsPrefix","className","children","controlId","label"],Y=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.children,l=e.controlId,c=e.label,f=(0,n.Z)(e,X);return r=(0,x.vE)(r,"form-floating"),(0,d.jsxs)(E,(0,t.Z)((0,t.Z)({ref:a,className:s()(i,r),controlId:l},f),{},{children:[o,(0,d.jsx)("label",{htmlFor:l,children:c})]}))}));Y.displayName="FloatingLabel";var $=Y,ee=["className","validated","as"],ae={_ref:l().any,validated:l().bool,as:l().elementType},re=c.forwardRef((function(e,a){var r=e.className,i=e.validated,o=e.as,l=void 0===o?"form":o,c=(0,n.Z)(e,ee);return(0,d.jsx)(l,(0,t.Z)((0,t.Z)({},c),{},{ref:a,className:s()(r,i&&"was-validated")}))}));re.displayName="Form",re.propTypes=ae;var te=Object.assign(re,{Group:E,Control:I,Floating:C,Check:j,Switch:Q,Label:D,Text:q,Range:H,Select:A,FloatingLabel:$})},6882:function(e,a,r){var t=r(1413),n=r(5987),i=r(1694),s=r.n(i),o=r(2791),l=r(4934),c=r(162),d=r(3329),f=["id","bsPrefix","className","type","isValid","isInvalid","as"],v=o.forwardRef((function(e,a){var r=e.id,i=e.bsPrefix,v=e.className,u=e.type,m=void 0===u?"checkbox":u,p=e.isValid,b=void 0!==p&&p,x=e.isInvalid,y=void 0!==x&&x,Z=e.as,N=void 0===Z?"input":Z,h=(0,n.Z)(e,f),g=(0,o.useContext)(l.Z).controlId;return i=(0,c.vE)(i,"form-check-input"),(0,d.jsx)(N,(0,t.Z)((0,t.Z)({},h),{},{ref:a,type:m,id:r||g,className:s()(v,i,b&&"is-valid",y&&"is-invalid")}))}));v.displayName="FormCheckInput",a.Z=v},4934:function(e,a,r){var t=r(2791).createContext({});a.Z=t},6543:function(e,a,r){r.d(a,{Z:function(){return u}});var t=r(1413),n=r(5987),i=r(1694),s=r.n(i),o=/-(.)/g;var l=r(2791),c=r(162),d=r(3329),f=["className","bsPrefix","as"],v=function(e){return e[0].toUpperCase()+(a=e,a.replace(o,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function u(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.displayName,i=void 0===r?v(e):r,o=a.Component,u=a.defaultProps,m=l.forwardRef((function(a,r){var i=a.className,l=a.bsPrefix,v=a.as,m=void 0===v?o||"div":v,p=(0,n.Z)(a,f),b=(0,t.Z)((0,t.Z)({},u),p),x=(0,c.vE)(l,e);return(0,d.jsx)(m,(0,t.Z)({ref:r,className:s()(i,x)},b))}));return m.displayName=i,m}},9983:function(e,a,r){r.d(a,{w_:function(){return c}});var t=r(2791),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=t.createContext&&t.createContext(n),s=function(){return s=Object.assign||function(e){for(var a,r=1,t=arguments.length;r<t;r++)for(var n in a=arguments[r])Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e},s.apply(this,arguments)},o=function(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]])}return r};function l(e){return e&&e.map((function(e,a){return t.createElement(e.tag,s({key:a},e.attr),l(e.child))}))}function c(e){return function(a){return t.createElement(d,s({attr:s({},e.attr)},a),l(e.child))}}function d(e){var a=function(a){var r,n=e.attr,i=e.size,l=e.title,c=o(e,["attr","size","title"]),d=i||a.size||"1em";return a.className&&(r=a.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,n,c,{className:r,style:s(s({color:e.color||a.color},a.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&t.createElement("title",null,l),e.children)};return void 0!==i?t.createElement(i.Consumer,null,(function(e){return a(e)})):a(n)}},2391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=346.6190b708.chunk.js.map