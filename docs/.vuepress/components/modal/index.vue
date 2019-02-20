<template>
  <div>
    <c-modal title="asdasd" v-model="visible">
      <!-- <div></div> -->
    </c-modal>
    <button @click="open">open</button>
  </div>
</template>

<script>
import CModal from "@/components/modal";

export default {
  components: {
    CModal
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    open() {
      this.visible = true
    }
  }
};
</script>

