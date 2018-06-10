import { addClass, removeClass } from '../utils/dom'

let queue = []

let coverDom

const d = document
let width = (function getScrollbarWidth() {
  var oP = document.createElement('p'),
    styles = {
      width: '100px',
      height: '100px',
      overflowY: 'scroll'
    },
    i,
    scrollbarWidth
  for (i in styles) oP.style[i] = styles[i]
  document.body.appendChild(oP)
  scrollbarWidth = oP.offsetWidth - oP.clientWidth
  oP.remove()
  return scrollbarWidth
})()

let index = 2000
let coverIndex
export default {
  data() {
    return {}
  },
  watch: {
    visible(val) {
      if (val) {
        this.openCover()
      } else {
        this.closeCover()
      }
    }
  },
  methods: {
    openCover() {
      if (this.bodyNoScroll) {
        d.body.style.overflow = 'hidden'
        d.body.style.paddingRight = width + 'px'
      }

      index += 2
      // 组件未渲染
      this.$nextTick(() => {
        this.$el.style.zIndex = index
        queue.push(index)
      })
      if (!coverDom) {
        coverDom = d.createElement('div')
        coverIndex = index - 1
        coverDom.style.zIndex = coverIndex
        addClass(coverDom, 'c-model-cover')
        d.body.appendChild(coverDom)
        addClass(coverDom, 'c-model-cover-in')
        setTimeout(function() {
          removeClass(coverDom, 'c-modal-cover-in')
        }, 500)
      } else {
        coverDom.style.zIndex = coverIndex + 2
      }
    },
    closeCover() {
      let match = this.$el.getAttribute('style').match(/(\d+)/)
      let zIndex = match && parseInt(match[1])
      if (zIndex) {
        queue = queue.filter(index => index !== zIndex)
        if (queue.length === 0) {
          addClass(coverDom, 'c-model-cover-out')
          setTimeout(function() {
            coverDom.style.display = 'none'
            d.body.removeChild(coverDom)
            coverDom = null
            if (this.bodyNoScroll) {
              d.body.style = ''
            }
          }, 500)
        } else {
          coverDom.style.zIndex = coverIndex - 2
        }
      }
    }
  }
}
