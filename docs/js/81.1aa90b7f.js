"use strict";(self["webpackChunkvue_projectver2"]=self["webpackChunkvue_projectver2"]||[]).push([[81],{2081:function(e,r,o){o.r(r),o.d(r,{default:function(){return i}});var t=o(3396),c=o(7139);const n={class:"nameTab"};function a(e,r,o,a,s,u){const l=(0,t.up)("UserFilled"),m=(0,t.up)("el-icon"),d=(0,t.up)("el-avatar");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(d,{color:s.color,"background-color":s.color},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{color:s.color,size:s.size},{default:(0,t.w5)((()=>[(0,t.Wm)(l)])),_:1},8,["color","size"])])),_:1},8,["color","background-color"]),(0,t._)("span",n,(0,c.zw)(s.member.name)+"("+(0,c.zw)(s.member.department)+")",1)])}var s=o(2748),u=o(167),l={name:"userAvatar",components:{UserFilled:s.wvC},data(){return{size:"large",member:{},color:""}},props:{parentMember:{type:Number,default:2}},methods:{colorCheck(){switch(this.member.department){case"기획":return"#409EFF";case"개발":return"#67C23A";case"디자인":return"#E6A23C";case"기타":return"#F56C6C";default:return"#909399"}}},mounted(){this.member=u.N.findMemberByIndex(this.parentMember),this.color=this.colorCheck()}},m=o(89);const d=(0,m.Z)(l,[["render",a],["__scopeId","data-v-5cbeb6c0"]]);var i=d}}]);
//# sourceMappingURL=81.1aa90b7f.js.map