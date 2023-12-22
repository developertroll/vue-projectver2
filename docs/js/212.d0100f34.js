"use strict";(self["webpackChunkvue_projectver2"]=self["webpackChunkvue_projectver2"]||[]).push([[212,81],{7296:function(e,t,s){s.d(t,{f:function(){return o}});s(560);var a=s(4870),r=s(167),n=s(6797),i=s.n(n);const o=(0,a.Um)({GroupList:localStorage.getItem("talkGroupList")?JSON.parse(localStorage.getItem("talkGroupList")):[],refreshGroupList(){localStorage.setItem("talkGroupList",JSON.stringify(this.GroupList)),this.GroupList=JSON.parse(localStorage.getItem("talkGroupList"))},MessageList:localStorage.getItem("talkMessageList")?JSON.parse(localStorage.getItem("talkMessageList")):[],refreshMessageList(){localStorage.setItem("talkMessageList",JSON.stringify(this.MessageList)),this.MessageList=JSON.parse(localStorage.getItem("talkMessageList"))},refreshAll(){this.refreshGroupList(),this.refreshMessageList()},MessageTemplate:{index:"",parentGroup:"",owner:"",content:"",update:"",status:!0},GroupTemplate:{index:"",name:"",member:[],message:[],update:"",status:!0},createGroup(e,t){const s={index:this.GroupList.length,name:e,member:t,message:[],update:i()().format("YYYY-MM-DD"),status:!0};this.GroupList.push(s),this.createMessage(s.index,"채팅방이 생성되었습니다"),this.refreshGroupList()},createMessage(e,t){const s={index:this.MessageList.length,parentGroup:e,owner:r.N.currentMember,content:t,update:i()().format("YYYY-MM-DD HH:mm:ss"),status:!0},a=this.findGroupByIndex(e);a.update=s.update,a.message.push(s.index),this.MessageList.push(s),this.refreshAll()},findGroupByIndex(e){return this.GroupList.find((t=>t.index===e))},findMessageByIndex(e){return this.MessageList.find((t=>t.index===e))},findMessageGroupByIndex(e){return this.MessageList.filter((t=>t.parentGroup===e))},findLastMessageByGroupIndex(e){const t=this.findGroupByIndex(e),s=t.message[t.message.length-1];return this.findMessageByIndex(s)},findGroupByMember(e){return this.GroupList.filter((t=>t.member.includes(e)))},getGroupByIndex(e){const t=this.findGroupByIndex(e),s={...t},a=[];return s.member.forEach((e=>{a.push(r.N.findMemberByIndex(e))})),s.member=a,s}})},3212:function(e,t,s){s.r(t),s.d(t,{default:function(){return w}});var a=s(3396),r=s(7139);const n={key:0},i={class:"message-Box"},o={key:1},u={class:"message-Box"};function l(e,t,s,l,d,m){const p=(0,a.up)("userAvatar"),c=(0,a.up)("el-col"),g=(0,a.up)("el-row");return(0,a.wg)(),(0,a.iD)("div",null,[d.isMine?((0,a.wg)(),(0,a.iD)("div",n,[s.checkChain?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(g,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{span:4,offset:20},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{parentMember:m.MessageData.owner},null,8,["parentMember"])])),_:1})])),_:1})),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{span:4,offset:20},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(d.update),1)])),_:1})])),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{span:8,offset:16},{default:(0,a.w5)((()=>[(0,a._)("div",i,(0,r.zw)(m.MessageData.content),1)])),_:1})])),_:1})])):((0,a.wg)(),(0,a.iD)("div",o,[s.checkChain?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(g,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{span:4},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{parentMember:m.MessageData.owner},null,8,["parentMember"])])),_:1})])),_:1})),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{span:4},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(d.update),1)])),_:1})])),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{span:8},{default:(0,a.w5)((()=>[(0,a._)("div",u,(0,r.zw)(m.MessageData.content),1)])),_:1})])),_:1})]))])}var d=s(7296),m=s(167),p=s(2081),c=s(6797),g=s.n(c),f={name:"TalkTemplate",components:{userAvatar:p["default"]},props:{MessageIndex:{type:Number},checkChain:{type:Boolean,default:!1}},computed:{MessageData(){return d.f.findMessageByIndex(this.MessageIndex)}},data(){return{isMine:!1,update:""}},methods:{pageInit(){this.isMine=this.MessageData.owner===m.N.currentMember;const e=g()().format("YYYY-MM-DD HH:mm:ss");g()(this.MessageData.update).isSame(e,"day")?this.update=g()(this.MessageData.update).format("HH:mm:ss"):this.update=g()(this.MessageData.update).format("YYYY-MM-DD")}},mounted(){this.pageInit()}},h=s(89);const M=(0,h.Z)(f,[["render",l]]);var w=M},2081:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var a=s(3396),r=s(7139);const n={class:"nameTab"};function i(e,t,s,i,o,u){const l=(0,a.up)("UserFilled"),d=(0,a.up)("el-icon"),m=(0,a.up)("el-avatar");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(m,{color:o.color,"background-color":o.color},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{color:o.color,size:o.size},{default:(0,a.w5)((()=>[(0,a.Wm)(l)])),_:1},8,["color","size"])])),_:1},8,["color","background-color"]),(0,a._)("span",n,(0,r.zw)(o.member.name)+"("+(0,r.zw)(o.member.department)+")",1)])}var o=s(2748),u=s(167),l={name:"userAvatar",components:{UserFilled:o.wvC},data(){return{size:"large",member:{},color:""}},props:{parentMember:{type:Number,default:2}},methods:{colorCheck(){switch(this.member.department){case"기획":return"#409EFF";case"개발":return"#67C23A";case"디자인":return"#E6A23C";case"기타":return"#F56C6C";default:return"#909399"}}},mounted(){this.member=u.N.findMemberByIndex(this.parentMember),this.color=this.colorCheck()}},d=s(89);const m=(0,d.Z)(l,[["render",i],["__scopeId","data-v-5cbeb6c0"]]);var p=m}}]);
//# sourceMappingURL=212.d0100f34.js.map