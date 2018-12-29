// props

export default {
  onOpen: { type: Function },

  // 在关闭动画执行之前
  beforeColse: { type: Function },
  onClose: { type: Function },

  // 开启关闭，model属性
  visible: { type: Boolean }
};
