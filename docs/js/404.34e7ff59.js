"use strict";(self["webpackChunkvue_projectver2"]=self["webpackChunkvue_projectver2"]||[]).push([[404,136,474,455],{4702:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(3396),l=a(7139);const o={class:"el-header"};function n(e,t,a,n,s,u){const i=(0,r.up)("el-button"),d=(0,r.up)("el-dialog");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",null,[(0,r.Wm)(i,{type:"primary",onClick:u.openDialog},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(a.title),1)])),_:1},8,["onClick"])]),(0,r.Wm)(d,{modelValue:s.dialogVisible,"onUpdate:modelValue":t[1]||(t[1]=e=>s.dialogVisible=e),"append-to-body":"","show-close":!1},{header:(0,r.w5)((()=>[(0,r._)("div",o,[(0,r._)("h2",null,(0,l.zw)(a.title),1),(0,r.Wm)(i,{onClick:u.closeDialog},{default:(0,r.w5)((()=>[(0,r.Uk)("닫기")])),_:1},8,["onClick"])])])),default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default",{onSaveForm:t[0]||(t[0]=(...e)=>u.saveForm&&u.saveForm(...e))})])),_:3},8,["modelValue"])])}var s={name:"dialogSlot",data(){return{dialogVisible:!1}},props:{title:{type:String,default:""}},methods:{openDialog(){this.dialogVisible=!0},closeDialog(){this.dialogVisible=!1},saveForm(e){this.$emit("saveForm",e),this.closeDialog()}}},u=a(89);const i=(0,u.Z)(s,[["render",n]]);var d=i},474:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var r=a(3396),l=a(7139);function o(e,t,a,o,n,s){const u=(0,r.up)("el-descriptions-item"),i=(0,r.up)("el-descriptions");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i,{column:1,border:""},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.description,(e=>((0,r.wg)(),(0,r.j4)(u,{label:e.label,key:e.key},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.value),1)])),_:2},1032,["label"])))),128))])),_:1})])}a(560);var n={name:"generalDescription",props:{parentData:{type:Object,required:!0},parentLabel:{type:Object,required:!0}},data(){return{desc:[]}},computed:{description(){const e=[],t=Object.entries(this.parentLabel);return t.forEach((t=>{e.push({label:t[1],key:t,value:this.parentData[t[0]]})})),e}}},s=a(89);const u=(0,s.Z)(n,[["render",o]]);var i=u},8455:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=a(3396);function l(e,t,a,l,o,n){const s=(0,r.up)("el-input"),u=(0,r.up)("el-date-picker"),i=(0,r.up)("el-form-item"),d=(0,r.up)("el-form"),p=(0,r.up)("el-button");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(d,{model:o.form},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.columns,(e=>((0,r.wg)(),(0,r.j4)(i,{label:e,key:e},{default:(0,r.w5)((()=>["기한"!==e?((0,r.wg)(),(0,r.j4)(s,{key:0,modelValue:o.form[e],"onUpdate:modelValue":t=>o.form[e]=t},null,8,["modelValue","onUpdate:modelValue"])):((0,r.wg)(),(0,r.j4)(u,{key:1,type:"daterange",placeholder:"기한을 입력하세요",modelValue:o.form[e],"onUpdate:modelValue":t=>o.form[e]=t,"range-seperator":"~","start-placeholder":"시작일","end-placeholder":"종료일","value-format":"YYYY-MM-DD",format:"YYYY/MM/DD"},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["label"])))),128))])),_:1},8,["model"]),(0,r.Wm)(p,{type:"primary",onClick:n.saveForm},{default:(0,r.w5)((()=>[(0,r.Uk)("저장")])),_:1},8,["onClick"])],64)}var o={name:"generalForm",data(){return{form:[]}},emits:["saveForm"],props:{columns:{type:Array,default:()=>[],required:!0},parentData:{type:Object,default:()=>{}}},computed:{formData(){const e={};return this.columns.forEach((t=>{e[t]=""})),e}},methods:{saveForm(){this.$emit("saveForm",this.form)},debug(){console.log(this.form),console.log(this.formData),console.log(this.columns)}},mounted(){this.form=this.formData,this.parentData&&(this.form=this.parentData)}},n=a(89);const s=(0,n.Z)(o,[["render",l]]);var u=s},4546:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(3396);function l(e,t,a,l,o,n){const s=(0,r.up)("el-table-column"),u=(0,r.up)("el-table"),i=(0,r.up)("generalForm");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u,{data:o.tableData,border:""},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{prop:"type",label:"분야"}),(0,r.Wm)(s,{prop:"detail",label:"업무"}),(0,r.Wm)(s,{prop:"deadline",label:"마감일"}),(0,r.Wm)(s,{prop:"status",label:"상태"})])),_:1},8,["data"]),(0,r.Wm)(i,{columns:o.col,onSaveForm:n.saveProgress},null,8,["columns","onSaveForm"])])}a(560);var o=a(8455),n=a(2760),s={name:"CreateProgress",components:{generalForm:o["default"]},props:{parentWork:{type:Number,required:!0}},data(){return{col:["작업내용","비고"],tableData:[]}},computed:{workData(){return n.m.getWorkByIndex(this.parentWork)}},methods:{tableInit(){this.tableData.push(this.workData)},saveProgress(e){const t=[];t.push({desc:e.작업내용,etc:e.비고,index:this.parentWork}),this.$emit("saveForm",t)}},mounted(){this.tableInit()}},u=a(89);const i=(0,u.Z)(s,[["render",l]]);var d=i},5404:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var r=a(3396);const l=(0,r._)("h2",null,"업무",-1);function o(e,t,a,o,n,s){const u=(0,r.up)("el-divider"),i=(0,r.up)("el-table-column"),d=(0,r.up)("CreateProgress"),p=(0,r.up)("generalDescription"),m=(0,r.up)("dialogSlot"),c=(0,r.up)("el-table"),f=(0,r.up)("showProject");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(c,{data:n.tableData,border:""},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{type:"expand"},{default:(0,r.w5)((e=>[(0,r.Wm)(u,{"content-position":"left"},{default:(0,r.w5)((()=>[l])),_:1}),(0,r.Wm)(c,{data:e.row.Work,border:""},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{prop:"type",label:"분야"}),(0,r.Wm)(i,{prop:"detail",label:"업무"}),(0,r.Wm)(i,{prop:"deadline",label:"마감일"}),(0,r.Wm)(i,{prop:"status",label:"상태"}),(0,r.Wm)(i,null,{default:(0,r.w5)((e=>[(0,r.Wm)(m,{title:s.dialogTitle(e.row.status),ref:"dialog"},{default:(0,r.w5)((()=>["진행"===e.row.status?((0,r.wg)(),(0,r.j4)(d,{key:0,parentWork:e.row.index,onSaveForm:s.finishProgress},null,8,["parentWork","onSaveForm"])):((0,r.wg)(),(0,r.j4)(p,{key:1,parentLabel:n.descCol,parentData:s.detailData(e.row.index)},null,8,["parentLabel","parentData"]))])),_:2},1032,["title"])])),_:1})])),_:2},1032,["data"])])),_:1}),(0,r.Wm)(i,{label:"제목"},{default:(0,r.w5)((e=>[(0,r.Wm)(m,{title:e.row.title},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{projectIndex:e.row.referenceIndex,isSaved:!0},null,8,["projectIndex"])])),_:2},1032,["title"])])),_:1}),(0,r.Wm)(i,{prop:"start_date",label:"시작일"}),(0,r.Wm)(i,{prop:"end_date",label:"종료일"}),(0,r.Wm)(i,{prop:"status",label:"상태"})])),_:1},8,["data"])])}a(560);var n=a(2760),s=a(7400),u=a(5837),i=a(4702),d=a(4546),p=a(474),m=a(6780),c={name:"onGoingTable",components:{showProject:u["default"],dialogSlot:i["default"],CreateProgress:d["default"],generalDescription:p["default"]},props:{CurrentMember:{type:Number,required:!0}},data(){return{tableData:[],descCol:{desc:"작업내용",etc:"비고"}}},computed:{ProjectData(){return s.I.getProjectByMember(this.CurrentMember)},WorkData(){const e=[];return 0===this.ProjectData.length||this.ProjectData.forEach((t=>{e.push(n.m.getWorkByProjectAndMember(t,this.CurrentMember))})),e}},methods:{tableInit(){try{this.ProjectData.forEach(((e,t)=>{this.tableData.push({title:e.title,start_date:e.start_date,end_date:e.end_date,status:e.status,referenceIndex:e.index,Work:[this.WorkData[t]]||0})}))}catch(e){console.log(e)}},finishProgress(e){this.$refs.dialog.closeDialog(),this.$emit("finishProgress",e)},dialogTitle(e){switch(e){case"결재요청":return"상세";case"진행":return"업무 보고";case"완료":return"상세";default:return"상세"}},detailData(e){let t=n.m.getWorkByIndex(e);void 0===t.desc&&(t=m._.getApprovalByParentIdx(e)[0]);const a={desc:t.desc,etc:t.etc};return a}},mounted(){this.tableInit()}},f=a(89);const h=(0,f.Z)(c,[["render",o]]);var b=h}}]);
//# sourceMappingURL=404.34e7ff59.js.map