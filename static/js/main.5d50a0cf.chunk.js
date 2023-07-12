(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{130:function(t,e,a){t.exports=a(172)},135:function(t,e,a){},165:function(t,e,a){},172:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(37),o=a.n(i);a(135),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s,c,l=a(30),u=a(108),d=a(40),f=a(14),p=a.n(f),m=a(17),b=a(32),h=Object(b.d)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatus:function(t,e){t.status=e.payload.status},setAppError:function(t,e){t.error=e.payload.error},setIsInitialized:function(t,e){t.isInitialized=e.payload.isInitialized}}}),k=h.reducer,v=h.actions,g=Object(b.b)("common/clear-tasks-todolists"),E=function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];a&&e(v.setAppError({error:t.messages.length?t.messages[0]:"Some error occurred"}))},j=a(69),y=a.n(j),w=function(t,e){var a=t;if(y.a.isAxiosError(a)){var n=a.message?a.message:"Some error occurred";e(v.setAppError({error:n}))}else e(v.setAppError({error:"Native error ".concat(a.message)}))},O=b.c.withTypes(),T=y.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"a1c29d8b-1c83-4c49-8a4c-55a3c1e75564"}}),I=function(){return T.get("todo-lists")},x=function(t){return T.post("todo-lists",{title:t})},C=function(t){return T.delete("todo-lists/".concat(t))},S=function(t){return T.put("todo-lists/".concat(t.todolistId),{title:t.title})},A=function(t){return T.get("todo-lists/".concat(t,"/tasks"))},L=function(t){return T.post("todo-lists/".concat(t.todolistId,"/tasks"),{title:t.title})},F=function(t){return T.delete("todo-lists/".concat(t.todolistId,"/tasks/").concat(t.taskId))},z=function(t,e,a){return T.put("todo-lists/".concat(t,"/tasks/").concat(e),a)};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(s||(s={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var V=0,W=function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.dispatch,r=e.rejectWithValue,n(v.setAppStatus({status:"loading"})),t.prev=2,t.next=5,a();case 5:return t.abrupt("return",t.sent);case 8:return t.prev=8,t.t0=t.catch(2),w(t.t0,n),t.abrupt("return",r(null));case 12:return t.prev=12,n(v.setAppStatus({status:"idle"})),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,8,12,15]])})));return function(e,a){return t.apply(this,arguments)}}(),M=O("todolists/fetchTodolists",function(){var t=Object(m.a)(p.a.mark((function t(e,a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",W(a,Object(m.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I();case 2:return e=t.sent,t.abrupt("return",{todolists:e.data});case 4:case"end":return t.stop()}}),t)})))));case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),N=O("todolists/removeTodolist",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.abrupt("return",W(a,Object(m.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(q.changeTodolistEntityStatusAC({todolistId:e,entityStatus:"loading"})),t.next=3,C(e);case 3:if((a=t.sent).data.resultCode!==V){t.next=8;break}return t.abrupt("return",{todolistId:e});case 8:return E(a.data,n),t.abrupt("return",r(null));case 10:case"end":return t.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),P=O("todolists/addTodolist",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.abrupt("return",W(a,Object(m.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:if((a=t.sent).data.resultCode!==V){t.next=7;break}return t.abrupt("return",{todolist:a.data.data.item});case 7:return E(a.data,n),t.abrupt("return",r(null));case 9:case"end":return t.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),B=O("todolists/changeTodolistTitle",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.abrupt("return",W(a,Object(m.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:if((a=t.sent).data.resultCode!==V){t.next=7;break}return t.abrupt("return",e);case 7:return E(a.data,n),t.abrupt("return",r(null));case 9:case"end":return t.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),D=Object(b.d)({name:"todolists",initialState:[],reducers:{changeTodolistFilter:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].entityStatus=e.payload.entityStatus}},extraReducers:function(t){t.addCase(M.fulfilled,(function(t,e){return e.payload.todolists.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{filter:"all",entityStatus:"idle"})}))})).addCase(N.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));a>-1&&t.splice(a,1)})).addCase(P.fulfilled,(function(t,e){t.unshift(Object(d.a)(Object(d.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))})).addCase(B.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].title=e.payload.title})).addCase(g,(function(){return[]}))}}),R=D.reducer,U={fetchTodolists:M,removeTodolist:N,addTodolist:P,changeTodolistTitle:B},q=D.actions,H=O("tasks/fetchTasks",function(){var t=Object(m.a)(p.a.mark((function t(e,a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",W(a,Object(m.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e);case 2:return a=t.sent,n=a.data.items,t.abrupt("return",{tasks:n,todolistId:e});case 5:case"end":return t.stop()}}),t)})))));case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),K=O("tasks/addTask",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.abrupt("return",W(a,Object(m.a)(p.a.mark((function t(){var a,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e);case 2:if(a=t.sent,i=a.data.data.item,a.data.resultCode!==V){t.next=8;break}return t.abrupt("return",{task:i});case 8:return E(a.data,n),t.abrupt("return",r(null));case 10:case"end":return t.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),Z=O("tasks/updateTask",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,i=a.getState,t.abrupt("return",W(a,Object(m.a)(p.a.mark((function t(){var a,o,s,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=i().tasks[e.todolistId],o=a.find((function(t){return t.id===e.taskId}))){t.next=5;break}return n(v.setAppError({error:"Task not found in the state"})),t.abrupt("return",r(null));case 5:return s=Object(d.a)({title:o.title,startDate:o.startDate,priority:o.priority,description:o.description,deadline:o.deadline,status:o.status},e.domainModel),t.next=8,z(e.todolistId,e.taskId,s);case 8:if((c=t.sent).data.resultCode!==V){t.next=13;break}return t.abrupt("return",e);case 13:return E(c.data,n),t.abrupt("return",r(null));case 15:case"end":return t.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),J=O("tasks/removeTask",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.abrupt("return",W(a,Object(m.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Y.changeTaskEntityStatusAC({todolistId:e.todolistId,taskId:e.taskId,entityStatus:"loading"})),t.next=3,F(e);case 3:if((a=t.sent).data.resultCode!==V){t.next=8;break}return t.abrupt("return",e);case 8:return E(a.data,n),t.abrupt("return",r(null));case 10:case"end":return t.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),$=Object(b.d)({name:"tasks",initialState:{},reducers:{changeTaskEntityStatusAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(d.a)(Object(d.a)({},a[n]),{},{entityStatus:e.payload.entityStatus}))}},extraReducers:function(t){t.addCase(H.fulfilled,(function(t,e){t[e.payload.todolistId]=e.payload.tasks})).addCase(K.fulfilled,(function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)})).addCase(Z.fulfilled,(function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));-1!==n&&(a[n]=Object(d.a)(Object(d.a)({},a[n]),e.payload.domainModel))})).addCase(J.fulfilled,(function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));-1!==n&&a.splice(n,1)})).addCase(U.addTodolist.fulfilled,(function(t,e){t[e.payload.todolist.id]=[]})).addCase(U.removeTodolist.fulfilled,(function(t,e){delete t[e.payload.todolistId]})).addCase(U.fetchTodolists.fulfilled,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})).addCase(g,(function(){return{}}))}}),_=$.reducer,G={fetchTasks:H,addTask:K,updateTask:Z,removeTask:J},Y=$.actions,Q=a(109),X=function(t){return T.post("auth/login",t)},tt=function(){return T.delete("auth/login")},et=function(){return T.get("auth/me")},at=O("auth/login",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.abrupt("return",W(a,Object(m.a)(p.a.mark((function t(){var a,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X(e);case 2:if((a=t.sent).data.resultCode!==V){t.next=7;break}return t.abrupt("return",{isLoggedIn:!0});case 7:return i=!a.data.fieldsErrors.length,E(a.data,n,i),t.abrupt("return",r(a.data));case 10:case"end":return t.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),nt=O("auth/logout",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.abrupt("return",W(a,Object(m.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,tt();case 2:if((e=t.sent).data.resultCode!==V){t.next=8;break}return n(g()),t.abrupt("return",{isLoggedIn:!1});case 8:return E(e.data,n),t.abrupt("return",r(e.data));case 10:case"end":return t.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),rt=O("app/initializeApp",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,t.next=4,et();case 4:if(t.sent.data.resultCode!==V){t.next=9;break}return t.abrupt("return",{isLoggedIn:!0});case 9:return t.abrupt("return",r(null));case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(1),w(t.t0,n),t.abrupt("return",r(null));case 16:return t.prev=16,n(v.setIsInitialized({isInitialized:!0})),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,12,16,19]])})));return function(e,a){return t.apply(this,arguments)}}()),it=Object(b.d)({name:"auth",initialState:{isLoggedIn:!1},reducers:{},extraReducers:function(t){t.addCase(ot.login.fulfilled,(function(t,e){t.isLoggedIn=e.payload.isLoggedIn})).addCase(ot.logout.fulfilled,(function(t,e){t.isLoggedIn=e.payload.isLoggedIn})).addCase(ot.initializeApp.fulfilled,(function(t,e){t.isLoggedIn=e.payload.isLoggedIn}))}}).reducer,ot={login:at,logout:nt,initializeApp:rt},st=Object(u.a)({todolists:R,tasks:_,app:k,auth:it}),ct=Object(b.a)({reducer:st,middleware:function(t){return t().prepend(Q.a)}});window.store=ct;a(165);var lt=a(12),ut=a(224),dt=a(234),ft=a(220),pt=r.a.memo((function(t){var e=t.addItem,a=t.disabled,i=void 0!==a&&a,o=Object(n.useState)(""),s=Object(lt.a)(o,2),c=s[0],l=s[1],u=Object(n.useState)(!1),d=Object(lt.a)(u,2),f=d[0],p=d[1],m=function(){""!==c.trim()?e(c.trim()):p(!0),l("")};return r.a.createElement("div",null,r.a.createElement(ut.a,{value:c,onChange:function(t){p(!1),l(t.currentTarget.value)},onKeyPress:function(t){"Enter"===t.key&&m()},disabled:i,size:"small",error:f,helperText:f&&"Title is required!",label:"Title",variant:"outlined"}),r.a.createElement(dt.a,{onClick:m,color:"primary",disabled:i},r.a.createElement(ft.a,null)))})),mt=r.a.memo((function(t){var e=t.title,a=t.changeTitle,i=t.disabled,o=void 0!==i&&i,s=Object(n.useState)(!1),c=Object(lt.a)(s,2),l=c[0],u=c[1],d=Object(n.useState)(e),f=Object(lt.a)(d,2),p=f[0],m=f[1],b=function(){u(!1),a(p)};return l?r.a.createElement(ut.a,{onChange:function(t){m(t.currentTarget.value)},value:p,onBlur:b,autoFocus:!0,onKeyPress:function(t){"Enter"===t.key&&b()}}):r.a.createElement("span",{onDoubleClick:function(){o||u(!0)}},e)})),bt=a(228),ht=a(226),kt=function(t){return t.app.isInitialized},vt=function(t){return t.app.status},gt=function(t){return t.app.error},Et=l.b,jt=a(41),yt=function(t){var e=Et();return Object(n.useMemo)((function(){return Object(jt.b)(t,e)}),[])},wt=r.a.forwardRef((function(t,e){return r.a.createElement(ht.a,Object.assign({elevation:6,ref:e,variant:"filled"},t))}));function Ot(){var t=Object(l.c)(gt),e=yt(v).setAppError,a=function(t,a){"clickaway"!==a&&e({error:null})};return r.a.createElement(bt.a,{open:null!==t,autoHideDuration:6e3,onClose:a},r.a.createElement(wt,{onClose:a,severity:"error",sx:{width:"100%"}},t))}var Tt=a(221),It=a(227),xt=r.a.memo((function(t){var e=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.changeTaskTitle,t.todolistId]);return r.a.createElement("div",{key:t.task.id,className:t.task.status===s.Completed?"is-done":""},r.a.createElement(It.a,{checked:t.task.status===s.Completed,color:"primary",onChange:function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?s.Completed:s.New,t.todolistId)},disabled:"loading"===t.task.entityStatus}),r.a.createElement(mt,{title:t.task.title,changeTitle:e,disabled:"loading"===t.task.entityStatus}),r.a.createElement(dt.a,{onClick:function(){return t.removeTask(t.task.id,t.todolistId)},disabled:"loading"===t.task.entityStatus},r.a.createElement(Tt.a,null)))})),Ct=a(231),St=r.a.memo((function(t){var e=yt(G).fetchTasks;Object(n.useEffect)((function(){e(t.todolist.id)}),[]);var a=Object(n.useCallback)((function(e){t.addTask(e,t.todolist.id)}),[t.addTask,t.todolist.id]),i=Object(n.useCallback)((function(e){t.changeTodolistTitle(t.todolist.id,e)}),[t.changeTodolistTitle,t.todolist.id]),o=Object(n.useCallback)((function(){return t.changeFilter(t.todolist.id,"all")}),[t.todolist.id,t.changeFilter]),c=Object(n.useCallback)((function(){return t.changeFilter(t.todolist.id,"active")}),[t.todolist.id,t.changeFilter]),l=Object(n.useCallback)((function(){return t.changeFilter(t.todolist.id,"completed")}),[t.todolist.id,t.changeFilter]),u=t.tasks;return"active"===t.todolist.filter&&(u=t.tasks.filter((function(t){return t.status===s.New}))),"completed"===t.todolist.filter&&(u=t.tasks.filter((function(t){return t.status===s.Completed}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(mt,{title:t.todolist.title,changeTitle:i,disabled:"loading"===t.todolist.entityStatus}),r.a.createElement(dt.a,{onClick:function(){t.removeTodolist(t.todolist.id)},disabled:"loading"===t.todolist.entityStatus},r.a.createElement(Tt.a,null))),r.a.createElement(pt,{addItem:a,disabled:"loading"===t.todolist.entityStatus}),r.a.createElement("div",null,u.map((function(e){return r.a.createElement(xt,{task:e,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus,removeTask:t.removeTask,todolistId:t.todolist.id,key:e.id})}))),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(Ct.a,{variant:"all"===t.todolist.filter?"outlined":"text",onClick:o,color:"inherit"},"All"),r.a.createElement(Ct.a,{variant:"active"===t.todolist.filter?"outlined":"text",onClick:c,color:"primary"},"Active"),r.a.createElement(Ct.a,{variant:"completed"===t.todolist.filter?"outlined":"text",onClick:l,color:"secondary"},"Completed")))})),At=a(233),Lt=a(239),Ft=a(15),zt=function(t){return t.auth.isLoggedIn},Vt=function(t){return t.tasks},Wt=function(t){return t.todolists},Mt=function(){var t=Object(l.c)(Wt),e=Object(l.c)(Vt),a=Object(l.c)(zt),i=yt(U),o=i.fetchTodolists,s=i.removeTodolist,c=i.addTodolist,u=i.changeTodolistTitle,d=yt(G),f=d.addTask,p=d.removeTask,m=d.updateTask,b=yt(q).changeTodolistFilter;Object(n.useEffect)((function(){a&&o()}),[]);var h=Object(n.useCallback)((function(t,e){p({taskId:t,todolistId:e})}),[]),k=Object(n.useCallback)((function(t,e){f({todolistId:e,title:t})}),[]),v=Object(n.useCallback)((function(t,e,a){m({todolistId:a,taskId:t,domainModel:{status:e}})}),[]),g=Object(n.useCallback)((function(t,e,a){m({todolistId:a,taskId:t,domainModel:{title:e}})}),[]),E=Object(n.useCallback)((function(t,e){b({todolistId:t,filter:e})}),[]),j=Object(n.useCallback)((function(t){s(t)}),[]),y=Object(n.useCallback)((function(t,e){u({todolistId:t,title:e})}),[]),w=Object(n.useCallback)((function(t){c(t)}),[]);return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(At.a,{container:!0,style:{padding:"20px"}},r.a.createElement(pt,{addItem:w})),r.a.createElement(At.a,{container:!0,spacing:3},t.map((function(t){var a=e[t.id];return r.a.createElement(At.a,{item:!0,key:t.id},r.a.createElement(Lt.a,{style:{padding:"10px"}},r.a.createElement(St,{todolist:t,tasks:a,removeTask:h,changeFilter:E,addTask:k,changeTaskStatus:v,removeTodolist:j,changeTaskTitle:g,changeTodolistTitle:y})))})))):r.a.createElement(Ft.a,{to:"/login"})},Nt=a(236),Pt=a(237),Bt=a(235),Dt=a(232),Rt=a(238),Ut=a(223),qt=a(229),Ht=a(241),Kt=a(240),Zt=a(218),Jt=a(117),$t=function(){var t=Et(),e=Object(l.c)(zt),a=Object(Jt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Email is required",t.password?t.password.length<4&&(e.password="Must be 4 characters or more"):e.password="Required",e},onSubmit:function(e,a){t(ot.login(e)).unwrap().catch((function(t){t.fieldsErrors&&t.fieldsErrors.forEach((function(t){a.setFieldError(t.field,t.error)}))}))}});return e?r.a.createElement(Ft.a,{to:"/"}):r.a.createElement(At.a,{container:!0,justifyContent:"center"},r.a.createElement(At.a,{item:!0,justifyContent:"center"},r.a.createElement("form",{onSubmit:a.handleSubmit},r.a.createElement(qt.a,null,r.a.createElement(Zt.a,null,r.a.createElement("p",null,"To log in get registered",r.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank",rel:"noreferrer"}," here")),r.a.createElement("p",null,"or use common test account credentials:"),r.a.createElement("p",null,"Email: free@samuraijs.com"),r.a.createElement("p",null,"Password: free")),r.a.createElement(Kt.a,null,r.a.createElement(ut.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"),{onBlur:a.handleBlur})),a.touched.email&&a.errors.email?r.a.createElement("div",{style:{color:"red"}},a.errors.email):null,r.a.createElement(ut.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"),{onBlur:a.handleBlur})),a.touched.password&&a.errors.password?r.a.createElement("div",{style:{color:"red"}},a.errors.password):null,r.a.createElement(Ht.a,{label:"Remember me",control:r.a.createElement(It.a,{onChange:a.handleChange,checked:a.values.rememberMe,name:"rememberMe"})}),r.a.createElement(Ct.a,{type:"submit",variant:"contained",disabled:!(a.isValid&&a.dirty),color:"primary"},"Login"))))))},_t=a(242);var Gt=function(){var t=Object(l.c)(vt),e=Object(l.c)(kt),a=Object(l.c)(zt),i=yt(ot),o=i.initializeApp,s=i.logout;return Object(n.useEffect)((function(){o()}),[]),e?r.a.createElement("div",{className:"App"},r.a.createElement(Ot,null),r.a.createElement(Nt.a,{position:"static"},r.a.createElement(Pt.a,null,r.a.createElement(dt.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(Ut.a,null)),r.a.createElement(Bt.a,{variant:"h6"},"News"),!a&&r.a.createElement(Ct.a,{color:"inherit"},"Login"),a&&r.a.createElement(Ct.a,{color:"inherit",onClick:function(){return s()}},"Logout")),"loading"===t&&r.a.createElement(Rt.a,null)),r.a.createElement(Dt.a,{fixed:!0},r.a.createElement(Ft.d,null,r.a.createElement(Ft.b,{path:"/",element:r.a.createElement(Mt,null)}),r.a.createElement(Ft.b,{path:"/todolist",element:r.a.createElement(Mt,null)}),r.a.createElement(Ft.b,{path:"/login",element:r.a.createElement($t,null)}),r.a.createElement(Ft.b,{path:"/404",element:r.a.createElement("h1",null,"404: PAGE NOT FOUND")}),r.a.createElement(Ft.b,{path:"*",element:r.a.createElement(Ft.a,{to:"/404"})})))):r.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},r.a.createElement(_t.a,null))},Yt=a(59);o.a.render(r.a.createElement(Yt.a,null,r.a.createElement(l.a,{store:ct},r.a.createElement(Gt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.5d50a0cf.chunk.js.map