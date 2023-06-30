(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{130:function(t,e,a){t.exports=a(172)},135:function(t,e,a){},165:function(t,e,a){},172:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(36),o=a.n(s);a(135),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i,l,c=a(16),u=a(108),d=a(39),p=a(30),f=a.n(p),m=a(45),b=a(69),h=a.n(b);!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(i||(i={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Later=4]="Later"}(l||(l={}));var k=h.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"a1c29d8b-1c83-4c49-8a4c-55a3c1e75564"}}),g=function(){return k.get("todo-lists")},v=function(t){return k.post("todo-lists",{title:t})},C=function(t){return k.delete("todo-lists/".concat(t))},E=function(t,e){return k.put("todo-lists/".concat(t),{title:e})},A=function(t){return k.get("todo-lists/".concat(t,"/tasks"))},y=function(t){return k.post("todo-lists/".concat(t.todolistId,"/tasks"),{title:t.title})},I=function(t){return k.delete("todo-lists/".concat(t.todolistId,"/tasks/").concat(t.taskId))},j=function(t,e,a){return k.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},T=function(t){return k.post("auth/login",t)},O=function(){return k.delete("auth/login")},S=function(){return k.get("auth/me")},w=function(t,e){t.messages.length?e(V.setAppErrorAC({error:t.messages[0]})):e(V.setAppErrorAC({error:"Some error occurred"})),e(V.setAppStatusAC({status:"failed"}))},x=function(t,e){var a=t;if(h.a.isAxiosError(a)){var n=a.message?a.message:"Some error occurred";e(V.setAppErrorAC({error:n}))}else e(V.setAppErrorAC({error:"Native error ".concat(a.message)}));e(V.setAppStatusAC({status:"failed"}))},L=a(32),F=Object(L.b)("common/clear-tasks-todolists"),M=Object(L.d)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.isLoggedIn}}}),N=M.reducer,P=M.actions,W=Object(L.d)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatusAC:function(t,e){t.status=e.payload.status},setAppErrorAC:function(t,e){t.error=e.payload.error},setIsInitializedAC:function(t,e){t.isInitialized=e.payload.isInitialized}}}),z=W.reducer,V=W.actions,B=L.c.withTypes(),D=B("todolists/fetchTodolists",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(V.setAppStatusAC({status:"loading"})),t.next=5,g();case 5:return s=t.sent,n(V.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{todolists:s.data});case 10:return t.prev=10,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,a){return t.apply(this,arguments)}}()),R=B("todolists/removeTodolist",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(V.setAppStatusAC({status:"loading"})),n(J.changeTodolistEntityStatusAC({todolistId:e,entityStatus:"loading"})),t.next=6,C(e);case 6:if(0!==(s=t.sent).data.resultCode){t.next=12;break}return n(V.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{todolistId:e});case 12:return w(s.data,n),t.abrupt("return",r(null));case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e,a){return t.apply(this,arguments)}}()),q=B("todolists/addTodolist",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(V.setAppStatusAC({status:"loading"})),t.next=5,v(e);case 5:if(0!==(s=t.sent).data.resultCode){t.next=11;break}return n(V.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{todolist:s.data.data.item});case 11:return w(s.data,n),t.abrupt("return",r(null));case 13:t.next=19;break;case 15:return t.prev=15,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 19:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,a){return t.apply(this,arguments)}}()),H=Object(L.d)({name:"todolists",initialState:[],reducers:{changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].title=e.payload.title},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].entityStatus=e.payload.entityStatus}},extraReducers:function(t){t.addCase(D.fulfilled,(function(t,e){return e.payload.todolists.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{filter:"all",entityStatus:"idle"})}))})).addCase(R.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));a>-1&&t.splice(a,1)})).addCase(q.fulfilled,(function(t,e){t.unshift(Object(d.a)(Object(d.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))})).addCase(F,(function(){return[]}))}}),K=H.reducer,Z={fetchTodolists:D,removeTodolist:R,addTodolist:q},J=H.actions,U=B("tasks/fetchTasks",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(V.setAppStatusAC({status:"loading"})),t.next=5,A(e);case 5:return s=t.sent,o=s.data.items,n(V.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{tasks:o,todolistId:e});case 11:return t.prev=11,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()),$=B("tasks/addTask",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(V.setAppStatusAC({status:"loading"})),t.next=5,y(e);case 5:if(s=t.sent,o=s.data.data.item,0!==s.data.resultCode){t.next=12;break}return n(V.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{task:o});case 12:return w(s.data,n),t.abrupt("return",r(null));case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e,a){return t.apply(this,arguments)}}()),_=B("tasks/updateTask",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s,o,i,l,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.dispatch,r=a.rejectWithValue,s=a.getState,t.prev=1,o=s().tasks[e.todolistId],i=o.find((function(t){return t.id===e.taskId}))){t.next=7;break}return n(V.setAppErrorAC({error:"Task not found in the state"})),t.abrupt("return",r(null));case 7:return l=Object(d.a)({title:i.title,startDate:i.startDate,priority:i.priority,description:i.description,deadline:i.deadline,status:i.status},e.domainModel),n(V.setAppStatusAC({status:"loading"})),t.next=11,j(e.todolistId,e.taskId,l);case 11:if(0!==(c=t.sent).data.resultCode){t.next=17;break}return n(V.setAppStatusAC({status:"succeeded"})),t.abrupt("return",e);case 17:return w(c.data,n),t.abrupt("return",r(null));case 19:t.next=25;break;case 21:return t.prev=21,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 25:case"end":return t.stop()}}),t,null,[[1,21]])})));return function(e,a){return t.apply(this,arguments)}}()),G=B("tasks/removeTask",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(V.setAppStatusAC({status:"loading"})),n(tt.changeTaskEntityStatusAC({todolistId:e.todolistId,taskId:e.taskId,entityStatus:"loading"})),t.next=6,I(e);case 6:if(0!==(s=t.sent).data.resultCode){t.next=12;break}return n(V.setAppStatusAC({status:"succeeded"})),t.abrupt("return",e);case 12:return w(s.data,n),t.abrupt("return",r(null));case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t.catch(1),x(t.t0,n),t.abrupt("return",r(null));case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e,a){return t.apply(this,arguments)}}()),Y=Object(L.d)({name:"tasks",initialState:{},reducers:{changeTaskEntityStatusAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(d.a)(Object(d.a)({},a[n]),{},{entityStatus:e.payload.entityStatus}))}},extraReducers:function(t){t.addCase(U.fulfilled,(function(t,e){t[e.payload.todolistId]=e.payload.tasks})).addCase($.fulfilled,(function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)})).addCase(_.fulfilled,(function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));-1!==n&&(a[n]=Object(d.a)(Object(d.a)({},a[n]),e.payload.domainModel))})).addCase(G.fulfilled,(function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));-1!==n&&a.splice(n,1)})).addCase(Z.addTodolist.fulfilled,(function(t,e){t[e.payload.todolist.id]=[]})).addCase(Z.removeTodolist.fulfilled,(function(t,e){delete t[e.payload.todolistId]})).addCase(Z.fetchTodolists.fulfilled,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})).addCase(F,(function(){return{}}))}}),Q=Y.reducer,X={fetchTasks:U,addTask:$,updateTask:_,removeTask:G},tt=Y.actions,et=a(109),at=Object(u.a)({todolists:K,tasks:Q,app:z,auth:N}),nt=Object(L.a)({reducer:at,middleware:function(t){return t().prepend(et.a)}});c.b,c.c;window.store=nt;a(165);var rt=a(12),st=a(224),ot=a(234),it=a(220),lt=r.a.memo((function(t){var e=t.addItem,a=t.disabled,s=void 0!==a&&a,o=Object(n.useState)(""),i=Object(rt.a)(o,2),l=i[0],c=i[1],u=Object(n.useState)(!1),d=Object(rt.a)(u,2),p=d[0],f=d[1],m=function(){""!==l.trim()?e(l.trim()):f(!0),c("")};return r.a.createElement("div",null,r.a.createElement(st.a,{value:l,onChange:function(t){f(!1),c(t.currentTarget.value)},onKeyPress:function(t){"Enter"===t.key&&m()},disabled:s,size:"small",error:p,helperText:p&&"Title is required!",label:"Title",variant:"outlined"}),r.a.createElement(ot.a,{onClick:m,color:"primary",disabled:s},r.a.createElement(it.a,null)))})),ct=r.a.memo((function(t){var e=t.title,a=t.changeTitle,s=t.disabled,o=void 0!==s&&s,i=Object(n.useState)(!1),l=Object(rt.a)(i,2),c=l[0],u=l[1],d=Object(n.useState)(e),p=Object(rt.a)(d,2),f=p[0],m=p[1],b=function(){u(!1),a(f)};return c?r.a.createElement(st.a,{onChange:function(t){m(t.currentTarget.value)},value:f,onBlur:b,autoFocus:!0,onKeyPress:function(t){"Enter"===t.key&&b()}}):r.a.createElement("span",{onDoubleClick:function(){o||u(!0)}},e)})),ut=a(221),dt=a(226),pt=r.a.memo((function(t){var e=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.changeTaskTitle,t.todolistId]);return r.a.createElement("div",{key:t.task.id,className:t.task.status===i.Completed?"is-done":""},r.a.createElement(dt.a,{checked:t.task.status===i.Completed,color:"primary",onChange:function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?i.Completed:i.New,t.todolistId)},disabled:"loading"===t.task.entityStatus}),r.a.createElement(ct,{title:t.task.title,changeTitle:e,disabled:"loading"===t.task.entityStatus}),r.a.createElement(ot.a,{onClick:function(){return t.removeTask(t.task.id,t.todolistId)},disabled:"loading"===t.task.entityStatus},r.a.createElement(ut.a,null)))})),ft=a(231),mt=r.a.memo((function(t){var e=Object(c.b)();Object(n.useEffect)((function(){e(X.fetchTasks(t.todolist.id))}),[]);var a=Object(n.useCallback)((function(e){t.addTask(e,t.todolist.id)}),[t.addTask,t.todolist.id]),s=Object(n.useCallback)((function(e){t.changeTodolistTitle(t.todolist.id,e)}),[t.changeTodolistTitle,t.todolist.id]),o=Object(n.useCallback)((function(){return t.changeFilter(t.todolist.id,"all")}),[t.todolist.id,t.changeFilter]),l=Object(n.useCallback)((function(){return t.changeFilter(t.todolist.id,"active")}),[t.todolist.id,t.changeFilter]),u=Object(n.useCallback)((function(){return t.changeFilter(t.todolist.id,"completed")}),[t.todolist.id,t.changeFilter]),d=t.tasks;return"active"===t.todolist.filter&&(d=t.tasks.filter((function(t){return t.status===i.New}))),"completed"===t.todolist.filter&&(d=t.tasks.filter((function(t){return t.status===i.Completed}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(ct,{title:t.todolist.title,changeTitle:s,disabled:"loading"===t.todolist.entityStatus}),r.a.createElement(ot.a,{onClick:function(){t.removeTodolist(t.todolist.id)},disabled:"loading"===t.todolist.entityStatus},r.a.createElement(ut.a,null))),r.a.createElement(lt,{addItem:a,disabled:"loading"===t.todolist.entityStatus}),r.a.createElement("div",null,d.map((function(e){return r.a.createElement(pt,{task:e,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus,removeTask:t.removeTask,todolistId:t.todolist.id,key:e.id})}))),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(ft.a,{variant:"all"===t.todolist.filter?"outlined":"text",onClick:o,color:"inherit"},"All"),r.a.createElement(ft.a,{variant:"active"===t.todolist.filter?"outlined":"text",onClick:l,color:"primary"},"Active"),r.a.createElement(ft.a,{variant:"completed"===t.todolist.filter?"outlined":"text",onClick:u,color:"secondary"},"Completed")))})),bt=a(233),ht=a(239),kt=a(14),gt=function(t){return t.auth.isLoggedIn},vt=function(t){return t.tasks},Ct=function(t){return t.todolists},Et=function(){var t=Object(c.c)(Ct),e=Object(c.c)(vt),a=Object(c.c)(gt),s=Object(c.b)();Object(n.useEffect)((function(){a&&s(Z.fetchTodolists())}),[]);var o=Object(n.useCallback)((function(t,e){s(X.removeTask({taskId:t,todolistId:e}))}),[]),i=Object(n.useCallback)((function(t,e){s(X.addTask({todolistId:e,title:t}))}),[]),l=Object(n.useCallback)((function(t,e,a){s(X.updateTask({todolistId:a,taskId:t,domainModel:{status:e}}))}),[]),u=Object(n.useCallback)((function(t,e,a){s(X.updateTask({todolistId:a,taskId:t,domainModel:{title:e}}))}),[]),d=Object(n.useCallback)((function(t,e){var a=J.changeTodolistFilterAC({todolistId:t,filter:e});s(a)}),[]),p=Object(n.useCallback)((function(t){s(Z.removeTodolist(t))}),[]),f=Object(n.useCallback)((function(t,e){s(function(t,e){return function(a){a(V.setAppStatusAC({status:"loading"})),E(t,e).then((function(n){0===n.data.resultCode?(a(J.changeTodolistTitleAC({todolistId:t,title:e})),a(V.setAppStatusAC({status:"succeeded"}))):w(n.data,a)})).catch((function(t){x(t,a)}))}}(t,e))}),[]),m=Object(n.useCallback)((function(t){s(Z.addTodolist(t))}),[]);return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(bt.a,{container:!0,style:{padding:"20px"}},r.a.createElement(lt,{addItem:m})),r.a.createElement(bt.a,{container:!0,spacing:3},t.map((function(t){var a=e[t.id];return r.a.createElement(bt.a,{item:!0,key:t.id},r.a.createElement(ht.a,{style:{padding:"10px"}},r.a.createElement(mt,{todolist:t,tasks:a,removeTask:o,changeFilter:d,addTask:i,changeTaskStatus:l,removeTodolist:p,changeTaskTitle:u,changeTodolistTitle:f})))})))):r.a.createElement(kt.a,{to:"/login"})},At=a(236),yt=a(237),It=a(235),jt=a(232),Tt=a(238),Ot=a(223),St=a(228),wt=a(227),xt=function(t){return t.app.isInitialized},Lt=function(t){return t.app.status},Ft=function(t){return t.app.error},Mt=r.a.forwardRef((function(t,e){return r.a.createElement(wt.a,Object.assign({elevation:6,ref:e,variant:"filled"},t))}));function Nt(){var t=Object(c.c)(Ft),e=Object(c.b)(),a=function(t,a){"clickaway"!==a&&e(V.setAppErrorAC({error:null}))};return r.a.createElement(St.a,{open:null!==t,autoHideDuration:6e3,onClose:a},r.a.createElement(Mt,{onClose:a,severity:"error",sx:{width:"100%"}},t))}var Pt=a(229),Wt=a(241),zt=a(240),Vt=a(218),Bt=a(117),Dt=function(){var t=Object(c.b)(),e=Object(c.c)(gt),a=Object(Bt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<4&&(e.password="Must be 4 characters or more"):e.password="Required",e},onSubmit:function(e){var n;t((n=e,function(t){t(V.setAppStatusAC({status:"loading"})),T(n).then((function(e){0===e.data.resultCode?(t(P.setIsLoggedInAC({isLoggedIn:!0})),t(V.setAppStatusAC({status:"succeeded"}))):w(e.data,t)})).catch((function(e){x(e,t)}))})),a.resetForm()}});return e?r.a.createElement(kt.a,{to:"/"}):r.a.createElement(bt.a,{container:!0,justifyContent:"center"},r.a.createElement(bt.a,{item:!0,justifyContent:"center"},r.a.createElement("form",{onSubmit:a.handleSubmit},r.a.createElement(Pt.a,null,r.a.createElement(Vt.a,null,r.a.createElement("p",null,"To log in get registered",r.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"}," here")),r.a.createElement("p",null,"or use common test account credentials:"),r.a.createElement("p",null,"Email: free@samuraijs.com"),r.a.createElement("p",null,"Password: free")),r.a.createElement(zt.a,null,r.a.createElement(st.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"),{onBlur:a.handleBlur})),a.touched.email&&a.errors.email?r.a.createElement("div",{style:{color:"red"}},a.errors.email):null,r.a.createElement(st.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"),{onBlur:a.handleBlur})),a.touched.password&&a.errors.password?r.a.createElement("div",{style:{color:"red"}},a.errors.password):null,r.a.createElement(Wt.a,{label:"Remember me",control:r.a.createElement(dt.a,{onChange:a.handleChange,checked:a.values.rememberMe,name:"rememberMe"})}),r.a.createElement(ft.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))},Rt=a(242);var qt=function(){var t=Object(c.b)();Object(n.useEffect)((function(){t((function(t){S().then((function(e){t(V.setIsInitializedAC({isInitialized:!0})),0===e.data.resultCode?t(P.setIsLoggedInAC({isLoggedIn:!0})):w(e.data,t)})).catch((function(e){x(e,t)}))}))}),[]);var e=Object(c.c)(Lt),a=Object(c.c)(xt),s=Object(c.c)(gt),o=Object(n.useCallback)((function(){t((function(t){t(V.setAppStatusAC({status:"loading"})),O().then((function(e){0===e.data.resultCode?(t(P.setIsLoggedInAC({isLoggedIn:!1})),t(V.setAppStatusAC({status:"succeeded"})),t(F())):w(e.data,t)})).catch((function(e){x(e,t)}))}))}),[]);return a?r.a.createElement("div",{className:"App"},r.a.createElement(Nt,null),r.a.createElement(At.a,{position:"static"},r.a.createElement(yt.a,null,r.a.createElement(ot.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(Ot.a,null)),r.a.createElement(It.a,{variant:"h6"},"News"),!s&&r.a.createElement(ft.a,{color:"inherit"},"Login"),s&&r.a.createElement(ft.a,{color:"inherit",onClick:o},"Logout")),"loading"===e&&r.a.createElement(Tt.a,null)),r.a.createElement(jt.a,{fixed:!0},r.a.createElement(kt.d,null,r.a.createElement(kt.b,{path:"/",element:r.a.createElement(Et,null)}),r.a.createElement(kt.b,{path:"/todolist",element:r.a.createElement(Et,null)}),r.a.createElement(kt.b,{path:"/login",element:r.a.createElement(Dt,null)}),r.a.createElement(kt.b,{path:"/404",element:r.a.createElement("h1",null,"404: PAGE NOT FOUND")}),r.a.createElement(kt.b,{path:"*",element:r.a.createElement(kt.a,{to:"/404"})})))):r.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},r.a.createElement(Rt.a,null))},Ht=a(59);o.a.render(r.a.createElement(Ht.a,null,r.a.createElement(c.a,{store:nt},r.a.createElement(qt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.82bc2fd1.chunk.js.map