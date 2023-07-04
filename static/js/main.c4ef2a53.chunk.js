(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{130:function(t,e,a){t.exports=a(172)},135:function(t,e,a){},165:function(t,e,a){},172:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(37),i=a.n(s);a(135),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o,l,u=a(29),c=a(108),d=a(40),p=a(16),f=a.n(p),m=a(35),b=a(32),h=Object(b.d)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatusAC:function(t,e){t.status=e.payload.status},setAppErrorAC:function(t,e){t.error=e.payload.error},setIsInitializedAC:function(t,e){t.isInitialized=e.payload.isInitialized}}}),k=h.reducer,v=h.actions,g=Object(b.b)("common/clear-tasks-todolists"),C=function(t,e){t.messages.length?e(v.setAppErrorAC({error:t.messages[0]})):e(v.setAppErrorAC({error:"Some error occurred"})),e(v.setAppStatusAC({status:"failed"}))},E=a(69),y=a.n(E),A=function(t,e){var a=t;if(y.a.isAxiosError(a)){var n=a.message?a.message:"Some error occurred";e(v.setAppErrorAC({error:n}))}else e(v.setAppErrorAC({error:"Native error ".concat(a.message)}));e(v.setAppStatusAC({status:"failed"}))},j=b.c.withTypes(),T=y.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"a1c29d8b-1c83-4c49-8a4c-55a3c1e75564"}}),I=function(){return T.get("todo-lists")},O=function(t){return T.post("todo-lists",{title:t})},x=function(t){return T.delete("todo-lists/".concat(t))},w=function(t){return T.put("todo-lists/".concat(t.todolistId),{title:t.title})},S=function(t){return T.get("todo-lists/".concat(t,"/tasks"))},L=function(t){return T.post("todo-lists/".concat(t.todolistId,"/tasks"),{title:t.title})},F=function(t){return T.delete("todo-lists/".concat(t.todolistId,"/tasks/").concat(t.taskId))},W=function(t,e,a){return T.put("todo-lists/".concat(t,"/tasks/").concat(e),a)};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(o||(o={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(l||(l={}));var z=0,V=j("todolists/fetchTodolists",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(v.setAppStatusAC({status:"loading"})),t.next=5,I();case 5:return s=t.sent,n(v.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{todolists:s.data});case 10:return t.prev=10,t.t0=t.catch(1),A(t.t0,n),t.abrupt("return",r(null));case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,a){return t.apply(this,arguments)}}()),M=j("todolists/removeTodolist",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(v.setAppStatusAC({status:"loading"})),n(U.changeTodolistEntityStatusAC({todolistId:e,entityStatus:"loading"})),t.next=6,x(e);case 6:if((s=t.sent).data.resultCode!==z){t.next=12;break}return n(v.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{todolistId:e});case 12:return C(s.data,n),t.abrupt("return",r(null));case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t.catch(1),A(t.t0,n),t.abrupt("return",r(null));case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e,a){return t.apply(this,arguments)}}()),N=j("todolists/addTodolist",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(v.setAppStatusAC({status:"loading"})),t.next=5,O(e);case 5:if((s=t.sent).data.resultCode!==z){t.next=11;break}return n(v.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{todolist:s.data.data.item});case 11:return C(s.data,n),t.abrupt("return",r(null));case 13:t.next=19;break;case 15:return t.prev=15,t.t0=t.catch(1),A(t.t0,n),t.abrupt("return",r(null));case 19:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,a){return t.apply(this,arguments)}}()),P=j("todolists/changeTodolistTitle",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(v.setAppStatusAC({status:"loading"})),t.next=5,w(e);case 5:if((s=t.sent).data.resultCode!==z){t.next=11;break}return n(v.setAppStatusAC({status:"succeeded"})),t.abrupt("return",e);case 11:return C(s.data,n),t.abrupt("return",r(null));case 13:t.next=19;break;case 15:return t.prev=15,t.t0=t.catch(1),A(t.t0,n),t.abrupt("return",r(null));case 19:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,a){return t.apply(this,arguments)}}()),R=Object(b.d)({name:"todolists",initialState:[],reducers:{changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].entityStatus=e.payload.entityStatus}},extraReducers:function(t){t.addCase(V.fulfilled,(function(t,e){return e.payload.todolists.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{filter:"all",entityStatus:"idle"})}))})).addCase(M.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));a>-1&&t.splice(a,1)})).addCase(N.fulfilled,(function(t,e){t.unshift(Object(d.a)(Object(d.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))})).addCase(P.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].title=e.payload.title})).addCase(g,(function(){return[]}))}}),B=R.reducer,D={fetchTodolists:V,removeTodolist:M,addTodolist:N,changeTodolistTitle:P},U=R.actions,q=j("tasks/fetchTasks",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(v.setAppStatusAC({status:"loading"})),t.next=5,S(e);case 5:return s=t.sent,i=s.data.items,n(v.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{tasks:i,todolistId:e});case 11:return t.prev=11,t.t0=t.catch(1),A(t.t0,n),t.abrupt("return",r(null));case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()),H=j("tasks/addTask",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(v.setAppStatusAC({status:"loading"})),t.next=5,L(e);case 5:if(s=t.sent,i=s.data.data.item,s.data.resultCode!==z){t.next=12;break}return n(v.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{task:i});case 12:return C(s.data,n),t.abrupt("return",r(null));case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t.catch(1),A(t.t0,n),t.abrupt("return",r(null));case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e,a){return t.apply(this,arguments)}}()),K=j("tasks/updateTask",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s,i,o,l,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.dispatch,r=a.rejectWithValue,s=a.getState,t.prev=1,i=s().tasks[e.todolistId],o=i.find((function(t){return t.id===e.taskId}))){t.next=7;break}return n(v.setAppErrorAC({error:"Task not found in the state"})),t.abrupt("return",r(null));case 7:return l=Object(d.a)({title:o.title,startDate:o.startDate,priority:o.priority,description:o.description,deadline:o.deadline,status:o.status},e.domainModel),n(v.setAppStatusAC({status:"loading"})),t.next=11,W(e.todolistId,e.taskId,l);case 11:if((u=t.sent).data.resultCode!==z){t.next=17;break}return n(v.setAppStatusAC({status:"succeeded"})),t.abrupt("return",e);case 17:return C(u.data,n),t.abrupt("return",r(null));case 19:t.next=25;break;case 21:return t.prev=21,t.t0=t.catch(1),A(t.t0,n),t.abrupt("return",r(null));case 25:case"end":return t.stop()}}),t,null,[[1,21]])})));return function(e,a){return t.apply(this,arguments)}}()),Z=j("tasks/removeTask",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(v.setAppStatusAC({status:"loading"})),n(G.changeTaskEntityStatusAC({todolistId:e.todolistId,taskId:e.taskId,entityStatus:"loading"})),t.next=6,F(e);case 6:if((s=t.sent).data.resultCode!==z){t.next=12;break}return n(v.setAppStatusAC({status:"succeeded"})),t.abrupt("return",e);case 12:return C(s.data,n),t.abrupt("return",r(null));case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t.catch(1),A(t.t0,n),t.abrupt("return",r(null));case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e,a){return t.apply(this,arguments)}}()),J=Object(b.d)({name:"tasks",initialState:{},reducers:{changeTaskEntityStatusAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(d.a)(Object(d.a)({},a[n]),{},{entityStatus:e.payload.entityStatus}))}},extraReducers:function(t){t.addCase(q.fulfilled,(function(t,e){t[e.payload.todolistId]=e.payload.tasks})).addCase(H.fulfilled,(function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)})).addCase(K.fulfilled,(function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));-1!==n&&(a[n]=Object(d.a)(Object(d.a)({},a[n]),e.payload.domainModel))})).addCase(Z.fulfilled,(function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));-1!==n&&a.splice(n,1)})).addCase(D.addTodolist.fulfilled,(function(t,e){t[e.payload.todolist.id]=[]})).addCase(D.removeTodolist.fulfilled,(function(t,e){delete t[e.payload.todolistId]})).addCase(D.fetchTodolists.fulfilled,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})).addCase(g,(function(){return{}}))}}),$=J.reducer,_={fetchTasks:q,addTask:H,updateTask:K,removeTask:Z},G=J.actions,Y=a(109),Q=function(t){return T.post("auth/login",t)},X=function(){return T.delete("auth/login")},tt=function(){return T.get("auth/me")},et=j("auth/login",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(v.setAppStatusAC({status:"loading"})),t.next=5,Q(e);case 5:if((s=t.sent).data.resultCode!==z){t.next=11;break}return n(v.setAppStatusAC({status:"succeeded"})),t.abrupt("return",{isLoggedIn:!0});case 11:return C(s.data,n),t.abrupt("return",r(null));case 13:t.next=19;break;case 15:return t.prev=15,t.t0=t.catch(1),A(t.t0,n),t.abrupt("return",r(null));case 19:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,a){return t.apply(this,arguments)}}()),at=j("auth/logout",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,n(v.setAppStatusAC({status:"loading"})),t.next=5,X();case 5:if((s=t.sent).data.resultCode!==z){t.next=12;break}return n(v.setAppStatusAC({status:"succeeded"})),n(g()),t.abrupt("return",{isLoggedIn:!1});case 12:return C(s.data,n),t.abrupt("return",r(null));case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t.catch(1),A(t.t0,n),t.abrupt("return",r(null));case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e,a){return t.apply(this,arguments)}}()),nt=j("app/initializeApp",function(){var t=Object(m.a)(f.a.mark((function t(e,a){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,t.next=4,tt();case 4:if(t.sent.data.resultCode!==z){t.next=9;break}return t.abrupt("return",{isLoggedIn:!0});case 9:return t.abrupt("return",r(null));case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(1),A(t.t0,n),t.abrupt("return",r(null));case 16:return t.prev=16,n(v.setIsInitializedAC({isInitialized:!0})),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,12,16,19]])})));return function(e,a){return t.apply(this,arguments)}}()),rt=Object(b.d)({name:"auth",initialState:{isLoggedIn:!1},reducers:{},extraReducers:function(t){t.addCase(st.login.fulfilled,(function(t,e){t.isLoggedIn=e.payload.isLoggedIn})).addCase(st.logout.fulfilled,(function(t,e){t.isLoggedIn=e.payload.isLoggedIn})).addCase(st.initializeApp.fulfilled,(function(t,e){t.isLoggedIn=e.payload.isLoggedIn}))}}).reducer,st={login:et,logout:at,initializeApp:nt},it=Object(c.a)({todolists:B,tasks:$,app:k,auth:rt}),ot=Object(b.a)({reducer:it,middleware:function(t){return t().prepend(Y.a)}});window.store=ot;a(165);var lt=a(12),ut=a(224),ct=a(234),dt=a(220),pt=r.a.memo((function(t){var e=t.addItem,a=t.disabled,s=void 0!==a&&a,i=Object(n.useState)(""),o=Object(lt.a)(i,2),l=o[0],u=o[1],c=Object(n.useState)(!1),d=Object(lt.a)(c,2),p=d[0],f=d[1],m=function(){""!==l.trim()?e(l.trim()):f(!0),u("")};return r.a.createElement("div",null,r.a.createElement(ut.a,{value:l,onChange:function(t){f(!1),u(t.currentTarget.value)},onKeyPress:function(t){"Enter"===t.key&&m()},disabled:s,size:"small",error:p,helperText:p&&"Title is required!",label:"Title",variant:"outlined"}),r.a.createElement(ct.a,{onClick:m,color:"primary",disabled:s},r.a.createElement(dt.a,null)))})),ft=r.a.memo((function(t){var e=t.title,a=t.changeTitle,s=t.disabled,i=void 0!==s&&s,o=Object(n.useState)(!1),l=Object(lt.a)(o,2),u=l[0],c=l[1],d=Object(n.useState)(e),p=Object(lt.a)(d,2),f=p[0],m=p[1],b=function(){c(!1),a(f)};return u?r.a.createElement(ut.a,{onChange:function(t){m(t.currentTarget.value)},value:f,onBlur:b,autoFocus:!0,onKeyPress:function(t){"Enter"===t.key&&b()}}):r.a.createElement("span",{onDoubleClick:function(){i||c(!0)}},e)})),mt=a(228),bt=a(226),ht=function(t){return t.app.isInitialized},kt=function(t){return t.app.status},vt=function(t){return t.app.error},gt=u.b,Ct=r.a.forwardRef((function(t,e){return r.a.createElement(bt.a,Object.assign({elevation:6,ref:e,variant:"filled"},t))}));function Et(){var t=Object(u.c)(vt),e=gt(),a=function(t,a){"clickaway"!==a&&e(v.setAppErrorAC({error:null}))};return r.a.createElement(mt.a,{open:null!==t,autoHideDuration:6e3,onClose:a},r.a.createElement(Ct,{onClose:a,severity:"error",sx:{width:"100%"}},t))}var yt=a(221),At=a(227),jt=r.a.memo((function(t){var e=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.changeTaskTitle,t.todolistId]);return r.a.createElement("div",{key:t.task.id,className:t.task.status===o.Completed?"is-done":""},r.a.createElement(At.a,{checked:t.task.status===o.Completed,color:"primary",onChange:function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?o.Completed:o.New,t.todolistId)},disabled:"loading"===t.task.entityStatus}),r.a.createElement(ft,{title:t.task.title,changeTitle:e,disabled:"loading"===t.task.entityStatus}),r.a.createElement(ct.a,{onClick:function(){return t.removeTask(t.task.id,t.todolistId)},disabled:"loading"===t.task.entityStatus},r.a.createElement(yt.a,null)))})),Tt=a(231),It=r.a.memo((function(t){var e=gt();Object(n.useEffect)((function(){e(_.fetchTasks(t.todolist.id))}),[]);var a=Object(n.useCallback)((function(e){t.addTask(e,t.todolist.id)}),[t.addTask,t.todolist.id]),s=Object(n.useCallback)((function(e){t.changeTodolistTitle(t.todolist.id,e)}),[t.changeTodolistTitle,t.todolist.id]),i=Object(n.useCallback)((function(){return t.changeFilter(t.todolist.id,"all")}),[t.todolist.id,t.changeFilter]),l=Object(n.useCallback)((function(){return t.changeFilter(t.todolist.id,"active")}),[t.todolist.id,t.changeFilter]),u=Object(n.useCallback)((function(){return t.changeFilter(t.todolist.id,"completed")}),[t.todolist.id,t.changeFilter]),c=t.tasks;return"active"===t.todolist.filter&&(c=t.tasks.filter((function(t){return t.status===o.New}))),"completed"===t.todolist.filter&&(c=t.tasks.filter((function(t){return t.status===o.Completed}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(ft,{title:t.todolist.title,changeTitle:s,disabled:"loading"===t.todolist.entityStatus}),r.a.createElement(ct.a,{onClick:function(){t.removeTodolist(t.todolist.id)},disabled:"loading"===t.todolist.entityStatus},r.a.createElement(yt.a,null))),r.a.createElement(pt,{addItem:a,disabled:"loading"===t.todolist.entityStatus}),r.a.createElement("div",null,c.map((function(e){return r.a.createElement(jt,{task:e,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus,removeTask:t.removeTask,todolistId:t.todolist.id,key:e.id})}))),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(Tt.a,{variant:"all"===t.todolist.filter?"outlined":"text",onClick:i,color:"inherit"},"All"),r.a.createElement(Tt.a,{variant:"active"===t.todolist.filter?"outlined":"text",onClick:l,color:"primary"},"Active"),r.a.createElement(Tt.a,{variant:"completed"===t.todolist.filter?"outlined":"text",onClick:u,color:"secondary"},"Completed")))})),Ot=a(233),xt=a(239),wt=a(14),St=function(t){return t.auth.isLoggedIn},Lt=function(t){return t.tasks},Ft=function(t){return t.todolists},Wt=function(){var t=Object(u.c)(Ft),e=Object(u.c)(Lt),a=Object(u.c)(St),s=gt();Object(n.useEffect)((function(){a&&s(D.fetchTodolists())}),[]);var i=Object(n.useCallback)((function(t,e){s(_.removeTask({taskId:t,todolistId:e}))}),[]),o=Object(n.useCallback)((function(t,e){s(_.addTask({todolistId:e,title:t}))}),[]),l=Object(n.useCallback)((function(t,e,a){s(_.updateTask({todolistId:a,taskId:t,domainModel:{status:e}}))}),[]),c=Object(n.useCallback)((function(t,e,a){s(_.updateTask({todolistId:a,taskId:t,domainModel:{title:e}}))}),[]),d=Object(n.useCallback)((function(t,e){s(U.changeTodolistFilterAC({todolistId:t,filter:e}))}),[]),p=Object(n.useCallback)((function(t){s(D.removeTodolist(t))}),[]),f=Object(n.useCallback)((function(t,e){s(D.changeTodolistTitle({todolistId:t,title:e}))}),[]),m=Object(n.useCallback)((function(t){s(D.addTodolist(t))}),[]);return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ot.a,{container:!0,style:{padding:"20px"}},r.a.createElement(pt,{addItem:m})),r.a.createElement(Ot.a,{container:!0,spacing:3},t.map((function(t){var a=e[t.id];return r.a.createElement(Ot.a,{item:!0,key:t.id},r.a.createElement(xt.a,{style:{padding:"10px"}},r.a.createElement(It,{todolist:t,tasks:a,removeTask:i,changeFilter:d,addTask:o,changeTaskStatus:l,removeTodolist:p,changeTaskTitle:c,changeTodolistTitle:f})))})))):r.a.createElement(wt.a,{to:"/login"})},zt=a(236),Vt=a(237),Mt=a(235),Nt=a(232),Pt=a(238),Rt=a(223),Bt=a(229),Dt=a(241),Ut=a(240),qt=a(218),Ht=a(117),Kt=function(){var t=gt(),e=Object(u.c)(St),a=Object(Ht.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<4&&(e.password="Must be 4 characters or more"):e.password="Required",e},onSubmit:function(e){t(st.login(e)),a.resetForm()}});return e?r.a.createElement(wt.a,{to:"/"}):r.a.createElement(Ot.a,{container:!0,justifyContent:"center"},r.a.createElement(Ot.a,{item:!0,justifyContent:"center"},r.a.createElement("form",{onSubmit:a.handleSubmit},r.a.createElement(Bt.a,null,r.a.createElement(qt.a,null,r.a.createElement("p",null,"To log in get registered",r.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"}," here")),r.a.createElement("p",null,"or use common test account credentials:"),r.a.createElement("p",null,"Email: free@samuraijs.com"),r.a.createElement("p",null,"Password: free")),r.a.createElement(Ut.a,null,r.a.createElement(ut.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"),{onBlur:a.handleBlur})),a.touched.email&&a.errors.email?r.a.createElement("div",{style:{color:"red"}},a.errors.email):null,r.a.createElement(ut.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"),{onBlur:a.handleBlur})),a.touched.password&&a.errors.password?r.a.createElement("div",{style:{color:"red"}},a.errors.password):null,r.a.createElement(Dt.a,{label:"Remember me",control:r.a.createElement(At.a,{onChange:a.handleChange,checked:a.values.rememberMe,name:"rememberMe"})}),r.a.createElement(Tt.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))},Zt=a(242);var Jt=function(){var t=gt();Object(n.useEffect)((function(){t(st.initializeApp())}),[]);var e=Object(u.c)(kt),a=Object(u.c)(ht),s=Object(u.c)(St),i=Object(n.useCallback)((function(){t(st.logout())}),[]);return a?r.a.createElement("div",{className:"App"},r.a.createElement(Et,null),r.a.createElement(zt.a,{position:"static"},r.a.createElement(Vt.a,null,r.a.createElement(ct.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(Rt.a,null)),r.a.createElement(Mt.a,{variant:"h6"},"News"),!s&&r.a.createElement(Tt.a,{color:"inherit"},"Login"),s&&r.a.createElement(Tt.a,{color:"inherit",onClick:i},"Logout")),"loading"===e&&r.a.createElement(Pt.a,null)),r.a.createElement(Nt.a,{fixed:!0},r.a.createElement(wt.d,null,r.a.createElement(wt.b,{path:"/",element:r.a.createElement(Wt,null)}),r.a.createElement(wt.b,{path:"/todolist",element:r.a.createElement(Wt,null)}),r.a.createElement(wt.b,{path:"/login",element:r.a.createElement(Kt,null)}),r.a.createElement(wt.b,{path:"/404",element:r.a.createElement("h1",null,"404: PAGE NOT FOUND")}),r.a.createElement(wt.b,{path:"*",element:r.a.createElement(wt.a,{to:"/404"})})))):r.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},r.a.createElement(Zt.a,null))},$t=a(59);i.a.render(r.a.createElement($t.a,null,r.a.createElement(u.a,{store:ot},r.a.createElement(Jt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.c4ef2a53.chunk.js.map