export default {
  props: {
    renderFunc: {
      type: Function,
      required: true
    }
  },
  render(h) {
    return this.renderFunc(h);
  }
};
