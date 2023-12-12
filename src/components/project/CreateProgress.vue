<template lang="">
  <div>
    <generalForm :col="col" @saveForm="createApp" />
  </div>
</template>
<script>
import generalForm from "../common/generalForm.vue";
export default {
  name: "CreateProgress",
  components: {
    generalForm,
  },
  data() {
    return {
      col: ["작업내용", "비고"],
    };
  },
  methods: {
    createApp(item) {
      console.log(item);
    },
  },
};
</script>
<style lang=""></style>
