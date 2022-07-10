(function(){"use strict";var t={9640:function(t,a,e){var s=e(9242),n=e(3396);const o=(0,n._)("h1",{class:"my-4"},"Канбан доска",-1),r=(0,n.Uk)("Создать пост");function i(t,a,e,s,i,u){const d=(0,n.up)("btn"),l=(0,n.up)("task-form"),c=(0,n.up)("modal-dialog"),p=(0,n.up)("KanbanList"),k=(0,n.up)("b-container");return(0,n.wg)(),(0,n.j4)(k,{fluid:"xxl"},{default:(0,n.w5)((()=>[o,(0,n.Wm)(d,{onClick:u.showDialog},{default:(0,n.w5)((()=>[r])),_:1},8,["onClick"]),(0,n.Wm)(c,{show:i.dialogVisible,"onUpdate:show":a[0]||(a[0]=t=>i.dialogVisible=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{onHideDialog:u.hideDialog},null,8,["onHideDialog"])])),_:1},8,["show"]),t.isTasksLoading?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(p,{key:0,tasks:t.tasks,tasksStatuses:t.tasksStatuses},null,8,["tasks","tasksStatuses"]))])),_:1})}function u(t,a,e,o,r,i){const u=(0,n.up)("kanban-status-column"),d=(0,n.up)("b-row");return(0,n.wg)(),(0,n.j4)(d,{class:"kanban-list"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.tasksStatuses,(t=>((0,n.wg)(),(0,n.j4)(u,{status:t,key:t.id,tasks:e.tasks.filter((a=>a.status===t.value)),onDragover:a[0]||(a[0]=(0,s.iM)((()=>{}),["prevent"])),onDragenter:a[1]||(a[1]=(0,s.iM)((()=>{}),["prevent"]))},null,8,["status","tasks"])))),128))])),_:1})}var d=e(7139);function l(t,a,e,o,r,i){const u=(0,n.up)("task-card"),l=(0,n.up)("b-col");return(0,n.wg)(),(0,n.j4)(l,{class:"mb-3"},{default:(0,n.w5)((()=>[(0,n._)("h4",{class:(0,d.C_)("title_"+e.status.value+" m-0 py-2")},(0,d.zw)(e.status.name),3),(0,n._)("div",{class:"status-column px-3",onDrop:a[2]||(a[2]=t=>i.dropTask(t,e.status.value))},[(0,n.Wm)(s.W3,{name:"task-list"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.tasks,(t=>((0,n.wg)(),(0,n.j4)(u,{task:t,key:t.id,draggable:"true",onDragover:a[0]||(a[0]=(0,s.iM)((()=>{}),["prevent"])),onDragenter:a[1]||(a[1]=(0,s.iM)((()=>{}),["prevent"])),onDragstart:a=>i.dragTask(a,t)},null,8,["task","onDragstart"])))),128))])),_:1})],32)])),_:1})}const c={class:"task-card"},p={class:"task-title m-0 text-start"},k={class:"task-body"},m=(0,n.Uk)("Удалить");function f(t,a,e,s,o,r){const i=(0,n.up)("btn");return(0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("h5",p,(0,d.zw)(e.task.id)+" : "+(0,d.zw)(e.task.title),1),(0,n._)("div",k,(0,d.zw)(e.task.body),1),(0,n.Wm)(i,{onClick:a[0]||(a[0]=t=>this.removeTask(e.task))},{default:(0,n.w5)((()=>[m])),_:1})])}const v={class:"button"};function g(t,a,e,s,o,r){return(0,n.wg)(),(0,n.iD)("button",v,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])}var h={name:"btn"},b=e(89);const T=(0,b.Z)(h,[["render",g],["__scopeId","data-v-10ac571c"]]);var w=T,y=e(65),_={name:"TaskCard",components:{Btn:w},props:{task:{type:Object,required:!0}},methods:{...(0,y.nv)({removeStoreTask:"kanban/removeTask",deleteTask:"kanban/deleteTask"}),removeTask(t){this.removeStoreTask(t),this.deleteTask(t)}}};const S=(0,b.Z)(_,[["render",f],["__scopeId","data-v-0757ba4e"]]);var D=S,I={name:"KanbanStatusColumn",components:{TaskCard:D},props:{tasks:{type:Array,required:!0},status:{type:Object,required:!0}},methods:{...(0,y.nv)({dropTaskStore:"kanban/dropTask"}),dragTask(t,a){t.dataTransfer.dropEffect="move",t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("taskId",a.id)},dropTask(t,a){const e=t.dataTransfer.getData("taskId"),s={status:a,id:e};this.dropTaskStore(s)}}};const x=(0,b.Z)(I,[["render",l],["__scopeId","data-v-11e53605"]]);var j=x,O={name:"KanbanList",props:{tasks:{type:Object,required:!0},tasksStatuses:{type:Array,required:!0}},components:{KanbanStatusColumn:j}};const V=(0,b.Z)(O,[["render",u],["__scopeId","data-v-3a31b230"]]);var C=V;const L=t=>((0,n.dD)("data-v-65819d8f"),t=t(),(0,n.Cn)(),t),M=L((()=>(0,n._)("h4",null,"Создание поста",-1))),W=(0,n.Uk)("Создать");function Z(t,a,e,o,r,i){const u=(0,n.up)("custom-input"),d=(0,n.up)("custom-textarea"),l=(0,n.up)("btn");return(0,n.wg)(),(0,n.iD)("form",{class:"form",onSubmit:a[2]||(a[2]=(0,s.iM)((()=>{}),["prevent"]))},[M,(0,n.Wm)(u,{modelValue:r.task.title,"onUpdate:modelValue":a[0]||(a[0]=t=>r.task.title=t),type:"text",class:"mb-3",placeholder:"Название"},null,8,["modelValue"]),(0,n.Wm)(d,{modelValue:r.task.body,"onUpdate:modelValue":a[1]||(a[1]=t=>r.task.body=t),placeholder:"Описание"},null,8,["modelValue"]),(0,n.Wm)(l,{onClick:i.createTask,style:{"align-self":"center","margin-top":"15px"}},{default:(0,n.w5)((()=>[W])),_:1},8,["onClick"])],32)}const q=["value"];function K(t,a,e,s,o,r){return(0,n.wg)(),(0,n.iD)("textarea",{type:"text",class:"textarea",value:e.modelValue,onInput:a[0]||(a[0]=(...t)=>r.updateTextarea&&r.updateTextarea(...t))},null,40,q)}var P={name:"custom-textarea",props:{modelValue:[String,Number]},methods:{updateTextarea(t){this.$emit("update:modelValue",t.target.value)}}};const U=(0,b.Z)(P,[["render",K],["__scopeId","data-v-98b81760"]]);var $=U,z={components:{CustomTextarea:$},data(){return{task:{userId:2,title:"",body:"",status:"new"}}},methods:{...(0,y.nv)({createTaskStore:"kanban/createTask"}),createTask(){this.task.id=Date.now(),this.createTaskStore(this.task),this.title="",this.body="",this.task={title:"",body:""},this.$emit("hideDialog")}}};const A=(0,b.Z)(z,[["render",Z],["__scopeId","data-v-65819d8f"]]);var H=A,E={name:"App",components:{KanbanList:C,TaskForm:H},data(){return{dialogVisible:!1}},methods:{...(0,y.OI)({setTasks:"kanban/setTasks"}),...(0,y.nv)({fetchTasks:"kanban/fetchTasks"}),showDialog(){this.dialogVisible=!0},hideDialog(){this.dialogVisible=!1}},mounted(){this.fetchTasks()},computed:{...(0,y.rn)({tasksStatuses:t=>t.kanban.tasksStatuses,tasks:t=>t.kanban.tasks,isTasksLoading:t=>t.kanban.isTasksLoading})}};const B=(0,b.Z)(E,[["render",i]]);var F=B,N=e(6265),Y=e.n(N);const G={state:()=>({tasksStatuses:[{id:1,name:"Очередь",value:"new"},{id:2,name:"В работе",value:"in_progress"},{id:3,name:"На проверке",value:"review"},{id:4,name:"Выполнено",value:"complete"}],tasks:[],isTasksLoading:!1,limit:10}),getters:{},mutations:{setTasks(t,a){t.tasks=a},setLoading(t,a){t.isTasksLoading=a}},actions:{async fetchTasks({state:t,commit:a,dispatch:e}){try{a("setLoading",!0);const s=await Y().get("https://jsonplaceholder.typicode.com/posts",{params:{_limit:t.limit}});a("setTasks",s.data),e("randomStatuses")}catch(s){console.log(s)}finally{a("setLoading",!1)}},async deleteTask({state:t,commit:a},e){try{await Y()["delete"]("https://jsonplaceholder.typicode.com/posts/"+e)}catch(s){console.log(s)}},async updateTask({state:t,commit:a},e){try{a("setLoading",!0);await Y().put("https://jsonplaceholder.typicode.com/posts/"+e.id,{data:{id:e.id,title:e.title,body:e.body,userId:e.userId}})}catch(s){console.log(s)}},createTask({state:t,commit:a},e){a("setTasks",[...t.tasks,e])},removeTask({state:t,commit:a},e){a("setTasks",t.tasks.filter((t=>t.id!==e.id)))},randomStatuses({state:t,commit:a}){for(let e in t.tasks){let a=Math.floor(Math.random()*t.tasksStatuses.length);Object.assign(t.tasks[e],{status:t.tasksStatuses[a].value})}a("setTasks",t.tasks)},dropTask({state:t,commit:a},e){const s=t.tasks.findIndex((t=>t.id===parseInt(e.id))),n=t.tasksStatuses.findIndex((t=>t.value===e.status)),o=t.tasksStatuses.findIndex((a=>a.value===t.tasks[s].status));n===o+1&&(t.tasks[s].status=e.status)}},namespaced:!0};var J=(0,y.MT)({state:{},getters:{},mutations:{},actions:{},modules:{kanban:G}}),Q=e(2483);const R=[{path:"/",component:F}],X=(0,Q.p7)({routes:R,history:(0,Q.PO)("")});var tt=X;const at=["value"];function et(t,a,e,s,o,r){return(0,n.wg)(),(0,n.iD)("input",{type:"text",class:"input",value:e.modelValue,onInput:a[0]||(a[0]=(...t)=>r.updateInput&&r.updateInput(...t))},null,40,at)}var st={name:"custom-input",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const nt=(0,b.Z)(st,[["render",et],["__scopeId","data-v-06b9a058"]]);var ot=nt;function rt(t,a,e,o,r,i){return(0,n.wg)(),(0,n.j4)(s.uT,{name:"dialog"},{default:(0,n.w5)((()=>[e.show?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"dialog",onClick:a[1]||(a[1]=(...t)=>i.hideDialog&&i.hideDialog(...t))},[(0,n._)("div",{class:"dialog__content",onClick:a[0]||(a[0]=(0,s.iM)((()=>{}),["stop"]))},[(0,n.WI)(t.$slots,"default",{},void 0,!0)])])):(0,n.kq)("",!0)])),_:3})}var it={name:"modal-dialog",props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}};const ut=(0,b.Z)(it,[["render",rt],["__scopeId","data-v-be135670"]]);var dt=ut,lt=[w,dt,ot],ct=e(936);const pt=(0,s.ri)(F);pt.use(tt).use(J).use(ct.ZP),lt.forEach((t=>{pt.component(t.name,t)})),pt.mount("#app")}},a={};function e(s){var n=a[s];if(void 0!==n)return n.exports;var o=a[s]={exports:{}};return t[s].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(a,s,n,o){if(!s){var r=1/0;for(l=0;l<t.length;l++){s=t[l][0],n=t[l][1],o=t[l][2];for(var i=!0,u=0;u<s.length;u++)(!1&o||r>=o)&&Object.keys(e.O).every((function(t){return e.O[t](s[u])}))?s.splice(u--,1):(i=!1,o<r&&(r=o));if(i){t.splice(l--,1);var d=n();void 0!==d&&(a=d)}}return a}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[s,n,o]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var s in a)e.o(a,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,s){var n,o,r=s[0],i=s[1],u=s[2],d=0;if(r.some((function(a){return 0!==t[a]}))){for(n in i)e.o(i,n)&&(e.m[n]=i[n]);if(u)var l=u(e)}for(a&&a(s);d<r.length;d++)o=r[d],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(l)},s=self["webpackChunkcanban_vue"]=self["webpackChunkcanban_vue"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(9640)}));s=e.O(s)})();
//# sourceMappingURL=app.b03e156c.js.map