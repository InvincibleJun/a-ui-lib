export default {
  props: {
    store: {
      type: Object
    }
  },

  render(h) {
    const { head } = this.store
    const { body } = this.store
    console.log(body)
    return (
      <table>
        <thead>
          {head.map(row => (
            <tr>
              {row.map(col => (
                <th colspan={col.count} rowspan={col.row}>
                  {col.title}
                </th>
              ))}
            </tr>
          ))}
        </thead>
      </table>
    )
  }
}
