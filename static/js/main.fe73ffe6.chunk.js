(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{62:function(e,t,a){e.exports=a(75)},67:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),c=a.n(l);a(67),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r,o=a(27),s=a(43),d=a(28),u=a(14),m=a(24),T=a(117),O=Object(T.a)(),f=Object(T.a)(),b=[{id:O,title:"What to learn",filter:"all"},{id:f,title:"What to buy",filter:"all"}],k=(r={},Object(m.a)(r,O,[{id:Object(T.a)(),title:"HTML&CSS",isDone:!0},{id:Object(T.a)(),title:"JS",isDone:!0}]),Object(m.a)(r,f,[{id:Object(T.a)(),title:"Milk",isDone:!0},{id:Object(T.a)(),title:"React Book",isDone:!0}]),r),E=Object(s.a)({todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!=t.id}));case"ADD-TODOLIST":return[].concat(Object(d.a)(e),[{id:t.todolistId,title:t.title,filter:"all"}]);case"CHANGE-TODOLIST-TITLE":var a=e.find((function(e){return e.id===t.id}));return a&&(a.title=t.title),Object(d.a)(e);case"CHANGE-TODOLIST-FILTER":var n=e.find((function(e){return e.id===t.id}));return n&&(n.filter=t.filter),Object(d.a)(e);default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":var a=Object(u.a)({},e),n=a[t.todolistId],i=n.filter((function(e){return e.id!=t.taskId}));return a[t.todolistId]=i,a;case"ADD-TASK":var l=Object(u.a)({},e),c={id:Object(T.a)(),title:t.title,isDone:!1},r=l[t.todolistId],o=[c].concat(Object(d.a)(r));return l[t.todolistId]=o,l;case"CHANGE-TASK-STATUS":var s=e[t.todolistId];return e[t.todolistId]=s.map((function(e){return e.id===t.taskId?Object(u.a)(Object(u.a)({},e),{},{isDone:t.isDone}):e})),Object(u.a)({},e);case"CHANGE-TASK-TITLE":var O=e[t.todolistId];return e[t.todolistId]=O.map((function(e){return e.id===t.taskId?Object(u.a)(Object(u.a)({},e),{},{title:t.title}):e})),Object(u.a)({},e);case"ADD-TODOLIST":return Object(u.a)(Object(u.a)({},e),{},Object(m.a)({},t.todolistId,[]));case"REMOVE-TODOLIST":var f=Object(u.a)({},e);return delete f[t.id],f;default:return e}}}),v=Object(s.b)(E);window.store=v;a(73);var j=a(29),h=a(116),I=a(106),g=a(107),p=i.a.memo((function(e){console.log("AddItemForm is called");var t=Object(n.useState)(""),a=Object(j.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(!1),o=Object(j.a)(r,2),s=o[0],d=o[1],u=function(){""!==l.trim()?e.addItem(l.trim()):d(!0),c("")};return i.a.createElement("div",null,i.a.createElement(h.a,{value:l,onChange:function(e){d(!1),c(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&u()},size:"small",error:s,helperText:s&&"Title is required!",label:"Title",variant:"outlined"}),i.a.createElement(I.a,{onClick:u,color:"primary"},i.a.createElement(g.a,null)))})),C=i.a.memo((function(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(e.title),o=Object(j.a)(r,2),s=o[0],d=o[1],u=function(){c(!1),e.changeTitle(s)};return l?i.a.createElement(h.a,{onChange:function(e){d(e.currentTarget.value)},value:s,onBlur:u,autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&u()}}):i.a.createElement("span",{onDoubleClick:function(){return c(!0)}},e.title)})),D=a(109),S=a(108),A=a(118),y=i.a.memo((function(e){var t=Object(n.useCallback)((function(t){e.changeTaskTitle(e.task.id,t,e.todolistId)}),[e.task.id,e.changeTaskTitle,e.todolistId]);return i.a.createElement("div",{key:e.task.id,className:e.task.isDone?"is-done":""},i.a.createElement(A.a,{checked:e.task.isDone,color:"primary",onChange:function(t){var a=t.currentTarget.checked;e.changeTaskStatus(e.task.id,a,e.todolistId)}}),i.a.createElement(C,{title:e.task.title,changeTitle:t}),i.a.createElement(I.a,{onClick:function(){return e.removeTask(e.task.id,e.todolistId)}},i.a.createElement(S.a,null)))})),L=i.a.memo((function(e){console.log("Todolist is called");var t=Object(n.useCallback)((function(t){e.addTask(t,e.id)}),[e.addTask,e.id]),a=Object(n.useCallback)((function(t){e.changeTodolistTitle(e.id,t)}),[e.changeTodolistTitle,e.id]),l=e.tasks;"active"===e.filter&&(l=e.tasks.filter((function(e){return!e.isDone}))),"completed"===e.filter&&(l=e.tasks.filter((function(e){return e.isDone})));var c=Object(n.useCallback)((function(){return e.changeFilter("all",e.id)}),[e.changeFilter,e.id]),r=Object(n.useCallback)((function(){return e.changeFilter("active",e.id)}),[e.changeFilter,e.id]),o=Object(n.useCallback)((function(){return e.changeFilter("completed",e.id)}),[e.id,e.changeFilter]);return i.a.createElement("div",null,i.a.createElement("h3",null," ",i.a.createElement(C,{title:e.title,changeTitle:a}),i.a.createElement(I.a,{onClick:function(){e.removeTodolist(e.id)}},i.a.createElement(S.a,null))),i.a.createElement(p,{addItem:t}),i.a.createElement("div",null,l.map((function(t){return i.a.createElement(y,{task:t,changeTaskTitle:e.changeTaskTitle,changeTaskStatus:e.changeTaskStatus,removeTask:e.removeTask,todolistId:e.id,key:t.id})}))),i.a.createElement("div",{style:{paddingTop:"10px"}},i.a.createElement(D.a,{variant:"all"===e.filter?"outlined":"text",onClick:c,color:"default"},"All"),i.a.createElement(D.a,{variant:"active"===e.filter?"outlined":"text",onClick:r,color:"primary"},"Active"),i.a.createElement(D.a,{variant:"completed"===e.filter?"outlined":"text",onClick:o,color:"secondary"},"Completed")))})),w=a(110),F=a(111),N=a(113),K=a(114),x=a(115),H=a(76),G=a(112);var R=function(){console.log("App is called"),Object(T.a)(),Object(T.a)();var e=Object(o.c)((function(e){return e.todolists})),t=Object(o.c)((function(e){return e.tasks})),a=Object(o.b)(),l=Object(n.useCallback)((function(e,t){var n=function(e,t){return{type:"REMOVE-TASK",taskId:e,todolistId:t}}(e,t);a(n)}),[a]),c=Object(n.useCallback)((function(e,t){var n=function(e,t){return{type:"ADD-TASK",title:e,todolistId:t}}(e,t);a(n)}),[a]),r=Object(n.useCallback)((function(e,t,n){var i=function(e,t,a){return{type:"CHANGE-TASK-STATUS",taskId:e,isDone:t,todolistId:a}}(e,t,n);a(i)}),[a]),s=Object(n.useCallback)((function(e,t,n){var i=function(e,t,a){return{type:"CHANGE-TASK-TITLE",taskId:e,title:t,todolistId:a}}(e,t,n);a(i)}),[a]),d=Object(n.useCallback)((function(e,t){var n=function(e,t){return{type:"CHANGE-TODOLIST-FILTER",filter:e,id:t}}(e,t);a(n)}),[a]),u=Object(n.useCallback)((function(e){var t={type:"REMOVE-TODOLIST",id:e};a(t)}),[a]),m=Object(n.useCallback)((function(e,t){var n=function(e,t){return{type:"CHANGE-TODOLIST-TITLE",title:t,id:e}}(e,t);a(n)}),[a]),O=Object(n.useCallback)((function(e){var t=function(e){return{type:"ADD-TODOLIST",title:e,todolistId:Object(T.a)()}}(e);a(t)}),[a]);return i.a.createElement("div",{className:"App"},i.a.createElement(w.a,{position:"static"},i.a.createElement(F.a,null,i.a.createElement(I.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(G.a,null)),i.a.createElement(N.a,{variant:"h6"},"News"),i.a.createElement(D.a,{color:"inherit"},"Login"))),i.a.createElement(K.a,{fixed:!0},i.a.createElement(x.a,{container:!0,style:{padding:"20px"}},i.a.createElement(p,{addItem:O})),i.a.createElement(x.a,{container:!0,spacing:3},e.map((function(e){var a=t[e.id];return i.a.createElement(x.a,{item:!0,key:e.id},i.a.createElement(H.a,{style:{padding:"10px"}},i.a.createElement(L,{id:e.id,title:e.title,tasks:a,removeTask:l,changeFilter:d,addTask:c,changeTaskStatus:r,filter:e.filter,removeTodolist:u,changeTaskTitle:s,changeTodolistTitle:m})))})))))};c.a.render(i.a.createElement(o.a,{store:v},i.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.fe73ffe6.chunk.js.map