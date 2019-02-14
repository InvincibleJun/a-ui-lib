<template>
  <div class="c-notification-container" :style="style">
    <Card
      v-for="item in list"
      :key="item.uuid"
      :uuid="item.uuid"
      :title="item.title"
      :render="item.render"
      :content="item.content"
      :duration="item.duration"
      :auto-close="item.autoClose"
    />
  </div>
</template>

<script>
import Card from "./card";

let uuid = 0;

export default {
  components: {
    Card
  },
  data() {
    return {
      list: []
    };
  },
  props: {
    top: {
      type: Number,
      default: 80
    },
    right: {
      type: Number,
      default: 80
    }
    //
  },
  computed: {
    style() {
      return {
        top: this.top + "px",
        right: this.right + "px"
      };
    }
  },
  methods: {
    add(option) {
      this.list.push({
        uuid: ++uuid,
        title: option.title,
        render: option.render,
        content: option.content,
        duration: option.duration,
        autoClose: option.autoClose
      });
      return uuid;
    },
    remove(uuid) {
      this.$children.forEach(v => {
        v.uuid === uuid && v.reset();
      
      });
      this.list = this.list.filter(v => v.uuid !== uuid);
    },
    destory() {
      this.list = [];
    }
  }
};
</script>
