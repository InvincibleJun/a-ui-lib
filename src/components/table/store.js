import { cloneDeep } from 'lodash';

export default class Store {
  states = {
    table: null,
    key: 1,
    data: [],
    originData: [],
    config: [],
    columns: [],
    fixed: false
  };

  mutations = {
    initConfig(states, config) {
      states.config = config;
    },

    initTable(states, ref) {
      states.table = ref;
    },

    changeData(states, data) {
      states.data = states.originData = cloneDeep(data);
    },

    sortData(states, col, direction) {
      const { key } = col;

      states.data.sort(function(x, y) {
        return direction ? x[key] - y[key] : y[key] - x[key];
      });
    }
  };

  get number() {
    return this.states.table && this.states.table.number;
  }

  get fixed() {
    return this.config.fixed;
  }

  get data() {
    return this.states.data;
  }

  get tableWidth() {
    return this.config.tableWidth;
  }

  get config() {
    // getTableWidth(this.states.table)
    const { config } = this.states;
    return makeLineStack(config, this.states);
  }

  get colGroup() {
    return this.config.colGroup;
  }

  get head() {
    return this.config.result;
  }

  get body() {
    return this.config.body;
  }

  get col() {
    return this.config.body;
  }

  commit(name, ...arg) {
    const func = this.mutations[name];
    if (func) {
      func.apply(this, [this.states, ...arg]);
    } else {
      throw new Error(`${name} no exist`);
    }
  }
}

/**
 *
 * @param {object} config
 */
const makeLineStack = function(config, { table }) {
  let wrapperWidth = getTableWidth(table);
  let head = [];
  let body = [];
  let colGroup = [];
  // 当前递归深度
  let deep = 0;
  let widthCount = 0;
  let hasWidth = 0;
  let fixed = { left: [], right: [] };

  // 序号处理
  if (table.number) {
    config = [{ title: table.numberName, number: true }, ...config];
  }

  /**
   * 处理组合表头
   * @param {*} val
   * @param {*} childePath
   * @param {*} rootPath
   * @param {*} root
   */
  const makeColumns = function(column, childPath, rootPath) {
    let path = [...rootPath, childPath];

    // 判断是否组合
    let isComplex = column.children && column.children.length > 0;

    column.count = isComplex ? column.children.length : 1;

    if (isComplex) {
      /**
       * 多叉树求节点个数
       */
      // 递归每一个父节点，动态增加子列的个数
      if (column.parent) {
        let parent = column.parent;
        while (parent) {
          parent.count += column.children.length - 1;
          parent = parent.parent;
        }
      }

      deep++;
      column.children.forEach((childColumn, index) => {
        childColumn.parent = column;
        makeColumns(childColumn, index, path);
      });
      deep--;
    } else {
      // 计算已设置长度
      if (column.width) {
        widthCount += column.width;
        hasWidth++;
      }

      body.push({ ...column, path });
    }

    head[deep] = head[deep] || [];

    head[deep].push({ ...column, path, line: deep });
  };

  config.forEach((val, index) => {
    makeColumns(val, index, []);
  });

  // 跨行处理
  head.forEach((val, line) =>
    val.forEach(v => {
      /**
       * rowspan纵向跨行
       * 由于存在组合表头，非组合列将纵向跨行至底部(取总行数和当前line数的差值)
       * 非跨行即存在子列，设置为1
       */
      v.rowspan = !v.children ? head.length - line : 1;
    })
  );

  // 自适应表格处理
  body.forEach((val, index) => {
    let defaultWidth = (wrapperWidth - widthCount) / (body.length - hasWidth);
    let width = val.width || (defaultWidth < 80 ? 80 : defaultWidth);

    if (val.fixed && !val.children) {
      fixed[val.fixed].push({ index, width });
    }

    colGroup.push({
      width
    });
  });

  fixed.left = fixed.left.reduce((accu, curr) => accu + curr.width, 0);
  fixed.right = fixed.right.reduce((accu, curr) => accu + curr.width, 0);

  const tableColWidth = colGroup.reduce((accu, curr) => accu + curr.width, 0);
  const tableWidth =
    tableColWidth < wrapperWidth ? wrapperWidth : tableColWidth;

  return {
    rows: head.length,
    cols: head[0].reduce((accu, curr) => accu + curr.count, 0),
    result: head,
    tableWidth: tableWidth,
    body,
    fixed,
    colGroup
  };
};

function getTableWidth(tabelDom) {
  return tabelDom.$el.offsetWidth || 0;
}
