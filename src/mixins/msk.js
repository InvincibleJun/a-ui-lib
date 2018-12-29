import {
  addClass, removeClass
} from '../utils/dom';

let queue = [];

let coverDom;

const d = document;

const width = (function() {
  const oP = document.createElement('p'),
        styles = {
          width: '100px',
          height: '100px',
          overflowY: 'scroll'
        };

  for (const i in styles) {
    if (Object.prototype.hasOwnProperty.call(styles, i)) {
      oP.style[i] = styles[i];
    }
  }
  document.body.appendChild(oP);
  oP.remove();

  return oP.offsetWidth - oP.clientWidth;
})();

let index = 2000;

let coverIndex;

export default {
  data() {
    return {};
  },
  watch: {
    visible(val) {
      if (val) {
        this.openCover();
      } else {
        this.closeCover();
      }
    }
  },
  methods: {
    openCover() {
      if (this.bodyNoScroll) {
        d.body.style.overflow = 'hidden';
        d.body.style.paddingRight = `${ width }px`;
      }

      index += 2;

      // 组件未渲染
      this.$nextTick(() => {
        this.$el.style.zIndex = index;
        queue.push(index);
      });
      if (!coverDom) {
        coverDom = d.createElement('div');
        coverIndex = index - 1;
        coverDom.style.zIndex = coverIndex;
        addClass(coverDom, 'c-model-cover');
        d.body.appendChild(coverDom);
        addClass(coverDom, 'c-model-cover-in');
        setTimeout(() => {
          removeClass(coverDom, 'c-modal-cover-in');
        }, 500);
      } else {
        coverDom.style.zIndex = coverIndex + 2;
      }
    },
    closeCover() {
      const match = this.$el.getAttribute('style').match(/(\d+)/);

      const zIndex = match && parseInt(match[1], 10);

      if (zIndex) {
        queue = queue.filter(i => i !== zIndex);
        if (queue.length === 0) {
          addClass(coverDom, 'c-model-cover-out');
          setTimeout(() => {
            coverDom.style.display = 'none';
            d.body.removeChild(coverDom);
            coverDom = null;
            if (this.bodyNoScroll) {
              d.body.style = '';
            }
          }, 500);
        } else {
          coverDom.style.zIndex = coverIndex - 2;
        }
      }
    }
  }
};
