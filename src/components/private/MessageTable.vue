<template>
  <div>
    <el-table
      :data="currentTableData"
      @current-change="handleCurrentChange"
      :default-sort="{ prop: 'index', order: 'descending' }"
      :row-class-name="readRow"
    >
      <!-- index, 제목, 날짜 -->
      <el-table-column prop="index" label="번호" sortable width="150" />
      <el-table-column prop="type" label="종류" width="150">
        <template #default="scope">
          <el-tag :type="scope.row.type === '중요' ? 'success' : 'info'">
            {{ scope.row.type }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="제목" />
      <el-table-column prop="update" label="날짜" sortable />
    </el-table>
    <div class="CenterButtons">
      <el-pagination
        v-model="currentPage"
        layout="prev, pager, next"
        :total="totalPage"
        :page-size="15"
      />
    </div>
  </div>
</template>
<script>
import { Message } from "@/components/composables/Message";
import { Member } from "@/components/composables/Member";
export default {
  name: "MessageTable",
  data() {
    return {
      CurrentMember: Member.currentMember,
      CurrentMemberName: Member.getCurrentMemberName(),
      tableData: [],
      currentRow: null,
      currentPage: 1,
      currentTableData: [],
    };
  },
  props: {
    parentType: {
      type: String,
      default: null,
    },
  },
  computed: {
    MessageData() {
      return Message.getAllList();
    },
    totalPage() {
      return this.MessageData.length;
    },
  },
  methods: {
    tableInit() {
      this.MessageData.forEach((el) => {
        let newType = "";
        if (this.parentType) {
          // parentType가 있으면 parentType로 들어온 값을 읽고 tableData로 들어갈 값 filter
          switch (this.parentType) {
            case "to":
              if (el.to !== this.CurrentMemberName) {
                return;
              }
              newType = Message.referenceCheck(el.index) ? "중요" : "참조";
              break;
            case "from":
              if (el.from !== this.CurrentMemberName) {
                return;
              }
              newType = "보냄";
              break;
            case "reference":
              if (el.reference.indexOf(this.CurrentMemberName) === -1) {
                return;
              }
              newType = "참조";
              break;
            case "read":
              if (!el.read && el.to !== this.CurrentMemberName) {
                return;
              }
              newType = Message.referenceCheck(el.index) ? "중요" : "참조";
              break;
            case "unread":
              if (el.read && el.to !== this.CurrentMemberName) {
                return;
              }
              newType = Message.referenceCheck(el.index) ? "중요" : "참조";
              break;
            default:
              if (el.to !== this.CurrentMemberName) {
                return;
              }
              break;
          }
        } else {
          if (el.to !== this.CurrentMemberName) {
            return;
          }
          newType = Message.referenceCheck(el.index) ? "중요" : "참조";
        }
        this.tableData.push({
          referenceIndex: el.index,
          type: newType,
          index: this.tableData.length + 1,
          title: el.title,
          update: el.update,
          read: el.read,
        });
      });
      this.currentTableData = this.tableData.slice(
        (this.currentPage - 1) * 15,
        this.currentPage * 15
      );
    },
    handleCurrentChange(data) {
      this.currentRow = data;
      Message.readMessage(this.currentRow.referenceIndex);
      this.$emit(
        "readMessage",
        this.currentRow.referenceIndex,
        this.currentRow.index
      );
    },
    readRow({ row }) {
      // read, type을 확인해서 class 부여. 중요는 success로 하되 unread는 bold로, 참조는 info로 하되 unread는 bold로
      if (row.read) {
        if (row.type === "중요") {
          return "success-row";
        } else {
          return "info-row";
        }
      } else {
        if (row.type === "중요") {
          return "success-row bold";
        } else {
          return "info-row bold";
        }
      }
    },
  },
  mounted() {
    this.tableInit();
  },
};
</script>
<style>
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
.el-table .info-row {
  --el-table-tr-bg-color: var(--el-color-info-light-9);
}
.el-table .bold {
  font-weight: bold;
}
</style>
