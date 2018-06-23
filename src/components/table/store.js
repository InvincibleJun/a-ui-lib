export default class Store {
  states = {
    table: null,
    key: 1,
    data: [],
    config: [],
    columns: []
  }

  mutations = {
    initConfig(states, config) {
      states.config = config
    },

    initTable(states, ref) {
      states.table = ref
    },

    changeData(states, data) {
      states.data = data
    }
  }

  get fixed() {
    return this.config.fixed
  }

  get data() {
    return this.states.data
  }

  get tableWidth() {
    return this.config.tableWidth
  }

  get config() {
    // getTableWidth(this.states.table)
    const { config } = this.states
    return makeLineStack(config, this.states)
  }

  get colGroup() {
    return this.config.colGroup
  }

  get head() {
    return this.config.result
  }

  get body() {
    return this.config.body
  }

  get col() {
    return this.config.body
  }

  commit(name, arg) {
    const func = this.mutations[name]
    if (func) {
      func.apply(this, [this.states, arg])
    } else {
      throw new Error(`${name} no exist`)
    }
  }
}

/**
 * tree => line 计算递归深度
 * @param {object} config
 */
const makeLineStack = function(config, { table }) {
  let wrapperWidth = getTableWidth(table)
  let head = []
  let body = []
  let colGroup = []
  // 当前递归深度
  let line = 0
  let widthCount = 0
  let hasWidth = 0
  let fixed = { left: [], right: [] }

  /**
   * 递归处理table-tree
   * @param {*} val
   * @param {*} childePath
   * @param {*} rootPath
   * @param {*} root
   */
  const makeChild = function(val, childePath, rootPath, root) {
    let path = [...rootPath, childePath]

    val.count = val.children ? val.children.length : 1

    if (val.children) {
      line++
      if (root) root.count += val.children.length - 1
      val.children.forEach((v, index) => makeChild(v, index, path, val))
      line--
    } else {
      if (val.width) {
        widthCount += val.width
        hasWidth++
      }
      body.push({ ...val, path })
    }

    head[line] = head[line] || []

    head[line].push({ ...val, path, line })
  }

  config.forEach((val, index) => {
    makeChild(val, index, [])
  })

  // 跨行计算
  const rows = head.length
  head.forEach((val, index) =>
    val.forEach(v => {
      v.row = !v.children ? rows - index : 1
    })
  )

  // 自适应表格处理
  body.forEach((val, index) => {
    let defaultWidth = (wrapperWidth - widthCount) / (body.length - hasWidth)
    let width = val.width || (defaultWidth < 80 ? 80 : defaultWidth)

    if (val.fixed && !val.children) {
      fixed[val.fixed].push({ index, width })
    }

    colGroup.push({
      width: width
    })
  })

  fixed.left = fixed.left.reduce((accu, curr) => accu + curr.width, 0)
  fixed.right = fixed.right.reduce((accu, curr) => accu + curr.width, 0)

  const tableColWidth = colGroup.reduce((accu, curr) => accu + curr.width, 0)
  const tableWidth = tableColWidth < wrapperWidth ? wrapperWidth : tableColWidth
  return {
    rows,
    cols: head[0].reduce((accu, curr) => accu + curr.count, 0),
    result: head,
    tableWidth: tableWidth,
    body,
    fixed,
    colGroup
  }
}

function getTableWidth(tabelDom) {
  return tabelDom.$el.offsetWidth || 0
}
