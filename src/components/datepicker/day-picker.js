import moment from 'moment';

const week = ['日', '一', '二', '三', '四', '五', '六'];

export default {
  data() {},
  methods: {
    renderDays(days) {
      return l7.map((l, index) => <tr>
        {days.slice(index * 7, (index + 1) * 7).map(val => <td
          class={{
            'c-datapicker-is-now':
                  val.day === this.D
                  && this.now.Y === this.Y
                  && this.now.M === this.M,
            'c-datepicker-no-current-month': val.month !== 'now'
          }}
          onClick={() => this.setValue(val)}
        >
          {val.day}
        </td>)}
      </tr>);
    }
  },
  render() {
    const days = getMonthAllDays(this.Y, this.M);

    return (
      <table class='c-datepicker-days'>
        <tbody>
          <tr>
            {week.map((d, key) => <td key={key}>{d}</td>)}
          </tr>
          {this.renderDays(days)}
        </tbody>
      </table>
    );
  }
};
