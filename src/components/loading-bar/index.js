import LoadingBar from './loading-bar';
import Vue from 'vue';

let timer;

let i;

let s;

let props;

function createInstance() {
  const Instance = new Vue({
    data: props,

    render(h) {
      return h(LoadingBar, { props });
    }
  });

  const component = Instance.$mount();

  document.body.appendChild(component.$el);
  const loadingBar = Instance.$children[0];

  return {
    update(option) {
      for (const i in option) {
        loadingBar[i] = option[i];
      }
    },
    destory() {
      document.body.removeChild(document.querySelector(component.$el));
    }
  };
}

function update(option) {
  const Instance = i || (i = createInstance());

  setTimeout(() => {
    Instance.update(option);
  }, 0);
}

function hide() {
  hide.t1 = setTimeout(() => {
    i.update({
      show: false
    });
  }, 100);
  hide.t2 = setTimeout(() => {
    i.update({
      percent: 0
    });
  }, 800);
}

function config(option) {
  const { color = '#2d8cf0', height = 2, timeout = 5000 } = option;

  props = {
    color,
    height,
    timeout
  };
}

export default {
  start(option = {}) {
    if (!i) {
      config(option);
    }
    if (timer) {
      clearInterval(timer);
    }

    let w = 0;

    s = +new Date();
    timer = setInterval(() => {
      if (+new Date() - s > props.timeout) {
        const { onError = () => {} } = option;

        return this.error(onError);
      }
      if (w > 90) {
        return;
      }

      update({
        show: true,
        status: 'loading',
        percent: (w += Math.floor(Math.random() * 3 + 1))
      });
    }, 200);
  },

  error(cb) {
    clearInterval(timer);
    update({
      percent: 100,
      status: 'error',
      show: true
    });
    cb();
    hide();
  },

  destroy() {
    i.destory();
  },

  finish() {
    clearInterval(timer);
    update({ percent: 100 });
    hide();
  }
};
