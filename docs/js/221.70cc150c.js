"use strict";(self["webpackChunkvue_projectver2"]=self["webpackChunkvue_projectver2"]||[]).push([[221,136,599,47],{4702:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var l=a(3396),n=a(7139);const i={class:"el-header"};function o(e,t,a,o,d,r){const u=(0,l.up)("el-button"),s=(0,l.up)("el-dialog");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",null,[(0,l.Wm)(u,{type:"primary",onClick:r.openDialog},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.title),1)])),_:1},8,["onClick"])]),(0,l.Wm)(s,{modelValue:d.dialogVisible,"onUpdate:modelValue":t[1]||(t[1]=e=>d.dialogVisible=e),"append-to-body":"","show-close":!1},{header:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l._)("h2",null,(0,n.zw)(a.title),1),(0,l.Wm)(u,{onClick:r.closeDialog},{default:(0,l.w5)((()=>[(0,l.Uk)("닫기")])),_:1},8,["onClick"])])])),default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default",{onSaveForm:t[0]||(t[0]=(...e)=>r.saveForm&&r.saveForm(...e))})])),_:3},8,["modelValue"])])}var d={name:"dialogSlot",data(){return{dialogVisible:!1}},props:{title:{type:String,default:""}},methods:{openDialog(){this.dialogVisible=!0},closeDialog(){this.dialogVisible=!1},saveForm(e){this.$emit("saveForm",e),this.closeDialog()}}},r=a(89);const u=(0,r.Z)(d,[["render",o]]);var s=u},5047:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=a(3396);function n(e,t,a,n,i,o){const d=(0,l.up)("el-table-column"),r=(0,l.up)("showProject"),u=(0,l.up)("dialogSlot"),s=(0,l.up)("el-button"),c=(0,l.up)("el-table");return(0,l.wg)(),(0,l.j4)(c,{data:i.tableData},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{type:"index"}),(0,l.Wm)(d,{prop:"title",label:"제목"},{default:(0,l.w5)((e=>[(0,l.Wm)(u,{title:e.row.title},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{projectIndex:e.row.referenceIndex,isSaved:!0},null,8,["projectIndex"])])),_:2},1032,["title"])])),_:1}),(0,l.Wm)(d,{prop:"member",label:"참가자","show-overflow-tooltip":""}),(0,l.Wm)(d,{prop:"start_date",label:"시작일"}),(0,l.Wm)(d,{prop:"end_date",label:"종료일"}),(0,l.Wm)(d,{prop:"status",label:"상태"}),a.rejected?((0,l.wg)(),(0,l.j4)(d,{key:0,label:"작업"},{default:(0,l.w5)((e=>[(0,l.Wm)(s,{type:"primary",onClick:t=>o.edit(e.row.referenceIndex)},{default:(0,l.w5)((()=>[(0,l.Uk)("수정")])),_:2},1032,["onClick"]),(0,l.Wm)(s,{type:"danger",onClick:t=>o.deleteProject(e.row.referenceIndex)},{default:(0,l.w5)((()=>[(0,l.Uk)("삭제")])),_:2},1032,["onClick"])])),_:1})):(0,l.kq)("",!0)])),_:1},8,["data"])}a(560);var i=a(167),o=a(7400),d=a(4702),r=a(5837),u=a(6e3),s=a(7178),c={name:"PlanTable",emits:["edit"],data(){return{tableData:[]}},components:{dialogSlot:d["default"],showProject:r["default"]},props:{parentStatus:{type:String,default:"대기"},rejected:{type:Boolean,default:!1}},computed:{projectData(){return o.I.callProjectList(this.parentStatus)}},methods:{memberData(e){const t=[];return e.forEach((e=>{let a=i.N.findMemberByIndex(e);t.push(a.name)})),t.join(", ")},tableInit(){this.projectData.forEach((e=>{this.tableData.push({title:e.title,member:this.memberData(e.member),start_date:e.start_date,end_date:e.end_date,status:e.status,referenceIndex:e.index})}))},edit(e){this.$emit("edit",e)},deleteProject(e){u.T.confirm("정말 삭제하시겠습니까?","경고",{confirmButtonText:"삭제",cancelButtonText:"취소",type:"warning"}).then((()=>{o.I.deleteProject(e),this.$forceUpdate(),s.z8.info("삭제되었습니다")})).catch((()=>{}))}},mounted(){this.tableInit()},watch:{projectData:{deep:!0,handler(){this.tableData=[],this.tableInit()}}}},p=a(89);const m=(0,p.Z)(c,[["render",n]]);var h=m},7157:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var l=a(3396);const n={class:"rightSideButtons"},i={key:1};function o(e,t,a,o,d,r){const u=(0,l.up)("el-button"),s=(0,l.up)("PlanTable"),c=(0,l.up)("el-tab-pane"),p=(0,l.up)("el-tabs"),m=(0,l.up)("CreatePlan");return(0,l.wg)(),(0,l.iD)("div",null,[0===d.active?((0,l.wg)(),(0,l.j4)(p,{key:0,type:"border-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{label:"대기중인 프로젝트"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l._)("div",n,[(0,l.Wm)(u,{type:"primary",onClick:r.changeView},{default:(0,l.w5)((()=>[(0,l.Uk)("생성")])),_:1},8,["onClick"])]),(0,l.Wm)(s)])])),_:1}),(0,l.Wm)(c,{label:"진행중인 프로젝트"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{parentStatus:"진행"})])),_:1}),(0,l.Wm)(c,{label:"반려된 프로젝트"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{parentStatus:"반려",rejected:!0,onEdit:r.openEdit},null,8,["onEdit"])])),_:1}),(0,l.Wm)(c,{label:"완료된 프로젝트"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{parentStatus:"완료"})])),_:1})])),_:1})):(0,l.kq)("",!0),1===d.active?((0,l.wg)(),(0,l.iD)("div",i,[null===d.editIndex?((0,l.wg)(),(0,l.j4)(m,{key:0,onCallFinish:r.callFinish},null,8,["onCallFinish"])):(0,l.kq)("",!0),null!==d.editIndex?((0,l.wg)(),(0,l.j4)(m,{key:1,onCallFinish:r.callFinish,Edit:!0,parentIndex:d.editIndex,onCancelEdit:r.cancelEdit},null,8,["onCallFinish","parentIndex","onCancelEdit"])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)])}var d=a(6674),r=a(5047),u={name:"ProjectPlan",emits:["callFinish"],components:{CreatePlan:d["default"],PlanTable:r["default"]},data(){return{active:0,editIndex:null}},methods:{callFinish(e){this.$emit("callFinish",e),this.editIndex=null},changeView(){this.active=1},openEdit(e){this.editIndex=e,this.active=1},cancelEdit(){this.editIndex=null,this.active=0}}},s=a(89);const c=(0,s.Z)(u,[["render",o]]);var p=c}}]);
//# sourceMappingURL=221.70cc150c.js.map