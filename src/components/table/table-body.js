export default {
  props: {
    store: {
      type: Object
    },
    stripe: {
      type: Boolean
    }
  },

  methods: {
    getRowClassName(index) {
      if (this.stripe) {
        return index % 2 ? 'odd' : 'even';
      } else {
        return '';
      }
    }
  },

  render(h) {
    const { body, colGroup, data, tableWidth } = this.store;

    return (
      <table style={`width: ${tableWidth}px`} class="c-table-body">
        <colgroup>
          {colGroup.map(val => (
            <col width={val.width} />
          ))}
        </colgroup>
        <tbody>
          {data.map((l, index) => (
            <tr class={this.getRowClassName(index)}>
              {body.map(cell => {
                if (cell.number) {
                  return (
                    <td>
                      <div class="c-table-cell">{index + 1}</div>
                    </td>
                  );
                }
                if (cell.render) {
                  return <td>{cell.render(h, cell)}</td>;
                } else {
                  return (
                    <td>
                      <div class="c-table-cell">{l[cell.key]}</div>
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};
