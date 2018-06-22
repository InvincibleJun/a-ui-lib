import { getMonthAllDays, getAboutYears, getAllMonth } from './time'
import { ColorPicker } from 'element-ui'
import { createEmptyArray } from '@/utils/func'

const week = ['日', '一', '二', '三', '四', '五', '六']
const l7 = createEmptyArray(7)
const l3 = createEmptyArray(3)

export default {
  data() {
    return {
      Y: '',
      M: '',
      D: '',
      //
      state: 'D',
      value: null,
      now: {}
    }
  },

  props: {},

  created() {
    this.init()
  },

  methods: {
    init() {
      let d = new Date()
      this.Y = this.now.Y = d.getFullYear()
      this.M = this.now.M = d.getMonth() + 1
      this.D = this.now.D = d.getDate()
      // debugger
    },

    handlerYears(val) {
      this.toYear(val)
      this.state = 'M'
    },

    handlerMonth(val) {
      this.toMonth(val + 1)
      this.state = 'D'
    },

    renderMonths() {
      let months = getAllMonth(this.M)
      return l3.map((l, index) => (
        <tr>
          {months
            .slice(index * 4, (index + 1) * 4)
            .map((val, index) => (
              <td onClick={() => this.handlerMonth(index)}>{val}</td>
            ))}
        </tr>
      ))
    },

    renderYears() {
      let years = getAboutYears(this.Y)
      return l3.map((l, index) => (
        <tr>
          {years
            .slice(index * 4, (index + 1) * 4)
            .map(val => <td onClick={() => this.handlerYears(val)}>{val}</td>)}
        </tr>
      ))
    },

    renderDays(days) {
      return l7.map((l, index) => (
        <tr>
          {days.slice(index * 7, (index + 1) * 7).map(val => (
            <td
              class={{
                'c-datapicker-is-now':
                  val.day === this.D &&
                  this.now.Y === this.Y &&
                  this.now.M === this.M,
                'c-datepicker-no-current-month': val.month !== 'now'
              }}
              onClick={() => this.setValue(val)}
            >
              {val.day}
            </td>
          ))}
        </tr>
      ))
    },

    setValue({ day, month }) {
      if (month !== 'now') this.toMonth(month)
      this.value = new Date(`${this.Y}/${this.M}/${day}`)
    },

    /**
     * 跳转年
     * @param {string|number} to
     */
    toYear(to) {
      if (to === 'prev') {
        this.Y--
      } else if (to === 'next') {
        this.Y++
      } else {
        this.Y = to
      }
    },

    /**
     * 跳转月
     * @param {string|number} to
     */
    toMonth(to) {
      if (to === 'prev') {
        if (this.M === 1) {
          this.M = 12
          this.toYear('prev')
        } else {
          this.M--
        }
      } else if (to === 'next') {
        if (this.M === 12) {
          this.toYear('next')
          this.M = 1
        } else {
          this.M++
        }
      } else {
        this.M = to
      }
    },

    openYears(year) {
      this.state = 'Y'
    }
  },

  render() {
    let days = getMonthAllDays(this.Y, this.M)
    return (
      <div class="c-datapicker-wrapper">
        <div class="c-datepicker-top">
          <i
            class="iconfont icon-doubleleft c-left"
            onClick={() => this.toYear('prev')}
          />
          <i
            class="iconfont icon-left c-left"
            onClick={() => this.toMonth('prev')}
          />
          <span onClick={() => this.openYears(this.Y)}>
            <span class="c-datepicker-top-label">{this.Y}</span>年
          </span>
          <span onClick={() => (this.state = 'M')}>
            <span class="c-datepicker-top-label">{this.M}</span>月
          </span>
          <i
            class="iconfont icon-doubleright c-right"
            onClick={() => this.toYear('next')}
          />
          <i
            class="iconfont icon-right c-right"
            onClick={() => this.toMonth('next')}
          />
        </div>
        <div class="c-datepicker-mid">
          {/* 日期 */}
          {this.state === 'D' && (
            <table class="c-datepicker-days">
              <tbody>
                <tr>{week.map((d, key) => <td key={key}>{d}</td>)}</tr>
                {this.renderDays(days)}
              </tbody>
            </table>
          )}
          {/* 年份 */}
          {this.state === 'Y' && (
            <table class="c-datepicker-years">
              <tbody>{this.renderYears()}</tbody>
            </table>
          )}
          {/* 月份呢 */}
          {this.state === 'M' && (
            <table class="c-datepicker-months">
              <tbody>{this.renderMonths()}</tbody>
            </table>
          )}
        </div>
        <div class="c-datepicker-bottom" />
      </div>
    )
  }
}
