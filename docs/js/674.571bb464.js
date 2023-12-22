"use strict";(self["webpackChunkvue_projectver2"]=self["webpackChunkvue_projectver2"]||[]).push([[674,474,455,85,283],{2973:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(3396);const l={class:"CenterButtons"};function n(e,t,a,n,i,o){const s=(0,r.up)("el-table-column"),d=(0,r.up)("el-option"),p=(0,r.up)("el-select"),m=(0,r.up)("el-table"),u=(0,r.up)("el-button");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(m,{data:i.tableData},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{prop:"name",label:"이름"}),(0,r.Wm)(s,{prop:"department",label:"분야"}),(0,r.Wm)(s,{label:"업무"},{default:(0,r.w5)((e=>[(0,r.Wm)(p,{modelValue:e.row.detail,"onUpdate:modelValue":t=>e.row.detail=t},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.getDetailWork(e.row.department),(t=>((0,r.wg)(),(0,r.j4)(d,{key:t.value,label:t.label,value:t.value,modelValue:e.row.detail,"onUpdate:modelValue":t=>e.row.detail=t},null,8,["label","value","modelValue","onUpdate:modelValue"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"]),(0,r._)("div",l,[(0,r.Wm)(u,{type:"primary",onClick:o.saveEmit},{default:(0,r.w5)((()=>[(0,r.Uk)("저장")])),_:1},8,["onClick"]),(0,r.Wm)(u,{onClick:o.clear},{default:(0,r.w5)((()=>[(0,r.Uk)("취소")])),_:1},8,["onClick"])])],64)}a(560);var i=a(2760),o=a(167),s={name:"AllocateWork",emits:["saveWork"],data(){return{tableData:[]}},props:{member:{type:Array,default:()=>[]},parentData:{type:Array,default:()=>[]}},computed:{memberData(){const e=[];return this.member.forEach((t=>{e.push(o.N.findMemberByIndex(t))})),e},checkFull(){return this.tableData.every((e=>""!==e.detail))}},methods:{getDetailWork(e){return i.m.callDetailedWorkByParent(e)},dataInit(){this.memberData.forEach(((e,t)=>{this.tableData.push({name:e.name,department:e.department,detail:this.parentData?i.m.deIndexifyDetailWithMember(e,this.parentData[t]):""})}))},saveEmit(){if(this.checkFull){let e=[];this.tableData.forEach((t=>{e.push(i.m.indexifyDetail(t))})),this.$emit("saveWork",e)}else this.$message({message:"업무를 모두 배정해주세요",type:"warning"})},clear(){this.tableData=[],this.dataInit()}},mounted(){this.dataInit()}},d=a(89);const p=(0,d.Z)(s,[["render",n]]);var m=p},1533:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var r=a(3396);const l=e=>((0,r.dD)("data-v-731b365b"),e=e(),(0,r.Cn)(),e),n={class:"borderBox"},i={class:"rightSideButtons"},o={class:"rightSideButtons"},s=l((()=>(0,r._)("div",{class:"clearfix"},[(0,r._)("span",null,"조직도")],-1))),d=l((()=>(0,r._)("div",{class:"clearfix"},[(0,r._)("span",null,"결재라인")],-1))),p={class:"CenterButtons"};function m(e,t,a,l,m,u){const c=(0,r.up)("el-option"),h=(0,r.up)("el-select"),f=(0,r.up)("el-button"),v=(0,r.up)("ArrowUpBold"),k=(0,r.up)("el-icon"),w=(0,r.up)("ArrowDownBold"),b=(0,r.up)("memberTree"),g=(0,r.up)("el-card"),y=(0,r.up)("el-col"),_=(0,r.up)("ArrowLeftBold"),C=(0,r.up)("ArrowRightBold"),D=(0,r.up)("el-table-column"),L=(0,r.up)("el-table"),W=(0,r.up)("el-row");return(0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("div",i,[(0,r.Wm)(h,{modelValue:m.ApprovalLineName,"onUpdate:modelValue":t[0]||(t[0]=e=>m.ApprovalLineName=e),placeholder:"자주 쓰는 결재라인"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.selectMenu,(e=>((0,r.wg)(),(0,r.j4)(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,r.Wm)(f,{type:"primary",onClick:u.loadMenu},{default:(0,r.w5)((()=>[(0,r.Uk)("불러오기")])),_:1},8,["onClick"])]),(0,r._)("div",o,[(0,r.Wm)(f,{type:"primary",onClick:u.changeUp},{default:(0,r.w5)((()=>[(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r.Wm)(v)])),_:1})])),_:1},8,["onClick"]),(0,r.Wm)(f,{type:"primary",onClick:u.changeDown},{default:(0,r.w5)((()=>[(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r.Wm)(w)])),_:1})])),_:1},8,["onClick"]),(0,r.Wm)(f,{type:"primary",onClick:u.clearAll},{default:(0,r.w5)((()=>[(0,r.Uk)("초기화")])),_:1},8,["onClick"]),(0,r.Wm)(f,{type:"primary",onClick:u.saveLine},{default:(0,r.w5)((()=>[(0,r.Uk)("결재라인 저장")])),_:1},8,["onClick"])]),(0,r.Wm)(W,{class:"card-box"},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{span:6},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{shadow:"never",class:"card-box-1"},{header:(0,r.w5)((()=>[s])),default:(0,r.w5)((()=>[(0,r.Wm)(b,{onOnNodeClick:u.checkedTable,ref:"memberT",currentCheck:m.Checked},null,8,["onOnNodeClick","currentCheck"])])),_:1})])),_:1}),(0,r.Wm)(y,{span:8,class:"CenterButtons"},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{type:"primary",onClick:u.removeLine},{default:(0,r.w5)((()=>[(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r.Wm)(_)])),_:1})])),_:1},8,["onClick"]),(0,r.Wm)(f,{type:"primary",onClick:u.addLine},{default:(0,r.w5)((()=>[(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r.Wm)(C)])),_:1})])),_:1},8,["onClick"])])),_:1}),(0,r.Wm)(y,{span:10},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{shadow:"never"},{header:(0,r.w5)((()=>[d])),default:(0,r.w5)((()=>[(0,r.Wm)(L,{ref:"table",data:m.ApprovalLine,onCurrentChange:u.handleSelect,"highlight-current-row":"","table-layout":"fixed"},{default:(0,r.w5)((()=>[(0,r.Wm)(D,{type:"index",label:""}),(0,r.Wm)(D,{prop:"name",label:"이름"}),(0,r.Wm)(D,{prop:"rank",label:"직급"})])),_:1},8,["data","onCurrentChange"])])),_:1})])),_:1})])),_:1}),(0,r._)("div",p,[(0,r.Wm)(f,{type:"primary",onClick:u.saveEmit},{default:(0,r.w5)((()=>[(0,r.Uk)("저장")])),_:1},8,["onClick"])])])}a(560);var u=a(2748),c=a(3283),h=a(4870),f=a(167);const v=(0,h.qj)({SavedLines:localStorage.getItem("approvalLine")?JSON.parse(localStorage.getItem("approvalLine")):[],template:{index:"",name:"",lines:[]},saveLine(e,t){let a=[];e.forEach((e=>{a.push(e.index)}));const r={index:this.SavedLines.length,name:t,lines:a};this.SavedLines.push(r),localStorage.setItem("approvalLine",JSON.stringify(this.SavedLines))},callLine(e){let t=[];const a=this.SavedLines.find((t=>t.index===e));return a.lines.forEach((e=>{t.push(f.N.findMemberByIndex(e))})),t},callSelectMenu(){let e=[];return this.SavedLines.forEach((t=>{e.push({value:t.index,label:t.name})})),e}});var k=a(6e3),w=a(7178),b={name:"CreateApprovalLine",emits:["approvalLine"],components:{memberTree:c["default"],ArrowDownBold:u.RqY,ArrowUpBold:u.S9J,ArrowLeftBold:u.nt8,ArrowRightBold:u.Vtw},props:{parentData:{type:Array,default:()=>[]}},data(){return{Checked:[],ApprovalLine:[],ApprovalLineName:"",Select:[]}},methods:{checkedTable(e){this.Checked=[],this.clearSelect(),this.Checked.push(e)},handleSelect(e){null!==e?(this.Checked=[],this.Select=[e]):this.Select=[]},changeUp(){if(0===this.Select.length)return void this.showErrorMessage();let e=this.ApprovalLine.indexOf(this.Select[0]);if(e>0){let t=this.ApprovalLine[e];this.ApprovalLine[e]=this.ApprovalLine[e-1],this.ApprovalLine[e-1]=t}},changeDown(){if(0===this.Select.length)return void this.showErrorMessage();let e=this.ApprovalLine.indexOf(this.Select[0]);if(e<this.ApprovalLine.length-1){let t=this.ApprovalLine[e];this.ApprovalLine[e]=this.ApprovalLine[e+1],this.ApprovalLine[e+1]=t}},addLine(){0!==this.Checked.length?this.ApprovalLine.filter((e=>e.index===this.Checked[0].index)).length>0||(this.ApprovalLine.push(this.Checked[0]),this.Checked=[],this.$refs.memberT.clearHighlight()):this.showErrorMessage()},removeLine(){if(0===this.Select.length)return void this.showErrorMessage();let e=this.ApprovalLine.indexOf(this.Select[0]);e>-1&&this.ApprovalLine.splice(e,1),this.clearSelect()},clearSelect(){this.Select=[],this.$refs.table.setCurrentRow()},clearAll(){this.ApprovalLine=[],this.clearSelect()},saveLine(){k.T.prompt("결재라인 이름을 입력하세요","결재라인 저장",{confirmButtonText:"저장",cancelButtonText:"취소",inputPattern:/\S/,inputErrorMessage:"결재라인 이름을 입력하세요"}).then((({value:e})=>{v.saveLine(this.ApprovalLine,e),this.$forceUpdate()})).catch((()=>{(0,w.z8)({type:"info",message:"취소되었습니다"})}))},showErrorMessage(){(0,w.z8)({type:"error",message:"잘못된 접근입니다"})},loadMenu(){""!==this.ApprovalLineName?this.ApprovalLine=v.callLine(this.ApprovalLineName):this.showErrorMessage()},saveEmit(){const e=[];this.ApprovalLine.forEach((t=>{e.push({index:t.index,order:this.ApprovalLine.indexOf(t)})})),this.$emit("approvalLine",e)}},computed:{selectMenu(){return v.callSelectMenu()}},mounted(){if(this.parentData&&this.parentData.length>0){const e=[];this.parentData.forEach((t=>{e.push(f.N.findMemberByIndex(t.index))})),this.ApprovalLine=e}}},g=a(89);const y=(0,g.Z)(b,[["render",m],["__scopeId","data-v-731b365b"]]);var _=y},474:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(3396),l=a(7139);function n(e,t,a,n,i,o){const s=(0,r.up)("el-descriptions-item"),d=(0,r.up)("el-descriptions");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(d,{column:1,border:""},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.description,(e=>((0,r.wg)(),(0,r.j4)(s,{label:e.label,key:e.key},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.value),1)])),_:2},1032,["label"])))),128))])),_:1})])}a(560);var i={name:"generalDescription",props:{parentData:{type:Object,required:!0},parentLabel:{type:Object,required:!0}},data(){return{desc:[]}},computed:{description(){const e=[],t=Object.entries(this.parentLabel);return t.forEach((t=>{e.push({label:t[1],key:t,value:this.parentData[t[0]]})})),e}}},o=a(89);const s=(0,o.Z)(i,[["render",n]]);var d=s},8455:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var r=a(3396);function l(e,t,a,l,n,i){const o=(0,r.up)("el-input"),s=(0,r.up)("el-date-picker"),d=(0,r.up)("el-form-item"),p=(0,r.up)("el-form"),m=(0,r.up)("el-button");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(p,{model:n.form},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.columns,(e=>((0,r.wg)(),(0,r.j4)(d,{label:e,key:e},{default:(0,r.w5)((()=>["기한"!==e?((0,r.wg)(),(0,r.j4)(o,{key:0,modelValue:n.form[e],"onUpdate:modelValue":t=>n.form[e]=t},null,8,["modelValue","onUpdate:modelValue"])):((0,r.wg)(),(0,r.j4)(s,{key:1,type:"daterange",placeholder:"기한을 입력하세요",modelValue:n.form[e],"onUpdate:modelValue":t=>n.form[e]=t,"range-seperator":"~","start-placeholder":"시작일","end-placeholder":"종료일","value-format":"YYYY-MM-DD",format:"YYYY/MM/DD"},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["label"])))),128))])),_:1},8,["model"]),(0,r.Wm)(m,{type:"primary",onClick:i.saveForm},{default:(0,r.w5)((()=>[(0,r.Uk)("저장")])),_:1},8,["onClick"])],64)}var n={name:"generalForm",data(){return{form:[]}},emits:["saveForm"],props:{columns:{type:Array,default:()=>[],required:!0},parentData:{type:Object,default:()=>{}}},computed:{formData(){const e={};return this.columns.forEach((t=>{e[t]=""})),e}},methods:{saveForm(){this.$emit("saveForm",this.form)},debug(){console.log(this.form),console.log(this.formData),console.log(this.columns)}},mounted(){this.form=this.formData,this.parentData&&(this.form=this.parentData)}},i=a(89);const o=(0,i.Z)(n,[["render",l]]);var s=o},1085:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(3396);const l={class:"alignCenter"},n={class:"CenterButtons"};function i(e,t,a,i,o,s){const d=(0,r.up)("el-transfer"),p=(0,r.up)("el-button");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",l,[(0,r.Wm)(d,{modelValue:o.member,"onUpdate:modelValue":t[0]||(t[0]=e=>o.member=e),data:o.transferTable,titles:["직원","참여자"],filterable:""},null,8,["modelValue","data"])]),(0,r._)("div",n,[(0,r.Wm)(p,{type:"primary",onClick:s.saveMember},{default:(0,r.w5)((()=>[(0,r.Uk)("저장")])),_:1},8,["onClick"]),(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Uk)("취소")])),_:1})])],64)}a(560);var o=a(167),s={name:"MemberTransfer",emits:["save"],computed:{memberData(){return o.N.callTransferMember()}},props:{parentData:{type:Array,default:()=>[]},disableTable:{type:Array,default:()=>[]}},data(){return{member:[],transferTable:[]}},methods:{saveMember(){this.$emit("save",this.member)},transferInit(){this.memberData.forEach((e=>{this.disableTable.includes(e.key)&&(e.disabled=!0),this.transferTable.push(e)}))}},mounted(){0!==this.parentData.length&&(this.member=this.parentData),this.transferInit()}},d=a(89);const p=(0,d.Z)(s,[["render",i]]);var m=p},3283:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(3396);function l(e,t,a,l,n,i){const o=(0,r.up)("el-tree"),s=(0,r.up)("el-card");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s,{shadow:"never"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{ref:"tree",data:i.memberData,onNodeClick:i.onNodeClick,"node-key":"key"},null,8,["data","onNodeClick"])])),_:1})])}var n=a(167),i={name:"MemberTree",emits:["onNodeClick"],data(){return{checked:[],indeterminate:[]}},props:{currentCheck:{type:Array,default:()=>[]}},computed:{memberData(){return n.N.CallTeamTree()},isClear(){return void 0!==this.currentCheck[0]&&this.$refs.tree.getCurrentKey()===this.currentCheck[0].index}},methods:{onNodeClick(e){e.children||(this.$refs.tree.setCurrentKey(e.key),this.$emit("onNodeClick",n.N.findMemberByIndex(e.key)))},clearHighlight(){this.isClear||this.$refs.tree.setCurrentkey([],!1)}}},o=a(89);const s=(0,o.Z)(i,[["render",l]]);var d=s},6674:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var r=a(3396);const l={key:0},n=(0,r._)("h2",null,"기본 정보",-1),i={class:"CenterButtons"},o={key:1},s={class:"borderBox"},d=(0,r._)("h2",null,"참여 인원",-1),p=(0,r._)("p",null,"참여 인원을 수정할 시 업무 배정이 초기화됩니다",-1),m={class:"CenterButtons"},u={class:"borderBox"},c=(0,r._)("h2",null,"결재 라인",-1),h={class:"CenterButtons"},f={key:2},v=(0,r._)("h2",null,"업무 배정",-1),k={class:"CenterButtons"},w={key:3},b=(0,r._)("h2",null,"작성한 프로젝트",-1);function g(e,t,a,g,y,_){const C=(0,r.up)("el-step"),D=(0,r.up)("el-steps"),L=(0,r.up)("el-divider"),W=(0,r.up)("el-button"),A=(0,r.up)("generalForm"),E=(0,r.up)("generalDescription"),j=(0,r.up)("el-alert"),x=(0,r.up)("el-space"),S=(0,r.up)("MemberTransfer"),B=(0,r.up)("memberTable"),M=(0,r.up)("CreateApprovalLine"),U=(0,r.up)("AllocateWork"),T=(0,r.up)("WorkTable"),I=(0,r.up)("showProject"),V=(0,r.up)("el-tooltip");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(D,{active:y.active,"finish-status":"success"},{default:(0,r.w5)((()=>[(0,r.Wm)(C,{title:"기본 정보"}),(0,r.Wm)(C,{title:"인원 배정"}),(0,r.Wm)(C,{title:"업무 배정"})])),_:1},8,["active"]),0===y.active?((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(L,{"content-position":"left"},{default:(0,r.w5)((()=>[n])),_:1}),(0,r._)("div",i,[""===y.form1.title||y.generalEdit?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(W,{key:0,type:"primary",onClick:t[0]||(t[0]=e=>y.generalEdit=!y.generalEdit)},{default:(0,r.w5)((()=>[(0,r.Uk)("수정")])),_:1}))]),""===y.form1.title||y.generalEdit?((0,r.wg)(),(0,r.j4)(A,{key:0,columns:y.col,onSaveForm:_.saveInfo,parentData:_.protoForm1},null,8,["columns","onSaveForm","parentData"])):((0,r.wg)(),(0,r.j4)(E,{key:1,parentData:y.form1,parentLabel:y.form1Translate},null,8,["parentData","parentLabel"]))])):(0,r.kq)("",!0),1===y.active?((0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",s,[(0,r.Wm)(L,{"content-position":"left"},{default:(0,r.w5)((()=>[d])),_:1}),(0,r.Wm)(x,{fill:""},{default:(0,r.w5)((()=>[0===y.form2.member.length||y.memberEdit?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(j,{key:0,type:"warning","show-icon":"",closable:!1},{default:(0,r.w5)((()=>[p])),_:1}))])),_:1}),(0,r._)("div",m,[0===y.form2.member.length||y.memberEdit?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(W,{key:0,type:"warning",onClick:t[1]||(t[1]=e=>y.memberEdit=!y.memberEdit)},{default:(0,r.w5)((()=>[(0,r.Uk)("수정")])),_:1}))]),0===y.form2.member.length||y.memberEdit?((0,r.wg)(),(0,r.j4)(S,{key:0,onSave:_.saveMember,parentData:y.form2.member},null,8,["onSave","parentData"])):((0,r.wg)(),(0,r.j4)(B,{key:1,parentData:y.form2.member},null,8,["parentData"]))]),(0,r._)("div",u,[(0,r.Wm)(L,{"content-position":"left"},{default:(0,r.w5)((()=>[c])),_:1}),(0,r._)("div",h,[0===y.form2.ApprovalLine.length||y.ApprovalLineEdit?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(W,{key:0,type:"primary",onClick:t[2]||(t[2]=e=>y.ApprovalLineEdit=!y.ApprovalLineEdit)},{default:(0,r.w5)((()=>[(0,r.Uk)("수정")])),_:1}))]),0===y.form2.ApprovalLine.length||y.ApprovalLineEdit?((0,r.wg)(),(0,r.j4)(M,{key:0,onApprovalLine:_.saveApp,parentData:y.form2.ApprovalLine},null,8,["onApprovalLine","parentData"])):((0,r.wg)(),(0,r.j4)(B,{key:1,parentData:y.form2.ApprovalLine,ApprovalCheck:!0},null,8,["parentData"]))])])):(0,r.kq)("",!0),2===y.active?((0,r.wg)(),(0,r.iD)("div",f,[(0,r.Wm)(L,{"content-position":"left"},{default:(0,r.w5)((()=>[v])),_:1}),(0,r._)("div",k,[0===y.form3.work.length||y.workEdit?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(W,{key:0,type:"primary",onClick:t[3]||(t[3]=t=>y.workEdit=!e.worEdit)},{default:(0,r.w5)((()=>[(0,r.Uk)("수정")])),_:1}))]),0===y.form3.work.length||y.workEdit?((0,r.wg)(),(0,r.j4)(U,{key:0,member:y.form2.member,onSaveWork:_.saveWork,parentData:y.form3.work},null,8,["member","onSaveWork","parentData"])):((0,r.wg)(),(0,r.j4)(T,{key:1,parentMember:y.form2.member,parentWork:y.form3.work},null,8,["parentMember","parentWork"]))])):(0,r.kq)("",!0),3===y.active?((0,r.wg)(),(0,r.iD)("div",w,[(0,r.Wm)(L,{"content-position":"left"},{default:(0,r.w5)((()=>[b])),_:1}),(0,r.Wm)(I,{projectData:_.protoProject,isSaved:!1},null,8,["projectData"])])):(0,r.kq)("",!0),(0,r._)("div",null,[(0,r.Wm)(W,{type:"primary",onClick:t[4]||(t[4]=e=>y.active--),disabled:0===y.active},{default:(0,r.w5)((()=>[(0,r.Uk)("이전")])),_:1},8,["disabled"]),(0,r.Wm)(V,{disabled:_.nextCheck,content:"작성한 값들을 모두 저장해야 다음 단계로 넘어갈 수 있습니다",placement:"top"},{default:(0,r.w5)((()=>[3!==y.active?((0,r.wg)(),(0,r.j4)(W,{key:0,type:"primary",onClick:t[5]||(t[5]=e=>y.active++),disabled:!_.nextCheck},{default:(0,r.w5)((()=>[(0,r.Uk)("다음")])),_:1},8,["disabled"])):((0,r.wg)(),(0,r.j4)(W,{key:1,type:"primary",onClick:_.saveProject},{default:(0,r.w5)((()=>[(0,r.Uk)("저장")])),_:1},8,["onClick"]))])),_:1},8,["disabled"])])])}var y=a(3219),_=a(1085),C=a(1533),D=a(8455),L=a(2973),W=a(2985),A=a(5837),E=a(7400),j=a(6e3),x=a(7178),S=a(474),B={name:"CreatePlan",components:{MemberTransfer:_["default"],CreateApprovalLine:C["default"],generalForm:D["default"],AllocateWork:L["default"],memberTable:y["default"],WorkTable:W["default"],showProject:A["default"],generalDescription:S["default"]},props:{Edit:{type:Boolean,default:!1},parentIndex:{type:Number,default:null}},emits:["callFinish"],data(){return{active:0,col:["제목","설명","기한"],form1Translate:{title:"제목",desc:"설명",start_date:"시작일",end_date:"마감일"},generalEdit:!1,ApprovalLineEdit:!1,memberEdit:!1,workEdit:!1,form1:{title:"",desc:"",start_date:"",end_date:""},form2:{member:[],ApprovalLine:[]},form3:{work:[]}}},methods:{saveInfo(e){this.form1={title:e.제목,desc:e.설명,start_date:e.기한[0],end_date:e.기한[1]},this.generalEdit&&(this.generalEdit=!1)},saveMember(e){0!==this.form3.work.length&&this.form2.member!==e&&(this.form3.work=[]),this.form2.member=e,this.memberEdit&&(this.memberEdit=!1)},saveApp(e){this.form2.ApprovalLine=e,this.ApprovalLineEdit&&(this.ApprovalLineEdit=!1)},debug(){console.log(this.form1),console.log(this.form2),console.log(this.form3),console.log(this.protoProject),console.log(this.checkEdited())},saveWork(e){this.form3.work=e},saveProject(){if(this.Edit)return this.checkEdited()?(E.I.EditProject(this.parentIndex,this.protoProject),void this.$emit("callFinish","ProjectPlan")):void j.T.confirm("변경사항이 없습니다. 수정을 취소하시겠습니까?","경고",{confirmButtonText:"예",cancelButtonText:"아니오",type:"warning"}).then((()=>{(0,x.z8)({type:"info",message:"수정이 취소되었습니다"}),this.$emit("cancelEdit")}));E.I.createProject(this.protoProject),this.$emit("callFinish","ProjectPlan")},checkEdited(){if(this.Edit){const e=E.I.findProjectByIndex(this.parentIndex),t=Object.assign({},e,this.protoProject),a=Object.keys(t).some((a=>t[a]!==e[a]));return a}return!1}},computed:{nextCheck(){switch(this.active){case 0:return""!==this.form1.title&&""!==this.form1.desc&&""!==this.form1.start_date&&""!==this.form1.end_date;case 1:return 0!==this.form2.member.length&&0!==this.form2.ApprovalLine.length;case 2:return 0!==this.form3.work.length;default:return!1}},protoProject(){return{...this.form1,...this.form2,...this.form3}},protoForm1(){return{"제목":this.form1.title,"설명":this.form1.desc,"기한":[this.form1.start_date,this.form1.end_date]}}},created(){if(this.Edit){const e=E.I.findProjectByIndex(this.parentIndex);this.form1={title:e.title,desc:e.desc,start_date:e.start_date,end_date:e.end_date},this.form2={member:e.member,ApprovalLine:e.ApprovalLine},this.form3={work:e.work}}}},M=a(89);const U=(0,M.Z)(B,[["render",g]]);var T=U}}]);
//# sourceMappingURL=674.571bb464.js.map