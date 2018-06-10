export default {
  props: {
    store: {
      type: Object
    }
  },

  render(h) {
    const { body } = this.store
    return (
      <table>
        <thead>
          <tr>{body.map(row => <td>{row.title}</td>)}</tr>
        </thead>
      </table>
    )
  }
}
