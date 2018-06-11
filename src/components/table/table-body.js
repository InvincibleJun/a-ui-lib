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
        return index % 2 ? 'odd' : 'even'
      } else {
        return ''
      }
    }
  },

  render(h) {
    const { body, colGroup, data, tableWidth } = this.store
    console.log(tableWidth)
    return (
      <table style={`width: ${tableWidth}px`}>
        <colgroup>{colGroup.map(val => <col width={val.width} />)}</colgroup>
        <tbody>
          {data.map((l, index) => (
            <tr class={this.getRowClassName(index)}>
              {body.map(cell => {
                if (cell.render) {
                  return cell.render(h, cell)
                } else {
                  return <td>{l[cell.key]}</td>
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}
