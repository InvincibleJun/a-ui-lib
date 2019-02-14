export default {
  props: { store: { type: Object } },

  methods: {
    sort(col, direction) {
      this.store.commit('sortData', col, direction);
    }
  },

  render() {
    const { head, colGroup, tableWidth, number } = this.store;

    return (
      <table style={`width: ${tableWidth}px`} class="c-table-head">
        <colgroup>
          {colGroup.map(val => (
            <col width={val.width} />
          ))}
        </colgroup>

        <thead>
          {head.map((row, index) => (
            <tr>
              {row.map(col => (
                <th colspan={col.count} rowspan={col.rowspan}>
                  <div class="c-table-cell">
                    {col.title}
                    {col.sort && (
                      <div>
                        <button onClick={() => this.sort(col, true)}>
                          正序
                        </button>
                        <button onClick={() => this.sort(col, false)}>
                          倒序
                        </button>
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
      </table>
    );
  }
};
