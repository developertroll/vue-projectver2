<template lang="">
  <el-card>
    <template #header>
      <div v-if="hanlderExecuted">
        {{ handlerComponents.label }}
      </div>
      <div v-else>
        {{ currentMenu.label }}
      </div>
    </template>
    <div>
      <component :is="targetComponent" />
    </div>
  </el-card>
</template>
<script>
import { shallowRef, defineAsyncComponent } from "vue";
export default {
  name: "MainContent",
  props: {
    currentMenu: {
      type: Object,
      required: true,
      default: () => {
        return {
          label: "일정관리 시스템",
          index: "MainPage",
          path: "layout",
        };
      },
    },
  },
  data() {
    return {
      targetComponent: shallowRef(null),
      handlerComponents: null,
      handlerExecuted: false,
    };
  },
  watch: {
    currentMenu: {
      deep: true,
      handler: function (val) {
        this.targetComponent = defineAsyncComponent(() =>
          import(`./${val.path}/${val.index}.vue`)
        );
        this.hanlderExecuted = false;
      },
      immediate: true,
    },
  },
  methods: {
    handlers(item) {
      this.targetCompoment = defineAsyncComponent(() =>
        import(`./${item.path}/${item.index}.vue`)
      );
      this.handlerComponents = item;
      this.hanlderExecuted = true;
    },
  },
};
</script>
<style lang=""></style>
