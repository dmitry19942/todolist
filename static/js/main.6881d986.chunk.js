(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{130:function(t,e,a){t.exports=a(172)},135:function(t,e,a){},165:function(t,e,a){},172:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(35),s=a.n(o);a(135),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i,l,c=a(16),d=a(108),u=a(39),p=a(36),f=a.n(p),m=a(51),b=a(69),h=a.n(b);!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(i||(i={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Later=4]="Later"}(l||(l={}));var k=h.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"a1c29d8b-1c83-4c49-8a4c-55a3c1e75564"}}),g=function(){return k.get("todo-lists")},C=function(t){return k.post("todo-lists",{title:t})},v=function(t){return k.delete("todo-lists/".concat(t))},E=function(t,e){return k.put("todo-lists/".concat(t),{title:e})},A=function(t){return k.get("todo-lists/".concat(t,"/tasks"))},y=function(t){return k.post("todo-lists/".concat(t.todolistId,"/tasks"),{title:t.title})},I=function(t){return k.delete("todo-lists/".concat(t.todolistId,"/tasks/").concat(t.taskId))},T=function(t,e,a){return k.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},j=function(t){return k.post("auth/login",t)},O=function(){return k.delete("auth/login")},S=function(){return k.get("auth/me")},w=function(t,e){t.messages.length?e(D.setAppErrorAC({error:t.messages[0]})):e(D.setAppErrorAC({error:"Some error occurred"})),e(D.setAppStatusAC({status:"failed"}))},x=function(t,e){var a=t;if(h.a.isAxiosError(a)){var n=a.message?a.message:"Some error occurred";e(D.setAppErrorAC({error:n}))}else e(D.setAppErrorAC({error:"Native error ".concat(a.message)}));e(D.setAppStatusAC({status:"failed"}))},L=a(31),F=Object(L.b)("common/clear-tasks-todolists"),M=Object(L.d)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.isLoggedIn}}}),N=M.reducer,P=M.actions,z=Object(L.d)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatusAC:function(t,e){t.status=e.payload.status},setAppErrorAC:function(t,e){t.error=e.payload.error},setIsInitializedAC:function(t,e){t.isInitialized=e.payload.isInitialized}}}),B=z.reducer,D=z.actions,R=L.c.withTypes(),W=R("todolists/fetchTodolists",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(D.setAppStatusAC({status:"loading"})),t.next=5,g();case 5:return o=t.sent,n(D.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{todolists:o.data});case 10:return t.prev=10,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,a){return t.apply(this,arguments)}}()),V=Object(L.d)({name:"todolists",initialState:[],reducers:{removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));a>-1&&t.splice(a,1)},addTodolistAC:function(t,e){t.unshift(Object(u.a)(Object(u.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))},changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].title=e.payload.title},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].entityStatus=e.payload.entityStatus}},extraReducers:function(t){t.addCase(W.fulfilled,(function(t,e){return e.payload.todolists.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{filter:"all",entityStatus:"idle"})}))})).addCase(F,(function(){return[]}))}}),q=V.reducer,H={fetchTodolists:W},K=V.actions,Z=R("tasks/fetchTasks",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,o,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(D.setAppStatusAC({status:"loading"})),t.next=5,A(e);case 5:return o=t.sent,s=o.data.items,n(D.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{tasks:s,todolistId:e});case 11:return t.prev=11,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()),J=R("tasks/addTask",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,o,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(D.setAppStatusAC({status:"loading"})),t.next=5,y(e);case 5:if(o=t.sent,s=o.data.data.item,0!==o.data.resultCode){t.next=12;break}return n(D.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{task:s});case 12:return w(o.data,n),t.abrupt("return",r(null));case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e,a){return t.apply(this,arguments)}}()),U=R("tasks/updateTask",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,o,s,i,l,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.dispatch,r=a.rejectWithValue,o=a.getState,t.prev=1,s=o().tasks[e.todolistId],i=s.find((function(t){return t.id===e.taskId}))){t.next=7;break}return n(D.setAppErrorAC({error:"Task not found in the state"})),t.abrupt("return",r(null));case 7:return l=Object(u.a)({title:i.title,startDate:i.startDate,priority:i.priority,description:i.description,deadline:i.deadline,status:i.status},e.domainModel),n(D.setAppStatusAC({status:"loading"})),t.next=11,T(e.todolistId,e.taskId,l);case 11:if(0!==(c=t.sent).data.resultCode){t.next=17;break}return n(D.setAppStatusAC({status:"succeeded"})),t.abrupt("return",e);case 17:return w(c.data,n),t.abrupt("return",r(null));case 19:t.next=25;break;case 21:return t.prev=21,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 25:case"end":return t.stop()}}),t,null,[[1,21]])})));return function(e,a){return t.apply(this,arguments)}}()),$=R("tasks/removeTask",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(D.setAppStatusAC({status:"loading"})),n(Q.changeTaskEntityStatusAC({todolistId:e.todolistId,taskId:e.taskId,entityStatus:"loading"})),t.next=6,I(e);case 6:if(0!==(o=t.sent).data.resultCode){t.next=12;break}return n(D.setAppStatusAC({status:"succeeded"})),t.abrupt("return",e);case 12:return w(o.data,n),t.abrupt("return",r(null));case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e,a){return t.apply(this,arguments)}}()),_=Object(L.d)({name:"tasks",initialState:{},reducers:{changeTaskEntityStatusAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(u.a)(Object(u.a)({},a[n]),{},{entityStatus:e.payload.entityStatus}))}},extraReducers:function(t){t.addCase(Z.fulfilled,(function(t,e){t[e.payload.todolistId]=e.payload.tasks})).addCase(J.fulfilled,(function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)})).addCase(U.fulfilled,(function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));-1!==n&&(a[n]=Object(u.a)(Object(u.a)({},a[n]),e.payload.domainModel))})).addCase($.fulfilled,(function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));-1!==n&&a.splice(n,1)})).addCase(K.addTodolistAC,(function(t,e){t[e.payload.todolist.id]=[]})).addCase(K.removeTodolistAC,(function(t,e){delete t[e.payload.todolistId]})).addCase(H.fetchTodolists.fulfilled,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})).addCase(F,(function(){return{}}))}}),G=_.reducer,Y={fetchTasks:Z,addTask:J,updateTask:U,removeTask:$},Q=_.actions,X=a(109),tt=Object(d.a)({todolists:q,tasks:G,app:B,auth:N}),et=Object(L.a)({reducer:tt,middleware:function(t){return t().prepend(X.a)}});c.b,c.c;window.store=et;a(165);var at=a(12),nt=a(224),rt=a(234),ot=a(220),st=r.a.memo((function(t){var e=t.addItem,a=t.disabled,o=void 0!==a&&a,s=Object(n.useState)(""),i=Object(at.a)(s,2),l=i[0],c=i[1],d=Object(n.useState)(!1),u=Object(at.a)(d,2),p=u[0],f=u[1],m=function(){""!==l.trim()?e(l.trim()):f(!0),c("")};return r.a.createElement("div",null,r.a.createElement(nt.a,{value:l,onChange:function(t){f(!1),c(t.currentTarget.value)},onKeyPress:function(t){"Enter"===t.key&&m()},disabled:o,size:"small",error:p,helperText:p&&"Title is required!",label:"Title",variant:"outlined"}),r.a.createElement(rt.a,{onClick:m,color:"primary",disabled:o},r.a.createElement(ot.a,null)))})),it=r.a.memo((function(t){var e=t.title,a=t.changeTitle,o=t.disabled,s=void 0!==o&&o,i=Object(n.useState)(!1),l=Object(at.a)(i,2),c=l[0],d=l[1],u=Object(n.useState)(e),p=Object(at.a)(u,2),f=p[0],m=p[1],b=function(){d(!1),a(f)};return c?r.a.createElement(nt.a,{onChange:function(t){m(t.currentTarget.value)},value:f,onBlur:b,autoFocus:!0,onKeyPress:function(t){"Enter"===t.key&&b()}}):r.a.createElement("span",{onDoubleClick:function(){s||d(!0)}},e)})),lt=a(221),ct=a(226),dt=r.a.memo((function(t){var e=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.changeTaskTitle,t.todolistId]);return r.a.createElement("div",{key:t.task.id,className:t.task.status===i.Completed?"is-done":""},r.a.createElement(ct.a,{checked:t.task.status===i.Completed,color:"primary",onChange:function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?i.Completed:i.New,t.todolistId)},disabled:"loading"===t.task.entityStatus}),r.a.createElement(it,{title:t.task.title,changeTitle:e,disabled:"loading"===t.task.entityStatus}),r.a.createElement(rt.a,{onClick:function(){return t.removeTask(t.task.id,t.todolistId)},disabled:"loading"===t.task.entityStatus},r.a.createElement(lt.a,null)))})),ut=a(231),pt=r.a.memo((function(t){var e=Object(c.b)();Object(n.useEffect)((function(){e(Y.fetchTasks(t.todolist.id))}),[]);var a=Object(n.useCallback)((function(e){t.addTask(e,t.todolist.id)}),[t.addTask,t.todolist.id]),o=Object(n.useCallback)((function(e){t.changeTodolistTitle(t.todolist.id,e)}),[t.changeTodolistTitle,t.todolist.id]),s=Object(n.useCallback)((function(){return t.changeFilter(t.todolist.id,"all")}),[t.todolist.id,t.changeFilter]),l=Object(n.useCallback)((function(){return t.changeFilter(t.todolist.id,"active")}),[t.todolist.id,t.changeFilter]),d=Object(n.useCallback)((function(){return t.changeFilter(t.todolist.id,"completed")}),[t.todolist.id,t.changeFilter]),u=t.tasks;return"active"===t.todolist.filter&&(u=t.tasks.filter((function(t){return t.status===i.New}))),"completed"===t.todolist.filter&&(u=t.tasks.filter((function(t){return t.status===i.Completed}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(it,{title:t.todolist.title,changeTitle:o,disabled:"loading"===t.todolist.entityStatus}),r.a.createElement(rt.a,{onClick:function(){t.removeTodolist(t.todolist.id)},disabled:"loading"===t.todolist.entityStatus},r.a.createElement(lt.a,null))),r.a.createElement(st,{addItem:a,disabled:"loading"===t.todolist.entityStatus}),r.a.createElement("div",null,u.map((function(e){return r.a.createElement(dt,{task:e,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus,removeTask:t.removeTask,todolistId:t.todolist.id,key:e.id})}))),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(ut.a,{variant:"all"===t.todolist.filter?"outlined":"text",onClick:s,color:"inherit"},"All"),r.a.createElement(ut.a,{variant:"active"===t.todolist.filter?"outlined":"text",onClick:l,color:"primary"},"Active"),r.a.createElement(ut.a,{variant:"completed"===t.todolist.filter?"outlined":"text",onClick:d,color:"secondary"},"Completed")))})),ft=a(233),mt=a(239),bt=a(14),ht=function(t){return t.auth.isLoggedIn},kt=function(t){return t.tasks},gt=function(t){return t.todolists},Ct=function(){var t=Object(c.c)(gt),e=Object(c.c)(kt),a=Object(c.c)(ht),o=Object(c.b)();Object(n.useEffect)((function(){a&&o(H.fetchTodolists())}),[]);var s=Object(n.useCallback)((function(t,e){o(Y.removeTask({taskId:t,todolistId:e}))}),[]),i=Object(n.useCallback)((function(t,e){o(Y.addTask({todolistId:e,title:t}))}),[]),l=Object(n.useCallback)((function(t,e,a){o(Y.updateTask({todolistId:a,taskId:t,domainModel:{status:e}}))}),[]),d=Object(n.useCallback)((function(t,e,a){o(Y.updateTask({todolistId:a,taskId:t,domainModel:{title:e}}))}),[]),u=Object(n.useCallback)((function(t,e){var a=K.changeTodolistFilterAC({todolistId:t,filter:e});o(a)}),[]),p=Object(n.useCallback)((function(t){o(function(t){return function(e){e(D.setAppStatusAC({status:"loading"})),e(K.changeTodolistEntityStatusAC({todolistId:t,entityStatus:"loading"})),v(t).then((function(a){0===a.data.resultCode?(e(K.removeTodolistAC({todolistId:t})),e(D.setAppStatusAC({status:"succeeded"}))):w(a.data,e)})).catch((function(t){x(t,e)}))}}(t))}),[]),f=Object(n.useCallback)((function(t,e){o(function(t,e){return function(a){a(D.setAppStatusAC({status:"loading"})),E(t,e).then((function(n){0===n.data.resultCode?(a(K.changeTodolistTitleAC({todolistId:t,title:e})),a(D.setAppStatusAC({status:"succeeded"}))):w(n.data,a)})).catch((function(t){x(t,a)}))}}(t,e))}),[]),m=Object(n.useCallback)((function(t){o(function(t){return function(e){e(D.setAppStatusAC({status:"loading"})),C(t).then((function(t){0===t.data.resultCode?(e(K.addTodolistAC({todolist:t.data.data.item})),e(D.setAppStatusAC({status:"succeeded"}))):w(t.data,e)})).catch((function(t){x(t,e)}))}}(t))}),[]);return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(ft.a,{container:!0,style:{padding:"20px"}},r.a.createElement(st,{addItem:m})),r.a.createElement(ft.a,{container:!0,spacing:3},t.map((function(t){var a=e[t.id];return r.a.createElement(ft.a,{item:!0,key:t.id},r.a.createElement(mt.a,{style:{padding:"10px"}},r.a.createElement(pt,{todolist:t,tasks:a,removeTask:s,changeFilter:u,addTask:i,changeTaskStatus:l,removeTodolist:p,changeTaskTitle:d,changeTodolistTitle:f})))})))):r.a.createElement(bt.a,{to:"/login"})},vt=a(236),Et=a(237),At=a(235),yt=a(232),It=a(238),Tt=a(223),jt=a(228),Ot=a(227),St=function(t){return t.app.isInitialized},wt=function(t){return t.app.status},xt=function(t){return t.app.error},Lt=r.a.forwardRef((function(t,e){return r.a.createElement(Ot.a,Object.assign({elevation:6,ref:e,variant:"filled"},t))}));function Ft(){var t=Object(c.c)(xt),e=Object(c.b)(),a=function(t,a){"clickaway"!==a&&e(D.setAppErrorAC({error:null}))};return r.a.createElement(jt.a,{open:null!==t,autoHideDuration:6e3,onClose:a},r.a.createElement(Lt,{onClose:a,severity:"error",sx:{width:"100%"}},t))}var Mt=a(229),Nt=a(241),Pt=a(240),zt=a(218),Bt=a(117),Dt=function(){var t=Object(c.b)(),e=Object(c.c)(ht),a=Object(Bt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<4&&(e.password="Must be 4 characters or more"):e.password="Required",e},onSubmit:function(e){var n;t((n=e,function(t){t(D.setAppStatusAC({status:"loading"})),j(n).then((function(e){0===e.data.resultCode?(t(P.setIsLoggedInAC({isLoggedIn:!0})),t(D.setAppStatusAC({status:"succeeded"}))):w(e.data,t)})).catch((function(e){x(e,t)}))})),a.resetForm()}});return e?r.a.createElement(bt.a,{to:"/"}):r.a.createElement(ft.a,{container:!0,justifyContent:"center"},r.a.createElement(ft.a,{item:!0,justifyContent:"center"},r.a.createElement("form",{onSubmit:a.handleSubmit},r.a.createElement(Mt.a,null,r.a.createElement(zt.a,null,r.a.createElement("p",null,"To log in get registered",r.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"}," here")),r.a.createElement("p",null,"or use common test account credentials:"),r.a.createElement("p",null,"Email: free@samuraijs.com"),r.a.createElement("p",null,"Password: free")),r.a.createElement(Pt.a,null,r.a.createElement(nt.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"),{onBlur:a.handleBlur})),a.touched.email&&a.errors.email?r.a.createElement("div",{style:{color:"red"}},a.errors.email):null,r.a.createElement(nt.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"),{onBlur:a.handleBlur})),a.touched.password&&a.errors.password?r.a.createElement("div",{style:{color:"red"}},a.errors.password):null,r.a.createElement(Nt.a,{label:"Remember me",control:r.a.createElement(ct.a,{onChange:a.handleChange,checked:a.values.rememberMe,name:"rememberMe"})}),r.a.createElement(ut.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))},Rt=a(242);var Wt=function(){var t=Object(c.b)();Object(n.useEffect)((function(){t((function(t){S().then((function(e){t(D.setIsInitializedAC({isInitialized:!0})),0===e.data.resultCode?t(P.setIsLoggedInAC({isLoggedIn:!0})):w(e.data,t)})).catch((function(e){x(e,t)}))}))}),[]);var e=Object(c.c)(wt),a=Object(c.c)(St),o=Object(c.c)(ht),s=Object(n.useCallback)((function(){t((function(t){t(D.setAppStatusAC({status:"loading"})),O().then((function(e){0===e.data.resultCode?(t(P.setIsLoggedInAC({isLoggedIn:!1})),t(D.setAppStatusAC({status:"succeeded"})),t(F())):w(e.data,t)})).catch((function(e){x(e,t)}))}))}),[]);return a?r.a.createElement("div",{className:"App"},r.a.createElement(Ft,null),r.a.createElement(vt.a,{position:"static"},r.a.createElement(Et.a,null,r.a.createElement(rt.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(Tt.a,null)),r.a.createElement(At.a,{variant:"h6"},"News"),!o&&r.a.createElement(ut.a,{color:"inherit"},"Login"),o&&r.a.createElement(ut.a,{color:"inherit",onClick:s},"Logout")),"loading"===e&&r.a.createElement(It.a,null)),r.a.createElement(yt.a,{fixed:!0},r.a.createElement(bt.d,null,r.a.createElement(bt.b,{path:"/",element:r.a.createElement(Ct,null)}),r.a.createElement(bt.b,{path:"/todolist",element:r.a.createElement(Ct,null)}),r.a.createElement(bt.b,{path:"/login",element:r.a.createElement(Dt,null)}),r.a.createElement(bt.b,{path:"/404",element:r.a.createElement("h1",null,"404: PAGE NOT FOUND")}),r.a.createElement(bt.b,{path:"*",element:r.a.createElement(bt.a,{to:"/404"})})))):r.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},r.a.createElement(Rt.a,null))},Vt=a(59);s.a.render(r.a.createElement(Vt.a,null,r.a.createElement(c.a,{store:et},r.a.createElement(Wt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.6881d986.chunk.js.map