<template>
  <div>
    <slot></slot>
    <table-head :store="store"></table-head>
    <table-body :store="store"></table-body>
    <table-footer></table-footer>
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
      store
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
th {
  border: 1px solid black;
}
table {
  width: 800px;
}
</style>
