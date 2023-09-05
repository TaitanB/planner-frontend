"use strict";(self.webpackChunkplanner_frontend=self.webpackChunkplanner_frontend||[]).push([[841],{4841:function(e,t,n){n.r(t);var c=n(2791),r=n(9434),i=n(582),o=n(2222),a=n(632),s=n(3329);t.default=function(){var e=(0,r.v9)(a.fx),t=(0,r.v9)(a.ku),n=(0,r.v9)(a.jl),d=(0,r.I0)();return(0,c.useEffect)((function(){d((0,o.Td)({page:e,query:t}))}),[d,e,t,n]),(0,s.jsx)("div",{className:"d-flex flex-column",children:(0,s.jsx)(i.Z,{})})}},582:function(e,t,n){n.d(t,{Z:function(){return w}});var c=n(3433),r=n(9439),i=n(2791),o=n(9434),a=n(3360),s=n(8949),d=n(9230),l=n(6355),u=n(3329),h=function(e){var t=e.isAccordionOpen;return(0,u.jsx)(a.Z,{variant:"outline-primary",className:"position-absolute bottom-0 end-0 scroll-to-top-button me-3 ".concat(t?"visible":"invisible"),onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,u.jsx)(l.ZTc,{className:"scroll-to-top-icon"})})},p=n(632),f=n(3402),x=n(6856),m=n(9126),v=n(7873),j=n(2576),b=n(3027),Z=n(2222);function g(e){var t=e.handleSubmit,n=e.descriptionUpdate,c=e.handleChange,r=e.description,i=e.reset,o=(0,d.$G)().t;return(0,u.jsxs)(b.Z,{onSubmit:t,children:[(0,u.jsx)(b.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:(0,u.jsx)(b.Z.Control,{as:"textarea",rows:3,type:"text",name:"description",value:n,onChange:c})}),(0,u.jsx)(a.Z,{className:"me-3",variant:"primary",type:"submit",disabled:n===r,children:o("update_todo")}),(0,u.jsx)(a.Z,{variant:"secondary",onClick:function(){return i()},children:o("cancel")})]})}var _=n(878),y=function(e){if(e){var t=e.slice(0,10).split("-"),n=(0,r.Z)(t,3),c=n[0],i=n[1],o=n[2];return"".concat(o,".").concat(i,".").concat(c)}},N=function(e){var t=e._id,n=e.title,c=e.description,l=e.createdAt,h=e.updatedAt,p=e.plannedDate,N=e.completedDate,w=e.overdueDate,C=e.archiveDate,k=(0,i.useState)(!1),D=(0,r.Z)(k,2),E=D[0],S=D[1],A=(0,i.useState)(c),L=(0,r.Z)(A,2),I=L[0],T=L[1],P=(0,o.I0)(),G=(0,d.$G)().t,$=null!==N,z=null!==w,O=null!==C,F=(0,_.Z)(),K=function(e,t){e.target.blur(),function(e){P((0,Z.$k)(e)),$?f.ZP.success("".concat(G("todo_not_completed"))):f.ZP.success("".concat(G("todo_completed")))}(t)};return(0,u.jsxs)(s.Z.Item,{eventKey:t,children:[(0,u.jsxs)("div",{className:"d-flex gap-3 align-items-center px-3",children:[!z&&(0,u.jsx)(v.Z,{placement:"top",overlay:(0,u.jsx)(j.Z,{children:G("is_completed")}),children:(0,u.jsx)(b.Z.Check,{"aria-label":"option 1",id:"toggle-check-".concat(t),type:"checkbox",variant:"outline-primary",checked:$,disabled:!0===E,value:"1",onChange:function(e){return K(e,t)}})}),z&&(0,u.jsx)(v.Z,{placement:"top",overlay:(0,u.jsx)(j.Z,{children:G("is_overdue")}),children:(0,u.jsx)(b.Z.Check,{isInvalid:!0,defaultChecked:!0,type:"radio",id:"toggle-check-".concat(t)})}),(0,u.jsx)(s.Z.Header,{className:"w-100",children:F?(0,u.jsx)(v.Z,{placement:"top",overlay:(0,u.jsx)(j.Z,{children:n}),children:(0,u.jsx)("h5",{className:"w-100 mb-0 text-truncate custom-accordion-header",children:n})}):(0,u.jsx)("h5",{className:"w-100 mb-0 text-truncate custom-accordion-header",children:n})}),$||z?(0,u.jsx)(v.Z,{placement:"top",overlay:(0,u.jsx)(j.Z,{children:"".concat(G("add_to_archive"))}),children:(0,u.jsx)(a.Z,{className:"ms-auto btn btn-success",type:"button",children:(0,u.jsx)(m.JNM,{})},"archive-".concat(t))}):(0,u.jsx)(v.Z,{placement:"top",overlay:(0,u.jsx)(j.Z,{children:"".concat(G("delete"))}),children:(0,u.jsx)(a.Z,{disabled:E,className:"ms-auto btn btn-danger",type:"button",onClick:function(){return function(e){P((0,Z.uv)(e)),f.ZP.success("".concat(G("todo_deleted")))}(t)},children:(0,u.jsx)(x.I0,{})})})]}),(0,u.jsx)(s.Z.Body,{className:"p-3",onExited:function(){return S(!1)},children:E?(0,u.jsx)(g,{handleSubmit:function(e){e.preventDefault(),P((0,Z.Lo)({_id:t,description:I})),f.ZP.success("".concat(G("todo_update"))),S(!1)},descriptionUpdate:I,handleChange:function(e){var t=e.currentTarget,n=t.name,c=t.value;if("description"===n)T(c)},description:c,reset:function(){S(!1),T(c)}}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{className:"mb-3",children:c}),(0,u.jsxs)("div",{className:"d-flex flex-wrap gap-3 align-items-center",children:[(0,u.jsxs)("div",{children:[G("created"),": ",(0,u.jsx)("b",{children:y(l)})]}),(0,u.jsxs)("div",{children:[G("updated"),": ",(0,u.jsxs)("b",{children:[" ",y(h)]})]}),(0,u.jsxs)("div",{children:[G("planned_date"),": ",(0,u.jsxs)("b",{children:[" ",y(p)]})]}),null===w&&(0,u.jsxs)("div",{className:$?"text-success":"",children:[G("completed"),":",(0,u.jsxs)("b",{children:[" ",$?y(N):"??.??.????"]})]}),z&&(0,u.jsxs)("div",{className:"text-danger",children:[G("is_overdue"),": ",(0,u.jsx)("b",{children:y(w)})]}),O&&(0,u.jsxs)("div",{className:"text-warning",children:[G("archive"),": ",(0,u.jsx)("b",{children:y(C)})]}),(0,u.jsx)(v.Z,{placement:"top",overlay:(0,u.jsx)(j.Z,{children:"".concat(G("edit"))}),children:(0,u.jsx)(a.Z,{disabled:$||z,className:"ms-auto btn btn-primary",type:"button",onClick:function(){return S(!0)},children:(0,u.jsx)(x.z8Y,{})})})]})]})})]})},w=function(){var e=(0,i.useState)([]),t=(0,r.Z)(e,2),n=t[0],l=t[1],f=(0,i.useState)(!1),x=(0,r.Z)(f,2),m=x[0],v=x[1],j=(0,o.v9)(p.aE),b=(0,d.$G)().t;(0,i.useEffect)((function(e){!e&&v(!1),l([])}),[j]);return(0,u.jsxs)("div",{className:"mb-3 pb-5 position-relative",children:[j.length>0&&(0,u.jsx)(a.Z,{variant:"outline-primary",onClick:function(){!m&&n.length>0?j.forEach((function(e){var t=e._id;l((function(e){return e.includes(t)?e:[].concat((0,c.Z)(e),[t])}))})):m?l([]):j.forEach((function(e){var t=e._id;l((function(e){return[].concat((0,c.Z)(e),[t])}))})),v((function(e){return!e}))},className:"position-absolute bottom-0 start-0",children:"".concat(b(m?"is_accordion_close":"is_accordion_open"))}),(0,u.jsx)(h,{isAccordionOpen:m}),0!==j.length?(0,u.jsx)(s.Z,{flush:!0,alwaysOpen:!0,activeKey:n,onSelect:function(e){l((function(t){return t.includes(e)?t.filter((function(t){return t!==e})):e})),j.length-1===n.length&&v((function(e){return!e}))},className:"border",children:j.map((function(e){var t=e._id,n=e.title,c=e.description,r=e.createdAt,i=e.updatedAt,o=e.plannedDate,a=e.completedDate,s=e.overdueDate,d=e.archiveDate;return(0,u.jsx)(N,{_id:t,title:n,description:c,createdAt:r,updatedAt:i,plannedDate:o,completedDate:a,overdueDate:s,archiveDate:d},t)}))}):(0,u.jsx)("div",{className:"text-center py-5 border rounded bs-accordion-bg",children:(0,u.jsx)("p",{children:b("no_todos_text")})})]})}},878:function(e,t,n){var c=n(9439),r=n(2791);t.Z=function(){var e=(0,r.useState)(!1),t=(0,c.Z)(e,2),n=t[0],i=t[1];return(0,r.useEffect)((function(){var e=function(){i(window.innerWidth<=576)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n}},632:function(e,t,n){n.d(t,{aE:function(){return a},fx:function(){return r},gc:function(){return c},jl:function(){return i},ku:function(){return o}});var c=function(e){return e.todos.totalPages},r=function(e){return e.todos.page},i=function(e){return e.todos.totalTodos},o=function(e){return e.todos.filter},a=function(e){return e.todos.filter?e.todos.items.filter((function(t){var n=t.title,c=t.description;return n.toLowerCase().includes(e.todos.filter.toLowerCase())||c.toLowerCase().includes(e.todos.filter.toLowerCase())})):e.todos.items}}}]);
//# sourceMappingURL=841.375bcf55.chunk.js.map