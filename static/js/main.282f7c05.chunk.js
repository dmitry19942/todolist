(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{117:function(e,t,a){e.exports={isDone:"styles_isDone__2f2Qf"}},131:function(e,t,a){e.exports=a(173)},136:function(e,t,a){},166:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(37),i=a.n(o);a(136),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l,c,s=a(22),u=a(69),d=a(40),f=a(16),p=a.n(f),m=a(32),h=a(33),b=Object(h.d)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatus:function(e,t){e.status=t.payload.status},setAppError:function(e,t){e.error=t.payload.error},setIsInitialized:function(e,t){e.isInitialized=t.payload.isInitialized}},extraReducers:function(e){e.addMatcher((function(e){return e.type.endsWith("/pending")}),(function(e){e.status="loading"})).addMatcher((function(e){return e.type.endsWith("/rejected")}),(function(e,t){var a=t.payload,n=t.error;a?a.showGlobalError&&(e.error=a.data.messages.length?a.data.messages[0]:"Some error occurred"):e.error=n.message?n.message:"Some error occurred",e.status="failed"})).addMatcher((function(e){return e.type.endsWith("/fulfilled")}),(function(e){e.status="succeeded"}))}}),E=b.reducer,g=b.actions,v=Object(h.b)("common/clear-tasks-todolists"),y=h.c.withTypes(),k=a(108),j=a.n(k).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"a1c29d8b-1c83-4c49-8a4c-55a3c1e75564"}}),w=function(){return j.get("todo-lists")},I=function(e){return j.post("todo-lists",{title:e})},O=function(e){return j.delete("todo-lists/".concat(e))},C=function(e){return j.put("todo-lists/".concat(e.todolistId),{title:e.title})};!function(e){e[e.New=0]="New",e[e.InProgress=1]="InProgress",e[e.Completed=2]="Completed",e[e.Draft=3]="Draft"}(l||(l={})),function(e){e[e.Low=0]="Low",e[e.Middle=1]="Middle",e[e.Hi=2]="Hi",e[e.Later=4]="Later"}(c||(c={}));var x=0,T=10,S=y("todolists/fetchTodolists",Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return t=e.sent,e.abrupt("return",{todolists:t.data});case 4:case"end":return e.stop()}}),e)})))),M=y("todolists/removeTodolist",function(){var e=Object(m.a)(p.a.mark((function e(t,a){var n,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.rejectWithValue,n(G.changeTodolistEntityStatus({todolistId:t,entityStatus:"loading"})),e.next=4,O(t);case 4:if((o=e.sent).data.resultCode!==x){e.next=9;break}return e.abrupt("return",{todolistId:t});case 9:return e.abrupt("return",r({data:o.data,showGlobalError:!0}));case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),L=y("todolists/addTodolist",function(){var e=Object(m.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.next=3,I(t);case 3:if((r=e.sent).data.resultCode!==x){e.next=8;break}return e.abrupt("return",{todolist:r.data.data.item});case 8:return e.abrupt("return",n({data:r.data,showGlobalError:!1}));case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),A=y("todolists/changeTodolistTitle",function(){var e=Object(m.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.next=3,C(t);case 3:if((r=e.sent).data.resultCode!==x){e.next=8;break}return e.abrupt("return",t);case 8:return e.abrupt("return",n({data:r.data,showGlobalError:!0}));case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),P=Object(h.d)({name:"todolists",initialState:[],reducers:{changeTodolistFilter:function(e,t){var a=e.findIndex((function(e){return e.id===t.payload.todolistId}));e[a].filter=t.payload.filter},changeTodolistEntityStatus:function(e,t){var a=e.findIndex((function(e){return e.id===t.payload.todolistId}));e[a].entityStatus=t.payload.entityStatus}},extraReducers:function(e){e.addCase(S.fulfilled,(function(e,t){return t.payload.todolists.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{filter:"all",entityStatus:"idle"})}))})).addCase(M.fulfilled,(function(e,t){var a=e.findIndex((function(e){return e.id===t.payload.todolistId}));a>-1&&e.splice(a,1)})).addCase(L.fulfilled,(function(e,t){e.unshift(Object(d.a)(Object(d.a)({},t.payload.todolist),{},{filter:"all",entityStatus:"idle"}))})).addCase(A.fulfilled,(function(e,t){var a=e.findIndex((function(e){return e.id===t.payload.todolistId}));e[a].title=t.payload.title})).addCase(v,(function(){return[]}))}}),W=P.reducer,z={fetchTodolists:S,removeTodolist:M,addTodolist:L,changeTodolistTitle:A},G=P.actions,V=function(e){return j.get("todo-lists/".concat(e,"/tasks"))},H=function(e){return j.post("todo-lists/".concat(e.todolistId,"/tasks"),{title:e.title})},D=function(e){return j.delete("todo-lists/".concat(e.todolistId,"/tasks/").concat(e.taskId))},F=function(e,t,a){return j.put("todo-lists/".concat(e,"/tasks/").concat(t),a)},B=y("tasks/fetchTasks",function(){var e=Object(m.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(t);case 2:return a=e.sent,n=a.data.items,e.abrupt("return",{tasks:n,todolistId:t});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=y("tasks/addTask",function(){var e=Object(m.a)(p.a.mark((function e(t,a){var n,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.next=3,H(t);case 3:if(r=e.sent,o=r.data.data.item,r.data.resultCode!==x){e.next=9;break}return e.abrupt("return",{task:o});case 9:return e.abrupt("return",n({data:r.data,showGlobalError:!1}));case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),R=y("tasks/updateTask",function(){var e=Object(m.a)(p.a.mark((function e(t,a){var n,r,o,i,l,c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.dispatch,r=a.rejectWithValue,o=a.getState,i=o().tasks[t.todolistId],l=i.find((function(e){return e.id===t.taskId}))){e.next=6;break}return n(g.setAppError({error:"Task not found in the state"})),e.abrupt("return",r(null));case 6:return c=Object(d.a)({title:l.title,startDate:l.startDate,priority:l.priority,description:l.description,deadline:l.deadline,status:l.status},t.domainModel),e.next=9,F(t.todolistId,t.taskId,c);case 9:if((s=e.sent).data.resultCode!==x){e.next=14;break}return e.abrupt("return",t);case 14:return e.abrupt("return",r({data:s.data,showGlobalError:!0}));case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),K=y("tasks/removeTask",function(){var e=Object(m.a)(p.a.mark((function e(t,a){var n,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.rejectWithValue,n(Z.changeTaskEntityStatusAC({todolistId:t.todolistId,taskId:t.taskId,entityStatus:"loading"})),e.next=4,D(t);case 4:if((o=e.sent).data.resultCode!==x){e.next=9;break}return e.abrupt("return",t);case 9:return e.abrupt("return",r({data:o.data,showGlobalError:!0}));case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),U=Object(h.d)({name:"tasks",initialState:{},reducers:{changeTaskEntityStatusAC:function(e,t){var a=e[t.payload.todolistId],n=a.findIndex((function(e){return e.id===t.payload.taskId}));n>-1&&(a[n]=Object(d.a)(Object(d.a)({},a[n]),{},{entityStatus:t.payload.entityStatus}))}},extraReducers:function(e){e.addCase(B.fulfilled,(function(e,t){e[t.payload.todolistId]=t.payload.tasks})).addCase(N.fulfilled,(function(e,t){e[t.payload.task.todoListId].unshift(t.payload.task)})).addCase(R.fulfilled,(function(e,t){var a=e[t.payload.todolistId],n=a.findIndex((function(e){return e.id===t.payload.taskId}));-1!==n&&(a[n]=Object(d.a)(Object(d.a)({},a[n]),t.payload.domainModel))})).addCase(K.fulfilled,(function(e,t){var a=e[t.payload.todolistId],n=a.findIndex((function(e){return e.id===t.payload.taskId}));-1!==n&&a.splice(n,1)})).addCase(z.addTodolist.fulfilled,(function(e,t){e[t.payload.todolist.id]=[]})).addCase(z.removeTodolist.fulfilled,(function(e,t){delete e[t.payload.todolistId]})).addCase(z.fetchTodolists.fulfilled,(function(e,t){t.payload.todolists.forEach((function(t){e[t.id]=[]}))})).addCase(v,(function(){return{}}))}}),_=U.reducer,q={fetchTasks:B,addTask:N,updateTask:R,removeTask:K},Z=U.actions,J=a(109),$=function(e){return j.post("auth/login",e)},Q=function(){return j.delete("auth/login")},Y=function(){return j.get("auth/me")},X=function(){return j.get("security/get-captcha-url")},ee=y("auth/login",function(){var e=Object(m.a)(p.a.mark((function e(t,a){var n,r,o,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.rejectWithValue,e.next=3,$(t);case 3:if((o=e.sent).data.resultCode!==x){e.next=8;break}return e.abrupt("return",{isLoggedIn:!0});case 8:return o.data.resultCode===T&&n(ne()),i=!o.data.fieldsErrors.length,e.abrupt("return",r({data:o.data,showGlobalError:i}));case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),te=y("auth/logout",function(){var e=Object(m.a)(p.a.mark((function e(t,a){var n,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.rejectWithValue,e.next=3,Q();case 3:if((o=e.sent).data.resultCode!==x){e.next=9;break}return n(v()),e.abrupt("return",{isLoggedIn:!1,captcha:null});case 9:return e.abrupt("return",r({data:o.data,showGlobalError:!0}));case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),ae=y("app/initializeApp",function(){var e=Object(m.a)(p.a.mark((function e(t,a){var n,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.rejectWithValue,e.prev=1,e.next=4,Y();case 4:if((o=e.sent).data.resultCode!==x){e.next=9;break}return e.abrupt("return",{isLoggedIn:!0});case 9:return e.abrupt("return",r({data:o.data,showGlobalError:!1}));case 10:return e.prev=10,n(g.setIsInitialized({isInitialized:!0})),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,,10,13]])})));return function(t,a){return e.apply(this,arguments)}}()),ne=y("auth/getCaptchaUrl",function(){var e=Object(m.a)(p.a.mark((function e(t,a){var n,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.next=3,X();case 3:if(r=e.sent,!(o=r.data.url)){e.next=9;break}return e.abrupt("return",{captcha:o});case 9:return e.abrupt("return",n({data:r.data,showGlobalError:!0}));case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),re=Object(h.d)({name:"auth",initialState:{isLoggedIn:!1,captcha:null},reducers:{},extraReducers:function(e){e.addCase(oe.login.fulfilled,(function(e,t){e.isLoggedIn=t.payload.isLoggedIn})).addCase(oe.logout.fulfilled,(function(e,t){e.isLoggedIn=t.payload.isLoggedIn,e.captcha=t.payload.captcha})).addCase(oe.initializeApp.fulfilled,(function(e,t){e.isLoggedIn=t.payload.isLoggedIn})).addCase(oe.getCaptchaUrl.fulfilled,(function(e,t){e.captcha=t.payload.captcha}))}}).reducer,oe={login:ee,logout:te,initializeApp:ae,getCaptchaUrl:ne},ie=Object(u.b)({todolists:W,tasks:_,app:E,auth:re}),le=Object(h.a)({reducer:ie,middleware:function(e){return e().prepend(J.a)}});window.store=le;a(166);var ce=a(225),se=a(236),ue=a(221),de=s.b,fe=function(e){var t=de();return Object(n.useMemo)((function(){return Object(u.a)(e,t)}),[e,t])},pe=a(118),me=a(12),he=Object(n.memo)((function(e){var t=e.addItem,a=e.disabled,o=void 0!==a&&a,i=function(e){var t=Object(n.useState)(""),a=Object(me.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(null),l=Object(me.a)(i,2),c=l[0],s=l[1],u=function(){""!==r.trim()?e(r).then((function(){o("")})).catch((function(e){if(e.data){var t=e.data.messages;s(t.length?t[0]:"Some error occurred")}})):s("Title is required")};return{title:r,error:c,onChangeHandler:function(e){o(e.currentTarget.value)},onKeyPressHandler:function(e){null!==c&&s(null),"Enter"===e.key&&u()},addItemHandler:u}}(t),l=i.title,c=i.onChangeHandler,s=i.onKeyPressHandler,u=i.error,d=i.addItemHandler;return r.a.createElement("div",null,r.a.createElement(ce.a,{value:l,onChange:c,onKeyPress:s,disabled:o,size:"small",error:!!u,helperText:u,label:"Title",variant:"outlined"}),r.a.createElement(se.a,{onClick:d,color:"primary",disabled:o},r.a.createElement(ue.a,null)))})),be=Object(n.memo)((function(e){var t=e.title,a=e.changeTitle,o=e.disabled,i=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(n.useState)(!1),o=Object(me.a)(r,2),i=o[0],l=o[1],c=Object(n.useState)(e),s=Object(me.a)(c,2),u=s[0],d=s[1],f=function(e){d(e.currentTarget.value)},p=function(){a||l(!0)},m=function(){l(!1),t(u)},h=function(e){"Enter"===e.key&&m()};return{editMode:i,newTitle:u,onEditMode:p,offEditMode:m,changeTitleHandler:f,onKeyPressOffEditMode:h}}(t,a,void 0!==o&&o),l=i.editMode,c=i.newTitle,s=i.onEditMode,u=i.offEditMode,d=i.changeTitleHandler,f=i.onKeyPressOffEditMode;return l?r.a.createElement(ce.a,{onChange:d,value:c,onBlur:u,autoFocus:!0,onKeyPress:f}):r.a.createElement("span",{onDoubleClick:s},t)})),Ee=a(229),ge=a(227),ve=function(e){return e.app.isInitialized},ye=function(e){return e.app.status},ke=function(e){return e.app.error},je=r.a.forwardRef((function(e,t){return r.a.createElement(ge.a,Object.assign({elevation:6,ref:t,variant:"filled"},e))})),we=function(){var e=Object(s.c)(ke),t=fe(g).setAppError,a=function(e,a){"clickaway"!==a&&t({error:null})};return r.a.createElement(Ee.a,{open:null!==e,autoHideDuration:6e3,onClose:a},r.a.createElement(je,{onClose:a,severity:"error",sx:{width:"100%"}},e))},Ie=a(238),Oe=a(222),Ce=a(239),xe=a(232),Te=a(240),Se=a(237),Me=function(e){return e.auth.isLoggedIn},Le=function(e){return e.auth.captcha},Ae=function(){var e=Object(s.c)(ye),t=Object(s.c)(Me),a=fe(oe).logout;return r.a.createElement(Se.a,{position:"static"},r.a.createElement(Ie.a,null,r.a.createElement(se.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(Oe.a,null)),r.a.createElement(Ce.a,{variant:"h6"},"News"),!t&&r.a.createElement(xe.a,{color:"inherit"},"Login"),t&&r.a.createElement(xe.a,{color:"inherit",onClick:function(){return a({})}},"Logout")),"loading"===e&&r.a.createElement(Te.a,null))},Pe=a(14),We=Object(n.memo)((function(e){var t=e.todolist,a=fe(G).changeTodolistFilter,n=function(e){a({todolistId:t.id,filter:e})};return r.a.createElement("div",null,r.a.createElement(xe.a,{variant:"all"===t.filter?"outlined":"text",onClick:function(){return n("all")},color:"inherit"},"All"),r.a.createElement(xe.a,{variant:"active"===t.filter?"outlined":"text",onClick:function(){return n("active")},color:"primary"},"Active"),r.a.createElement(xe.a,{variant:"completed"===t.filter?"outlined":"text",onClick:function(){return n("completed")},color:"secondary"},"Completed"))})),ze=a(224),Ge=a(228),Ve=a(117),He=a.n(Ve),De=Object(n.memo)((function(e){var t=e.task,a=e.todolistId,n=fe(q),o=n.removeTask,i=n.updateTask;return r.a.createElement("div",{key:t.id,className:t.status===l.Completed?He.a.isDone:""},r.a.createElement(Ge.a,{checked:t.status===l.Completed,color:"primary",onChange:function(e){var n=e.currentTarget.checked?l.Completed:l.New;i({todolistId:a,taskId:t.id,domainModel:{status:n}})},disabled:"loading"===t.entityStatus}),r.a.createElement(be,{title:t.title,changeTitle:function(e){i({todolistId:a,taskId:t.id,domainModel:{title:e}})},disabled:"loading"===t.entityStatus}),r.a.createElement(se.a,{onClick:function(){return o({taskId:t.id,todolistId:a})},disabled:"loading"===t.entityStatus},r.a.createElement(ze.a,null)))})),Fe=Object(n.memo)((function(e){var t=e.tasks,a=e.todolist,n=t;return"active"===a.filter&&(n=t.filter((function(e){return e.status===l.New}))),"completed"===a.filter&&(n=t.filter((function(e){return e.status===l.Completed}))),r.a.createElement(r.a.Fragment,null,n.map((function(e){return r.a.createElement(De,{task:e,todolistId:a.id,key:e.id})})))})),Be=Object(n.memo)((function(e){var t=e.todolist,a=fe(z),n=a.removeTodolist,o=a.changeTodolistTitle;return r.a.createElement("h3",null,r.a.createElement(be,{title:t.title,changeTitle:function(e){o({todolistId:t.id,title:e})},disabled:"loading"===t.entityStatus}),r.a.createElement(se.a,{onClick:function(){n(t.id)},disabled:"loading"===t.entityStatus},r.a.createElement(ze.a,null)))})),Ne=Object(n.memo)((function(e){var t=e.todolist,a=e.tasks,o=fe(q),i=o.fetchTasks,l=o.addTask;Object(n.useEffect)((function(){i(t.id)}),[]);return r.a.createElement("div",null,r.a.createElement(Be,{todolist:t}),r.a.createElement(he,{addItem:function(e){return l({todolistId:t.id,title:e}).unwrap()},disabled:"loading"===t.entityStatus}),r.a.createElement(Fe,{todolist:t,tasks:a}),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(We,{todolist:t})))})),Re=a(233),Ke=a(235),Ue=function(e){return e.tasks},_e=function(e){return e.todolists},qe=function(){var e=Object(s.c)(_e),t=Object(s.c)(Ue),a=Object(s.c)(Me),o=fe(z),i=o.fetchTodolists,l=o.addTodolist;Object(n.useEffect)((function(){a&&i({})}),[]);return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(Re.a,{container:!0,style:{padding:"20px"}},r.a.createElement(he,{addItem:function(e){return l(e).unwrap()}})),r.a.createElement(Re.a,{container:!0,spacing:3},e.map((function(e){var a=t[e.id];return r.a.createElement(Re.a,{item:!0,key:e.id},r.a.createElement(Ke.a,{style:{padding:"10px"}},r.a.createElement(Ne,{todolist:e,tasks:a})))})))):r.a.createElement(Pe.a,{to:"/login"})},Ze=a(230),Je=a(242),$e=a(241),Qe=a(219),Ye=function(){var e=function(){var e=fe(oe).login;return{formik:Object(pe.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email is required",e.password?e.password.length<4&&(t.password="Must be 4 characters or more"):t.password="Required",t},onSubmit:function(t,a){e(t).unwrap().catch((function(e){e.fieldsErrors&&e.fieldsErrors.forEach((function(e){a.setFieldError(e.field,e.error)}))}))}})}}().formik,t=Object(s.c)(Me),a=Object(s.c)(Le);return t?r.a.createElement(Pe.a,{to:"/"}):r.a.createElement(Re.a,{container:!0,justifyContent:"center"},r.a.createElement(Re.a,{item:!0,justifyContent:"center"},r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(Ze.a,null,r.a.createElement(Qe.a,null,r.a.createElement("p",null,"To log in get registered",r.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank",rel:"noreferrer"}," here")),r.a.createElement("p",null,"or use common test account credentials:"),r.a.createElement("p",null,"Email: free@samuraijs.com"),r.a.createElement("p",null,"Password: free")),r.a.createElement($e.a,null,r.a.createElement(ce.a,Object.assign({label:"Email",margin:"normal"},e.getFieldProps("email"),{onBlur:e.handleBlur})),e.touched.email&&e.errors.email?r.a.createElement("div",{style:{color:"red"}},e.errors.email):null,r.a.createElement(ce.a,Object.assign({type:"password",label:"Password",margin:"normal"},e.getFieldProps("password"),{onBlur:e.handleBlur})),e.touched.password&&e.errors.password?r.a.createElement("div",{style:{color:"red"}},e.errors.password):null,r.a.createElement(Je.a,{label:"Remember me",control:r.a.createElement(Ge.a,{onChange:e.handleChange,checked:e.values.rememberMe,name:"rememberMe"})}),null!==a&&r.a.createElement("img",{src:a,alt:""}),null!==a&&r.a.createElement(ce.a,Object.assign({type:"captcha",label:"Captcha",margin:"normal"},e.getFieldProps("captcha"),{onBlur:e.handleBlur})),r.a.createElement(xe.a,{type:"submit",variant:"contained",disabled:!(e.isValid&&e.dirty),color:"primary"},"Login"))))))},Xe=a(234),et=function(){return r.a.createElement(Xe.a,{fixed:!0},r.a.createElement(Pe.d,null,r.a.createElement(Pe.b,{path:"/",element:r.a.createElement(qe,null)}),r.a.createElement(Pe.b,{path:"/todolist",element:r.a.createElement(qe,null)}),r.a.createElement(Pe.b,{path:"/login",element:r.a.createElement(Ye,null)}),r.a.createElement(Pe.b,{path:"/404",element:r.a.createElement("h1",null,"404: PAGE NOT FOUND")}),r.a.createElement(Pe.b,{path:"*",element:r.a.createElement(Pe.a,{to:"/404"})})))},tt=a(243),at=function(){var e=Object(s.c)(ve),t=fe(oe).initializeApp;return Object(n.useEffect)((function(){t({})}),[]),e?r.a.createElement("div",{className:"App"},r.a.createElement(we,null),r.a.createElement(Ae,null),r.a.createElement(et,null)):r.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},r.a.createElement(tt.a,null))},nt=a(59);i.a.render(r.a.createElement(nt.a,null,r.a.createElement(s.a,{store:le},r.a.createElement(at,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.282f7c05.chunk.js.map