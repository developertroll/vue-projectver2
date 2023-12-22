<template lang="">
  <div>
    <el-row>
      <el-col :span="6" :offset="18">
        <h2>안녕하세요. {{ currentMember }} 님!</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="18">
        <h3>오늘도 열심히 일해봅시다!</h3>
      </el-col>
    </el-row>
    <el-divider content-position="left"><h2>개요</h2></el-divider>
    <div>업무는 해당 순서에 따라 진행됩니다.</div>
    <el-steps>
      <el-step title="프로젝트 계획 생성" />
      <el-step title="결재라인에 따라 결재 진행" />
      <el-step title="업무 진행 및 보고" />
      <el-step title="업무보고 결재를 통해 업무 완료 체크" />
      <el-step title="프로젝트 완료" />
    </el-steps>
    <el-divider content-position="left"><h2>결재</h2></el-divider>
    <div>
      기본적으로 결재는 작성자가 결재자에게 요청되도록 만들어지며, 결재라인을
      만들 경우 결재라인의 순서에 따라 결재가 활성화됩니다.
    </div>
    <div>
      결재는 승인, 반려가 있으며 계획이 반려될 경우 수정이나 삭제가 가능하며,
      업무보고가 반려될 경우 업무보고가 자동으로 취소됩니다.
    </div>
    <div>
      현재 로그인되어 있는 멤버(개발자 메뉴를 통해서 변경 가능)에게 할당된 결재
      중 요청, 대기, 완료 결재를 탭을 통해 볼 수 있습니다.
    </div>
    <el-divider content-position="left"><h2>프로젝트</h2></el-divider>
    <div>프로젝트는 프로젝트, 업무 탭으로 나누어집니다.</div>
    <div>
      프로젝트 탭에서는 결재 대기중인 프로젝트, 진행중인 프로젝트, 완료된
      프로젝트, 반려된 프로젝트를 볼 수 있습니다. 또한 계획 작성 역시
      가능합니다.
    </div>
    <div>
      업무 페이지에는 로그인된 멤버가 해야할 업무와 그 업무가 할당되어있는
      프로젝트를 볼 수 있으며, 업무보고가 가능합니다.
    </div>
    <el-divider content-position="left"><h2>개인</h2></el-divider>
    <div>
      알람은 프로젝트, 결재, 메세지 3개에서 생성되며, 본인이 포함된 프로젝트
      생성, 결재요청, 메시지 받음 상황에서 발생합니다.
    </div>
    <div>
      메세지는 기본적으로 이메일처럼 다른 멤버에게 메세지를 보내고 받습니다.
    </div>
    <div>
      그룹방은 카톡방과 유사하게 실시간으로 채팅이 가능한 방이며, 따로 알람이
      없는 대신 실시간으로 메시지를 주고받을 수 있습니다.
    </div>
    <el-divider content-position="left"><h2>개발자 메뉴</h2></el-divider>
    <div>
      실제 개발이 진행될 경우 서버나 로그인 기능이 존재하기 떄문에 필요 없지만,
      현재는 없기 때문에 임시로 제작된 메뉴로 로그인된 멤버를 변경할 수
      있습니다.
    </div>
    <el-divider content-position="left"><h2>기타</h2></el-divider>
    <div>사용된 bootstrap: element-plus</div>
    <div>메세지 작성에서 사용된 에디터: vue-quill-editor</div>
    <div>
      현재 값들은 localStorage에 저장되어 있어 새로고침을 해도 유지됩니다.
    </div>
    <el-divider content-position="left"
      ><h2>차후 가능한 개선사항</h2></el-divider
    >
    <div>에디터를 tiptab을 사용하는 것</div>
    <div>
      sql 서버를 활용할 경우 axios를 통해서 따로 composable 하나 만들어 다른
      composable에 데이터를 뿌리고 받도록 만들 수 있음
    </div>
    <div>
      vue-router 사용을 통해서 MainContent와 App.vue에 뿌려져있는 복잡한 emit과
      prop을 생략할 수 있음
    </div>
  </div>
</template>
<script>
import { Member } from "../composables/Member";
export default {
  name: "mainPage",
  computed: {
    currentMember() {
      return Member.getCurrentMemberName();
    },
  },
};
</script>
<style lang=""></style>
