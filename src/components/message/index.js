import Vue from 'vue';
import Message from './message';

let i;

let option = {
  timeout: 2000
};

function createInstance(props) {
  const Instance = new Vue({
    render(h) {
      return h(Message, {
        props
      });
    }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);

  const message = Instance.$children[0];

  return {
    add(option) {
      message.add(option);
    },
    remove() {},
    destory() {
      document.body.removeChild(component.$el);
    }
  };
}

function message(props) {
  const { option, type } = props;
  if (typeof option === 'string') {
    option = {
      title: option,
      render: null,
      content: ''
    };
  }
  const Instance = i || (i = createInstance());
  Instance.add({
    type,
    title: option.title,
    render: option.render,
    content: option.content
  });
}

// this.$Message.success('aaaa')

export default {
  success(option) {
    message({ option, type: 'success' });
  },
  info() {
    message({ option, type: 'info' });
  },
  warn() {
    message({ option, type: 'info' });
  },
  error() {
    message({ option, type: 'error' });
  }
};
