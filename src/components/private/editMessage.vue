<template lang="">
  <div class="formContanier">
    <el-form :model="form">
      <!-- 받는사람(memberTree 이용해서 dialog띄우기) -->
      <!-- reference는 받는사람, 보낸사람(currentMember)를 제외한 인원에서 memberTransfer 받기(memberTransfer 일부 수정필요) -->
      <!-- title은 일반 input -->
      <!-- content는 QuillEditor사용해서 내용 받기. 현재는 html로 받지만 delta 값 봐서 delta로 받는게 더 나을수도 있음 -->
      <!-- update는 현재시간으로 자동으로 받기 -->
      <el-form-item label="받는사람">
        <el-input v-model="showTo" readonly>
          <template #append>
            <dialogSlot title="배정하기" ref="dialog">
              <template #default>
                <assignMember @saveMember="addressMember" where="to" />
              </template>
            </dialogSlot>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="참조">
        <el-input v-model="showRef" readonly>
          <template #append>
            <dialogSlot title="배정하기" ref="dialog">
              <template #default>
                <assignMember @saveMember="addressMember" where="ref" />
              </template>
            </dialogSlot>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="제목">
        <el-input
          v-model="form.title"
          placeholder="제목을 입력하세요"
        ></el-input>
      </el-form-item>
      <el-form-item label="내용">
        <div class="editor">
          <!-- 크기 조절 방법이 없을 경우 dialog처리하거나 tiptab을 이용해야 할수도 있음 -->
          <QuillEditor
            v-model:content="form.content"
            theme="snow"
            toolbar="essential"
            placeholder="줄이 늘어날수록 창이 자동으로 늘어납니다"
            ref="Editor"
            @ready="getContent"
          />
        </div>
      </el-form-item>
      <el-form-item>
        <div class="CenterButtons">
          <el-button type="primary" @click="sendMessage">작성</el-button>
          <el-button type="primary">취소</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { Member } from "@/components/composables/Member";
import dialogSlot from "@/components/common/dialogSlot.vue";
import assignMember from "@/components/common/assignMember.vue";
import { Message } from "@/components/composables/Message";
export default {
  name: "createMessage",
  components: {
    dialogSlot,
    assignMember,
  },
  props: {
    parentIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      form: {
        to: "",
        from: "",
        reference: "",
        title: "",
        content: "",
        update: "",
      },
      showTo: "",
      showRef: "",
    };
  },
  methods: {
    addressMember(item, where) {
      if (item.length > 1) {
        let target = item
          .map((i) => {
            let member = Member.findMemberByIndex(i);
            return `${member.name}(${member.department})`;
          })
          .join(", ");
        if (where === "to") {
          this.showTo = target;
          this.form.to = item;
        } else {
          this.showRef = target;
          this.form.reference = item;
        }
      } else {
        let newItem = Array.isArray(item) ? item[0] : item;
        if (where === "to") {
          this.form.to = newItem;
          this.showTo = `${Member.findMemberByIndex(newItem).name}(${
            Member.findMemberByIndex(newItem).department
          })`;
        } else {
          this.form.reference = newItem;
          this.showRef = `${Member.findMemberByIndex(newItem).name}(${
            Member.findMemberByIndex(newItem).department
          })`;
        }
      }
      this.$refs.dialog.closeDialog();
    },
    sendMessage() {
      this.$emit("saveMessage", this.form);
    },
    giveCurrentMessage() {
      const OGMessage = Message.findMessageByIndex(this.parentIndex);
      this.form.to = OGMessage.from;
      this.form.form = OGMessage.to;
      this.form.title = `RE: ${OGMessage.title}`;
      // this.form.content.insert("===============================\n\n\n\n", {});
      // this.form.content.insert(`보낸사람: ${OGMessage.from}\n`, {});
      // this.form.content.insert(`받는사람: ${OGMessage.to}\n`, {});
      // this.form.content.insert(`참조: ${OGMessage.reference}\n`, {});
      // this.form.content.insert(`보낸시간: ${OGMessage.update}\n`, {});
    },
    getContent() {
      const OGMessage = Message.findMessageByIndex(this.parentIndex);
      const newForm = { ...OGMessage };
      this.form.content = newForm.content;
      this.$refs.Editor.setContents(newForm.content);
    },
  },
  mounted() {
    this.giveCurrentMessage();
  },
};
</script>
<style scoped>
.editor {
  width: 100%;
  height: 100%;
  min-height: 300px;
  overflow-y: auto;
}
</style>
