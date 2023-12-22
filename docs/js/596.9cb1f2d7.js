"use strict";(self["webpackChunkvue_projectver2"]=self["webpackChunkvue_projectver2"]||[]).push([[596,136,81,273,713,592,942,311],{4285:function(e,t,r){r.d(t,{v:function(){return l}});r(560);var n=r(4870),a=r(6797),s=r.n(a),i=r(167),o=r(8865);const l=(0,n.Um)({List:localStorage.getItem("messageList")?JSON.parse(localStorage.getItem("messageList")):[],refreshList(){localStorage.setItem("messageList",JSON.stringify(this.List)),this.List=JSON.parse(localStorage.getItem("messageList"))},template:{index:"",from:"",to:"",reference:"",title:"",content:"",update:s()().format("YYYY-MM-DD"),status:!0,read:!1},createMessage(e){if(e.to.length>1)return e.to.forEach((t=>{const r={index:this.List.length,from:i.N.currentMember,to:t,reference:""===e.reference?[]:Array.isArray(e.reference)?e.reference:[e.reference],title:e.title,content:e.content,update:s()().format("YYYY-MM-DD"),status:!0,read:!1};o.j.createAlarm("messageSend",r.from,r.to),this.List.push(r)})),void this.refreshList();const t={index:this.List.length,from:i.N.currentMember,to:e.to,reference:""===e.reference?[]:Array.isArray(e.reference)?e.reference:[e.reference],title:e.title,content:e.content,update:s()().format("YYYY-MM-DD"),status:!0};this.List.push(t),o.j.createAlarm("messageSend",t.from,t.to),this.refreshList()},editMessage(e,t,r=!1){const n={index:this.List.length,from:i.N.currentMember,to:e.to,reference:""===e.reference?[]:Array.isArray(e.reference)?e.reference:[e.reference],title:e.title,content:e.content,update:s()().format("YYYY-MM-DD"),status:!0,read:!1};r&&(this.filterReplyMessageGroupReply(t).length>0?this.addReplyMessageGroup(t,n.index):this.createReplyMessageGroup(t,n.index)),this.List.push(n),o.j.createAlarm("messageSend",n.from,n.to),this.refreshList()},getAllList(){let e=[];return this.List.forEach((t=>{if(t.status){let r="";t.reference?t.reference.forEach((e=>{r+=i.N.findMemberByIndex(e).name+" ,"})):r=[],e.push({index:t.index,from:i.N.findMemberByIndex(t.from).name,to:i.N.findMemberByIndex(t.to).name,reference:r,title:t.title,content:t.content,update:t.update,status:t.status,read:t.read})}})),e},getMessage(e){const t=i.N.findMemberByIndex(e).name;return this.getAllList().filter((e=>e.to===t||e.reference.includes(t)))},findMessageByIndex(e){return this.getAllList().find((t=>t.index===e))},findOriginalMessageByIndex(e){return this.List.find((t=>t.index===e))},deleteMessage(e){const t=this.findMessageByIndex(e);t.status=!1,this.refreshList()},calculateMessageCountByMessage(e){const t=this.List.find((t=>t.index===e)),r=t.to,n=this.List.filter((e=>e.to===r)),a=n.find((t=>t.index===e));return`${n.indexOf(a)+1}/${n.length}`},referenceCheck(e){const t=this.List.find((t=>t.index===e));return t.to===i.N.currentMember},readMessage(e){const t=this.List.find((t=>t.index===e));t.read=!0,this.refreshList()},ReplyMessageGroup:localStorage.getItem("replyMessageGroup")?JSON.parse(localStorage.getItem("replyMessageGroup")):[],refreshGroup(){localStorage.setItem("replyMessageGroup",JSON.stringify(this.ReplyMessageGroup)),this.ReplyMessageGroup=JSON.parse(localStorage.getItem("replyMessageGroup"))},createReplyMessageGroup(e,t){const r={index:this.ReplyMessageGroup.length,originalMessage:e,replyMessage:[t],status:!0};this.ReplyMessageGroup.push(r),this.refreshGroup()},addReplyMessageGroup(e,t){let r=this.findGroupByOGIndex(e);void 0===r&&(r=this.filterReplyMessageGroupReply(e)[0]),r.replyMessage.push(t),this.refreshGroup()},findGroupByOGIndex(e){return this.ReplyMessageGroup.find((t=>t.originalMessage===e))},filterReplyMessageGroupReply(e){return this.ReplyMessageGroup.filter((t=>t.replyMessage.includes(e)))},getReplyChainArray(e){const t=[];if(this.findGroupByOGIndex(e)){const r=this.findGroupByOGIndex(e);return t.push(this.findOriginalMessageByIndex(r.originalMessage)),r.replyMessage.forEach((e=>{t.push(this.findOriginalMessageByIndex(e))})),t}if(this.filterReplyMessageGroupReply(e).length>0){const r=this.filterReplyMessageGroupReply(e);return r.forEach((e=>{t.push(this.findOriginalMessageByIndex(e.originalMessage)),e.replyMessage.forEach((e=>{t.push(this.findOriginalMessageByIndex(e))}))})),t}return t}})},4702:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=r(3396),a=r(7139);const s={class:"el-header"};function i(e,t,r,i,o,l){const d=(0,n.up)("el-button"),u=(0,n.up)("el-dialog");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",null,[(0,n.Wm)(d,{type:"primary",onClick:l.openDialog},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(r.title),1)])),_:1},8,["onClick"])]),(0,n.Wm)(u,{modelValue:o.dialogVisible,"onUpdate:modelValue":t[1]||(t[1]=e=>o.dialogVisible=e),"append-to-body":"","show-close":!1},{header:(0,n.w5)((()=>[(0,n._)("div",s,[(0,n._)("h2",null,(0,a.zw)(r.title),1),(0,n.Wm)(d,{onClick:l.closeDialog},{default:(0,n.w5)((()=>[(0,n.Uk)("닫기")])),_:1},8,["onClick"])])])),default:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"default",{onSaveForm:t[0]||(t[0]=(...e)=>l.saveForm&&l.saveForm(...e))})])),_:3},8,["modelValue"])])}var o={name:"dialogSlot",data(){return{dialogVisible:!1}},props:{title:{type:String,default:""}},methods:{openDialog(){this.dialogVisible=!0},closeDialog(){this.dialogVisible=!1},saveForm(e){this.$emit("saveForm",e),this.closeDialog()}}},l=r(89);const d=(0,l.Z)(o,[["render",i]]);var u=d},2081:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(3396),a=r(7139);const s={class:"nameTab"};function i(e,t,r,i,o,l){const d=(0,n.up)("UserFilled"),u=(0,n.up)("el-icon"),m=(0,n.up)("el-avatar");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(m,{color:o.color,"background-color":o.color},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{color:o.color,size:o.size},{default:(0,n.w5)((()=>[(0,n.Wm)(d)])),_:1},8,["color","size"])])),_:1},8,["color","background-color"]),(0,n._)("span",s,(0,a.zw)(o.member.name)+"("+(0,a.zw)(o.member.department)+")",1)])}var o=r(2748),l=r(167),d={name:"userAvatar",components:{UserFilled:o.wvC},data(){return{size:"large",member:{},color:""}},props:{parentMember:{type:Number,default:2}},methods:{colorCheck(){switch(this.member.department){case"기획":return"#409EFF";case"개발":return"#67C23A";case"디자인":return"#E6A23C";case"기타":return"#F56C6C";default:return"#909399"}}},mounted(){this.member=l.N.findMemberByIndex(this.parentMember),this.color=this.colorCheck()}},u=r(89);const m=(0,u.Z)(d,[["render",i],["__scopeId","data-v-5cbeb6c0"]]);var p=m},6273:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(3396),a=r(7139);const s={class:"CenterButtons"};function i(e,t,r,i,o,l){const d=(0,n.up)("el-table-column"),u=(0,n.up)("el-tag"),m=(0,n.up)("el-table"),p=(0,n.up)("el-pagination");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(m,{data:o.currentTableData,onCurrentChange:l.handleCurrentChange,"default-sort":{prop:"index",order:"descending"},"row-class-name":l.readRow},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{prop:"index",label:"번호",sortable:"",width:"150"}),(0,n.Wm)(d,{prop:"type",label:"종류",width:"150"},{default:(0,n.w5)((e=>[(0,n.Wm)(u,{type:"중요"===e.row.type?"success":"info"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.row.type),1)])),_:2},1032,["type"])])),_:1}),(0,n.Wm)(d,{prop:"title",label:"제목"}),(0,n.Wm)(d,{prop:"update",label:"날짜",sortable:""})])),_:1},8,["data","onCurrentChange","row-class-name"]),(0,n._)("div",s,[(0,n.Wm)(p,{modelValue:o.currentPage,"onUpdate:modelValue":t[0]||(t[0]=e=>o.currentPage=e),layout:"prev, pager, next",total:l.totalPage,"page-size":15},null,8,["modelValue","total"])])])}r(560);var o=r(4285),l=r(167),d={name:"MessageTable",data(){return{CurrentMember:l.N.currentMember,CurrentMemberName:l.N.getCurrentMemberName(),tableData:[],currentRow:null,currentPage:1,currentTableData:[]}},props:{parentType:{type:String,default:null}},computed:{MessageData(){return o.v.getAllList()},totalPage(){return this.MessageData.length}},methods:{tableInit(){this.MessageData.forEach((e=>{let t="";if(this.parentType)switch(this.parentType){case"to":if(e.to!==this.CurrentMemberName)return;t=o.v.referenceCheck(e.index)?"중요":"참조";break;case"from":if(e.from!==this.CurrentMemberName)return;t="보냄";break;case"reference":if(-1===e.reference.indexOf(this.CurrentMemberName))return;t="참조";break;case"read":if(!e.read&&e.to!==this.CurrentMemberName)return;t=o.v.referenceCheck(e.index)?"중요":"참조";break;case"unread":if(e.read&&e.to!==this.CurrentMemberName)return;t=o.v.referenceCheck(e.index)?"중요":"참조";break;default:if(e.to!==this.CurrentMemberName)return;break}else{if(e.to!==this.CurrentMemberName)return;t=o.v.referenceCheck(e.index)?"중요":"참조"}this.tableData.push({referenceIndex:e.index,type:t,index:this.tableData.length+1,title:e.title,update:e.update,read:e.read})})),this.currentTableData=this.tableData.slice(15*(this.currentPage-1),15*this.currentPage)},handleCurrentChange(e){this.currentRow=e,o.v.readMessage(this.currentRow.referenceIndex),this.$emit("readMessage",this.currentRow.referenceIndex,this.currentRow.index)},readRow({row:e}){return e.read?"중요"===e.type?"success-row":"info-row":"중요"===e.type?"success-row bold":"info-row bold"}},mounted(){this.tableInit()}},u=r(89);const m=(0,u.Z)(d,[["render",i]]);var p=m},8596:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(3396);const a={class:"rightSideButtons"},s={key:0},i={key:1},o={key:2},l={key:4};function d(e,t,r,d,u,m){const p=(0,n.up)("el-button"),c=(0,n.up)("MessageTable"),f=(0,n.up)("el-tab-pane"),h=(0,n.up)("el-tabs"),g=(0,n.up)("ShowMessage"),M=(0,n.up)("createMessage"),y=(0,n.up)("editMessage"),w=(0,n.up)("ShowReplyGroup");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",a,[0===u.active?((0,n.wg)(),(0,n.j4)(p,{key:0,type:"primary",onClick:t[0]||(t[0]=e=>u.active=2)},{default:(0,n.w5)((()=>[(0,n.Uk)("생성")])),_:1})):(0,n.kq)("",!0)]),0===u.active?((0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(h,{type:"border-card"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{label:"받은 메시지"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{onReadMessage:m.readMessage,parentType:"to"},null,8,["onReadMessage"])])),_:1}),(0,n.Wm)(f,{label:"보낸 메시지"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{onReadMessage:m.readMessage,parentType:"from"},null,8,["onReadMessage"])])),_:1}),(0,n.Wm)(f,{label:"참조 메시지"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{onReadMessage:m.readMessage,parentType:"reference"},null,8,["onReadMessage"])])),_:1}),(0,n.Wm)(f,{label:"읽은 메시지"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{onReadMessage:m.readMessage,parentType:"read"},null,8,["onReadMessage"])])),_:1}),(0,n.Wm)(f,{label:"안읽은 메시지"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{onReadMessage:m.readMessage,parentType:"unread"},null,8,["onReadMessage"])])),_:1})])),_:1})])):(0,n.kq)("",!0),1===u.active?((0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(g,{parentIndex:u.targetIndex,onReply:m.replyMessage,onResend:m.resendMessage,onDeleteMessage:m.deleteMessage,onReturnToMain:m.returnToMain},null,8,["parentIndex","onReply","onResend","onDeleteMessage","onReturnToMain"])])):(0,n.kq)("",!0),2===u.active?((0,n.wg)(),(0,n.iD)("div",o,[u.editSituation?((0,n.wg)(),(0,n.j4)(y,{key:1,parentIndex:u.targetIndex,replyCheck:u.replySituation,onEditMessage:m.editMessage,onReturnToMain:m.returnToMain},null,8,["parentIndex","replyCheck","onEditMessage","onReturnToMain"])):((0,n.wg)(),(0,n.j4)(M,{key:0,onSaveMessage:m.sendMessage,onReturnToMain:m.returnToMain},null,8,["onSaveMessage","onReturnToMain"]))])):(0,n.kq)("",!0),3!==u.active?((0,n.wg)(),(0,n.j4)(p,{key:3,type:"primary",onClick:t[1]||(t[1]=e=>u.active=3)},{default:(0,n.w5)((()=>[(0,n.Uk)("그룹체크")])),_:1})):(0,n.kq)("",!0),3===u.active?((0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(w,{parentIndex:u.targetIndex,onReturnToMain:m.returnToMain,onReply:m.replyMessage,onResend:m.resendMessage},null,8,["parentIndex","onReturnToMain","onReply","onResend"])])):(0,n.kq)("",!0)])}var u=r(7942),m=r(6273),p=r(9709),c=r(6311),f=r(4285),h=r(9592),g={components:{MessageTable:m["default"],ShowMessage:p["default"],createMessage:u["default"],editMessage:c["default"],ShowReplyGroup:h["default"]},methods:{sendMessage(e){f.v.createMessage(e),this.$emit("callFinish","MessageMain")},editMessage(e){f.v.editMessage(e,this.targetIndex,this.editSituation),this.$emit("callFinish","MessageMain"),this.editSituation=!1},replyMessage(){this.groupSituation&&(this.targetIndex=this.groupTempIndex),this.editSituation=!0,this.replySituation=!0,this.active=2},resendMessage(){this.editSituation=!0,this.active=2},deleteMessage(){this.$emit("callFinish","MessageMain"),f.v.deleteMessage(this.targetIndex)},editTest(){this.active=2,this.editSituation=!0},readMessage(e,t){f.v.getReplyChainArray(e).length>0?(this.targetIndex=f.v.getReplyChainArray(e)[0].index,this.tempIndex=t,this.active=3,this.groupSituation=!0,this.groupTempIndex=e):(this.targetIndex=e,this.tempIndex=t,this.active=1)},returnToMain(){this.active=0}},data(){return{content:"",targetIndex:1,active:0,editSituation:!1,replySituation:!1,tempIndex:0,groupSituation:!1,groupTempIndex:0}}},M=r(89);const y=(0,M.Z)(g,[["render",d]]);var w=y},9709:function(e,t,r){r.r(t),r.d(t,{default:function(){return M}});var n=r(3396),a=r(7139);const s={class:"messageTitle"},i={class:"bigSize"},o=["innerHTML"];function l(e,t,r,l,d,u){const m=(0,n.up)("el-button"),p=(0,n.up)("el-button-group"),c=(0,n.up)("el-col"),f=(0,n.up)("el-row"),h=(0,n.up)("userAvatar");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",null,[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{span:8},{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{type:"primary",onClick:u.returnToMain},{default:(0,n.w5)((()=>[(0,n.Uk)("목록")])),_:1},8,["onClick"]),(0,n.Wm)(m,{type:"primary",onClick:u.deleteMessage},{default:(0,n.w5)((()=>[(0,n.Uk)("삭제")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,n.Wm)(c,{span:4,offset:12},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(u.tempWhere),1)])),_:1})])),_:1})]),(0,n._)("div",s,(0,a.zw)(d.title),1),(0,n._)("div",null,[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{span:4},{default:(0,n.w5)((()=>[(0,n.Uk)("보낸 사람")])),_:1}),u.isReference?((0,n.wg)(),(0,n.j4)(c,{key:0,span:4},{default:(0,n.w5)((()=>[(0,n.Uk)("받는 사람")])),_:1})):(0,n.kq)("",!0)])),_:1}),u.isReference?((0,n.wg)(),(0,n.j4)(f,{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{span:4},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{parentMember:u.originalFrom},null,8,["parentMember"])])),_:1}),(0,n.Wm)(c,{span:4},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{parentMember:u.originalTo},null,8,["parentMember"])])),_:1}),(0,n.Wm)(c,{span:4,offset:12},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(u.messageData.update),1)])),_:1})])),_:1})):((0,n.wg)(),(0,n.j4)(f,{key:1},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{span:4},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{parentMember:u.originalFrom},null,8,["parentMember"])])),_:1}),(0,n.Wm)(c,{span:4,offset:16},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(u.messageData.update),1)])),_:1})])),_:1}))]),(0,n._)("div",i,[(0,n._)("div",{innerHTML:d.content},null,8,o)]),(0,n._)("div",null,[(0,n.Wm)(m,{type:"primary",onClick:u.reply,size:"large"},{default:(0,n.w5)((()=>[(0,n.Uk)("답장")])),_:1},8,["onClick"]),(0,n.Wm)(m,{type:"primary",onClick:u.resend,size:"large"},{default:(0,n.w5)((()=>[(0,n.Uk)("전달")])),_:1},8,["onClick"])])])}var d=r(4285),u=r(6e3),m=r(7178),p=r(2081),c=r(167),f={name:"ShowMessage",components:{userAvatar:p["default"]},data(){return{title:"",content:null}},props:{parentIndex:{type:Number,required:!0}},computed:{messageData(){return d.v.findMessageByIndex(this.parentIndex)},originalFrom(){return d.v.findOriginalMessageByIndex(this.parentIndex).from},originalTo(){return d.v.findOriginalMessageByIndex(this.parentIndex).to},tempWhere(){return d.v.calculateMessageCountByMessage(this.parentIndex)},isReference(){return d.v.findOriginalMessageByIndex(this.parentIndex).to!==c.N.currentMember}},methods:{pageInit(){this.title=this.messageData.title,this.content=this.messageData.content},debug(){console.log(this.messageData),console.log(this.descriptionData)},reply(){this.$emit("reply")},resend(){this.$emit("resend")},deleteMessage(){u.T.confirm("삭제하시겠습니까?","경고",{confirmButtonText:"예",cancelButtonText:"아니오",type:"warning"}).then((()=>{(0,m.z8)({type:"info",message:"삭제되었습니다"}),this.$emit("deleteMessage")}))},returnToMain(){this.$emit("returnToMain")}},mounted(){this.pageInit()}},h=r(89);const g=(0,h.Z)(f,[["render",l],["__scopeId","data-v-4423cb52"]]);var M=g},9592:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(3396),a=r(7139);const s=["innerHTML"];function i(e,t,r,i,o,l){const d=(0,n.up)("el-button"),u=(0,n.up)("el-col"),m=(0,n.up)("el-row"),p=(0,n.up)("el-divider"),c=(0,n.up)("userAvatar");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",null,[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{span:8},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{type:"primary",onClick:l.returnToMain},{default:(0,n.w5)((()=>[(0,n.Uk)("목록")])),_:1},8,["onClick"])])),_:1}),(0,n.Wm)(u,{span:4,offset:12},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(l.tempWhere),1)])),_:1})])),_:1})]),(0,n.Wm)(p),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.entireChain,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.index},[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{span:4},{default:(0,n.w5)((()=>[o.entireChain.length>0?((0,n.wg)(),(0,n.j4)(c,{key:0,parentMember:e.from},null,8,["parentMember"])):(0,n.kq)("",!0)])),_:2},1024),(0,n.Wm)(u,{span:4,offset:16},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.update),1)])),_:2},1024)])),_:2},1024),(0,n.Wm)(p),(0,n._)("div",{innerHTML:l.cutContent(e.content)},null,8,s),(0,n.Wm)(p)])))),128)),(0,n._)("div",null,[l.lastWhoCheck()?((0,n.wg)(),(0,n.j4)(d,{key:0,type:"primary",onClick:l.reply,size:"large"},{default:(0,n.w5)((()=>[(0,n.Uk)("답장")])),_:1},8,["onClick"])):(0,n.kq)("",!0),(0,n.Wm)(d,{type:"primary",onClick:l.resend,size:"large"},{default:(0,n.w5)((()=>[(0,n.Uk)("전달")])),_:1},8,["onClick"])])])}var o=r(4285),l=r(6e3),d=r(7178),u=r(2081),m=r(167),p={name:"ShowMessage",components:{userAvatar:u["default"]},data(){return{entireChain:[],currentMember:m.N.currentMember}},props:{parentIndex:{type:Number,required:!0}},computed:{messageData(){return o.v.getReplyChainArray(this.parentIndex)},tempWhere(){return o.v.calculateMessageCountByMessage(this.parentIndex)},OG(){return o.v.findOriginalMessageByIndex(this.parentIndex)}},methods:{pageInit(){this.entireChain=this.messageData},debug(){console.log(this.messageData),console.log(this.descriptionData)},reply(){this.$emit("reply")},resend(){this.$emit("resend")},deleteMessage(){l.T.confirm("삭제하시겠습니까?","경고",{confirmButtonText:"예",cancelButtonText:"아니오",type:"warning"}).then((()=>{(0,d.z8)({type:"info",message:"삭제되었습니다"}),this.$emit("deleteMessage")}))},returnToMain(){this.$emit("returnToMain")},cutContent(e){let t=e,r=t.indexOf("<p>=========");return-1!==r&&(t=t.substring(0,r)),t},checkWho(e){return Number(o.v.findOriginalMessageByIndex(e).from)},lastWhoCheck(){return this.entireChain.length>0&&this.entireChain[this.entireChain.length-1].from!==this.currentMember}},mounted(){this.pageInit()}},c=r(89);const f=(0,c.Z)(p,[["render",i],["__scopeId","data-v-3e491f8e"]]);var h=f},7942:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(3396);const a={class:"formContanier"},s={class:"editor"},i={class:"CenterButtons"};function o(e,t,r,o,l,d){const u=(0,n.up)("assignMember"),m=(0,n.up)("dialogSlot"),p=(0,n.up)("el-input"),c=(0,n.up)("el-form-item"),f=(0,n.up)("QuillEditor"),h=(0,n.up)("el-button"),g=(0,n.up)("el-form");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(g,{model:l.form},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{label:"받는사람"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{modelValue:l.showTo,"onUpdate:modelValue":t[0]||(t[0]=e=>l.showTo=e),readonly:""},{append:(0,n.w5)((()=>[(0,n.Wm)(m,{title:"배정하기",ref:"dialog"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{onSaveMember:d.addressMember,where:"to"},null,8,["onSaveMember"])])),_:1},512)])),_:1},8,["modelValue"])])),_:1}),(0,n.Wm)(c,{label:"참조"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{modelValue:l.showRef,"onUpdate:modelValue":t[1]||(t[1]=e=>l.showRef=e),readonly:""},{append:(0,n.w5)((()=>[(0,n.Wm)(m,{title:"배정하기",ref:"dialog"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{onSaveMember:d.addressMember,where:"ref"},null,8,["onSaveMember"])])),_:1},512)])),_:1},8,["modelValue"])])),_:1}),(0,n.Wm)(c,{label:"제목"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{modelValue:l.form.title,"onUpdate:modelValue":t[2]||(t[2]=e=>l.form.title=e),placeholder:"제목을 입력하세요"},null,8,["modelValue"])])),_:1}),(0,n.Wm)(c,{label:"내용"},{default:(0,n.w5)((()=>[(0,n._)("div",s,[(0,n.Wm)(f,{content:l.form.content,"onUpdate:content":t[3]||(t[3]=e=>l.form.content=e),theme:"snow",toolbar:"essential",placeholder:"줄이 늘어날수록 창이 자동으로 늘어납니다",contentType:"html"},null,8,["content"])])])),_:1}),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n._)("div",i,[(0,n.Wm)(h,{type:"primary",onClick:d.sendMessage},{default:(0,n.w5)((()=>[(0,n.Uk)("작성")])),_:1},8,["onClick"]),(0,n.Wm)(h,{type:"primary",onClick:d.returnToMain},{default:(0,n.w5)((()=>[(0,n.Uk)("취소")])),_:1},8,["onClick"])])])),_:1})])),_:1},8,["model"])])}var l=r(167),d=r(4702),u=r(2832),m=r(6e3),p={name:"createMessage",components:{dialogSlot:d["default"],assignMember:u["default"]},data(){return{form:{to:"",from:"",reference:"",title:"",content:"",update:""},showTo:"",showRef:""}},methods:{addressMember(e,t){if(e.length>1){let r=e.map((e=>{let t=l.N.findMemberByIndex(e);return`${t.name}(${t.department})`})).join(", ");"to"===t?(this.showTo=r,this.form.to=e):(this.showRef=r,this.form.reference=e)}else{let r=Array.isArray(e)?e[0]:e;"to"===t?(this.form.to=r,this.showTo=`${l.N.findMemberByIndex(r).name}(${l.N.findMemberByIndex(r).department})`):(this.form.reference=r,this.showRef=`${l.N.findMemberByIndex(r).name}(${l.N.findMemberByIndex(r).department})`)}this.$refs.dialog.closeDialog()},sendMessage(){this.$emit("saveMessage",this.form)},returnToMain(){m.T.confirm("정말 취소하시겠습니까?","경고",{confirmButtonText:"예",cancelButtonText:"아니오",type:"warning"}).then((()=>{this.$emit("returnToMain")})).catch((()=>{}))}}},c=r(89);const f=(0,c.Z)(p,[["render",o],["__scopeId","data-v-e9c0c296"]]);var h=f},6311:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(3396);const a={class:"formContanier"},s={class:"editor"},i={class:"CenterButtons"};function o(e,t,r,o,l,d){const u=(0,n.up)("assignMember"),m=(0,n.up)("dialogSlot"),p=(0,n.up)("el-input"),c=(0,n.up)("el-form-item"),f=(0,n.up)("QuillEditor"),h=(0,n.up)("el-button"),g=(0,n.up)("el-form");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(g,{model:l.form},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{label:"받는사람"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{modelValue:l.showTo,"onUpdate:modelValue":t[0]||(t[0]=e=>l.showTo=e),readonly:"",disabled:r.replyCheck},(0,n.Nv)({_:2},[r.replyCheck?void 0:{name:"append",fn:(0,n.w5)((()=>[(0,n.Wm)(m,{title:"배정하기",ref:"dialog"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{onSaveMember:d.addressMember,where:"to"},null,8,["onSaveMember"])])),_:1},512)])),key:"0"}]),1032,["modelValue","disabled"])])),_:1}),(0,n.Wm)(c,{label:"참조"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{modelValue:l.showRef,"onUpdate:modelValue":t[1]||(t[1]=e=>l.showRef=e),readonly:""},{append:(0,n.w5)((()=>[(0,n.Wm)(m,{title:"배정하기",ref:"dialog"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{onSaveMember:d.addressMember,where:"ref"},null,8,["onSaveMember"])])),_:1},512)])),_:1},8,["modelValue"])])),_:1}),(0,n.Wm)(c,{label:"제목"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{modelValue:l.form.title,"onUpdate:modelValue":t[2]||(t[2]=e=>l.form.title=e),placeholder:"제목을 입력하세요"},null,8,["modelValue"])])),_:1}),(0,n.Wm)(c,{label:"내용"},{default:(0,n.w5)((()=>[(0,n._)("div",s,[(0,n.Wm)(f,{content:l.form.content,"onUpdate:content":t[3]||(t[3]=e=>l.form.content=e),contentType:"html",theme:"snow",toolbar:"essential",placeholder:"줄이 늘어날수록 창이 자동으로 늘어납니다",ref:"Editor"},null,8,["content"])])])),_:1}),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n._)("div",i,[(0,n.Wm)(h,{type:"primary",onClick:d.sendMessage},{default:(0,n.w5)((()=>[(0,n.Uk)("작성")])),_:1},8,["onClick"]),(0,n.Wm)(h,{type:"primary",onClick:d.returnToMain},{default:(0,n.w5)((()=>[(0,n.Uk)("취소")])),_:1},8,["onClick"])])])),_:1})])),_:1},8,["model"])])}var l=r(167),d=r(4702),u=r(2832),m=r(4285),p=r(6e3),c={name:"createMessage",components:{dialogSlot:d["default"],assignMember:u["default"]},props:{parentIndex:{type:Number,required:!0},replyCheck:{type:Boolean,default:!1}},data(){return{form:{to:"",from:"",reference:"",title:"",content:"",update:""},showTo:"",showRef:""}},methods:{addressMember(e,t){if(e.length>1){let r=e.map((e=>{let t=l.N.findMemberByIndex(e);return`${t.name}(${t.department})`})).join(", ");"to"===t?(this.showTo=r,this.form.to=e):(this.showRef=r,this.form.reference=e)}else{let r=Array.isArray(e)?e[0]:e;"to"===t?(this.form.to=r,this.showTo=`${l.N.findMemberByIndex(r).name}(${l.N.findMemberByIndex(r).department})`):(this.form.reference=r,this.showRef=`${l.N.findMemberByIndex(r).name}(${l.N.findMemberByIndex(r).department})`)}this.$refs.dialog.closeDialog()},sendMessage(){this.$emit("editMessage",this.form)},giveCurrentMessage(){const e=m.v.findMessageByIndex(this.parentIndex),t=m.v.findOriginalMessageByIndex(this.parentIndex);console.log(t.from,t.to),this.form.to=this.replyCheck?t.from:"",this.form.form=t.to,this.showTo=this.replyCheck?`${l.N.findMemberByIndex(t.from).name}(${l.N.findMemberByIndex(t.from).department})`:"",this.form.title=this.replyCheck?`RE: ${e.title}`:`FW: ${e.title}`,this.form.content=`<p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p>=============================</p><p>보낸사람:${e.from}</p><p>받는사람:${e.to}</p><p>참조:${e.reference}</p><p><br/></p><p><br/></p>${e.content}`},returnToMain(){p.T.confirm("정말 취소하시겠습니까?","경고",{confirmButtonText:"예",cancelButtonText:"아니오",type:"warning"}).then((()=>{this.$emit("returnToMain")})).catch((()=>{}))}},mounted(){this.giveCurrentMessage()}},f=r(89);const h=(0,f.Z)(c,[["render",o],["__scopeId","data-v-9b97d028"]]);var g=h}}]);
//# sourceMappingURL=596.9cb1f2d7.js.map