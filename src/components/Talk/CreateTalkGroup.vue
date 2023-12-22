<template lang="">
  <div>
    <el-form :model="form" label-width="80px">
      <el-form-item label="그룹명">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="멤버">
        <el-input v-model="translatedMember" readonly>
          <template #append>
            <dialogSlot title="추가" ref="dialog">
              <template #default>
                <memberTransfer @save="saveMember" :parentData="form.member" />
              </template>
            </dialogSlot>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="CenterButtons">
        <el-button type="primary" @click="submitForm">생성</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { Member } from "@/components/composables/Member";
import dialogSlot from "@/components/common/dialogSlot.vue";
import memberTransfer from "@/components/common/memberTransfer.vue";
export default {
  name: "CreateTalkGroup",
  components: {
    dialogSlot,
    memberTransfer,
  },
  data() {
    return {
      form: {
        name: "",
        member: [],
      },
      translateMember: [],
    };
  },
  methods: {
    translateMemberTable(array) {
      array.forEach((item) => {
        let target = Member.findMemberByIndex(item);
        this.translateMember.push(
          `${target.name} ${target.rank}(${target.department})`
        );
      });
    },
    saveMember(item) {
      this.form.member = item;
      this.form.member.push(Member.currentMember);
      this.$refs.dialog.closeDialog();
      this.translateMember = [];
      this.translateMemberTable(item);
    },
    submitForm() {
      this.$emit("createGroup", this.form);
    },
  },
  computed: {
    translatedMember() {
      return this.translateMember.join(", ");
    },
  },
};
</script>
<style lang=""></style>
