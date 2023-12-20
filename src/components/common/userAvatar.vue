<template lang="">
  <div>
    <el-avatar :color="color" :background-color="color">
      <el-icon :color="color" :size="size"><UserFilled /></el-icon>
    </el-avatar>
    <span class="nameTab">{{ member.name }}({{ member.department }})</span>
  </div>
</template>
<script>
import { UserFilled } from "@element-plus/icons-vue";
import { Member } from "@/components/composables/Member";
export default {
  name: "userAvatar",
  components: {
    UserFilled,
  },
  data() {
    return {
      size: "large",
      member: {},
      color: "",
    };
  },
  props: {
    parentMember: {
      type: Number,
      default: 2,
    },
  },
  methods: {
    colorCheck() {
      switch (this.member.department) {
        case "기획":
          return "#409EFF";
        case "개발":
          return "#67C23A";
        case "디자인":
          return "#E6A23C";
        case "기타":
          return "#F56C6C";
        default:
          return "#909399";
      }
    },
  },
  mounted() {
    this.member = Member.findMemberByIndex(this.parentMember);
    this.color = this.colorCheck();
  },
};
</script>
<style scoped>
.el-avatar {
  --el-avatar-bg-color: var(--el-color-primary-light-9);
}
.nameTab {
  margin-left: 10px;
  font-weight: bold;
}
</style>
