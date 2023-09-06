"use strict";(self.webpackChunkplanner_frontend=self.webpackChunkplanner_frontend||[]).push([[841],{4841:function(e,t,n){n.r(t);var c=n(2791),r=n(9434),s=n(6913),o=n(2222),i=n(632),a=n(3329);t.default=function(){var e=(0,r.v9)(i.fx),t=(0,r.v9)(i.Jb),n=(0,r.v9)(i.jl),d=(0,r.I0)();return(0,c.useEffect)((function(){d((0,o.Td)({page:e,query:t}))}),[d,e,t,n]),(0,a.jsx)("div",{className:"d-flex flex-column",children:(0,a.jsx)(s.Z,{})})}},6913:function(e,t,n){n.d(t,{Z:function(){return k}});var c=n(3433),r=n(9439),s=n(2791),o=n(9434),i=n(3360),a=n(8949),d=n(9230),l=n(6355),u=n(3329),h=function(e){var t=e.isAccordionOpen;return(0,u.jsx)(i.Z,{variant:"outline-primary",className:"position-absolute bottom-0 end-0 scroll-to-top-button me-3 ".concat(t?"visible":"invisible"),onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,u.jsx)(l.ZTc,{className:"scroll-to-top-icon"})})},p=n(632),f=n(3402),x=n(6856),m=n(9126),v=n(7873),j=n(2576),b=n(241),Z=n(2222);function g(e){var t=e.handleSubmit,n=e.descriptionUpdate,c=e.handleChange,r=e.description,s=e.reset,o=(0,d.$G)().t;return(0,u.jsxs)(b.Z,{onSubmit:t,children:[(0,u.jsx)(b.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:(0,u.jsx)(b.Z.Control,{as:"textarea",rows:3,type:"text",name:"description",value:n,onChange:c})}),(0,u.jsx)(i.Z,{className:"me-3",variant:"primary",type:"submit",disabled:n===r,children:o("update_todo")}),(0,u.jsx)(i.Z,{variant:"secondary",onClick:function(){return s()},children:o("cancel")})]})}var y=n(878),_=n(3528),N=n.n(_);function w(e){var t=(0,s.useState)(null),n=(0,r.Z)(t,2),c=n[0],o=n[1];return(0,s.useEffect)((function(){if(e){var t=N().tz.guess(),n=N()(e).tz(t).format("DD.MM.YYYY");o(n)}}),[e]),c}var C=function(e){var t=e._id,n=e.title,c=e.description,l=e.createdAt,h=e.updatedAt,p=e.plannedDate,_=e.completedDate,N=e.overdueDate,C=e.refreshDate,k=e.archiveDate,D=(0,s.useState)(!1),S=(0,r.Z)(D,2),E=S[0],A=S[1],L=(0,s.useState)(c),I=(0,r.Z)(L,2),T=I[0],z=I[1],P=(0,o.I0)(),Y=(0,d.$G)().t,G=null!==_,$=null!==N,q=null!==C,F=null!==k,J=(0,y.Z)(),M=w(l),O=w(h),K=w(p),U=w(_),B=w(N),H=w(C),W=w(k),Q=function(e,t){e.target.blur(),function(e){P((0,Z.$k)(e)),G?f.ZP.success("".concat(Y("todo_not_completed"))):f.ZP.success("".concat(Y("todo_completed")))}(t)};return(0,u.jsxs)(a.Z.Item,{eventKey:t,children:[(0,u.jsxs)("div",{className:"d-flex gap-3 align-items-center px-3",children:[!$&&(0,u.jsx)(v.Z,{placement:"top",overlay:(0,u.jsx)(j.Z,{children:Y("is_completed")}),children:(0,u.jsx)(b.Z.Check,{"aria-label":"option 1",id:"toggle-check-".concat(t),type:"checkbox",variant:"outline-primary",checked:G,disabled:!0===E,value:"1",onChange:function(e){return Q(e,t)}})}),$&&(0,u.jsx)(v.Z,{placement:"top",overlay:(0,u.jsx)(j.Z,{children:Y("is_overdue")}),children:(0,u.jsx)(b.Z.Check,{isInvalid:!0,defaultChecked:!0,type:"radio",id:"toggle-check-".concat(t)})}),(0,u.jsx)(a.Z.Header,{className:"w-100",children:J?(0,u.jsx)(v.Z,{placement:"top",overlay:(0,u.jsx)(j.Z,{children:n}),children:(0,u.jsx)("h5",{className:"w-100 mb-0 text-truncate custom-accordion-header",children:n})}):(0,u.jsx)("h5",{className:"w-100 mb-0 text-truncate custom-accordion-header",children:n})}),G||$?(0,u.jsx)(v.Z,{placement:"top",overlay:(0,u.jsx)(j.Z,{children:"".concat(Y("add_to_archive"))}),children:(0,u.jsx)(i.Z,{className:"ms-auto btn btn-success",type:"button",children:(0,u.jsx)(m.JNM,{})},"archive-".concat(t))}):(0,u.jsx)(v.Z,{placement:"top",overlay:(0,u.jsx)(j.Z,{children:"".concat(Y("delete"))}),children:(0,u.jsx)(i.Z,{disabled:E,className:"ms-auto btn btn-danger",type:"button",onClick:function(){return function(e){P((0,Z.uv)(e)),f.ZP.success("".concat(Y("todo_deleted")))}(t)},children:(0,u.jsx)(x.I0,{})})})]}),(0,u.jsx)(a.Z.Body,{className:"p-3",onExited:function(){return A(!1)},children:E?(0,u.jsx)(g,{handleSubmit:function(e){e.preventDefault(),P((0,Z.Lo)({_id:t,description:T})),f.ZP.success("".concat(Y("todo_update"))),A(!1)},descriptionUpdate:T,handleChange:function(e){var t=e.currentTarget,n=t.name,c=t.value;if("description"===n)z(c)},description:c,reset:function(){A(!1),z(c)}}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{className:"mb-3 border rounded p-2",children:c}),(0,u.jsxs)("div",{className:"d-flex flex-wrap gap-3 align-items-center",children:[(0,u.jsxs)("div",{children:[Y("created"),": ",(0,u.jsx)("b",{children:M})]}),(0,u.jsxs)("div",{children:[Y("updated"),": ",(0,u.jsxs)("b",{children:[" ",O]})]}),(0,u.jsxs)("div",{children:[Y("planned_date"),": ",(0,u.jsxs)("b",{children:[" ",K]})]}),!$&&(0,u.jsxs)("div",{className:G?"text-success":"",children:[Y("completed"),":",(0,u.jsxs)("b",{children:[" ",G?U:"??.??.????"]})]}),$&&(0,u.jsxs)("div",{className:"text-danger",children:[Y("is_overdue"),": ",(0,u.jsx)("b",{children:B})]}),q&&(0,u.jsxs)("div",{className:"text-primary",children:[Y("is_refresh"),": ",(0,u.jsx)("b",{children:H})]}),F&&(0,u.jsxs)("div",{className:"text-warning",children:[Y("archive"),": ",(0,u.jsx)("b",{children:W})]}),$?(0,u.jsx)(v.Z,{placement:"top",overlay:(0,u.jsx)(j.Z,{children:"".concat(Y("refresh"))}),children:(0,u.jsx)(i.Z,{className:"ms-auto btn btn-primary",type:"button",children:(0,u.jsx)(x.Ffb,{})})}):(0,u.jsx)(v.Z,{placement:"top",overlay:(0,u.jsx)(j.Z,{children:"".concat(Y("edit"))}),children:(0,u.jsx)(i.Z,{disabled:G,className:"ms-auto btn btn-primary",type:"button",onClick:function(){return A(!0)},children:(0,u.jsx)(x.z8Y,{})})})]})]})})]})},k=function(){var e=(0,s.useState)([]),t=(0,r.Z)(e,2),n=t[0],l=t[1],f=(0,s.useState)(!1),x=(0,r.Z)(f,2),m=x[0],v=x[1],j=(0,o.v9)(p.ql),b=(0,d.$G)().t;(0,s.useEffect)((function(e){!e&&v(!1),l([])}),[j]);return(0,u.jsxs)("div",{className:"mb-3 pb-5 position-relative",children:[j.length>0&&(0,u.jsx)(i.Z,{variant:"outline-primary",onClick:function(){!m&&n.length>0?j.forEach((function(e){var t=e._id;l((function(e){return e.includes(t)?e:[].concat((0,c.Z)(e),[t])}))})):m?l([]):j.forEach((function(e){var t=e._id;l((function(e){return[].concat((0,c.Z)(e),[t])}))})),v((function(e){return!e}))},className:"position-absolute bottom-0 start-0 ms-3",children:"".concat(b(m?"is_accordion_close":"is_accordion_open"))}),(0,u.jsx)(h,{isAccordionOpen:m}),0!==j.length?(0,u.jsx)(a.Z,{flush:!0,alwaysOpen:!0,activeKey:n,onSelect:function(e){l((function(t){return t.includes(e)?t.filter((function(t){return t!==e})):e})),j.length-1===n.length&&v((function(e){return!e}))},className:"border",children:j.map((function(e){var t=e._id,n=e.title,c=e.description,r=e.createdAt,s=e.updatedAt,o=e.plannedDate,i=e.completedDate,a=e.overdueDate,d=e.archiveDate;return(0,u.jsx)(C,{_id:t,title:n,description:c,createdAt:r,updatedAt:s,plannedDate:o,completedDate:i,overdueDate:a,archiveDate:d},t)}))}):(0,u.jsx)("div",{className:"text-center py-5 border rounded bs-accordion-bg",children:(0,u.jsx)("p",{children:b("no_todos_text")})})]})}},878:function(e,t,n){var c=n(9439),r=n(2791);t.Z=function(){var e=(0,r.useState)(!1),t=(0,c.Z)(e,2),n=t[0],s=t[1];return(0,r.useEffect)((function(){var e=function(){s(window.innerWidth<=576)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n}},632:function(e,t,n){n.d(t,{Jb:function(){return o},fx:function(){return r},gc:function(){return c},jl:function(){return s},ql:function(){return i}});var c=function(e){return e.todos.totalPages},r=function(e){return e.todos.page},s=function(e){return e.todos.totalTodos},o=function(e){return e.todos.search},i=function(e){return e.todos.search?e.todos.items.filter((function(t){var n=t.title,c=t.description;return n.toLowerCase().includes(e.todos.search.toLowerCase())||c.toLowerCase().includes(e.todos.search.toLowerCase())})):e.todos.items}}}]);
//# sourceMappingURL=841.90f5646e.chunk.js.map