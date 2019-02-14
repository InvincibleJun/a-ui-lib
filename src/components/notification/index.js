import Vue from 'vue';
import Notification from './notification';

let i;

let config = {
  timeout: 2000
};

function createInstance(props) {
  const Instance = new Vue({
    render(h) {
      return h(Notification, {
        props
      });
    }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);

  const notification = Instance.$children[0];

  return {
    add(option) {
      notification.add(option);
    },
    remove(uuid) {
      notification.remove(uuid);
    },
    destory() {
      message.destory();
      notification.body.removeChild(component.$el);
    }
  };
}

function show(props) {
  let { option, type } = props;
  if (typeof option === 'string') {
    option = {
      title: option
    };
  }

  const { autoClose = true, content = '', render = null, title } = option;

  const Instance = i || (i = createInstance(config));

  const uuid = Instance.add({
    type,
    title,
    render,
    content,
    autoClose
  });

  return {
    close() {
      Instance.remove(uuid);
    }
  };
}

// this.$Message.success('aaaa')

export default {
  config(c) {
    config = c;
  },

  success(option) {
    return show({ option, type: 'success' });
  },

  info() {
    return show({ option, type: 'info' });
  },

  warn() {
    return show({ option, type: 'info' });
  },

  error() {
    return show({ option, type: 'error' });
  },

  destroy() {
    i && i.destory();
  }
};
