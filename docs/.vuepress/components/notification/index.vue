<template>
  <div @click="open">点我</div>
</template>

<script>
import Notification from "@/components/notification";
import "@/assets/css/notification.scss";

export default {
  methods: {
    open() {
      Notification.success({
        render(h) {
          return h("div");
        },
        title: "测试",
        content: "测试一哈"
      });
    }
  }
};
</script>
