<template>
  <div ref="table" style="width: 800px" class="c-table-wrapper">
    <!-- <slot></slot> -->
    <div v-if="ready" class="c-table-main-wrapper">
      <table-head :store="store"></table-head>
      <table-body :store="store" :stripe="stripe"></table-body>
      <!-- <table-footer></table-footer> -->
    </div>

    <div v-if="ready && store.fixed.left" :style="`width: ${store.fixed.left}px`" class="c-table-fixed-left">
      <table-head :store="store"></table-head>
      <table-body :store="store" :stripe="stripe"></table-body>
    </div>

    <div v-if="ready && store.fixed.right" :style="`width: ${store.fixed.right}px`" class="c-table-fixed-right">
      <table-head :store="store"></table-head>
      <table-body :store="store" :stripe="stripe"></table-body>
    </div>
  </div>
</template>

<script>
import Store from './store';
import tableHead from './table-head'
import tableBody from './table-body'
import tableFooter from './table-Footer'

let tableId = 0;

export default {
  name: 'ChTable',

  data() {
    const store = new Store();
    return {
      store,
      ready: false
    }
  },

  components: {
    tableHead,
    tableBody,
    tableFooter
  },

  props: {
    data: {
      type: Array
    }, 
    stripe: {
      type: Boolean,
      default: false
    },
    config: {
      type: Array,
      default: () => {
        return []
      }
    },
    showHead: {
      type: Boolean,
      default: true
    },
    showBody: {
      type: Boolean,
      default: true
    }
  },

  created() {
    this.tableId = ++tableId;
  },

  mounted(){
    this.store.commit('initTable', this)
    this.ready = true
  },


  watch: {
    config: {
      immediate: true,
      handler(nV, OV){
        this.store.commit('initConfig', nV)
      }
    },
    data: {
      immediate: true,
      handler(nV, oV) {
        this.store.commit('changeData', nV)
      }
    }
  }
}
</script>

<style>
.c-table-wrapper {
  position: relative;
}

.c-table-main-wrapper {
  overflow: auto;
}

.c-table-fixed-left {
  overflow: hidden;
  left: 0;
  top: 0;
  position: absolute;
}
.c-table-fixed-right {
  overflow: hidden;
  right: 0;
  top: 0;
  left: auto;
  position: absolute;
}
</style>


