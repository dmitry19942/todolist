(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{115:function(t,e,a){t.exports={isDone:"styles_isDone__2f2Qf"}},131:function(t,e,a){t.exports=a(173)},136:function(t,e,a){},166:function(t,e,a){},173:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(37),i=a.n(o);a(136),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l,s,c=a(29),u=a(69),d=a(40),f=a(16),p=a.n(f),m=a(35),h=a(32),b=Object(h.d)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatus:function(t,e){t.status=e.payload.status},setAppError:function(t,e){t.error=e.payload.error},setIsInitialized:function(t,e){t.isInitialized=e.payload.isInitialized}},extraReducers:function(t){t.addMatcher((function(t){return t.type.endsWith("/pending")}),(function(t){t.status="loading"})).addMatcher((function(t){return t.type.endsWith("/rejected")}),(function(t,e){var a=e.payload,n=e.error;a?a.showGlobalError&&(t.error=a.data.messages.length?a.data.messages[0]:"Some error occurred"):t.error=n.message?n.message:"Some error occurred",t.status="failed"})).addMatcher((function(t){return t.type.endsWith("/fulfilled")}),(function(t){t.status="succeeded"}))}}),E=b.reducer,g=b.actions,v=Object(h.b)("common/clear-tasks-todolists"),k=h.c.withTypes(),y=a(108),I=a.n(y).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"a1c29d8b-1c83-4c49-8a4c-55a3c1e75564"}}),w=function(){return I.get("todo-lists")},j=function(t){return I.post("todo-lists",{title:t})},O=function(t){return I.delete("todo-lists/".concat(t))},x=function(t){return I.put("todo-lists/".concat(t.todolistId),{title:t.title})};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(l||(l={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(s||(s={}));var C=0,T=k("todolists/fetchTodolists",Object(m.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return e=t.sent,t.abrupt("return",{todolists:e.data});case 4:case"end":return t.stop()}}),t)})))),S=k("todolists/removeTodolist",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,n(G.changeTodolistEntityStatus({todolistId:e,entityStatus:"loading"})),t.next=4,O(e);case 4:if((o=t.sent).data.resultCode!==C){t.next=9;break}return t.abrupt("return",{todolistId:e});case 9:return t.abrupt("return",r({data:o.data,showGlobalError:!0}));case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),L=k("todolists/addTodolist",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.rejectWithValue,t.next=3,j(e);case 3:if((r=t.sent).data.resultCode!==C){t.next=8;break}return t.abrupt("return",{todolist:r.data.data.item});case 8:return t.abrupt("return",n({data:r.data,showGlobalError:!1}));case 9:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),A=k("todolists/changeTodolistTitle",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.rejectWithValue,t.next=3,x(e);case 3:if((r=t.sent).data.resultCode!==C){t.next=8;break}return t.abrupt("return",e);case 8:return t.abrupt("return",n({data:r.data,showGlobalError:!0}));case 9:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),M=Object(h.d)({name:"todolists",initialState:[],reducers:{changeTodolistFilter:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].filter=e.payload.filter},changeTodolistEntityStatus:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].entityStatus=e.payload.entityStatus}},extraReducers:function(t){t.addCase(T.fulfilled,(function(t,e){return e.payload.todolists.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{filter:"all",entityStatus:"idle"})}))})).addCase(S.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));a>-1&&t.splice(a,1)})).addCase(L.fulfilled,(function(t,e){t.unshift(Object(d.a)(Object(d.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))})).addCase(A.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a].title=e.payload.title})).addCase(v,(function(){return[]}))}}),W=M.reducer,z={fetchTodolists:T,removeTodolist:S,addTodolist:L,changeTodolistTitle:A},G=M.actions,V=function(t){return I.get("todo-lists/".concat(t,"/tasks"))},D=function(t){return I.post("todo-lists/".concat(t.todolistId,"/tasks"),{title:t.title})},P=function(t){return I.delete("todo-lists/".concat(t.todolistId,"/tasks/").concat(t.taskId))},F=function(t,e,a){return I.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},N=k("tasks/fetchTasks",function(){var t=Object(m.a)(p.a.mark((function t(e){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V(e);case 2:return a=t.sent,n=a.data.items,t.abrupt("return",{tasks:n,todolistId:e});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),R=k("tasks/addTask",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.rejectWithValue,t.next=3,D(e);case 3:if(r=t.sent,o=r.data.data.item,r.data.resultCode!==C){t.next=9;break}return t.abrupt("return",{task:o});case 9:return t.abrupt("return",n({data:r.data,showGlobalError:!1}));case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),B=k("tasks/updateTask",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r,o,i,l,s,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.dispatch,r=a.rejectWithValue,o=a.getState,i=o().tasks[e.todolistId],l=i.find((function(t){return t.id===e.taskId}))){t.next=6;break}return n(g.setAppError({error:"Task not found in the state"})),t.abrupt("return",r(null));case 6:return s=Object(d.a)({title:l.title,startDate:l.startDate,priority:l.priority,description:l.description,deadline:l.deadline,status:l.status},e.domainModel),t.next=9,F(e.todolistId,e.taskId,s);case 9:if((c=t.sent).data.resultCode!==C){t.next=14;break}return t.abrupt("return",e);case 14:return t.abrupt("return",r({data:c.data,showGlobalError:!0}));case 15:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),_=k("tasks/removeTask",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,n(K.changeTaskEntityStatusAC({todolistId:e.todolistId,taskId:e.taskId,entityStatus:"loading"})),t.next=4,P(e);case 4:if((o=t.sent).data.resultCode!==C){t.next=9;break}return t.abrupt("return",e);case 9:return t.abrupt("return",r({data:o.data,showGlobalError:!0}));case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),U=Object(h.d)({name:"tasks",initialState:{},reducers:{changeTaskEntityStatusAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(d.a)(Object(d.a)({},a[n]),{},{entityStatus:e.payload.entityStatus}))}},extraReducers:function(t){t.addCase(N.fulfilled,(function(t,e){t[e.payload.todolistId]=e.payload.tasks})).addCase(R.fulfilled,(function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)})).addCase(B.fulfilled,(function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));-1!==n&&(a[n]=Object(d.a)(Object(d.a)({},a[n]),e.payload.domainModel))})).addCase(_.fulfilled,(function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));-1!==n&&a.splice(n,1)})).addCase(z.addTodolist.fulfilled,(function(t,e){t[e.payload.todolist.id]=[]})).addCase(z.removeTodolist.fulfilled,(function(t,e){delete t[e.payload.todolistId]})).addCase(z.fetchTodolists.fulfilled,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})).addCase(v,(function(){return{}}))}}),q=U.reducer,H={fetchTasks:N,addTask:R,updateTask:B,removeTask:_},K=U.actions,Z=a(109),J=function(t){return I.post("auth/login",t)},$=function(){return I.delete("auth/login")},Q=function(){return I.get("auth/me")},Y=k("auth/login",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.rejectWithValue,t.next=3,J(e);case 3:if((r=t.sent).data.resultCode!==C){t.next=8;break}return t.abrupt("return",{isLoggedIn:!0});case 8:return o=!r.data.fieldsErrors.length,t.abrupt("return",n({data:r.data,showGlobalError:o}));case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),X=k("auth/logout",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.next=3,$();case 3:if((o=t.sent).data.resultCode!==C){t.next=9;break}return n(v()),t.abrupt("return",{isLoggedIn:!1});case 9:return t.abrupt("return",r({data:o.data,showGlobalError:!0}));case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),tt=k("app/initializeApp",function(){var t=Object(m.a)(p.a.mark((function t(e,a){var n,r,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.rejectWithValue,t.prev=1,t.next=4,Q();case 4:if((o=t.sent).data.resultCode!==C){t.next=9;break}return t.abrupt("return",{isLoggedIn:!0});case 9:return t.abrupt("return",r({data:o.data,showGlobalError:!1}));case 10:return t.prev=10,n(g.setIsInitialized({isInitialized:!0})),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[1,,10,13]])})));return function(e,a){return t.apply(this,arguments)}}()),et=Object(h.d)({name:"auth",initialState:{isLoggedIn:!1},reducers:{},extraReducers:function(t){t.addCase(at.login.fulfilled,(function(t,e){t.isLoggedIn=e.payload.isLoggedIn})).addCase(at.logout.fulfilled,(function(t,e){t.isLoggedIn=e.payload.isLoggedIn})).addCase(at.initializeApp.fulfilled,(function(t,e){t.isLoggedIn=e.payload.isLoggedIn}))}}).reducer,at={login:Y,logout:X,initializeApp:tt},nt=Object(u.b)({todolists:W,tasks:q,app:E,auth:et}),rt=Object(h.a)({reducer:nt,middleware:function(t){return t().prepend(Z.a)}});window.store=rt;a(166);var ot=a(12),it=a(225),lt=a(235),st=a(221),ct=r.a.memo((function(t){var e=t.addItem,a=t.disabled,o=void 0!==a&&a,i=Object(n.useState)(""),l=Object(ot.a)(i,2),s=l[0],c=l[1],u=Object(n.useState)(null),d=Object(ot.a)(u,2),f=d[0],p=d[1],m=function(){""!==s.trim()?e(s).then((function(){c("")})).catch((function(t){if(t.data){var e=t.data.messages;p(e.length?e[0]:"Some error occurred")}})):p("Title is required")};return r.a.createElement("div",null,r.a.createElement(it.a,{value:s,onChange:function(t){c(t.currentTarget.value)},onKeyPress:function(t){null!==f&&p(null),"Enter"===t.key&&m()},disabled:o,size:"small",error:!!f,helperText:f,label:"Title",variant:"outlined"}),r.a.createElement(lt.a,{onClick:m,color:"primary",disabled:o},r.a.createElement(st.a,null)))})),ut=r.a.memo((function(t){var e=t.title,a=t.changeTitle,o=t.disabled,i=void 0!==o&&o,l=Object(n.useState)(!1),s=Object(ot.a)(l,2),c=s[0],u=s[1],d=Object(n.useState)(e),f=Object(ot.a)(d,2),p=f[0],m=f[1],h=function(){u(!1),a(p)};return c?r.a.createElement(it.a,{onChange:function(t){m(t.currentTarget.value)},value:p,onBlur:h,autoFocus:!0,onKeyPress:function(t){"Enter"===t.key&&h()}}):r.a.createElement("span",{onDoubleClick:function(){i||u(!0)}},e)})),dt=a(229),ft=a(227),pt=function(t){return t.app.isInitialized},mt=function(t){return t.app.status},ht=function(t){return t.app.error},bt=c.b,Et=function(t){var e=bt();return Object(n.useMemo)((function(){return Object(u.a)(t,e)}),[t,e])},gt=r.a.forwardRef((function(t,e){return r.a.createElement(ft.a,Object.assign({elevation:6,ref:e,variant:"filled"},t))}));function vt(){var t=Object(c.c)(ht),e=Et(g).setAppError,a=function(t,a){"clickaway"!==a&&e({error:null})};return r.a.createElement(dt.a,{open:null!==t,autoHideDuration:6e3,onClose:a},r.a.createElement(gt,{onClose:a,severity:"error",sx:{width:"100%"}},t))}var kt=a(232),yt=Object(n.memo)((function(t){var e=t.todolist,a=Et(G).changeTodolistFilter,n=function(t){a({todolistId:e.id,filter:t})};return r.a.createElement("div",null,r.a.createElement(kt.a,{variant:"all"===e.filter?"outlined":"text",onClick:function(){return n("all")},color:"inherit"},"All"),r.a.createElement(kt.a,{variant:"active"===e.filter?"outlined":"text",onClick:function(){return n("active")},color:"primary"},"Active"),r.a.createElement(kt.a,{variant:"completed"===e.filter?"outlined":"text",onClick:function(){return n("completed")},color:"secondary"},"Completed"))})),It=a(222),wt=a(228),jt=a(115),Ot=a.n(jt),xt=r.a.memo((function(t){var e=t.task,a=t.todolistId,n=Et(H),o=n.removeTask,i=n.updateTask;return r.a.createElement("div",{key:e.id,className:e.status===l.Completed?Ot.a.isDone:""},r.a.createElement(wt.a,{checked:e.status===l.Completed,color:"primary",onChange:function(t){var n=t.currentTarget.checked?l.Completed:l.New;i({todolistId:a,taskId:e.id,domainModel:{status:n}})},disabled:"loading"===e.entityStatus}),r.a.createElement(ut,{title:e.title,changeTitle:function(t){i({todolistId:a,taskId:e.id,domainModel:{title:t}})},disabled:"loading"===e.entityStatus}),r.a.createElement(lt.a,{onClick:function(){return o({taskId:e.id,todolistId:a})},disabled:"loading"===e.entityStatus},r.a.createElement(It.a,null)))})),Ct=Object(n.memo)((function(t){var e=t.tasks,a=t.todolist,n=e;return"active"===a.filter&&(n=e.filter((function(t){return t.status===l.New}))),"completed"===a.filter&&(n=e.filter((function(t){return t.status===l.Completed}))),r.a.createElement(r.a.Fragment,null,n.map((function(t){return r.a.createElement(xt,{task:t,todolistId:a.id,key:t.id})})))})),Tt=Object(n.memo)((function(t){var e=t.todolist,a=Et(z),n=a.removeTodolist,o=a.changeTodolistTitle;return r.a.createElement("h3",null,r.a.createElement(ut,{title:e.title,changeTitle:function(t){o({todolistId:e.id,title:t})},disabled:"loading"===e.entityStatus}),r.a.createElement(lt.a,{onClick:function(){n(e.id)},disabled:"loading"===e.entityStatus},r.a.createElement(It.a,null)))})),St=Object(n.memo)((function(t){var e=t.todolist,a=t.tasks,o=Et(H),i=o.fetchTasks,l=o.addTask;Object(n.useEffect)((function(){i(e.id)}),[]);return r.a.createElement("div",null,r.a.createElement(Tt,{todolist:e}),r.a.createElement(ct,{addItem:function(t){return l({todolistId:e.id,title:t}).unwrap()},disabled:"loading"===e.entityStatus}),r.a.createElement(Ct,{todolist:e,tasks:a}),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(yt,{todolist:e})))})),Lt=a(234),At=a(240),Mt=a(14),Wt=function(t){return t.auth.isLoggedIn},zt=function(t){return t.tasks},Gt=function(t){return t.todolists},Vt=function(){var t=Object(c.c)(Gt),e=Object(c.c)(zt),a=Object(c.c)(Wt),o=Et(z),i=o.fetchTodolists,l=o.addTodolist;Object(n.useEffect)((function(){a&&i({})}),[]);return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(Lt.a,{container:!0,style:{padding:"20px"}},r.a.createElement(ct,{addItem:function(t){return l(t).unwrap()}})),r.a.createElement(Lt.a,{container:!0,spacing:3},t.map((function(t){var a=e[t.id];return r.a.createElement(Lt.a,{item:!0,key:t.id},r.a.createElement(At.a,{style:{padding:"10px"}},r.a.createElement(St,{todolist:t,tasks:a})))})))):r.a.createElement(Mt.a,{to:"/login"})},Dt=a(237),Pt=a(238),Ft=a(236),Nt=a(233),Rt=a(239),Bt=a(224),_t=a(230),Ut=a(242),qt=a(241),Ht=a(219),Kt=a(118),Zt=function(){var t=Et(at).login,e=Object(c.c)(Wt),a=Object(Kt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Email is required",t.password?t.password.length<4&&(e.password="Must be 4 characters or more"):e.password="Required",e},onSubmit:function(e,a){t(e).unwrap().catch((function(t){t.fieldsErrors&&t.fieldsErrors.forEach((function(t){a.setFieldError(t.field,t.error)}))}))}});return e?r.a.createElement(Mt.a,{to:"/"}):r.a.createElement(Lt.a,{container:!0,justifyContent:"center"},r.a.createElement(Lt.a,{item:!0,justifyContent:"center"},r.a.createElement("form",{onSubmit:a.handleSubmit},r.a.createElement(_t.a,null,r.a.createElement(Ht.a,null,r.a.createElement("p",null,"To log in get registered",r.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank",rel:"noreferrer"}," here")),r.a.createElement("p",null,"or use common test account credentials:"),r.a.createElement("p",null,"Email: free@samuraijs.com"),r.a.createElement("p",null,"Password: free")),r.a.createElement(qt.a,null,r.a.createElement(it.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"),{onBlur:a.handleBlur})),a.touched.email&&a.errors.email?r.a.createElement("div",{style:{color:"red"}},a.errors.email):null,r.a.createElement(it.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"),{onBlur:a.handleBlur})),a.touched.password&&a.errors.password?r.a.createElement("div",{style:{color:"red"}},a.errors.password):null,r.a.createElement(Ut.a,{label:"Remember me",control:r.a.createElement(wt.a,{onChange:a.handleChange,checked:a.values.rememberMe,name:"rememberMe"})}),r.a.createElement(kt.a,{type:"submit",variant:"contained",disabled:!(a.isValid&&a.dirty),color:"primary"},"Login"))))))},Jt=a(243);var $t=function(){var t=Object(c.c)(mt),e=Object(c.c)(pt),a=Object(c.c)(Wt),o=Et(at),i=o.initializeApp,l=o.logout;return Object(n.useEffect)((function(){i({})}),[]),e?r.a.createElement("div",{className:"App"},r.a.createElement(vt,null),r.a.createElement(Dt.a,{position:"static"},r.a.createElement(Pt.a,null,r.a.createElement(lt.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(Bt.a,null)),r.a.createElement(Ft.a,{variant:"h6"},"News"),!a&&r.a.createElement(kt.a,{color:"inherit"},"Login"),a&&r.a.createElement(kt.a,{color:"inherit",onClick:function(){return l({})}},"Logout")),"loading"===t&&r.a.createElement(Rt.a,null)),r.a.createElement(Nt.a,{fixed:!0},r.a.createElement(Mt.d,null,r.a.createElement(Mt.b,{path:"/",element:r.a.createElement(Vt,null)}),r.a.createElement(Mt.b,{path:"/todolist",element:r.a.createElement(Vt,null)}),r.a.createElement(Mt.b,{path:"/login",element:r.a.createElement(Zt,null)}),r.a.createElement(Mt.b,{path:"/404",element:r.a.createElement("h1",null,"404: PAGE NOT FOUND")}),r.a.createElement(Mt.b,{path:"*",element:r.a.createElement(Mt.a,{to:"/404"})})))):r.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},r.a.createElement(Jt.a,null))},Qt=a(59);i.a.render(r.a.createElement(Qt.a,null,r.a.createElement(c.a,{store:rt},r.a.createElement($t,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.90629777.chunk.js.map