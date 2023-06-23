(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{130:function(t,e,a){t.exports=a(172)},135:function(t,e,a){},165:function(t,e,a){},172:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(35),s=a.n(o);a(135),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i,l,c=a(20),d=a(108),u=a(43),p=a(44),m=a.n(p),f=a(63),b=a(69),h=a.n(b);!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(i||(i={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Later=4]="Later"}(l||(l={}));var k=h.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"a1c29d8b-1c83-4c49-8a4c-55a3c1e75564"}}),g=function(){return k.get("todo-lists")},C=function(t){return k.post("todo-lists",{title:t})},E=function(t){return k.delete("todo-lists/".concat(t))},v=function(t,e){return k.put("todo-lists/".concat(t),{title:e})},A=function(t){return k.get("todo-lists/".concat(t,"/tasks"))},I=function(t){return k.post("todo-lists/".concat(t.todolistId,"/tasks"),{title:t.title})},T=function(t){return k.delete("todo-lists/".concat(t.todolistId,"/tasks/").concat(t.taskId))},j=function(t,e,a){return k.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},y=function(t){return k.post("auth/login",t)},O=function(){return k.delete("auth/login")},S=function(){return k.get("auth/me")},w=function(t,e){t.messages.length?e(D.setAppErrorAC({error:t.messages[0]})):e(D.setAppErrorAC({error:"Some error occurred"})),e(D.setAppStatusAC({status:"failed"}))},x=function(t,e){var a=t;if(h.a.isAxiosError(a)){var n=a.message?a.message:"Some error occurred";e(D.setAppErrorAC({error:n}))}else e(D.setAppErrorAC({error:"Native error ".concat(a.message)}));e(D.setAppStatusAC({status:"failed"}))},L=a(31),F=Object(L.b)("common/clear-tasks-todolists"),M=Object(L.d)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.isLoggedIn}}}),N=M.reducer,P=M.actions,z=Object(L.d)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatusAC:function(t,e){t.status=e.payload.status},setAppErrorAC:function(t,e){t.error=e.payload.error},setIsInitializedAC:function(t,e){t.isInitialized=e.payload.isInitialized}}}),B=z.reducer,D=z.actions,R=Object(L.d)({name:"todolists",initialState:[],reducers:{removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));a>-1&&t.splice(a,1)},addTodolistAC:function(t,e){t.unshift(Object(u.a)(Object(u.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))},changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].title=e.payload.title},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].filter=e.payload.filter},setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{filter:"all",entityStatus:"idle"})}))},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].entityStatus=e.payload.entityStatus}},extraReducers:function(t){t.addCase(F,(function(){return[]}))}}),W=R.reducer,V=R.actions,q=L.c.withTypes(),H=q("tasks/fetchTasks",function(){var t=Object(f.a)(m.a.mark((function t(e,a){var n,r,o,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(D.setAppStatusAC({status:"loading"})),t.next=5,A(e);case 5:return o=t.sent,s=o.data.items,n(D.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{tasks:s,todolistId:e});case 11:return t.prev=11,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()),K=q("tasks/addTask",function(){var t=Object(f.a)(m.a.mark((function t(e,a){var n,r,o,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(D.setAppStatusAC({status:"loading"})),t.next=5,I(e);case 5:if(o=t.sent,s=o.data.data.item,0!==o.data.resultCode){t.next=12;break}return n(D.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{task:s});case 12:return w(o.data,n),t.abrupt("return",r(null));case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e,a){return t.apply(this,arguments)}}()),Z=q("tasks/updateTask",function(){var t=Object(f.a)(m.a.mark((function t(e,a){var n,r,o,s,i,l,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.dispatch,r=a.rejectWithValue,o=a.getState,t.prev=1,s=o().tasks[e.todolistId],i=s.find((function(t){return t.id===e.taskId}))){t.next=7;break}return n(D.setAppErrorAC({error:"Task not found in the state"})),t.abrupt("return",r(null));case 7:return l=Object(u.a)({title:i.title,startDate:i.startDate,priority:i.priority,description:i.description,deadline:i.deadline,status:i.status},e.domainModel),n(D.setAppStatusAC({status:"loading"})),t.next=11,j(e.todolistId,e.taskId,l);case 11:if(0!==(c=t.sent).data.resultCode){t.next=17;break}return n(D.setAppStatusAC({status:"succeeded"})),t.abrupt("return",e);case 17:return w(c.data,n),t.abrupt("return",r(null));case 19:t.next=25;break;case 21:return t.prev=21,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 25:case"end":return t.stop()}}),t,null,[[1,21]])})));return function(e,a){return t.apply(this,arguments)}}()),J=q("tasks/removeTask",function(){var t=Object(f.a)(m.a.mark((function t(e,a){var n,r,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(D.setAppStatusAC({status:"loading"})),t.next=5,T(e);case 5:if(0!==(o=t.sent).data.resultCode){t.next=11;break}return n(D.setAppStatusAC({status:"succeeded"})),t.abrupt("return",e);case 11:return w(o.data,n),t.abrupt("return",r(null));case 13:t.next=19;break;case 15:return t.prev=15,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 19:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,a){return t.apply(this,arguments)}}()),U=Object(L.d)({name:"tasks",initialState:{},reducers:{},extraReducers:function(t){t.addCase(H.fulfilled,(function(t,e){t[e.payload.todolistId]=e.payload.tasks})).addCase(K.fulfilled,(function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)})).addCase(Z.fulfilled,(function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));-1!==n&&(a[n]=Object(u.a)(Object(u.a)({},a[n]),e.payload.domainModel))})).addCase(J.fulfilled,(function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));-1!==n&&a.splice(n,1)})).addCase(V.addTodolistAC,(function(t,e){t[e.payload.todolist.id]=[]})).addCase(V.removeTodolistAC,(function(t,e){delete t[e.payload.todolistId]})).addCase(V.setTodolistsAC,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})).addCase(F,(function(){return{}}))}}).reducer,$={fetchTasks:H,addTask:K,updateTask:Z,removeTask:J},_=a(109),G=Object(d.a)({todolists:W,tasks:U,app:B,auth:N}),Y=Object(L.a)({reducer:G,middleware:function(t){return t().prepend(_.a)}});c.b,c.c;window.store=Y;a(165);var Q=a(12),X=a(224),tt=a(234),et=a(220),at=r.a.memo((function(t){var e=t.addItem,a=t.disabled,o=void 0!==a&&a,s=Object(n.useState)(""),i=Object(Q.a)(s,2),l=i[0],c=i[1],d=Object(n.useState)(!1),u=Object(Q.a)(d,2),p=u[0],m=u[1],f=function(){""!==l.trim()?e(l.trim()):m(!0),c("")};return r.a.createElement("div",null,r.a.createElement(X.a,{value:l,onChange:function(t){m(!1),c(t.currentTarget.value)},onKeyPress:function(t){"Enter"===t.key&&f()},disabled:o,size:"small",error:p,helperText:p&&"Title is required!",label:"Title",variant:"outlined"}),r.a.createElement(tt.a,{onClick:f,color:"primary",disabled:o},r.a.createElement(et.a,null)))})),nt=r.a.memo((function(t){var e=t.title,a=t.changeTitle,o=t.disabled,s=void 0!==o&&o,i=Object(n.useState)(!1),l=Object(Q.a)(i,2),c=l[0],d=l[1],u=Object(n.useState)(e),p=Object(Q.a)(u,2),m=p[0],f=p[1],b=function(){d(!1),a(m)};return c?r.a.createElement(X.a,{onChange:function(t){f(t.currentTarget.value)},value:m,onBlur:b,autoFocus:!0,onKeyPress:function(t){"Enter"===t.key&&b()}}):r.a.createElement("span",{onDoubleClick:function(){s||d(!0)}},e)})),rt=a(221),ot=a(226),st=r.a.memo((function(t){var e=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.changeTaskTitle,t.todolistId]);return r.a.createElement("div",{key:t.task.id,className:t.task.status===i.Completed?"is-done":""},r.a.createElement(ot.a,{checked:t.task.status===i.Completed,color:"primary",onChange:function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?i.Completed:i.New,t.todolistId)}}),r.a.createElement(nt,{title:t.task.title,changeTitle:e}),r.a.createElement(tt.a,{onClick:function(){return t.removeTask(t.task.id,t.todolistId)}},r.a.createElement(rt.a,null)))})),it=a(231),lt=r.a.memo((function(t){var e=Object(n.useCallback)((function(e){t.addTask(e,t.todolist.id)}),[t.addTask,t.todolist.id]),a=Object(n.useCallback)((function(e){t.changeTodolistTitle(t.todolist.id,e)}),[t.changeTodolistTitle,t.todolist.id]),o=Object(n.useCallback)((function(){return t.changeFilter(t.todolist.id,"all")}),[t.todolist.id,t.changeFilter]),s=Object(n.useCallback)((function(){return t.changeFilter(t.todolist.id,"active")}),[t.todolist.id,t.changeFilter]),l=Object(n.useCallback)((function(){return t.changeFilter(t.todolist.id,"completed")}),[t.todolist.id,t.changeFilter]),c=t.tasks;return"active"===t.todolist.filter&&(c=t.tasks.filter((function(t){return t.status===i.New}))),"completed"===t.todolist.filter&&(c=t.tasks.filter((function(t){return t.status===i.Completed}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(nt,{title:t.todolist.title,changeTitle:a,disabled:"loading"===t.todolist.entityStatus}),r.a.createElement(tt.a,{onClick:function(){t.removeTodolist(t.todolist.id)},disabled:"loading"===t.todolist.entityStatus},r.a.createElement(rt.a,null))),r.a.createElement(at,{addItem:e,disabled:"loading"===t.todolist.entityStatus}),r.a.createElement("div",null,c.map((function(e){return r.a.createElement(st,{task:e,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus,removeTask:t.removeTask,todolistId:t.todolist.id,key:e.id})}))),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(it.a,{variant:"all"===t.todolist.filter?"outlined":"text",onClick:o,color:"inherit"},"All"),r.a.createElement(it.a,{variant:"active"===t.todolist.filter?"outlined":"text",onClick:s,color:"primary"},"Active"),r.a.createElement(it.a,{variant:"completed"===t.todolist.filter?"outlined":"text",onClick:l,color:"secondary"},"Completed")))})),ct=a(233),dt=a(239),ut=a(14),pt=function(t){return t.auth.isLoggedIn},mt=function(t){return t.tasks},ft=function(t){return t.todolists},bt=function(){var t=Object(c.c)(ft),e=Object(c.c)(mt),a=Object(c.c)(pt),o=Object(c.b)();Object(n.useEffect)((function(){a&&o((function(t){t(D.setAppStatusAC({status:"loading"})),g().then((function(e){return t(V.setTodolistsAC({todolists:e.data})),t(D.setAppStatusAC({status:"succeeded"})),e.data})).then((function(e){e.forEach((function(e){t($.fetchTasks(e.id))}))})).catch((function(e){x(e,t)}))}))}),[]);var s=Object(n.useCallback)((function(t,e){o($.removeTask({taskId:t,todolistId:e}))}),[]),i=Object(n.useCallback)((function(t,e){o($.addTask({todolistId:e,title:t}))}),[]),l=Object(n.useCallback)((function(t,e,a){o($.updateTask({todolistId:a,taskId:t,domainModel:{status:e}}))}),[]),d=Object(n.useCallback)((function(t,e,a){o($.updateTask({todolistId:a,taskId:t,domainModel:{title:e}}))}),[]),u=Object(n.useCallback)((function(t,e){var a=V.changeTodolistFilterAC({todolistId:t,filter:e});o(a)}),[]),p=Object(n.useCallback)((function(t){o(function(t){return function(e){e(D.setAppStatusAC({status:"loading"})),e(V.changeTodolistEntityStatusAC({todolistId:t,entityStatus:"loading"})),E(t).then((function(a){0===a.data.resultCode?(e(V.removeTodolistAC({todolistId:t})),e(D.setAppStatusAC({status:"succeeded"}))):w(a.data,e)})).catch((function(t){x(t,e)}))}}(t))}),[]),m=Object(n.useCallback)((function(t,e){o(function(t,e){return function(a){a(D.setAppStatusAC({status:"loading"})),v(t,e).then((function(n){0===n.data.resultCode?(a(V.changeTodolistTitleAC({todolistId:t,title:e})),a(D.setAppStatusAC({status:"succeeded"}))):w(n.data,a)})).catch((function(t){x(t,a)}))}}(t,e))}),[]),f=Object(n.useCallback)((function(t){o(function(t){return function(e){e(D.setAppStatusAC({status:"loading"})),C(t).then((function(t){0===t.data.resultCode?(e(V.addTodolistAC({todolist:t.data.data.item})),e(D.setAppStatusAC({status:"succeeded"}))):w(t.data,e)})).catch((function(t){x(t,e)}))}}(t))}),[]);return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(ct.a,{container:!0,style:{padding:"20px"}},r.a.createElement(at,{addItem:f})),r.a.createElement(ct.a,{container:!0,spacing:3},t.map((function(t){var a=e[t.id];return r.a.createElement(ct.a,{item:!0,key:t.id},r.a.createElement(dt.a,{style:{padding:"10px"}},r.a.createElement(lt,{todolist:t,tasks:a,removeTask:s,changeFilter:u,addTask:i,changeTaskStatus:l,removeTodolist:p,changeTaskTitle:d,changeTodolistTitle:m})))})))):r.a.createElement(ut.a,{to:"/login"})},ht=a(236),kt=a(237),gt=a(235),Ct=a(232),Et=a(238),vt=a(223),At=a(228),It=a(227),Tt=function(t){return t.app.isInitialized},jt=function(t){return t.app.status},yt=function(t){return t.app.error},Ot=r.a.forwardRef((function(t,e){return r.a.createElement(It.a,Object.assign({elevation:6,ref:e,variant:"filled"},t))}));function St(){var t=Object(c.c)(yt),e=Object(c.b)(),a=function(t,a){"clickaway"!==a&&e(D.setAppErrorAC({error:null}))};return r.a.createElement(At.a,{open:null!==t,autoHideDuration:6e3,onClose:a},r.a.createElement(Ot,{onClose:a,severity:"error",sx:{width:"100%"}},t))}var wt=a(229),xt=a(241),Lt=a(240),Ft=a(218),Mt=a(117),Nt=function(){var t=Object(c.b)(),e=Object(c.c)(pt),a=Object(Mt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<4&&(e.password="Must be 4 characters or more"):e.password="Required",e},onSubmit:function(e){var n;t((n=e,function(t){t(D.setAppStatusAC({status:"loading"})),y(n).then((function(e){0===e.data.resultCode?(t(P.setIsLoggedInAC({isLoggedIn:!0})),t(D.setAppStatusAC({status:"succeeded"}))):w(e.data,t)})).catch((function(e){x(e,t)}))})),a.resetForm()}});return e?r.a.createElement(ut.a,{to:"/"}):r.a.createElement(ct.a,{container:!0,justifyContent:"center"},r.a.createElement(ct.a,{item:!0,justifyContent:"center"},r.a.createElement("form",{onSubmit:a.handleSubmit},r.a.createElement(wt.a,null,r.a.createElement(Ft.a,null,r.a.createElement("p",null,"To log in get registered",r.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"}," here")),r.a.createElement("p",null,"or use common test account credentials:"),r.a.createElement("p",null,"Email: free@samuraijs.com"),r.a.createElement("p",null,"Password: free")),r.a.createElement(Lt.a,null,r.a.createElement(X.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"),{onBlur:a.handleBlur})),a.touched.email&&a.errors.email?r.a.createElement("div",{style:{color:"red"}},a.errors.email):null,r.a.createElement(X.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"),{onBlur:a.handleBlur})),a.touched.password&&a.errors.password?r.a.createElement("div",{style:{color:"red"}},a.errors.password):null,r.a.createElement(xt.a,{label:"Remember me",control:r.a.createElement(ot.a,{onChange:a.handleChange,checked:a.values.rememberMe,name:"rememberMe"})}),r.a.createElement(it.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))},Pt=a(242);var zt=function(){var t=Object(c.b)();Object(n.useEffect)((function(){t((function(t){S().then((function(e){t(D.setIsInitializedAC({isInitialized:!0})),0===e.data.resultCode?t(P.setIsLoggedInAC({isLoggedIn:!0})):w(e.data,t)})).catch((function(e){x(e,t)}))}))}),[]);var e=Object(c.c)(jt),a=Object(c.c)(Tt),o=Object(c.c)(pt),s=Object(n.useCallback)((function(){t((function(t){t(D.setAppStatusAC({status:"loading"})),O().then((function(e){0===e.data.resultCode?(t(P.setIsLoggedInAC({isLoggedIn:!1})),t(D.setAppStatusAC({status:"succeeded"})),t(F())):w(e.data,t)})).catch((function(e){x(e,t)}))}))}),[]);return a?r.a.createElement("div",{className:"App"},r.a.createElement(St,null),r.a.createElement(ht.a,{position:"static"},r.a.createElement(kt.a,null,r.a.createElement(tt.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(vt.a,null)),r.a.createElement(gt.a,{variant:"h6"},"News"),!o&&r.a.createElement(it.a,{color:"inherit"},"Login"),o&&r.a.createElement(it.a,{color:"inherit",onClick:s},"Logout")),"loading"===e&&r.a.createElement(Et.a,null)),r.a.createElement(Ct.a,{fixed:!0},r.a.createElement(ut.d,null,r.a.createElement(ut.b,{path:"/",element:r.a.createElement(bt,null)}),r.a.createElement(ut.b,{path:"/todolist",element:r.a.createElement(bt,null)}),r.a.createElement(ut.b,{path:"/login",element:r.a.createElement(Nt,null)}),r.a.createElement(ut.b,{path:"/404",element:r.a.createElement("h1",null,"404: PAGE NOT FOUND")}),r.a.createElement(ut.b,{path:"*",element:r.a.createElement(ut.a,{to:"/404"})})))):r.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},r.a.createElement(Pt.a,null))},Bt=a(58);s.a.render(r.a.createElement(Bt.a,null,r.a.createElement(c.a,{store:Y},r.a.createElement(zt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.c61b5d73.chunk.js.map