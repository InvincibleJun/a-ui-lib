const renderHeader = () => {}

const renderBooy = () => {}

const getParent = () => {
  // while()
}

const renderCell = (h, data) => {
  return h('div', null, data)
}

export default {
  props: {
    prop: {
      type: String
    },
    title: {
      type: String
    }
  },
  computed: {
    // 获得table组件，column存在嵌套关系
    table() {
      let parent = this.$parent

      while (parent && !parent.tableId) {
        parent = parent.$parent
      }
      return parent
    }
  },
  created() {
    console.log(this.$slots)
    let column = {}

    column.config = {
      width: this.width,
      title: this.title
    }
    this.column = column

    // column.renderCell = (h, data) => {
    //   if (this.$slots.default) {
    //     console.log(this.$slots.default)
    //     debugger
    //     return this.$slots.default(data)
    //   } else {
    //     return renderCell(data)
    //   }
    // }
  },
  mounted() {
    this.table.store.commit('initColumn', { column: this.column })
  },
  render(h) {
    return h('div', null, '123')
  }
}
