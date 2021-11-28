(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{59:function(e,t,n){e.exports=n(71)},64:function(e,t,n){},65:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),l=n.n(r);n(64),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(19),o=n(15),d=(n(65),n(112)),u=n(102),s=n(103);function f(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],l=n[1],c=Object(a.useState)(!1),f=Object(o.a)(c,2),m=f[0],T=f[1],O=function(){""!==r.trim()?e.addItem(r.trim()):T(!0),l("")};return i.a.createElement("div",null,i.a.createElement(d.a,{value:r,onChange:function(e){T(!1),l(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&O()},size:"small",error:m,helperText:m&&"Title is required!",label:"Title",variant:"outlined"}),i.a.createElement(u.a,{onClick:O,color:"primary"},i.a.createElement(s.a,null)))}function m(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],l=n[1],c=Object(a.useState)(e.title),u=Object(o.a)(c,2),s=u[0],f=u[1],m=function(){l(!1),e.changeTitle(s)};return r?i.a.createElement(d.a,{onChange:function(e){f(e.currentTarget.value)},value:s,onBlur:m,autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&m()}}):i.a.createElement("span",{onDoubleClick:function(){return l(!0)}},e.title)}var T=n(114),O=n(105),E=n(104);function v(e){return i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(m,{title:e.title,changeTitle:function(t){return e.changeTodolistTitle(e.id,t)}}),i.a.createElement(u.a,{size:"small",onClick:function(){return e.removeTodolist(e.id)}},i.a.createElement(E.a,null))),i.a.createElement(f,{addItem:function(t){return e.addTask(t,e.id)}}),i.a.createElement("ul",{style:{listStyle:"none",padding:"0"}},e.tasks.map((function(t){return i.a.createElement("li",{key:t.id,className:t.isDone?"is-done":""},i.a.createElement(T.a,{size:"small",color:"primary",checked:t.isDone,onChange:function(n){return e.changeTaskStatus(t.id,n.currentTarget.checked,e.id)}}),i.a.createElement(m,{title:t.title,changeTitle:function(n){return e.changeTaskTitle(t.id,n,e.id)}}),i.a.createElement(u.a,{size:"small",onClick:function(){return e.removeTask(t.id,e.id)}},i.a.createElement(E.a,null)))}))),i.a.createElement("div",null,i.a.createElement(O.a,{size:"small",variant:"contained",color:"all"===e.filter?"secondary":"primary",onClick:function(){return e.changeFilter("all",e.id)}},"All"),i.a.createElement(O.a,{size:"small",variant:"contained",color:"active"===e.filter?"secondary":"primary",onClick:function(){return e.changeFilter("active",e.id)},style:{margin:"0 3px"}},"Active"),i.a.createElement(O.a,{size:"small",variant:"contained",color:"completed"===e.filter?"secondary":"primary",onClick:function(){return e.changeFilter("completed",e.id)}},"Completed")))}var b,h=n(113),j=n(106),p=n(107),I=n(109),k=n(110),D=n(111),g=n(72),S=n(108),y=n(28),A=Object(h.a)(),C=Object(h.a)(),L=[{id:A,title:"What to learn",filter:"all"},{id:C,title:"What to buy",filter:"all"}],w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!=t.id}));case"ADD-TODOLIST":return[].concat(Object(y.a)(e),[{id:t.todolistId,title:t.title,filter:"all"}]);case"CHANGE-TODOLIST-TITLE":var n=e.find((function(e){return e.id===t.id}));return n&&(n.title=t.title),Object(y.a)(e);case"CHANGE-TODOLIST-FILTER":var a=e.find((function(e){return e.id===t.id}));return a&&(a.filter=t.filter),Object(y.a)(e);default:return e}},N=n(24),R=(b={},Object(c.a)(b,A,[{id:Object(h.a)(),title:"HTML&CSS",isDone:!0},{id:Object(h.a)(),title:"JS",isDone:!0}]),Object(c.a)(b,C,[{id:Object(h.a)(),title:"Milk",isDone:!0},{id:Object(h.a)(),title:"React Book",isDone:!0}]),b),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":var n=Object(N.a)({},e),a=n[t.todolistId];return n[t.todolistId]=a.filter((function(e){return e.id!==t.taskId})),n;case"ADD-TASK":var i=Object(N.a)({},e),r=i[t.todolistId],l={id:Object(h.a)(),title:t.title,isDone:!1};return i[t.todolistId]=[l].concat(Object(y.a)(r)),i;case"CHANGE-TASK-STATUS":var c=Object(N.a)({},e),o=c[t.todolistId],d=o.find((function(e){return e.id===t.taskId}));return d&&(d.isDone=t.isDone),c;case"CHANGE-TASK-TITLE":var u=Object(N.a)({},e),s=u[t.todolistId],f=s.find((function(e){return e.id===t.taskId}));return f&&(f.title=t.title),u;case"ADD-TODOLIST":var m=Object(N.a)({},e);return m[t.todolistId]=[],m;case"REMOVE-TODOLIST":var T=Object(N.a)({},e);return delete T[t.id],T;default:return e}};var K=function(){var e,t=Object(h.a)(),n=Object(h.a)(),r=Object(a.useReducer)(w,[{id:t,title:"What to learn",filter:"all"},{id:n,title:"What to buy",filter:"all"}]),l=Object(o.a)(r,2),d=l[0],s=l[1],m=Object(a.useReducer)(H,(e={},Object(c.a)(e,t,[{id:Object(h.a)(),title:"HTML&CSS",isDone:!0},{id:Object(h.a)(),title:"JS",isDone:!0}]),Object(c.a)(e,n,[{id:Object(h.a)(),title:"Milk",isDone:!0},{id:Object(h.a)(),title:"React Book",isDone:!0}]),e)),T=Object(o.a)(m,2),E=T[0],b=T[1];function y(e,t){var n=function(e,t){return{type:"REMOVE-TASK",taskId:e,todolistId:t}}(e,t);b(n)}function A(e,t){var n=function(e,t){return{type:"ADD-TASK",title:e,todolistId:t}}(e,t);b(n)}function C(e,t,n){var a=function(e,t,n){return{type:"CHANGE-TASK-STATUS",taskId:e,isDone:t,todolistId:n}}(e,t,n);b(a)}function L(e,t,n){var a=function(e,t,n){return{type:"CHANGE-TASK-TITLE",taskId:e,title:t,todolistId:n}}(e,t,n);b(a)}function N(e,t){var n=function(e,t){return{type:"CHANGE-TODOLIST-FILTER",filter:e,id:t}}(e,t);s(n)}function R(e){var t={type:"REMOVE-TODOLIST",id:e};b(t),s(t)}function K(e,t){var n=function(e,t){return{type:"CHANGE-TODOLIST-TITLE",title:t,id:e}}(e,t);s(n)}return i.a.createElement("div",{className:"App"},i.a.createElement(j.a,{position:"static"},i.a.createElement(p.a,null,i.a.createElement(u.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(S.a,null)),i.a.createElement(I.a,{variant:"h6"},"News"),i.a.createElement(O.a,{color:"inherit"},"Login"))),i.a.createElement(k.a,{fixed:!0},i.a.createElement(D.a,{container:!0,style:{padding:"20px"}},i.a.createElement(f,{addItem:function(e){var t=function(e){return{type:"ADD-TODOLIST",title:e,todolistId:Object(h.a)()}}(e);b(t),s(t)}})),i.a.createElement(D.a,{container:!0,spacing:3},d.map((function(e){var t=E[e.id],n=t;return"active"===e.filter&&(n=t.filter((function(e){return!1===e.isDone}))),"completed"===e.filter&&(n=t.filter((function(e){return!0===e.isDone}))),i.a.createElement(D.a,{item:!0},i.a.createElement(g.a,{style:{padding:"10px"}},i.a.createElement(v,{key:e.id,id:e.id,title:e.title,tasks:n,removeTask:y,changeFilter:N,addTask:A,changeTaskStatus:C,filter:e.filter,removeTodolist:R,changeTaskTitle:L,changeTodolistTitle:K})))})))))};l.a.render(i.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.c2e4f445.chunk.js.map