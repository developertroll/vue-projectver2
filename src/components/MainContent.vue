<template lang="">
  <div>
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
        <component
          :is="targetComponent"
          @backToMain="backToMain"
          @callFinish="callFinish"
        />
      </div>
    </el-card>
  </div>
</template>
<script>
import { shallowRef, defineAsyncComponent, computed } from "vue";
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
  provide() {
    return {
      finishType: computed(() => this.finishType),
    };
  },
  data() {
    return {
      targetComponent: shallowRef(null),
      handlerComponents: null,
      handlerExecuted: false,
      finishType: null,
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
    backToMain(item) {
      switch (item) {
        case "MainPage":
          this.targetComponent = defineAsyncComponent(() =>
            import(`./layout/MainPage.vue`)
          );
          this.hanlderExecuted = false;
          break;
        case "ProjectPlan":
          this.targetComponent = defineAsyncComponent(() =>
            import(`./project/ProjectPlan.vue`)
          );
          this.hanlderExecuted = false;
          break;
        case "WorkPage":
          this.targetComponent = defineAsyncComponent(() =>
            import(`./project/WorkPage.vue`)
          );
          this.handlerExecuted = false;
          break;
        // case "org":
        //   this.targetComponent = defineAsyncComponent(() =>
        //     import(`./layout/org.vue`)
        //   );
        //   this.hanlderExecuted = false;
        //   break;
        default:
          break;
      }
    },
    callFinish(item) {
      this.finishType = item;
      this.targetComponent = defineAsyncComponent(() =>
        import(`./layout/finishedPage.vue`)
      );
    },
  },
};
</script>
<style lang=""></style>
