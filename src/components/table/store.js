// import { stat } from 'fs'

export default class Store {
  states = {
    key: 1,
    data: [],
    config: [],
    columns: []
  }

  mutations = {
    initConfig(states, config) {
      states.config = config
    },

    changeData(states, data) {
      states.data = data
    }
  }

  get config() {
    const { config } = this.states
    return makeLineStack(config)
  }

  get head() {
    return this.config.result
  }

  get body() {
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
const makeLineStack = function(config) {
  let result = []
  let body = []
  // 当前递归深度
  let line = 0
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
      if (root) root.count += val.children.length
      val.children.forEach((v, index) => makeChild(v, index, path, val))
      line--
    }

    result[line] = result[line] || []

    result[line].push({
      ...val,
      path,
      line
    })
  }

  config.forEach((val, index) => {
    makeChild(val, index, [])
  })

  // 跨行计算
  const rows = result.length
  result.forEach((val, index) =>
    val.forEach(v => {
      body.push(v)
      v.row = !v.children ? rows - index : 1
    })
  )

  return {
    rows: rows,
    cols: result[0].reduce((accu, curr) => accu + curr.count, 0),
    result,
    body
  }
}
