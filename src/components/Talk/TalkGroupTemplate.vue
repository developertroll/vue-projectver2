<template lang="">
  <div class="clickHover">
    <el-card @click="showRoom">
      <template #header>
        <!-- 그룹명, 그룹인원수 -->
        <div>
          {{ GroupData.name }}
          <el-tooltip effect="dark" :content="members" placement="top">
            <el-tag>
              <el-icon><User /></el-icon>
              {{ memberNumber }}
            </el-tag>
          </el-tooltip>
        </div>
      </template>
      <!-- 마지막 메시지와 해당 메시지가 보내진 시간 기록 -->
      <div class="greyLetter">
        <el-row>
          <el-col :span="18">
            {{ finalMessage.content }}
          </el-col>
          <el-col :span="6">
            {{ finalUpdate }}
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>
<script>
import { TalkMessage } from "@/components/composables/TalkMessage.js";
import { Member } from "@/components/composables/Member.js";
import { User } from "@element-plus/icons-vue";
import moment from "moment";
export default {
  name: "TalkGroupTemplate",
  components: {
    User,
  },
  props: {
    GroupIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    GroupData() {
      return TalkMessage.findGroupByIndex(this.GroupIndex);
    },
  },
  data() {
    return {
      finalMessage: {},
      memberNumber: 0,
      members: "",
      finalUpdate: "",
    };
  },
  methods: {
    pageInit() {
      this.finalMessage = this.getFinalMessage(this.GroupIndex);
      this.memberNumber = this.GroupData.member.length;
      this.members = this.GroupData.member
        .map((item) => Member.findMemberByIndex(item).name)
        .join(", ");
      const today = moment().format("YYYY-MM-DD HH:mm:ss");
      if (moment(this.finalMessage.update).isSame(today, "day")) {
        this.finalUpdate = moment(this.finalMessage.update).format("HH:mm:ss");
      } else {
        this.finalUpdate = moment(this.finalMessage.update).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      }
    },
    getFinalMessage(index) {
      try {
        const finalMessage = TalkMessage.findLastMessageByGroupIndex(index);
        return finalMessage;
      } catch (e) {
        console.log(e);
      }
    },
    showRoom() {
      this.$emit("showRoom", this.GroupIndex);
    },
  },
  mounted() {
    this.pageInit();
  },
};
</script>
<style lang=""></style>
