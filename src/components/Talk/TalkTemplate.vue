<template lang="">
  <div>
    <div v-if="isMine">
      <el-row>
        <el-col :span="4" :offset="20">
          <userAvatar :parentMember="MessageData.owner" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" :offset="20">
          {{ update }}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="16">
          <div class="message-Box">
            {{ MessageData.content }}
          </div>
        </el-col>
      </el-row>
    </div>
    <div v-else>
      <el-row>
        <el-col :span="4">
          <userAvatar :parentMember="MessageData.owner" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          {{ update }}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="message-Box">
            {{ MessageData.content }}
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { TalkMessage } from "@/components/composables/TalkMessage.js";
import { Member } from "@/components/composables/Member.js";
import userAvatar from "@/components/common/userAvatar.vue";
import moment from "moment";
export default {
  name: "TalkTemplate",
  components: {
    userAvatar,
  },
  props: {
    MessageIndex: {
      type: Number,
      // required: true,
    },
  },
  computed: {
    MessageData() {
      return TalkMessage.findMessageByIndex(this.MessageIndex);
    },
  },
  data() {
    return {
      isMine: false,
      update: "",
    };
  },
  methods: {
    pageInit() {
      this.isMine = this.MessageData.owner === Member.currentMember;
      const today = moment().format("YYYY-MM-DD HH:mm:ss");
      if (moment(this.MessageData.update).isSame(today, "day")) {
        this.update = moment(this.MessageData.update).format("HH:mm:ss");
      } else {
        this.update = moment(this.MessageData.update).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      }
    },
  },
  mounted() {
    this.pageInit();
  },
};
</script>
<style>
.message-Box {
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}
</style>
