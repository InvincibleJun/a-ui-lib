export default {
  props: { store: { type: Object } },

  render() {
    const {
      head, colGroup, tableWidth
    } = this.store;

    return (
      <table style={`width: ${ tableWidth }px`}>
        <colgroup>{colGroup.map(val => <col width={val.width} />)}</colgroup>

        <thead>
          {head.map(row => <tr>
            {row.map(col => <th colspan={col.count} rowspan={col.row}>
              {col.title}
            </th>)}
          </tr>)}
        </thead>
      </table>
    );
  }
};
